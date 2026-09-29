import React from 'react';
import { 
  UtensilsCrossed, 
  Coffee, 
  Sparkles, 
  Check, 
  Heart, 
  Info, 
  MapPin, 
  DollarSign
} from 'lucide-react';
import { FOOD_ITEMS, TripPreferences } from '../data/laplandData';

interface FoodAndDiningViewProps {
  formatMoney: (inr: number) => string;
  preferences: TripPreferences;
  onUpdateDietaryPreference: (diet: 'vegetarian' | 'non-vegetarian' | 'vegan' | 'indian') => void;
}

export const FoodAndDiningView: React.FC<FoodAndDiningViewProps> = ({
  formatMoney,
  preferences,
  onUpdateDietaryPreference
}) => {
  const mealBreakdown = {
    breakfast: 800, // Often included at Scandic/Sokos hotels
    lunch: 1200,    // Soup, bread, and coffee buffet
    dinner: 1800,   // Main course, salad, dessert
    snacks: 500     // Cinnamon bun, warm glögi, hot chocolate
  };

  const dailyTotal = mealBreakdown.breakfast + mealBreakdown.lunch + mealBreakdown.dinner + mealBreakdown.snacks;
  const tripTotal = dailyTotal * 11 * preferences.travelers;

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Section 8</span>
            <span className="text-xs text-slate-500">· Finnish Cuisine & Dietary Planning</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <UtensilsCrossed className="w-6 h-6 text-orange-400" />
            Lapland Food & Dining Guide
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            From creamy wild salmon soup and golden cloudberries to authentic Indian curries in downtown Rovaniemi.
          </p>
        </div>

        {/* Dietary Switcher */}
        <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => onUpdateDietaryPreference('vegetarian')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              preferences.foodPreference === 'vegetarian'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Vegetarian
          </button>
          <button
            type="button"
            onClick={() => onUpdateDietaryPreference('non-vegetarian')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              preferences.foodPreference === 'non-vegetarian'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Non-Veg
          </button>
          <button
            type="button"
            onClick={() => onUpdateDietaryPreference('vegan')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              preferences.foodPreference === 'vegan'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Vegan
          </button>
          <button
            type="button"
            onClick={() => onUpdateDietaryPreference('indian')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              preferences.foodPreference === 'indian'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Indian Food
          </button>
        </div>
      </div>

      {/* Daily Meal Cost Breakdown Cards */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            Estimated Daily Food Budget Breakdown
          </h3>
          <span className="text-xs text-slate-400">
            Daily Budget: <strong className="text-emerald-300 font-bold">{formatMoney(dailyTotal)} / day</strong>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 text-[11px] block">Breakfast</span>
            <strong className="text-white text-base block">{formatMoney(mealBreakdown.breakfast)}</strong>
            <span className="text-[11px] text-slate-500">Often included with hotel booking</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 text-[11px] block">Lunch</span>
            <strong className="text-white text-base block">{formatMoney(mealBreakdown.lunch)}</strong>
            <span className="text-[11px] text-slate-500">Warm soup & rye bread cafe meal</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 text-[11px] block">Dinner</span>
            <strong className="text-white text-base block">{formatMoney(mealBreakdown.dinner)}</strong>
            <span className="text-[11px] text-slate-500">Cozy restaurant or Indian curry</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 text-[11px] block">Snacks & Glögi</span>
            <strong className="text-white text-base block">{formatMoney(mealBreakdown.snacks)}</strong>
            <span className="text-[11px] text-slate-500">Cinnamon bun, hot berry juice</span>
          </div>
        </div>

        <div className="text-xs text-slate-400 bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
          <span>Estimated 11-Day Trip Food Total:</span>
          <strong className="text-emerald-400 text-sm">{formatMoney(tripTotal)}</strong>
        </div>
      </div>

      {/* Featured Delicacies Grid */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <UtensilsCrossed className="w-4 h-4 text-amber-400" />
          Iconic Finnish & Lappish Specialties
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FOOD_ITEMS.map((food, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3 hover:border-slate-700 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-white">{food.name}</h4>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                      {food.category}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 italic font-mono">{food.finnishName}</span>
                </div>

                <div className="text-right">
                  <span className="text-xs font-black text-emerald-400 block">
                    {formatMoney(food.estimatedCostINR)}
                  </span>
                  <span className="text-[10px] text-slate-500">{food.dietary}</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {food.description}
              </p>

              <div className="pt-2 border-t border-slate-800 flex items-center gap-1.5 text-xs text-cyan-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Recommended: {food.recommendedPlace}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
