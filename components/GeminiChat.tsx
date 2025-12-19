
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Loader2, User, Bot } from 'lucide-react';
import { askGemini } from '../geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const GeminiChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm your Defense-Tech assistant. Ask me anything about our business model, market strategy, or financial projections." }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    const response = await askGemini(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto w-full border border-[#3c4043] rounded-3xl overflow-hidden bg-[#1e1f20]">
      <div className="p-6 border-b border-[#3c4043] bg-[#2c2d2e] flex items-center gap-3">
        <Sparkles className="text-blue-400" />
        <h2 className="text-xl font-medium text-white">Ask Gemini about Strategy</h2>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Bot size={18} className="text-blue-400" />
              </div>
            )}
            <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
              ? 'bg-blue-600 text-white rounded-tr-none' 
              : 'bg-[#131314] text-[#e3e3e3] rounded-tl-none border border-[#3c4043]'
            }`}>
              {msg.content}
            </div>
            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <User size={18} className="text-white" />
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Bot size={18} className="text-blue-400" />
            </div>
            <div className="bg-[#131314] px-4 py-3 rounded-2xl rounded-tl-none border border-[#3c4043] flex items-center gap-2">
              <Loader2 className="animate-spin text-blue-400" size={16} />
              <span className="text-sm text-[#9aa0a6]">Gemini is thinking...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-[#131314] border-t border-[#3c4043]">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="e.g., What are the gross margins in the national phase?"
            className="w-full bg-[#1e1f20] border border-[#3c4043] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 pr-12 transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="absolute right-3 p-2 text-blue-400 hover:text-blue-300 disabled:text-[#3c4043] transition-colors"
          >
            <Send size={24} />
          </button>
        </div>
        <p className="mt-2 text-center text-[10px] text-[#9aa0a6]">
          AI may make mistakes. Verify critical financial data with the provided model specs.
        </p>
      </div>
    </div>
  );
};

export default GeminiChat;
