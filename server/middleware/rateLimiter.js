const rateLimit = require('express-rate-limit');

// Global rate limiter
const globalRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests. Please try again in 15 minutes.' },
});

// Strict limiter for contact form
const contactRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { success: false, message: 'Too many messages sent. Please wait an hour.' },
});

// Chat rate limiter
const chatRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20,
  message: { success: false, message: 'Chat rate limit reached. Please slow down.' },
});

module.exports = { globalRateLimiter, contactRateLimiter, chatRateLimiter };
