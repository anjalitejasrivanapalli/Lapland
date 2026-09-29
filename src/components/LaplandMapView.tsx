import React, { useState } from 'react';
import { 
  MapPin, 
  Compass, 
  Clock, 
  DollarSign, 
  Info, 
  Sparkles, 
  Plane, 
  Building2, 
  Snowflake,
  X
} from 'lucide-react';
import { DESTINATIONS_LIST } from '../data/laplandData';

interface MapPinItem {
  id: string;
  name: string;
  category: 'airport' | 'santa' | 'hotel' | 'activity' | 'hub';
  x: number; // percentage from left
  y: number; // percentage from top
  description: string;
  distance: string;
  travelTime: string;
  estimatedCost: string;
  icon: string;
}

export const LaplandMapView: React.FC = () => {
  const [selectedPinId, setSelectedPinId] = useState<string>('pin-santa');

  const pins: MapPinItem[] = [
    {
      id: 'pin-rvn-airport',
      name: 'Rovaniemi Airport (RVN)',
      category: 'airport',
      x: 52,
      y: 69,
      description: 'The Official Airport of Santa Claus. Direct arrivals from Helsinki with Santa Express Line 8 bus connections.',
      distance: '8 km from Rovaniemi City Center',
      travelTime: '10–12 minutes',
      estimatedCost: 'Line 8 Bus €4.50 / Taxi €25',
      icon: '✈️'
    },
    {
      id: 'pin-santa',
      name: 'Santa Claus Village & Arctic Circle',
      category: 'santa',
      x: 53,
      y: 71,
      description: 'Cross the 66°33′45.9″ Arctic Circle line, visit Santa Claus Official Office, and post letters from the Main Post Office.',
      distance: '8.5 km from City Center',
      travelTime: '15 minutes by Line 8 Bus',
      estimatedCost: 'Free Village Entry (Photos paid)',
      icon: '🎅'
    },
    {
      id: 'pin-arktikum',
      name: 'Arktikum Science Centre & City Center',
      category: 'hub',
      x: 50,
      y: 73,
      description: '172-meter glass finger pointing north. Prime center for Sámi heritage, northern lights science, and city hotels.',
      distance: '0 km (Central Rovaniemi)',
      travelTime: 'Walkable from downtown hotels',
      estimatedCost: '€18 Museum Entry',
      icon: '🏛️'
    },
    {
      id: 'pin-ounasvaara',
      name: 'Ounasvaara Winter Sports Hill',
      category: 'activity',
      x: 55,
      y: 75,
      description: 'Downhill ski slopes, cross-country tracks, panoramic river valley viewing tower, and aurora viewing.',
      distance: '3.5 km from City Center',
      travelTime: '10 minutes',
      estimatedCost: 'Free observation tower access',
      icon: '🎿'
    },
    {
      id: 'pin-husky',
      name: 'Bearhill Husky Farm (Taiga Forest)',
      category: 'activity',
      x: 46,
      y: 67,
      description: '10 km self-drive husky sledding through snowdrifts with puppy cuddle area and warm Kota fire.',
      distance: '22 km outside Rovaniemi',
      travelTime: '25 minutes via operator shuttle',
      estimatedCost: 'Included in safari booking (~₹14,500)',
      icon: '🐕'
    },
    {
      id: 'pin-snowhotel',
      name: 'Arctic SnowHotel & Glass Igloos',
      category: 'hotel',
      x: 43,
      y: 72,
      description: 'Palace carved of ice and snow on Lake Lehtojärvi with Ice Bar and thermal heated Glass Igloos.',
      distance: '27 km from Rovaniemi',
      travelTime: '30 minutes by shuttle bus',
      estimatedCost: 'Visit pass €20 / Room stay upgrade',
      icon: '🧊'
    },
    {
      id: 'pin-levi',
      name: 'Levi Alpine Resort (Kittilä)',
      category: 'hub',
      x: 42,
      y: 42,
      description: 'Finland’s top downhill ski resort with lively heated village streets and sweeping fell tops.',
      distance: '170 km North of Rovaniemi',
      travelTime: '2h 15m by express coach',
      estimatedCost: 'Bus return ₹2,800',
      icon: '⛷️'
    },
    {
      id: 'pin-inari',
      name: 'Inari & Lake Inari (Deep Arctic)',
      category: 'hub',
      x: 68,
      y: 18,
      description: 'Sacred waters of Lake Inari and Siida National Museum of the Finnish Sámi. Darkest skies in Europe.',
      distance: '325 km North',
      travelTime: '4h 15m by coach',
      estimatedCost: 'Bus return ₹6,000',
      icon: '🌌'
    }
  ];

  const activePin = pins.find(p => p.id === selectedPinId) || pins[1];

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Section 16</span>
            <span className="text-xs text-slate-500">· Geographic Arctic Mapping</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Compass className="w-6 h-6 text-cyan-400" />
            Interactive Map of Finnish Lapland
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Click on any Arctic landmark or hub to view distances, travel times, and realistic transit budgets from Rovaniemi.
          </p>
        </div>

        <div className="text-xs bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
          Showing <strong>{pins.length}</strong> Key Arctic Waypoints
        </div>
      </div>

      {/* Map Canvas & Detail Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Stylized Vector Canvas */}
        <div className="lg:col-span-2 relative rounded-2xl border border-slate-800 bg-[#060a12] overflow-hidden min-h-[440px] shadow-2xl p-4 flex flex-col justify-between">
          {/* Arctic Aurora Glow Effect */}
          <div className="absolute top-0 right-10 -z-0 h-64 w-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 -z-0 h-64 w-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          {/* Map Top Coordinates Label */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>69° N (Inari)</span>
            <span className="text-cyan-400 font-semibold flex items-center gap-1">
              <Snowflake className="w-3.5 h-3.5" /> Finnish Lapland Polar Map
            </span>
            <span>66° N (Rovaniemi)</span>
          </div>

          {/* Stylized Arctic Landscape Contour SVGs */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 100 Q 200 150 400 80 T 800 200" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 100 250 Q 300 320 600 220 T 900 350" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="50%" cy="72%" r="180" fill="none" stroke="#64748b" strokeWidth="0.5" strokeDasharray="2 4" />
            </svg>
          </div>

          {/* Interactive Pins */}
          <div className="relative w-full h-[360px] my-auto">
            {/* Arctic Circle 66.5° Latitude Line */}
            <div className="absolute top-[71%] left-0 right-0 border-t-2 border-dashed border-cyan-400/40 pointer-events-none flex items-center justify-end pr-4">
              <span className="text-[10px] font-mono text-cyan-300 bg-slate-950/80 px-2 py-0.5 rounded border border-cyan-400/30">
                66°33′45.9″ N (Arctic Circle)
              </span>
            </div>

            {pins.map((pin) => {
              const isSelected = pin.id === selectedPinId;
              return (
                <button
                  key={pin.id}
                  type="button"
                  onClick={() => setSelectedPinId(pin.id)}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all z-20 ${
                    isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                  }`}
                >
                  <div
                    className={`flex items-center justify-center rounded-xl p-1.5 shadow-lg border transition-all ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 border-white ring-4 ring-amber-400/30'
                        : 'bg-slate-900 text-white border-slate-700 hover:border-cyan-400'
                    }`}
                  >
                    <span className="text-base">{pin.icon}</span>
                  </div>

                  <span
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded text-[10px] whitespace-nowrap font-bold shadow-md transition-all ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 block'
                        : 'bg-slate-950/90 text-slate-300 border border-slate-800 hidden group-hover:block'
                    }`}
                  >
                    {pin.name.split('(')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Map Footer Legend */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-900 text-[11px] text-slate-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">✈️ Airports</span>
              <span className="flex items-center gap-1">🎅 Santa Village</span>
              <span className="flex items-center gap-1">🐕 Safaris</span>
              <span className="flex items-center gap-1">🏨 Accommodations</span>
            </div>
            <span>Click any icon to inspect details</span>
          </div>
        </div>

        {/* Selected Pin Details Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 flex flex-col justify-between space-y-5 shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-2xl shadow-inner">
                {activePin.icon}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                  {activePin.category}
                </span>
                <h3 className="text-base font-bold text-white">
                  {activePin.name}
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {activePin.description}
            </p>

            {/* Travel Specs */}
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="text-[11px] text-slate-500 block">Distance from Rovaniemi Center:</span>
                <strong className="text-white block">{activePin.distance}</strong>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="text-[11px] text-slate-500 block">Estimated Travel Time:</span>
                <strong className="text-cyan-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {activePin.travelTime}
                </strong>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="text-[11px] text-slate-500 block">Estimated Transit Cost:</span>
                <strong className="text-emerald-400 flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5" /> {activePin.estimatedCost}
                </strong>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-[11px] text-cyan-200">
            📍 Included in standard 11-day itinerary with pre-scheduled public bus/shuttle transfers.
          </div>
        </div>
      </div>
    </div>
  );
};
