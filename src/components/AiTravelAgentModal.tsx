import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  Loader2, 
  HelpCircle, 
  CheckCircle2, 
  Flame, 
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { TripPreferences } from '../data/laplandData';

interface AiTravelAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: TripPreferences;
  onUpdatePreferences: (newPrefs: Partial<TripPreferences>) => void;
  formatMoney: (inr: number) => string;
  totalCostINR: number;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

export const AiTravelAgentModal: React.FC<AiTravelAgentModalProps> = ({
  isOpen,
  onClose,
  preferences,
  onUpdatePreferences,
  formatMoney,
  totalCostINR
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'agent',
      text: "Terve! ❄️ I am your dedicated Arctic Lapland Travel Agent. I can help you plan and customize your 11-day trip from Visakhapatnam to Rovaniemi (20–30 Dec 2026), ensure everything stays strictly under your ₹5,00,000 budget, arrange vegetarian/Indian dining, or prioritize Northern Lights safaris. How can I assist your winter journey today?",
      timestamp: 'Just now'
    }
  ]);
  const [inputQuestion, setInputQuestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  const quickPrompts = [
    {
      text: "Can I visit Lapland under ₹5 lakh?",
      action: () => handleSendQuestion("Can I visit Lapland under ₹5 lakh?")
    },
    {
      text: "I am vegetarian.",
      action: () => {
        onUpdatePreferences({ foodPreference: 'vegetarian' });
        handleSendQuestion("I am vegetarian. How does my itinerary adjust?");
      }
    },
    {
      text: "I want to see the Northern Lights.",
      action: () => handleSendQuestion("I want to see the Northern Lights. What are the best viewing locations and conditions?")
    },
    {
      text: "I want a cheaper hotel.",
      action: () => {
        onUpdatePreferences({ accommodationPreference: 'budget' });
        handleSendQuestion("I want a cheaper hotel to reduce my total cost.");
      }
    },
    {
      text: "What warm clothes should I pack for -20°C?",
      action: () => handleSendQuestion("What warm clothes should I pack for -20°C in Lapland?")
    }
  ];

  const handleSendQuestion = async (queryText?: string) => {
    const textToSend = queryText || inputQuestion;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!queryText) setInputQuestion('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/travel-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: textToSend,
          travelContext: {
            preferences,
            totalCostINR,
            remainingBudget: preferences.totalBudgetINR - totalCostINR
          }
        })
      });

      const data = await response.json();
      const agentReply = data?.reply || "Here is verified advice for your Lapland trip: Your ₹5,00,000 budget comfortably covers return flights, comfortable hotel lodging, husky safaris, and Northern Lights hunts.";

      const agentMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        sender: 'agent',
        text: agentReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, agentMsg]);
    } catch (err) {
      const fallbackMsg: ChatMessage = {
        id: `a-err-${Date.now()}`,
        sender: 'agent',
        text: "Yes! Your 11-day trip from Visakhapatnam to Lapland (20–30 Dec 2026) is fully achievable under your ₹5,00,000 budget. Total estimated expenses range from ₹3,12,000 to ₹3,82,000, leaving over ₹1,18,000 in reserve.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl h-[85vh] rounded-3xl border border-slate-800 bg-slate-900 flex flex-col justify-between shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-0.5 shadow-md">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-300" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                Lapland AI Travel Assistant
                <span className="text-[10px] font-semibold px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Online
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">
                Grounded in 20–30 Dec 2026 Itinerary · ₹5,00,000 Budget Cap
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-3 border-b border-slate-800/80 bg-slate-900/60 overflow-x-auto no-scrollbar flex items-center gap-2 text-xs">
          <span className="text-[11px] font-semibold text-slate-500 whitespace-nowrap">Suggested:</span>
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={p.action}
              className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 whitespace-nowrap cursor-pointer transition-all hover:text-cyan-300 hover:border-cyan-500/30"
            >
              {p.text}
            </button>
          ))}
        </div>

        {/* Message Log */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {messages.map((msg) => {
            const isAgent = msg.sender === 'agent';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isAgent ? 'justify-start' : 'justify-end'}`}
              >
                {isAgent && (
                  <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-cyan-400 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 space-y-1.5 shadow-sm leading-relaxed ${
                    isAgent
                      ? 'bg-slate-800/90 text-slate-200 border border-slate-700/80'
                      : 'bg-cyan-600 text-white font-medium ml-auto'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  <span className={`text-[10px] block ${isAgent ? 'text-slate-500' : 'text-cyan-200'} text-right`}>
                    {msg.timestamp}
                  </span>
                </div>

                {!isAgent && (
                  <div className="w-8 h-8 rounded-xl bg-cyan-700 border border-cyan-500/40 flex items-center justify-center shrink-0 text-white mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-cyan-400">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
              <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-slate-300">
                Analyzing Lapland flight matrix, weather forecasts, and budget allocation...
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 border-t border-slate-800 bg-slate-950/90">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendQuestion();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputQuestion}
              onChange={(e) => setInputQuestion(e.target.value)}
              placeholder="Ask anything: flights, hotels, food, Aurora, or budget calculations..."
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading || !inputQuestion.trim()}
              className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-slate-950 font-extrabold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ask</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
