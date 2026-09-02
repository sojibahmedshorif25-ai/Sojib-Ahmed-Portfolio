import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { useChatBot } from '../../hooks/useChatBot';

const SUGGESTED_PROMPTS = [
  "What technologies does Sojib use?",
  "Show me his best projects",
  "Is he available for freelance?",
  "Tell me about his experience",
  "What services does he offer?",
  "How can I contact him?",
];

function renderMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br/>')
    .replace(/•/g, '•');
}

export default function ChatBot() {
  const { isOpen, setIsOpen, messages, isTyping, sendMessage, messageCount, maxMessages } = useChatBot();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;
    sendMessage(trimmed);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbot-container" role="region" aria-label="AI Chat Assistant">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="chat-bubble mb-4 flex flex-col"
            style={{ width: 'min(380px, calc(100vw - 32px))', height: 520 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-[rgba(124,58,237,0.15)]"
              style={{ background: 'var(--color-surface)' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}>
                <Sparkles size={16} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-[var(--color-text-primary)]">Sojib AI</div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)]">
                  <div className="status-dot" style={{ width: 5, height: 5 }} />
                  AI Assistant · {maxMessages - messageCount} messages left
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[rgba(124,58,237,0.08)] transition-all"
                aria-label="Close chat"
              >
                <X size={15} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="chat-messages flex-1 overflow-y-auto p-4 space-y-3"
              style={{ background: 'var(--color-surface)' }}>
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5"
                      style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}>
                      <Sparkles size={11} className="text-white" />
                    </div>
                  )}
                  <div
                    className={msg.role === 'user' ? 'chat-message-user' : 'chat-message-ai'}
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
                  />
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}>
                    <Sparkles size={11} className="text-white" />
                  </div>
                  <div className="chat-message-ai flex items-center gap-1.5 py-2">
                    {[0, 0.15, 0.3].map((delay, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay }}
                        className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested prompts (only when < 2 messages) */}
            {messages.length < 2 && (
              <div className="px-4 py-2 border-t border-[rgba(124,58,237,0.08)]"
                style={{ background: 'var(--color-surface)' }}>
                <p className="text-[10px] text-[var(--color-text-secondary)] mb-2">Suggested:</p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_PROMPTS.slice(0, 3).map(prompt => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      className="text-[10px] px-2.5 py-1 rounded-full transition-all hover:opacity-80"
                      style={{
                        background: 'rgba(124,58,237,0.08)',
                        border: '1px solid rgba(124,58,237,0.2)',
                        color: '#8B5CF6',
                      }}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-[rgba(124,58,237,0.15)]"
              style={{ background: 'var(--color-surface)' }}>
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  id="chat-input"
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about skills, projects, availability..."
                  disabled={isTyping || messageCount >= maxMessages}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] outline-none focus:ring-1 focus:ring-[rgba(124,58,237,0.5)] disabled:opacity-50"
                  style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}
                  aria-label="Chat message input"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping || messageCount >= maxMessages}
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-white disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}
                  aria-label="Send message"
                >
                  {isTyping ? <Loader2 size={16} className="animate-spin" /> : <Send size={15} />}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        id="chatbot-trigger"
        whileHover={{ scale: 1.1, boxShadow: '0 8px 30px rgba(124,58,237,0.5)' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white relative shadow-lg ml-auto"
        style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}
        aria-label={isOpen ? 'Close AI assistant' : 'Open AI assistant'}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Sparkles size={22} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification dot */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-[#050508]"
          />
        )}
      </motion.button>
    </div>
  );
}
