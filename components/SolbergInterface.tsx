
import React, { useState, useEffect, useRef } from 'react';
import { createSolbergChat } from '../services/geminiService';
import { ChatMessage, ChatMode } from '../types';
import { GenerateContentResponse } from '@google/genai';

interface SolbergInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: 'landing' | 'dashboard' | 'about';
}

const FOUNDER_IMAGE = "https://i.postimg.cc/tYWgbdnb/8-Scorpio-Sentinel-Alpha.png";

const DASHBOARD_PROBES = [
  "What are the primary drivers of the current 72.4% fragility score?",
  "Analyze the correlation break between USD/JPY and Gold.",
  "What are the second-order effects of the 'Tether De-peg' scenario?"
];

const ABOUT_PROBES = [
  "Explain Professor Solberg's vision of 'Civilisation Learning'.",
  "How does Sentinel Alpha preserve signal integrity for partners?",
  "What distinguishes circular systems from traditional sustainability?"
];

const SolbergInterface: React.FC<SolbergInterfaceProps> = ({ isOpen, onClose, currentPage }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<ChatMode>('INTELLIGENCE');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatRef.current) {
      chatRef.current = createSolbergChat();
      const intro = currentPage === 'dashboard' 
        ? "I am the Solberg Interface. We are currently observing significant structural stress in global liquidity. How shall we interpret these specific signals?"
        : "Welcome to the Archive. I am the Solberg Interface, representing Professor Amina Solberg's worldview. Shall we discuss the systemic philosophy behind Sentinel Alpha?";
      
      setMessages([
        { 
          role: 'model', 
          text: intro
        }
      ]);
    }
  }, [isOpen, currentPage]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (userMsg: string) => {
    if (!userMsg.trim() || isTyping) return;

    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const modePrompt = mode === 'STRATEGY' ? "[Focus on strategic reasoning and second-order effects] " :
                        mode === 'FOUNDER' ? "[Speak from your personal journey and systems philosophy] " : "";
      
      const stream = await chatRef.current.sendMessageStream({ message: modePrompt + userMsg });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of stream) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text || "";
        fullResponse += textChunk;
        setMessages(prev => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1].text = fullResponse;
          return newMsgs;
        });
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Connectivity failure. Please re-establish session." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
    setInput('');
  };

  const probes = currentPage === 'dashboard' ? DASHBOARD_PROBES : ABOUT_PROBES;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      
      {/* Drawer */}
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200">
              <img src={FOUNDER_IMAGE} alt="Professor Solberg" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <h2 className="text-base font-bold text-slate-900">Solberg Interface</h2>
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Amina Solberg • Founders AI Voice</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-lg transition-colors text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Mode Selector */}
        <div className="px-6 py-4 flex gap-2 border-b border-slate-50">
          {(['INTELLIGENCE', 'STRATEGY', 'FOUNDER'] as ChatMode[]).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all ${
                mode === m ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
              }`}
            >
              {m === 'INTELLIGENCE' ? 'Platform' : m === 'STRATEGY' ? 'Strategy' : 'Founder'}
            </button>
          ))}
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8 scroll-smooth">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] space-y-2 ${msg.role === 'user' ? 'text-right' : ''}`}>
                <div className={`text-[9px] font-black uppercase tracking-widest ${msg.role === 'user' ? 'text-slate-300' : 'text-blue-500'}`}>
                  {msg.role === 'user' ? 'ALLOCATOR' : 'SOLBERG'}
                </div>
                <div className={`text-sm leading-relaxed p-4 rounded-2xl ${
                  msg.role === 'user' ? 'bg-slate-50 text-slate-700 rounded-tr-none' : 'bg-white border border-slate-100 text-slate-800 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                  {msg.role === 'model' && i === messages.length - 1 && isTyping && (
                    <span className="inline-block w-1.5 h-4 bg-blue-500/20 ml-1 animate-pulse align-middle" />
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Starter Probes */}
          {messages.length === 1 && !isTyping && (
            <div className="space-y-3 pt-4 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">Inquiry Starters</p>
              {probes.map((probe, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(probe)}
                  className="w-full text-left p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all text-xs text-slate-600 font-medium group flex items-center justify-between"
                >
                  {probe}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">→</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/50">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Query the systems scholar..."
              className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-300"
            />
            <button
              disabled={isTyping}
              className="bg-slate-900 text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-slate-800 transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </form>
          <p className="mt-3 text-[10px] text-slate-400 text-center font-medium italic">
            Confidential Reasoning Protocol Active • representations reflect founder canon
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolbergInterface;
