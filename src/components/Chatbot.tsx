"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';

const SUGGESTIONS = [
  "What is your strongest project?",
  "Do you have PostgreSQL experience?",
  "Walk me through the CRM architecture",
  "What is your tech stack?",
  "Are you available for hire?"
];

type Message = {
  id: string;
  role: 'user' | 'model' | 'system';
  content: string;
};

export default function Chatbot() {
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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
    <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-display text-white">05. Experience Bank</h2>
        <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
      </div>

      <div className="bg-surface border border-slate-800 rounded-xl overflow-hidden flex flex-col h-[600px] shadow-2xl">
        
        {/* Header */}
        <div className="bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-teal animate-pulse"></div>
            <span className="text-sm font-mono text-slate-300">Talk to my experience bank</span>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              
              {msg.role === 'model' && (
                <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0 border border-teal/20 text-teal">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              
              <div className={`
                max-w-[80%] rounded-lg px-4 py-3 text-sm leading-relaxed
                ${msg.role === 'user' ? 'bg-teal text-navy font-medium' : 
                  msg.role === 'system' ? 'bg-red-900/20 text-red-400 border border-red-900/50' : 
                  'bg-slate-800/50 text-slate-200 border border-slate-700/50'}
              `}>
                {msg.content}
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 text-slate-400">
                  <User className="w-4 h-4" />
                </div>
              )}

            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-4 justify-start">
              <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0 border border-teal/20 text-teal">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-slate-800/50 text-slate-200 border border-slate-700/50 rounded-lg px-4 py-3 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        {messages.length === 1 && !limitReached && (
          <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-slate-800/50 bg-slate-900/50">
            {SUGGESTIONS.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSubmit(undefined, suggestion)}
                className="text-xs bg-surface border border-slate-700 text-slate-400 hover:text-teal hover:border-teal/50 px-3 py-1.5 rounded-full transition-colors truncate max-w-[200px]"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 bg-slate-900 border-t border-slate-800">
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
              className="flex-1 bg-surface border border-slate-700 text-slate-200 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/50 disabled:opacity-50 transition-all font-sans"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading || limitReached}
              className="bg-teal text-navy px-4 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:bg-slate-700 disabled:text-slate-500 hover:bg-teal/90 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="text-center mt-2">
             <span className="text-[10px] text-slate-500">Includes rate limiting and fallback protection. Input length is capped.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
