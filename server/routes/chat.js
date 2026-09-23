const express = require('express');
const { chatRateLimiter } = require('../middleware/rateLimiter');
const router = express.Router();

// System prompt for Gemini
const SYSTEM_PROMPT = `You are "Sojib AI", a helpful AI assistant for Sojib Ahmed's portfolio website. 
You answer questions about Sojib Ahmed concisely and professionally.

About Sojib Ahmed:
- Name: Sojib Ahmed
- Role: Full Stack Developer
- Location: Rangpur, Bangladesh
- Contact: sojibahmedshorif998@gmail.com | +880 1942791004
- Available for: Full-time, Freelance, Remote opportunities

Education & Experience:
- Completed 8-month intensive Full Stack Web Development course at Programming Hero (Jan 2026 - Aug 2026)
- SSC: Science | Rowmari High School | GPA 4.50/5.00
- Currently pursuing HSC (Science)

Technical Skills:
- Frontend: React.js (Expert), Next.js (Advanced), TypeScript, Tailwind CSS, Framer Motion
- Backend: Node.js (Expert), Express.js, REST API, GraphQL, Socket.IO
- Database: MongoDB (Expert), Mongoose, PostgreSQL, Firebase, Prisma
- Auth: JWT (Expert), OAuth, Firebase Auth, RBAC
- AI: Gemini API, OpenAI API, AI Chatbots, RAG
- DevOps: Docker, GitHub Actions, CI/CD
- Deployment: Vercel, Render, Netlify, Railway
- Tools: Git, GitHub, VS Code, Postman

Projects (10+):
1. InvestProp AI - AI real estate platform (React, Node, MongoDB, Firebase, JWT, Gemini)
2. Job Finder - Full-stack job board (React, Node, MongoDB, JWT, Firebase)
3. Pet Adoption Platform - Community adoption website (React, Node, MongoDB, Firebase)
4. E-Commerce Platform - Full store with Stripe (Next.js, TypeScript, Node, MongoDB, Stripe)
5. Portfolio Dashboard - Admin analytics UI (React, TypeScript, Recharts, Framer Motion)
6. AI Chat Interface - Modern chat UI (React, TypeScript, Gemini API)
7. Restaurant Website - Premium food ordering (Next.js, TypeScript, Framer Motion)
8. RESTful API Service - Job board backend (Node, Express, MongoDB, JWT, Swagger)
9. Authentication System - Multi-provider auth (Node, JWT, Firebase, OAuth, RBAC)
10. Real-Time Chat API - WebSocket backend (Node, Socket.IO, MongoDB, Redis)

Services offered:
- Full Stack Web Development
- Frontend Development (React/Next.js)
- Backend Development (Node.js/Express)
- AI Integration (Gemini/OpenAI)
- E-Commerce Development
- Admin Dashboard Development

Keep responses concise, friendly, and helpful. Use markdown formatting (**bold**, bullet points). 
If asked about things not related to Sojib, redirect politely.`;

// Fallback responses
const FALLBACKS = {
  skills: "Sojib is proficient in **Full Stack Web Development** — React.js, Next.js, Node.js, MongoDB, Express.js, TypeScript, Tailwind CSS, JWT, Firebase, Socket.IO, and AI integration (Gemini/OpenAI). He has 15+ technologies in his arsenal!",
  projects: "Sojib has built **10+ projects**:\n• **InvestProp AI** — AI real estate platform\n• **Job Finder** — Full-stack job board\n• **Pet Adoption Platform** — Community website\n• **E-Commerce** — With Stripe payments\n\nCheck the Projects section for all details!",
  available: "Yes! Sojib is **currently available** for:\n✓ Full-time positions\n✓ Freelance projects\n✓ Remote opportunities\n\nContact: sojibahmedshorif998@gmail.com | +880 1942791004",
  default: "I'm Sojib's AI assistant! Ask me about his **skills**, **projects**, **services**, **experience**, or **availability**. I'm here to help! 🚀",
};

function getFallback(query) {
  const q = (query || '').toLowerCase();
  if (q.includes('skill') || q.includes('tech')) return FALLBACKS.skills;
  if (q.includes('project') || q.includes('built') || q.includes('work')) return FALLBACKS.projects;
  if (q.includes('available') || q.includes('hire') || q.includes('freelance')) return FALLBACKS.available;
  return FALLBACKS.default;
}

// POST /api/chat
router.post('/', chatRateLimiter, async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ success: false, message: 'Message is required' });
    }

    if (message.length > 500) {
      return res.status(400).json({ success: false, message: 'Message too long (max 500 characters)' });
    }

    // Try Gemini API
    if (process.env.GEMINI_API_KEY) {
      try {
        const { GoogleGenerativeAI } = require('@google/generative-ai');
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const result = await model.generateContent([
          { text: SYSTEM_PROMPT },
          { text: `User question: ${message}` },
        ]);

        const reply = result.response.text();
        
        // Log to DB if available
        try {
          const ChatLog = require('../models/ChatLog');
          await ChatLog.create({ message, reply, ip: req.ip });
        } catch {}

        return res.json({ success: true, reply });
      } catch (aiErr) {
        console.log('Gemini API error, using fallback:', aiErr.message);
      }
    }

    // Fallback response
    const reply = getFallback(message);
    res.json({ success: true, reply });
    
  } catch (error) {
    console.error('Chat route error:', error);
    res.json({ success: true, reply: getFallback(req.body?.message) });
  }
});

module.exports = router;
