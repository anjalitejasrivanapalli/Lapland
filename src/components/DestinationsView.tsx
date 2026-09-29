import React, { useState } from 'react';
import { 
  MapPin, 
  Sparkles, 
  Clock, 
  Bus, 
  CheckCircle, 
  Info, 
  Compass, 
  Flame, 
  Snowflake, 
  Star,
  ChevronRight
} from 'lucide-react';
import { DESTINATIONS_LIST, DestinationHub } from '../data/laplandData';

interface DestinationsViewProps {
  onSelectDestinationTab?: (destId: string) => void;
  formatMoney: (inr: number) => string;
}

export const DestinationsView: React.FC<DestinationsViewProps> = ({ formatMoney }) => {
  const [selectedHubId, setSelectedHubId] = useState<string>('dest-rovaniemi');
  const activeHub = DESTINATIONS_LIST.find(d => d.id === selectedHubId) || DESTINATIONS_LIST[0];

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Section 4</span>
            <span className="text-xs text-slate-500">· Tourist Places & Arctic Regions</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <MapPin className="w-6 h-6 text-emerald-400" />
            Lapland Tourist Destinations & Realistic Travel Times
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Compare Finnish Lapland destinations with realistic transit feasibility so your 11-day itinerary is never overscheduled.
          </p>
        </div>

        <div className="text-xs bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
          Base Hub: <strong>Rovaniemi (Arctic Circle)</strong>
        </div>
      </div>

      {/* Rovaniemi Attractions Master Spotlight */}
      <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/30 p-6 space-y-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Primary Trip Base
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-1">
              Rovaniemi: Official Hometown of Santa Claus
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Situated right on the Arctic Circle (66°33′45.9″N), Rovaniemi blends modern urban comfort with immediate access to untouched snowy wilderness.
            </p>
          </div>
          <div className="text-xs text-right text-slate-400">
            <span>Latitude: 66.5039° N</span><br/>
            <span>Time Zone: EET (UTC+2)</span>
          </div>
        </div>

        {/* 7 Key Rovaniemi Sights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">🎅 Santa Claus Village</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">Free Entry</span>
            </div>
            <p className="text-xs text-slate-400">
              Meet Santa Claus in his private chamber every day of the year. Cross the illuminated Arctic Circle line and browse Finnish design houses.
            </p>
            <span className="text-[11px] text-slate-500 block">Distance: 8 km north of city center (Line 8 Bus)</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">📮 Santa Claus Main Post Office</span>
              <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">Must-Visit</span>
            </div>
            <p className="text-xs text-slate-400">
              Where over 20 million letters from 199 countries arrive. Send cards stamped with the unique Arctic Circle special postmark.
            </p>
            <span className="text-[11px] text-slate-500 block">Inside Santa Claus Village</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">🌐 Arctic Circle Line Crossing</span>
              <span className="text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/30">Geographic Landmark</span>
            </div>
            <p className="text-xs text-slate-400">
              The latitude marking the southern boundary of the midnight sun and polar night. Receive an official certificate of Arctic crossing.
            </p>
            <span className="text-[11px] text-slate-500 block">Illuminated blue laser line in village</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">🧝 SantaPark Underground Cavern</span>
              <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">Elf Cavern</span>
            </div>
            <p className="text-xs text-slate-400">
              An enchanting cave 50 meters underground. Attend Elf School, decorate cookies in Mrs. Gingerbread’s bakery, and visit the Ice Princess Gallery.
            </p>
            <span className="text-[11px] text-slate-500 block">2 km from Santa Claus Village</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">🏛️ Arktikum Science & Museum</span>
              <span className="text-[10px] text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/30">Architecture</span>
            </div>
            <p className="text-xs text-slate-400">
              Featuring a 172-meter glass finger pointing north. Discover Sámi culture, northern fauna, and view the Aurora 3D theater.
            </p>
            <span className="text-[11px] text-slate-500 block">10-minute walk from Rovaniemi center</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">🎿 Ounasvaara Winter Resort</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">Fell Sports</span>
            </div>
            <p className="text-xs text-slate-400">
              Downhill slopes, cross-country ski trails, snowshoe tracks, and panoramic viewpoints overlooking the frozen Kemijoki river.
            </p>
            <span className="text-[11px] text-slate-500 block">3 km from Rovaniemi center (10 min taxi)</span>
          </div>
        </div>
      </div>

      {/* Regional Destination Selector Tabs (Levi, Saariselka, Inari, Pyha) */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-amber-400" />
          Other Lapland Destinations: Feasibility & Travel Times
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {DESTINATIONS_LIST.map((dest) => {
            const isSelected = dest.id === selectedHubId;
            return (
              <button
                key={dest.id}
                type="button"
                onClick={() => setSelectedHubId(dest.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-cyan-400 bg-slate-900 ring-2 ring-cyan-500/30'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-white text-sm">{dest.name}</h4>
                  {isSelected && <CheckCircle className="w-4 h-4 text-cyan-400" />}
                </div>
                <span className="text-[11px] text-cyan-300 font-medium block">{dest.distanceFromRovaniemi}</span>
                <span className="text-[11px] text-slate-400 block mt-1">{dest.travelTime}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Hub Deep-Dive Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div>
              <h4 className="text-xl font-bold text-white">{activeHub.name}</h4>
              <p className="text-xs text-slate-400">{activeHub.subtitle}</p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400">Estimated Transit:</span>
              <strong className="text-amber-300">{activeHub.estimatedCostINR}</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-2">
              <span className="font-semibold text-cyan-300 uppercase tracking-wider text-[11px]">
                Top Attractions & Activities
              </span>
              <ul className="space-y-1.5">
                {activeHub.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300">
                    <span className="text-cyan-400 mt-0.5">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <span className="font-semibold text-emerald-300 uppercase tracking-wider text-[11px]">
                Best Suited For
              </span>
              <p className="text-slate-300 leading-relaxed">
                {activeHub.suitableFor}
              </p>

              <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <span className="text-[11px] font-semibold text-slate-400 block">Itinerary Feasibility Advice:</span>
                <p className="text-[11px] text-slate-400 mt-1">
                  {activeHub.id === 'dest-rovaniemi'
                    ? 'Recommended as your primary hotel base. Minimizes luggage transfers in sub-zero winter temperatures.'
                    : `Can be visited as a dedicated 1-day side excursion or 1-night overnight stay without disrupting your main flights from Rovaniemi.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
