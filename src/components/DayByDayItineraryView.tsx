import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Sun, 
  Moon, 
  Sunset, 
  Utensils, 
  Bus, 
  Wallet, 
  ChevronRight, 
  ChevronDown, 
  Sparkles,
  Printer
} from 'lucide-react';
import { ELEVEN_DAY_ITINERARY, ItineraryDay, TripPreferences } from '../data/laplandData';

interface DayByDayItineraryViewProps {
  formatMoney: (inr: number) => string;
  preferences: TripPreferences;
}

export const DayByDayItineraryView: React.FC<DayByDayItineraryViewProps> = ({
  formatMoney,
  preferences
}) => {
  const [activeDayIndex, setActiveDayIndex] = useState<number>(0);
  const [expandedDayNumbers, setExpandedDayNumbers] = useState<number[]>([1, 2, 3]);

  const toggleDayExpansion = (dayNum: number) => {
    if (expandedDayNumbers.includes(dayNum)) {
      setExpandedDayNumbers(expandedDayNumbers.filter(d => d !== dayNum));
    } else {
      setExpandedDayNumbers([...expandedDayNumbers, dayNum]);
    }
  };

  const expandAll = () => {
    setExpandedDayNumbers(ELEVEN_DAY_ITINERARY.map(d => d.dayNumber));
  };

  const collapseAll = () => {
    setExpandedDayNumbers([]);
  };

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Section 5</span>
            <span className="text-xs text-slate-500">· Complete 11-Day Realistic Schedule</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Calendar className="w-6 h-6 text-amber-400" />
            11-Day Lapland Itinerary: 20 Dec – 30 Dec 2026
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Balanced Arctic schedule respecting polar night twilight windows, sub-zero transit recovery, and authentic Lappish immersion.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={expandAll}
            className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 cursor-pointer"
          >
            Expand All
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 cursor-pointer"
          >
            Collapse All
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            Print Schedule
          </button>
        </div>
      </div>

      {/* Quick Day Navigator Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 text-xs">
        {ELEVEN_DAY_ITINERARY.map((day, idx) => {
          const isSelected = activeDayIndex === idx;
          return (
            <button
              key={day.dayNumber}
              type="button"
              onClick={() => {
                setActiveDayIndex(idx);
                if (!expandedDayNumbers.includes(day.dayNumber)) {
                  setExpandedDayNumbers([...expandedDayNumbers, day.dayNumber]);
                }
                const el = document.getElementById(`day-${day.dayNumber}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all cursor-pointer font-medium ${
                isSelected
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              Day {day.dayNumber} ({day.date.slice(8, 10)} Dec)
            </button>
          );
        })}
      </div>

      {/* Daily Cards List */}
      <div className="space-y-5">
        {ELEVEN_DAY_ITINERARY.map((day) => {
          const isExpanded = expandedDayNumbers.includes(day.dayNumber);

          return (
            <div
              key={day.dayNumber}
              id={`day-${day.dayNumber}`}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-lg transition-all"
            >
              {/* Day Header Accordion Toggle */}
              <div
                onClick={() => toggleDayExpansion(day.dayNumber)}
                className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-slate-900 transition-colors border-b border-slate-800/80"
              >
                <div className="flex items-start md:items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 via-slate-800 to-indigo-500/20 border border-cyan-500/30 flex flex-col items-center justify-center shrink-0">
                    <span className="text-[10px] uppercase font-bold text-cyan-300">Day</span>
                    <span className="text-lg font-black text-white leading-tight">{day.dayNumber}</span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-amber-400">{day.date}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {day.location}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {day.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 text-xs">
                  <div className="text-left md:text-right">
                    <span className="text-[11px] text-slate-400 block">Est. Daily Budget</span>
                    <strong className="text-emerald-400 text-sm font-bold">
                      {formatMoney(day.estimatedDailyCostINR * preferences.travelers)}
                    </strong>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Day Details Body */}
              {isExpanded && (
                <div className="p-6 space-y-6 bg-slate-950/40">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light italic">
                    "{day.summary}"
                  </p>

                  {/* Morning, Afternoon, Evening Breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Morning */}
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                          <Sun className="w-3.5 h-3.5 text-amber-400" /> Morning
                        </span>
                        <span className="text-[11px] text-slate-400">{day.morning.time}</span>
                      </div>
                      <h4 className="text-xs font-bold text-white">{day.morning.title}</h4>
                      <p className="text-[11px] text-slate-300 leading-relaxed">{day.morning.description}</p>
                      <div className="pt-1 flex flex-wrap gap-1">
                        {day.morning.attractions.map((a, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Afternoon */}
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                          <Sunset className="w-3.5 h-3.5 text-cyan-400" /> Afternoon
                        </span>
                        <span className="text-[11px] text-slate-400">{day.afternoon.time}</span>
                      </div>
                      <h4 className="text-xs font-bold text-white">{day.afternoon.title}</h4>
                      <p className="text-[11px] text-slate-300 leading-relaxed">{day.afternoon.description}</p>
                      <div className="pt-1 flex flex-wrap gap-1">
                        {day.afternoon.attractions.map((a, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Evening */}
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                          <Moon className="w-3.5 h-3.5 text-purple-400" /> Evening
                        </span>
                        <span className="text-[11px] text-slate-400">{day.evening.time}</span>
                      </div>
                      <h4 className="text-xs font-bold text-white">{day.evening.title}</h4>
                      <p className="text-[11px] text-slate-300 leading-relaxed">{day.evening.description}</p>
                      <div className="pt-1 flex flex-wrap gap-1">
                        {day.evening.attractions.map((a, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-purple-300 border border-slate-800">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Day Footer Metadata (Transportation, Dining, Cost) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs">
                    <div className="flex items-start gap-2">
                      <Bus className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-300 block">Transit Method:</strong>
                        <span className="text-slate-400">{day.transportation}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Utensils className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-300 block">Food & Dining Suggestion:</strong>
                        <span className="text-slate-400">{day.foodRecommendation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
