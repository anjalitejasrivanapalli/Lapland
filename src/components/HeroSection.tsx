import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Wallet, 
  ArrowRight, 
  Compass, 
  ShieldCheck, 
  Moon, 
  Snowflake,
  Flame,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { TripPreferences } from '../data/laplandData';

interface HeroSectionProps {
  preferences: TripPreferences;
  onPlanTripClick: () => void;
  onExploreActivitiesClick: () => void;
  onOpenAiModal: () => void;
  formatMoney: (inr: number) => string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  preferences,
  onPlanTripClick,
  onExploreActivitiesClick,
  onOpenAiModal,
  formatMoney
}) => {
  return (
    <div className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-[#070b14] to-slate-950 px-4 pt-10 pb-16 sm:px-6 lg:px-8">
      {/* Aurora Borealis Atmospheric Light Gradients */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-[600px] rounded-full bg-emerald-500/15 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-20 left-1/5 -z-10 h-96 w-[500px] rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 -z-10 h-72 w-full max-w-4xl bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            <Snowflake className="w-3.5 h-3.5 text-cyan-400" /> Winter 2026 Season Plan
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Peak Aurora Borealis Probability
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
            🎅 Official Santa Claus Village
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl space-y-4 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Playfair_Display',serif] leading-tight">
            Discover the Magic of <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-200 bg-clip-text text-transparent">Lapland</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light max-w-3xl">
            Experience the Northern Lights, Santa Claus Village, Arctic adventures and unforgettable winter memories.
          </p>
        </div>

        {/* Key Trip Parameters Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-md shadow-2xl">
          <div className="space-y-1">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Route
            </span>
            <p className="text-sm font-bold text-white truncate">
              {preferences.startingLocation.split(',')[0]} → Lapland
            </p>
            <span className="text-[11px] text-slate-400">Rovaniemi, Finland</span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-400" /> Dates & Duration
            </span>
            <p className="text-sm font-bold text-white">
              20 Dec – 30 Dec 2026
            </p>
            <span className="text-[11px] text-emerald-400 font-medium">11 Days / 10 Nights</span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Wallet className="w-3.5 h-3.5 text-emerald-400" /> Total Budget
            </span>
            <p className="text-sm font-bold text-emerald-300">
              {formatMoney(preferences.totalBudgetINR)}
            </p>
            <span className="text-[11px] text-slate-400">Solo Traveler (1 Adult)</span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Season
            </span>
            <p className="text-sm font-bold text-white">
              Christmas & Polar Night
            </p>
            <span className="text-[11px] text-cyan-300 font-medium">Kaamos & Snow Season</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            type="button"
            onClick={onPlanTripClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Plan My Trip</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onExploreActivitiesClick}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Activities & Safari Cards</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </button>

          <button
            type="button"
            onClick={onOpenAiModal}
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-xs text-cyan-300 hover:text-cyan-200 bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Ask AI: "Can I visit under ₹5 Lakh?"</span>
          </button>
        </div>

        {/* Highlight Visual Cards Grid (Snow, Northern lights, Reindeer, Santa, Snow Activities) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-4">
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-3 hover:border-cyan-500/40 transition-all">
            <div className="text-2xl mb-1">🌌</div>
            <h4 className="text-xs font-bold text-white">Northern Lights</h4>
            <p className="text-[11px] text-slate-400">Peak December dark skies & aurora alerts</p>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-3 hover:border-amber-500/40 transition-all">
            <div className="text-2xl mb-1">🎅</div>
            <h4 className="text-xs font-bold text-white">Santa Claus Village</h4>
            <p className="text-[11px] text-slate-400">Arctic Circle line crossing & Main Post Office</p>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-3 hover:border-emerald-500/40 transition-all">
            <div className="text-2xl mb-1">🦌</div>
            <h4 className="text-xs font-bold text-white">Reindeer Safari</h4>
            <p className="text-[11px] text-slate-400">Sámi culture, sleigh rides & reindeer license</p>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-3 hover:border-sky-500/40 transition-all">
            <div className="text-2xl mb-1">🐕</div>
            <h4 className="text-xs font-bold text-white">Husky Sledding</h4>
            <p className="text-[11px] text-slate-400">Self-drive 10km dash across frosted taiga</p>
          </div>

          <div className="col-span-2 md:col-span-1 rounded-xl border border-slate-800/80 bg-slate-900/50 p-3 hover:border-indigo-500/40 transition-all">
            <div className="text-2xl mb-1">❄️</div>
            <h4 className="text-xs font-bold text-white">Snow Activities</h4>
            <p className="text-[11px] text-slate-400">Snowmobiles, ice fishing & Arctic SnowHotel</p>
          </div>
        </div>
      </div>
    </div>
  );
};
