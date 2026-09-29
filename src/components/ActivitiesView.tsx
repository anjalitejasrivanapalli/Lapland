import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Check, 
  Plus, 
  Info, 
  X, 
  CheckCircle2, 
  Compass, 
  Heart,
  Calendar
} from 'lucide-react';
import { ACTIVITIES_DATA, ActivityItem, TripPreferences } from '../data/laplandData';

interface ActivitiesViewProps {
  selectedActivityIds: string[];
  onToggleActivity: (activityId: string) => void;
  formatMoney: (inr: number) => string;
  preferences: TripPreferences;
}

export const ActivitiesView: React.FC<ActivitiesViewProps> = ({
  selectedActivityIds,
  onToggleActivity,
  formatMoney,
  preferences
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [activeModalActivity, setActiveModalActivity] = useState<ActivityItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Activities', icon: '✨' },
    { id: 'aurora', label: 'Northern Lights', icon: '🌌' },
    { id: 'husky', label: 'Husky Safaris', icon: '🐕' },
    { id: 'reindeer', label: 'Reindeer Experiences', icon: '🦌' },
    { id: 'snow', label: 'Snow & Ice Activities', icon: '❄️' },
    { id: 'santa', label: 'Santa & Family', icon: '🎅' },
    { id: 'culture', label: 'Culture & Museums', icon: '🏛️' }
  ];

  const filteredActivities = ACTIVITIES_DATA.filter(act => {
    if (filterCategory === 'all') return true;
    return act.category === filterCategory;
  });

  const totalActivitiesCost = selectedActivityIds.reduce((sum, id) => {
    const act = ACTIVITIES_DATA.find(a => a.id === id);
    return sum + (act ? act.estimatedPriceINR * preferences.travelers : 0);
  }, 0);

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Sections 4 & 13</span>
            <span className="text-xs text-slate-500">· Interactive Activity Booking Cards</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            Arctic Activity Cards & Safari Planner
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Click <strong>Add to Itinerary</strong> to customize your schedule and recalculate your trip budget in real time.
          </p>
        </div>

        {/* Selected activities tally */}
        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs">
          <div>
            <span className="text-slate-400 block">Selected: <strong>{selectedActivityIds.length}</strong> items</span>
            <span className="text-emerald-400 font-extrabold text-sm">{formatMoney(totalActivitiesCost)}</span>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-xs">
        {categories.map((c) => {
          const isSelected = filterCategory === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setFilterCategory(c.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              <span>{c.icon}</span>
              <span>{c.label}</span>
            </button>
          );
        })}
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map((activity) => {
          const isIncluded = selectedActivityIds.includes(activity.id);
          const price = activity.estimatedPriceINR * preferences.travelers;

          return (
            <div
              key={activity.id}
              className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all ${
                isIncluded
                  ? 'border-cyan-500/50 bg-slate-900/90 shadow-lg ring-1 ring-cyan-500/30'
                  : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={activity.imageUrl}
                  alt={activity.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm">
                  {activity.category}
                </span>

                <span className="absolute bottom-3 right-3 text-xs font-black px-2.5 py-1 rounded-lg bg-slate-950/90 text-white border border-slate-800 backdrop-blur-sm">
                  {formatMoney(price)}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white line-clamp-2">
                    {activity.name}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" /> {activity.duration}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" /> {activity.location.split(',')[0]}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalActivity(activity)}
                    className="text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors cursor-pointer"
                  >
                    View Details
                  </button>

                  <button
                    type="button"
                    onClick={() => onToggleActivity(activity.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isIncluded
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30'
                        : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                    }`}
                  >
                    {isIncluded ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Added (Remove)
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" /> Add to Itinerary
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Modal */}
      {activeModalActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-5 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveModalActivity(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                {activeModalActivity.category} Experience
              </span>
              <h3 className="text-xl font-bold text-white">
                {activeModalActivity.name}
              </h3>
              <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                <span>📍 {activeModalActivity.location}</span>
                <span>⏱️ {activeModalActivity.duration}</span>
                <span>🎯 Difficulty: {activeModalActivity.difficulty}</span>
                <span>👥 {activeModalActivity.ageRequirements}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeModalActivity.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Experience Highlights & Inclusions
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activeModalActivity.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <div>
                <span className="text-[11px] text-slate-400 block">Estimated Price</span>
                <span className="text-xl font-black text-white">
                  {formatMoney(activeModalActivity.estimatedPriceINR * preferences.travelers)}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalActivity(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onToggleActivity(activeModalActivity.id);
                    setActiveModalActivity(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                    selectedActivityIds.includes(activeModalActivity.id)
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold'
                  }`}
                >
                  {selectedActivityIds.includes(activeModalActivity.id)
                    ? 'Remove from Itinerary'
                    : 'Add to Itinerary'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
