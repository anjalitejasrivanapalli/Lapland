import React from 'react';
import { 
  Compass, 
  Sparkles, 
  Wallet, 
  MapPin, 
  Calendar, 
  User, 
  Printer, 
  Bot, 
  CheckCircle, 
  Moon, 
  Sun,
  Flame,
  Snowflake,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { TripPreferences } from '../data/laplandData';

interface HeaderNavProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  currency: 'INR' | 'EUR' | 'USD';
  onCurrencyChange: (c: 'INR' | 'EUR' | 'USD') => void;
  preferences: TripPreferences;
  totalCostINR: number;
  onOpenAiModal: () => void;
  onOpenSummaryModal: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeTab,
  onSelectTab,
  currency,
  onCurrencyChange,
  preferences,
  totalCostINR,
  onOpenAiModal,
  onOpenSummaryModal
}) => {
  const formatMoney = (inr: number) => {
    if (currency === 'INR') {
      return `₹${inr.toLocaleString('en-IN')}`;
    } else if (currency === 'EUR') {
      const eur = Math.round(inr / 90);
      return `€${eur.toLocaleString('en-US')}`;
    } else {
      const usd = Math.round(inr / 86.5);
      return `$${usd.toLocaleString('en-US')}`;
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '❄️' },
    { id: 'plan', label: 'Plan Trip', icon: '🧭' },
    { id: 'flights', label: 'Flights', icon: '✈️' },
    { id: 'destinations', label: 'Destinations', icon: '📍' },
    { id: 'activities', label: 'Activities', icon: '🐕' },
    { id: 'hotels', label: 'Hotels', icon: '🏨' },
    { id: 'food', label: 'Food & Dining', icon: '🍽️' },
    { id: 'budget', label: 'Budget Calculator', icon: '💰' },
    { id: 'itinerary', label: '11-Day Itinerary', icon: '📅' },
    { id: 'aurora', label: 'Northern Lights', icon: '🌌' },
    { id: 'transport', label: 'Transport', icon: '🚆' },
    { id: 'weather', label: 'Weather & Packing', icon: '🧥' },
    { id: 'visa', label: 'Visa Guide', icon: '🛂' },
    { id: 'map', label: 'Lapland Map', icon: '🗺️' }
  ];

  const remainingBudget = preferences.totalBudgetINR - totalCostINR;
  const isOverBudget = remainingBudget < 0;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-md">
      {/* Top Banner Bar */}
      <div className="border-b border-slate-900 bg-gradient-to-r from-cyan-950/40 via-slate-950 to-emerald-950/30 px-4 py-2 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Arctic Season Active (20–30 Dec 2026)
            </span>
            <span className="hidden md:inline text-slate-400">
              Visakhapatnam (VTZ) → Lapland, Finland (RVN) · Polar Night & Santa Village
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Live budget snapshot */}
            <div className="flex items-center gap-1.5 font-medium">
              <span className="text-slate-400">Estimated Total:</span>
              <span className={`font-bold ${isOverBudget ? 'text-rose-400' : 'text-emerald-400'}`}>
                {formatMoney(totalCostINR)}
              </span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300">{formatMoney(preferences.totalBudgetINR)}</span>
            </div>

            {/* Currency selector */}
            <div className="inline-flex rounded-md bg-slate-900 p-0.5 border border-slate-800 text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => onCurrencyChange('INR')}
                className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                  currency === 'INR' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                ₹ INR
              </button>
              <button
                type="button"
                onClick={() => onCurrencyChange('EUR')}
                className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                  currency === 'EUR' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                € EUR
              </button>
              <button
                type="button"
                onClick={() => onCurrencyChange('USD')}
                className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                  currency === 'USD' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                $ USD
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Brand & Controls */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Brand */}
          <div 
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-emerald-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Snowflake className="w-5 h-5 text-cyan-300 animate-spin-slow" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-white font-['Playfair_Display',serif]">
                  Lapland Arctic Voyager
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  AI Travel Agent
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Official Solo Winter Travel Planner · Visakhapatnam to Finland
              </p>
            </div>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={onOpenAiModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-indigo-500/20 hover:from-emerald-500/30 hover:to-cyan-500/30 text-cyan-300 border border-cyan-500/40 shadow-sm transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Ask AI Agent</span>
            </button>

            <button
              type="button"
              onClick={onOpenSummaryModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Trip Summary</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('plan')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
            >
              <span>Modify Plan</span>
            </button>
          </div>
        </div>

        {/* Scrollable Navigation Tabs */}
        <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar pt-3 border-t border-slate-900 mt-2 text-xs font-medium">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/80 border border-transparent'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
