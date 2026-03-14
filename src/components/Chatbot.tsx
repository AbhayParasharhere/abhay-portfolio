"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, MessageSquare, X } from 'lucide-react';

const SUGGESTIONS = [
  "What is your strongest project?",
  "Tell me about the PowerCompass CRM",
  "Are you available for hire?"
];

type Message = {
  id: string;
  role: 'user' | 'model' | 'system';
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      content: "Hi. I'm trained on Abhay's experience bank. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [limitReached, setLimitReached] = useState(false);

  // Auto-hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of the chat container without triggering a full page scroll
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e?: React.FormEvent, presetText?: string) => {
    e?.preventDefault();
    if (limitReached || isLoading) return;

    const textToSubmit = presetText || input;
    if (!textToSubmit.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSubmit.trim()
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, newMessage].map(m => ({ role: m.role, content: m.content }))
        })
      });

      const data = await response.json();

      if (response.status === 429) {
        setLimitReached(true);
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: 'model',
          content: data.message || "That's everything I can share here — reach me at abhayparasharr@gmail.com"
        }]);
      } else if (!response.ok) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: 'system',
          content: "Sorry, I encountered an error connecting to the experience bank."
        }]);
      } else {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: 'model',
          content: data.message
        }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'system',
        content: "Network error occurred. Please try again later."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end sm:bottom-8 sm:right-8">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-[#0B1120] border border-slate-700/60 shadow-[0_10px_40px_rgba(32,201,151,0.15)] rounded-2xl w-[calc(100vw-3rem)] sm:w-[400px] h-[500px] flex flex-col mb-4 overflow-hidden transform transition-all duration-300 origin-bottom-right">
          
          {/* Header */}
          <div className="bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-teal shadow-[0_0_8px_rgba(32,201,151,0.8)] animate-pulse"></div>
              <span className="text-sm font-medium text-slate-200 tracking-wide">Experience Bank AI</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-slate-500 hover:text-white hover:bg-slate-800 p-1 rounded transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Area */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-5 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                
                {msg.role === 'model' && (
                  <div className="w-7 h-7 rounded-full bg-teal/10 flex items-center justify-center shrink-0 border border-teal/20 text-teal mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                
                <div className={`
                  max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed shadow-sm
                  ${msg.role === 'user' ? 'bg-teal text-navy font-medium rounded-br-sm' : 
                    msg.role === 'system' ? 'bg-red-900/20 text-red-400 border border-red-900/50' : 
                    'bg-slate-800/60 text-slate-300 border border-slate-700/50 rounded-bl-sm'}
                `}>
                  {msg.content}
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 text-slate-400 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-7 h-7 rounded-full bg-teal/10 flex items-center justify-center shrink-0 border border-teal/20 text-teal">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div className="bg-slate-800/60 text-slate-200 border border-slate-700/50 rounded-xl px-4 py-3 text-sm flex items-center gap-1.5 rounded-bl-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}
          </div>

          {/* Suggestion Chips */}
          {messages.length === 1 && !limitReached && (
            <div className="px-4 py-3 flex flex-wrap gap-2 border-t border-slate-800/50 bg-slate-900/30">
              {SUGGESTIONS.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSubmit(undefined, suggestion)}
                  className="text-xs bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-teal hover:border-teal/50 hover:bg-slate-800 px-3 py-1.5 rounded-full transition-all text-left"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 bg-slate-900 border-t border-slate-800">
            <form 
              onSubmit={(e) => handleSubmit(e)}
              className="flex gap-2 relative"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading || limitReached}
                maxLength={500}
                placeholder={limitReached ? "Limit reached." : "Ask about my experience..."}
                className="flex-1 bg-[#0B1120] border border-slate-700 text-slate-200 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/50 disabled:opacity-50 transition-all placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading || limitReached}
                className="bg-teal text-navy px-3.5 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:bg-slate-700 disabled:text-slate-500 hover:bg-teal/90 transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
          
        </div>
      )}

      {/* Floating Toggle Button */}
      <div className="relative group">
        {!isOpen && (
          <div
            className={`absolute -top-12 right-0 w-max bg-slate-800 text-teal border border-teal/20 text-xs font-mono px-3 py-1.5 rounded shadow-lg transition-opacity duration-700 pointer-events-none hidden sm:flex items-center gap-1.5 ${showTooltip ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal"></span></span>
            Ask AI about my experience
          </div>
        )}
        {!isOpen && (
          <div className="absolute top-0 right-0 -mr-1 -mt-1 w-3.5 h-3.5 z-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-teal shadow-[0_0_10px_rgba(32,201,151,1)]"></span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-[0_0_20px_rgba(32,201,151,0.2)] flex items-center justify-center transition-all duration-300 hover:scale-105 ring-[8px] ring-[#0A1128] ${isOpen ? 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700' : 'bg-teal text-navy hover:bg-teal/90'}`}
          aria-label="Toggle Experience Bank Chat"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>
      </div>

    </div>
  );
}
