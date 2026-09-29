import React from 'react';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  Wallet, 
  Plane, 
  Building2, 
  UtensilsCrossed, 
  Heart, 
  RefreshCw, 
  Sparkles,
  Check,
  AlertCircle
} from 'lucide-react';
import { TripPreferences } from '../data/laplandData';

interface TripPlannerFormProps {
  preferences: TripPreferences;
  onUpdatePreferences: (newPrefs: Partial<TripPreferences>) => void;
  onResetPreferences: () => void;
  formatMoney: (inr: number) => string;
  totalCostINR: number;
}

export const TripPlannerForm: React.FC<TripPlannerFormProps> = ({
  preferences,
  onUpdatePreferences,
  onResetPreferences,
  formatMoney,
  totalCostINR
}) => {
  const remainingBudget = preferences.totalBudgetINR - totalCostINR;
  const isOverBudget = remainingBudget < 0;

  const interestOptions = [
    { id: 'Northern Lights', label: 'Northern Lights (Aurora Borealis)', icon: '🌌' },
    { id: 'Santa Claus Village', label: 'Santa Claus Village & Arctic Circle', icon: '🎅' },
    { id: 'Husky Sledding', label: 'Husky Sledding & Dog Safaris', icon: '🐕' },
    { id: 'Reindeer Safari', label: 'Reindeer Sleigh & Sámi Culture', icon: '🦌' },
    { id: 'Snowmobile Safari', label: 'Snowmobile Taiga Expeditions', icon: '🛷' },
    { id: 'Ice Fishing', label: 'Frozen Lake Ice Fishing & Campfire', icon: '🎣' },
    { id: 'Skiing & Snowshoeing', label: 'Ounasvaara / Levi Ski & Snowshoe', icon: '🎿' },
    { id: 'Arctic SnowHotel', label: 'Ice Hotel Sculptures & Ice Bar', icon: '🧊' },
    { id: 'Glass Igloo Stargazing', label: 'Glass Igloo Aurora Sleepover', icon: '✨' }
  ];

  const toggleInterest = (interestId: string) => {
    if (preferences.travelInterests.includes(interestId)) {
      onUpdatePreferences({
        travelInterests: preferences.travelInterests.filter(i => i !== interestId)
      });
    } else {
      onUpdatePreferences({
        travelInterests: [...preferences.travelInterests, interestId]
      });
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 space-y-8 shadow-xl">
      {/* Form Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Interactive Customizer</span>
            <span className="text-xs text-slate-500">· Section 2</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Compass className="w-6 h-6 text-cyan-400" />
            Customize Your Lapland Trip Parameters
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Adjust your departure city, travel dates, passenger count, budget, accommodation, and food preferences. All itinerary costs recalculate automatically.
          </p>
        </div>

        <button
          type="button"
          onClick={onResetPreferences}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all self-start sm:self-center cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Sample Trip (Visakhapatnam)</span>
        </button>
      </div>

      {/* Main Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Starting Location */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-cyan-400" />
            Starting Location (India / World)
          </label>
          <input
            type="text"
            value={preferences.startingLocation}
            onChange={(e) => onUpdatePreferences({ startingLocation: e.target.value })}
            placeholder="e.g. Visakhapatnam, India"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
          <span className="text-[11px] text-slate-400">Hub: Visakhapatnam Airport (VTZ)</span>
        </div>

        {/* 2. Destination */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-emerald-400" />
            Destination
          </label>
          <select
            value={preferences.destination}
            onChange={(e) => onUpdatePreferences({ destination: e.target.value })}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 cursor-pointer"
          >
            <option value="Lapland, Finland (Rovaniemi & Arctic Wilderness)">Rovaniemi (Santa Claus Hometown & Capital of Lapland)</option>
            <option value="Lapland, Finland (Levi Ski & Aurora Fells)">Levi (Kittilä - Ski slopes, fells & winter village)</option>
            <option value="Lapland, Finland (Saariselkä & Glass Igloos)">Saariselkä (Deep fell wilderness & glass igloos)</option>
            <option value="Lapland, Finland (Inari & Sámi Heartlands)">Inari (Lake Inari & indigenous Sámi culture)</option>
          </select>
          <span className="text-[11px] text-slate-400">Gateway: Rovaniemi Airport (RVN)</span>
        </div>

        {/* 3. Number of Travelers */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-purple-400" />
            Number of Travelers
          </label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              disabled={preferences.travelers <= 1}
              onClick={() => onUpdatePreferences({ travelers: Math.max(1, preferences.travelers - 1) })}
              className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white font-bold flex items-center justify-center border border-slate-700 cursor-pointer"
            >
              -
            </button>
            <span className="flex-1 text-center font-bold text-white text-base py-2 bg-slate-950 rounded-xl border border-slate-800">
              {preferences.travelers} {preferences.travelers === 1 ? 'Solo Traveler' : 'Travelers'}
            </span>
            <button
              type="button"
              disabled={preferences.travelers >= 6}
              onClick={() => onUpdatePreferences({ travelers: Math.min(6, preferences.travelers + 1) })}
              className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white font-bold flex items-center justify-center border border-slate-700 cursor-pointer"
            >
              +
            </button>
          </div>
          <span className="text-[11px] text-slate-400">Costs scale proportionally for group size</span>
        </div>

        {/* 4. Departure Date */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-amber-400" />
            Departure Date
          </label>
          <input
            type="date"
            value={preferences.departureDate}
            onChange={(e) => onUpdatePreferences({ departureDate: e.target.value })}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
          />
          <span className="text-[11px] text-slate-400">Sample: 20 December 2026</span>
        </div>

        {/* 5. Return Date */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-amber-400" />
            Return Date
          </label>
          <input
            type="date"
            value={preferences.returnDate}
            onChange={(e) => onUpdatePreferences({ returnDate: e.target.value })}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
          />
          <span className="text-[11px] text-slate-400">Sample: 30 December 2026 (11 Days / 10 Nights)</span>
        </div>

        {/* 6. Total Budget (INR) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Wallet className="w-4 h-4 text-emerald-400" />
              Maximum Trip Budget
            </label>
            <span className="text-xs font-bold text-emerald-300">{formatMoney(preferences.totalBudgetINR)}</span>
          </div>
          <input
            type="range"
            min={250000}
            max={1000000}
            step={25000}
            value={preferences.totalBudgetINR}
            onChange={(e) => onUpdatePreferences({ totalBudgetINR: Number(e.target.value) })}
            className="w-full accent-emerald-400 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-500">
            <span>₹2.5 Lakhs (Min)</span>
            <span>₹5,00,000 (Target)</span>
            <span>₹10 Lakhs (Max)</span>
          </div>
        </div>

        {/* 7. Transportation Preference */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Plane className="w-4 h-4 text-sky-400" />
            Transportation Preference
          </label>
          <select
            value={preferences.transportPreference}
            onChange={(e) => onUpdatePreferences({ transportPreference: e.target.value as any })}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none cursor-pointer"
          >
            <option value="flight-local">Flight + Local Bus/Taxis (Recommended & Safe)</option>
            <option value="flight-train">Flight + VR Double-Decker Sleeper Train from Helsinki</option>
            <option value="flight-rental">Flight + Winter Car Rental (Studded Tires)</option>
          </select>
          <span className="text-[11px] text-slate-400">Includes airport transfers & Santa Line 8 bus</span>
        </div>

        {/* 8. Accommodation Preference */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-amber-400" />
            Accommodation Preference
          </label>
          <select
            value={preferences.accommodationPreference}
            onChange={(e) => onUpdatePreferences({ accommodationPreference: e.target.value as any })}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none cursor-pointer"
          >
            <option value="midrange">Mid-Range Hotel (Scandic/Sokos - ₹13,500/night with Sauna)</option>
            <option value="budget">Budget Guesthouse (Rudolf/Borealis - ₹6,500/night)</option>
            <option value="cabin">Traditional Arctic Chalet (Ounasvaaran - ₹18,500/night)</option>
            <option value="glass-igloo">Glass Igloo Experience (Santa's Igloos - ₹42,000/night)</option>
          </select>
          <span className="text-[11px] text-slate-400">All options feature 24/7 heating and private bathrooms</span>
        </div>

        {/* 9. Food Preference */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <UtensilsCrossed className="w-4 h-4 text-orange-400" />
            Food & Dietary Preference
          </label>
          <select
            value={preferences.foodPreference}
            onChange={(e) => onUpdatePreferences({ foodPreference: e.target.value as any })}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none cursor-pointer"
          >
            <option value="vegetarian">Vegetarian (Lappish Soups, Cheese, Indian Dining)</option>
            <option value="non-vegetarian">Non-Vegetarian (Fresh Salmon, Reindeer, Arctic Stews)</option>
            <option value="vegan">Vegan (Oat cream stews, berries, plant-based cafes)</option>
            <option value="indian">Pure Indian Dining (Rang Mahal Rovaniemi)</option>
          </select>
          <span className="text-[11px] text-slate-400">Dietary options verified at local restaurants</span>
        </div>
      </div>

      {/* 10. Travel Interests (Multi-Select Chips) */}
      <div className="space-y-3 pt-2 border-t border-slate-800">
        <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
          <Heart className="w-4 h-4 text-rose-400" />
          Select Your Travel Interests (Click to toggle)
        </label>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((opt) => {
            const isSelected = preferences.travelInterests.includes(opt.id);
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => toggleInterest(opt.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-200 border-cyan-500/50 shadow-sm'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-300'
                }`}
              >
                <span>{opt.icon}</span>
                <span>{opt.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Real-time Calculation Summary Bar */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">Calculated Trip Total:</span>
            <span className={`text-base font-extrabold ${isOverBudget ? 'text-rose-400' : 'text-emerald-400'}`}>
              {formatMoney(totalCostINR)}
            </span>
            <span className="text-xs text-slate-500">|</span>
            <span className="text-xs font-medium text-slate-400">
              Remaining Budget: <strong className={isOverBudget ? 'text-rose-400' : 'text-emerald-300'}>{formatMoney(remainingBudget)}</strong>
            </span>
          </div>
          {isOverBudget ? (
            <p className="text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              Your current itinerary exceeds your budget. Switch to budget hotel or economize activities.
            </p>
          ) : (
            <p className="text-xs text-emerald-400/90 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              Trip is comfortably funded within your ₹5,00,000 budget with a healthy buffer.
            </p>
          )}
        </div>

        <div className="text-xs text-slate-400 self-end sm:self-center font-medium">
          Auto-updated for {preferences.travelers} traveler · 11 days (20–30 Dec 2026)
        </div>
      </div>
    </div>
  );
};
