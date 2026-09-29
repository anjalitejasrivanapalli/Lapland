import React from 'react';
import { 
  Wallet, 
  TrendingDown, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Plane, 
  Building2, 
  UtensilsCrossed, 
  Bus, 
  ShoppingBag, 
  HelpCircle
} from 'lucide-react';
import { TripPreferences } from '../data/laplandData';

interface BudgetCalculatorViewProps {
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
  onApplyCheaperHotel: () => void;
  onApplyCheaperFlights: () => void;
  onApplyPublicTransport: () => void;
  onOptimizeItinerary: () => void;
  formatMoney: (inr: number) => string;
}

export const BudgetCalculatorView: React.FC<BudgetCalculatorViewProps> = ({
  preferences,
  costs,
  onApplyCheaperHotel,
  onApplyCheaperFlights,
  onApplyPublicTransport,
  onOptimizeItinerary,
  formatMoney
}) => {
  const isOverBudget = costs.remaining < 0;
  const budgetUtilization = Math.min(100, Math.round((costs.total / preferences.totalBudgetINR) * 100));

  const budgetItems = [
    { label: 'International Flights (VTZ ⇄ RVN Return)', cost: costs.flights, icon: '✈️', note: '2 connection stops with baggage' },
    { label: 'Schengen Visa (Embassy & VFS Global Fees)', cost: costs.visa, icon: '🛂', note: 'Adult application & processing' },
    { label: 'Travel Medical Insurance (Schengen €30k Policy)', cost: costs.insurance, icon: '🛡️', note: 'Covers sub-zero sports & medical' },
    { label: 'Accommodation (10 Nights in Lapland)', cost: costs.accommodation, icon: '🏨', note: `${preferences.accommodationPreference.toUpperCase()} stay with sauna/heat` },
    { label: 'Food & Dining (11 Days)', cost: costs.food, icon: '🍽️', note: 'Breakfast, warm lunch, dinner & glögi' },
    { label: 'Local Transportation (Buses & Shuttles)', cost: costs.localTransport, icon: '🚌', note: "Santa's Line 8 bus & airport transfers" },
    { label: 'Tourist Activities (Husky, Reindeer, Snowmobile)', cost: costs.activities, icon: '🐕', note: 'Booked winter safari excursions' },
    { label: 'Northern Lights Tour (Guided Wilderness Hunt)', cost: costs.northernLights, icon: '🌌', note: 'Expert photographer & thermal gear' },
    { label: 'Shopping & Souvenirs', cost: costs.shopping, icon: '🛍️', note: 'Kuksa cups, cloudberry jam, gifts' },
    { label: 'Emergency Contingency Fund', cost: costs.emergency, icon: '🚨', note: 'Unforeseen winter weather buffer' }
  ];

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Section 9</span>
            <span className="text-xs text-slate-500">· Comprehensive Financial Audit</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Wallet className="w-6 h-6 text-emerald-400" />
            Interactive Lapland Budget Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Real-time allocation against your maximum budget of <strong>{formatMoney(preferences.totalBudgetINR)}</strong>.
          </p>
        </div>

        <div className="text-right">
          <span className="text-xs text-slate-400 block">Total Budget Cap</span>
          <span className="text-xl font-black text-emerald-300">
            {formatMoney(preferences.totalBudgetINR)}
          </span>
        </div>
      </div>

      {/* Over-budget Warning & Cheaper Alternatives Banner */}
      {isOverBudget ? (
        <div className="rounded-2xl border border-rose-500/50 bg-rose-950/30 p-6 space-y-4 shadow-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-bold text-rose-200">
                Your current itinerary exceeds your budget. Here are cheaper alternatives:
              </h3>
              <p className="text-xs text-rose-300/90 mt-1">
                You are currently over budget by <strong className="font-bold">{formatMoney(Math.abs(costs.remaining))}</strong>. Use the 1-click recommendations below to bring your trip comfortably under ₹5,00,000 without losing the magic of Santa Claus or the Northern Lights.
              </p>
            </div>
          </div>

          {/* Quick Action Suggestion Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            <button
              type="button"
              onClick={onApplyCheaperHotel}
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-left transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white">🏨 Switch to Budget Hotel</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-[11px] text-slate-400">Switch to Guesthouse Borealis (Saves ₹70,000)</p>
            </button>

            <button
              type="button"
              onClick={onApplyCheaperFlights}
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-left transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white">✈️ Economize Flights</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-[11px] text-slate-400">Select Standard Arctic Route (Saves ₹20,000)</p>
            </button>

            <button
              type="button"
              onClick={onApplyPublicTransport}
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-left transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white">🚌 Use Line 8 Public Bus</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-[11px] text-slate-400">Replace private taxis with Santa Express</p>
            </button>

            <button
              type="button"
              onClick={onOptimizeItinerary}
              className="p-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-left transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold">⚡ Auto-Optimize Plan</span>
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-[11px] text-slate-900 font-medium">Rebalance all categories under ₹5L</p>
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/20 p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <h3 className="text-sm font-bold text-emerald-200">
                Excellent! Your Lapland trip is comfortably within your ₹5,00,000 budget.
              </h3>
              <p className="text-xs text-emerald-300/80">
                You have a healthy surplus of <strong>{formatMoney(costs.remaining)}</strong> remaining for discretionary luxury upgrades or shopping.
              </p>
            </div>
          </div>

          <div className="hidden sm:block text-right">
            <span className="text-xs text-slate-400 block">Surplus Reserve</span>
            <span className="text-lg font-black text-emerald-300">{formatMoney(costs.remaining)}</span>
          </div>
        </div>
      )}

      {/* Budget Progress Bar */}
      <div className="space-y-2 p-5 rounded-2xl border border-slate-800 bg-slate-900/80">
        <div className="flex justify-between text-xs font-semibold">
          <span className="text-slate-400">Budget Allocated: {budgetUtilization}%</span>
          <span className={isOverBudget ? 'text-rose-400' : 'text-emerald-400'}>
            {formatMoney(costs.total)} / {formatMoney(preferences.totalBudgetINR)}
          </span>
        </div>
        <div className="w-full h-3 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              isOverBudget
                ? 'bg-rose-500'
                : budgetUtilization > 85
                ? 'bg-amber-400'
                : 'bg-emerald-400'
            }`}
            style={{ width: `${Math.min(100, budgetUtilization)}%` }}
          />
        </div>
      </div>

      {/* Master Itemized Budget Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-xl">
        <div className="p-4 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <h3 className="text-sm font-bold text-white">Itemized Category Expense Audit</h3>
          <span className="text-xs text-slate-400">Values in selected currency</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-950 text-slate-400 uppercase text-[11px] font-semibold">
              <tr>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Notes & Inclusions</th>
                <th className="py-3 px-4 text-right">Estimated Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200 font-medium">
              {budgetItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 flex items-center gap-2">
                    <span>{item.icon}</span>
                    <span className="text-white font-semibold">{item.label}</span>
                  </td>
                  <td className="py-3 px-4 text-slate-400">
                    {item.note}
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-white">
                    {formatMoney(item.cost)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="border-t-2 border-slate-700 bg-slate-950 text-sm font-bold">
              <tr>
                <td className="py-3.5 px-4 text-white">💰 Total Estimated Trip Cost</td>
                <td className="py-3.5 px-4 text-xs font-normal text-slate-400">All 11 days (Flights, stay, tours, food)</td>
                <td className={`py-3.5 px-4 text-right font-black ${isOverBudget ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {formatMoney(costs.total)}
                </td>
              </tr>
              <tr className="bg-slate-900/90">
                <td className="py-3.5 px-4 text-cyan-300">💵 Remaining Budget Balance</td>
                <td className="py-3.5 px-4 text-xs font-normal text-slate-400">Surplus available from ₹5,00,000</td>
                <td className={`py-3.5 px-4 text-right font-black ${isOverBudget ? 'text-rose-400' : 'text-emerald-300'}`}>
                  {formatMoney(costs.remaining)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
