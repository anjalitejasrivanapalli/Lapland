import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Save, 
  Download, 
  Edit3, 
  ExternalLink, 
  CheckCircle2, 
  Printer, 
  Plane, 
  Building2, 
  UtensilsCrossed, 
  Bus, 
  Wallet,
  Calendar,
  Users,
  MapPin,
  ShieldCheck
} from 'lucide-react';
import { TripPreferences } from '../data/laplandData';

interface TripSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: TripPreferences;
  costs: {
    flights: number;
    visa: number;
    insurance: number;
    accommodation: number;
    food: number;
    localTransport: number;
    activities: number;
    northernLights: number;
    shopping: number;
    emergency: number;
    total: number;
    remaining: number;
  };
  formatMoney: (inr: number) => string;
  onModifyTrip: () => void;
}

export const TripSummaryModal: React.FC<TripSummaryModalProps> = ({
  isOpen,
  onClose,
  preferences,
  costs,
  formatMoney,
  onModifyTrip
}) => {
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSave = () => {
    try {
      const tripData = {
        preferences,
        costs,
        savedAt: new Date().toISOString()
      };
      localStorage.setItem('lapland_trip_plan', JSON.stringify(tripData));
      setSaveStatus('Plan saved successfully in your browser storage!');
      setTimeout(() => setSaveStatus(null), 3500);
    } catch (e) {
      setSaveStatus('Unable to save to localStorage.');
    }
  };

  const handleDownloadPrint = () => {
    window.print();
  };

  const isOverBudget = costs.remaining < 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 space-y-6 shadow-2xl my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌍</span>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Section 19</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight font-['Playfair_Display',serif]">
            Your Lapland Trip Summary
          </h2>
          <p className="text-xs text-slate-400">
            Comprehensive financial breakdown and master overview for your 11-day Arctic holiday.
          </p>
        </div>

        {/* Key Trip Parameters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
          <div>
            <span className="text-slate-500 text-[11px] block">Dates:</span>
            <strong className="text-white block">20–30 Dec 2026</strong>
            <span className="text-slate-400 text-[11px]">11 Days / 10 Nights</span>
          </div>

          <div>
            <span className="text-slate-500 text-[11px] block">Travelers:</span>
            <strong className="text-white block">{preferences.travelers} Adult{preferences.travelers > 1 ? 's' : ''}</strong>
            <span className="text-slate-400 text-[11px]">{preferences.travelers === 1 ? 'Solo Traveler' : 'Group Travel'}</span>
          </div>

          <div>
            <span className="text-slate-500 text-[11px] block">Route:</span>
            <strong className="text-white block truncate">{preferences.startingLocation.split(',')[0]}</strong>
            <span className="text-cyan-300 text-[11px]">→ Rovaniemi (Lapland)</span>
          </div>

          <div>
            <span className="text-slate-500 text-[11px] block">Budget Cap:</span>
            <strong className="text-emerald-400 block">{formatMoney(preferences.totalBudgetINR)}</strong>
            <span className="text-slate-400 text-[11px]">Maximum Allocated</span>
          </div>
        </div>

        {/* Itemized Cost Breakdown List */}
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="flex items-center gap-2 text-slate-300">
              <span>✈️</span> Flight cost (Return with checked baggage):
            </span>
            <strong className="text-white font-mono">{formatMoney(costs.flights)}</strong>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="flex items-center gap-2 text-slate-300">
              <span>🏨</span> Accommodation cost (10 Nights):
            </span>
            <strong className="text-white font-mono">{formatMoney(costs.accommodation)}</strong>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="flex items-center gap-2 text-slate-300">
              <span>🍽️</span> Food & dining cost (11 Days):
            </span>
            <strong className="text-white font-mono">{formatMoney(costs.food)}</strong>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="flex items-center gap-2 text-slate-300">
              <span>🚆</span> Transportation cost (Buses, shuttles, transfers):
            </span>
            <strong className="text-white font-mono">{formatMoney(costs.localTransport)}</strong>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="flex items-center gap-2 text-slate-300">
              <span>🎟️</span> Activities & safaris cost (Husky, reindeer, snowmobile):
            </span>
            <strong className="text-white font-mono">{formatMoney(costs.activities)}</strong>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="flex items-center gap-2 text-slate-300">
              <span>🌌</span> Northern Lights guided photography tour:
            </span>
            <strong className="text-white font-mono">{formatMoney(costs.northernLights)}</strong>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="flex items-center gap-2 text-slate-300">
              <span>🛂</span> Visa & travel medical insurance (€30k policy):
            </span>
            <strong className="text-white font-mono">{formatMoney(costs.visa + costs.insurance)}</strong>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="flex items-center gap-2 text-slate-300">
              <span>🛍️</span> Shopping & souvenirs reserve:
            </span>
            <strong className="text-white font-mono">{formatMoney(costs.shopping)}</strong>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="flex items-center gap-2 text-slate-300">
              <span>🚨</span> Emergency contingency fund:
            </span>
            <strong className="text-white font-mono">{formatMoney(costs.emergency)}</strong>
          </div>
        </div>

        {/* Total & Remaining Highlights */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white font-bold">💰 Total Estimated Cost:</span>
            <span className={`text-xl font-black ${isOverBudget ? 'text-rose-400' : 'text-emerald-400'}`}>
              {formatMoney(costs.total)}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm pt-2 border-t border-slate-800">
            <span className="text-slate-400">💵 Remaining Budget Balance:</span>
            <span className={`text-lg font-extrabold ${isOverBudget ? 'text-rose-400' : 'text-emerald-300'}`}>
              {formatMoney(costs.remaining)}
            </span>
          </div>
        </div>

        {/* Save confirmation toast */}
        {saveStatus && (
          <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs text-center flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{saveStatus}</span>
          </div>
        )}

        {/* 4 Required Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
          <button
            type="button"
            onClick={handleSave}
            className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer border border-slate-700"
          >
            <Save className="w-4 h-4 text-cyan-400" />
            <span>Save Itinerary</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadPrint}
            className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer border border-slate-700"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Download PDF</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onModifyTrip();
            }}
            className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer border border-slate-700"
          >
            <Edit3 className="w-4 h-4 text-amber-400" />
            <span>Modify Trip</span>
          </button>

          <a
            href="https://finlandvisa.fi/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer text-center"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Book / Options</span>
          </a>
        </div>
      </div>
    </div>
  );
};
