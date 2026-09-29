import React, { useState } from 'react';
import { 
  Sparkles, 
  Moon, 
  Compass, 
  MapPin, 
  Clock, 
  CloudRain, 
  Sun, 
  AlertCircle, 
  RefreshCw, 
  CheckCircle2, 
  Eye, 
  Info,
  Flame
} from 'lucide-react';
import { TripPreferences } from '../data/laplandData';

interface NorthernLightsDashboardProps {
  formatMoney: (inr: number) => string;
  preferences: TripPreferences;
  onOpenAiModal: () => void;
}

export const NorthernLightsDashboard: React.FC<NorthernLightsDashboardProps> = ({
  formatMoney,
  preferences,
  onOpenAiModal
}) => {
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanResult, setScanResult] = useState<{
    kpIndex: number;
    activityLevel: string;
    cloudCoverPercent: number;
    skyStatus: string;
    viewingProbability: string;
    bestWindow: string;
  }>({
    kpIndex: 3.8,
    activityLevel: 'Active Aurora Storm Potential',
    cloudCoverPercent: 18,
    skyStatus: 'Clear Starlit Skies Over Arctic Taiga',
    viewingProbability: 'High (78% Chance of Green Ribbons)',
    bestWindow: '21:30 – 01:45 EET'
  });

  const handleScanTonight = () => {
    setIsScanning(true);
    setTimeout(() => {
      // Simulate live atmospheric aurora reading
      const randomKp = Number((3.0 + Math.random() * 2.5).toFixed(1));
      const randomCloud = Math.floor(10 + Math.random() * 30);
      setScanResult({
        kpIndex: randomKp,
        activityLevel: randomKp > 4.0 ? 'Geomagnetic Storm (Substorm Waves)' : 'Active Aurora Oval Arc',
        cloudCoverPercent: randomCloud,
        skyStatus: randomCloud < 25 ? 'Scattered Thin Cirrus (Clear Vistas)' : 'Partially Cloudy (Seek Microclimates)',
        viewingProbability: randomCloud < 25 ? 'Very High (85% Probability)' : 'Moderate (Drive to Clear Skies)',
        bestWindow: '22:00 – 02:00 EET'
      });
      setIsScanning(false);
    }, 1200);
  };

  const viewingSpots = [
    {
      name: 'Arktikum Garden Shoreline',
      distance: '600m from Rovaniemi Center',
      access: 'Walking distance (5-10 min stroll)',
      darknessLevel: 'Good (Behind museum berm, shaded from city lights)',
      cost: '100% Free Public Access',
      tip: 'Walk down to the river embankment behind the glass tunnel.'
    },
    {
      name: 'Ounasvaara Hilltop Lookout',
      distance: '3.5 km from City Center',
      access: 'Short taxi or brisk uphill snowshoe hike',
      darknessLevel: 'Very High (Elevated above city light dome)',
      cost: 'Free access / Ski taxi €15',
      tip: 'Observation tower provides a 360° horizon to spot early northern green arcs.'
    },
    {
      name: 'Lake Lehtojärvi & Arctic SnowHotel',
      distance: '27 km Northwest of Rovaniemi',
      access: 'Organized tour minivan or rental car',
      darknessLevel: 'Maximum Wilderness Dark Sky',
      cost: 'Tour package ~₹11,000 with campfire Kota',
      tip: 'Expansive frozen lake with zero obstructions to the northern horizon.'
    },
    {
      name: 'Lake Inari (Deep Arctic North)',
      distance: '325 km North (69°N Latitude)',
      access: 'Overnight excursion to Inari Sámi territory',
      darknessLevel: 'Pristine Arctic Sanctuary',
      cost: 'Included in optional North excursion',
      tip: 'Auroral oval passes directly overhead even during low solar activity.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Section 12</span>
            <span className="text-xs text-slate-500">· Space Weather & Aurora Observatory</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-emerald-400" />
            Northern Lights (Aurora Borealis) Dashboard
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Real-time geomagnetic activity indicators, prime viewing hours, verified dark sky spots, and tour guidance.
          </p>
        </div>

        {/* Find Northern Lights Tonight CTA */}
        <button
          type="button"
          disabled={isScanning}
          onClick={handleScanTonight}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs text-slate-950 bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 hover:from-emerald-300 hover:to-cyan-200 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
          <span>{isScanning ? 'Scanning Arctic Satellite Feeds...' : 'Find Northern Lights Tonight'}</span>
        </button>
      </div>

      {/* Mandatory Scientific Visibility Disclaimer */}
      <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4 flex items-start gap-3 text-xs text-cyan-200">
        <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-cyan-300">Scientific Visibility Guarantee Notice:</strong>
          <p className="leading-relaxed text-cyan-200/90">
            The Northern Lights are an organic natural phenomenon driven by solar particles colliding with Earth’s magnetic field. <strong>Visibility is never 100% guaranteed on any specific night</strong>; it relies on a combination of geomagnetic activity (Kp Index), solar wind speed, clear skies with low cloud cover, and dark surroundings away from artificial streetlights.
          </p>
        </div>
      </div>

      {/* Real-time Aurora Status Console */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/20 p-6 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Live Arctic Sky Status (Simulated Observatory Feed)
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-white mt-1">
              Rovaniemi Atmospheric & Space Weather Readings
            </h3>
          </div>

          <div className="text-xs text-slate-400">
            <span>Optimal Observation Window: </span>
            <strong className="text-white block sm:inline">{scanResult.bestWindow}</strong>
          </div>
        </div>

        {/* 4 Metrics Gauges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {/* Kp Index */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-slate-400 text-[11px] block">Planetary Kp Index</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-emerald-400">{scanResult.kpIndex}</span>
              <span className="text-slate-500 font-mono">/ 9.0</span>
            </div>
            <span className="text-[11px] text-emerald-300 block font-semibold">{scanResult.activityLevel}</span>
          </div>

          {/* Cloud Cover */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-slate-400 text-[11px] block">Local Cloud Cover</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-cyan-400">{scanResult.cloudCoverPercent}%</span>
              <span className="text-slate-500">coverage</span>
            </div>
            <span className="text-[11px] text-cyan-300 block font-semibold">{scanResult.skyStatus}</span>
          </div>

          {/* Viewing Probability */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-slate-400 text-[11px] block">Tonight's Sighting Odds</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-white">{scanResult.viewingProbability.split(' ')[0]}</span>
            </div>
            <span className="text-[11px] text-amber-300 block font-semibold">
              {scanResult.viewingProbability}
            </span>
          </div>

          {/* Magnetic Orientation (Bz) */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-slate-400 text-[11px] block">Interplanetary Magnetic Field (Bz)</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-purple-400">-4.2</span>
              <span className="text-slate-500 font-mono">nT (Southward)</span>
            </div>
            <span className="text-[11px] text-purple-300 block font-semibold">Southward Bz Opens Earth's Shield</span>
          </div>
        </div>
      </div>

      {/* Prime Dark Sky Viewing Locations */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <MapPin className="w-4 h-4 text-emerald-400" />
          Top Northern Lights Viewing Locations Around Lapland
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {viewingSpots.map((spot, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-3 hover:border-slate-700 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-base font-bold text-white">{spot.name}</h4>
                  <span className="text-xs text-cyan-300 flex items-center gap-1 mt-0.5">
                    <Compass className="w-3.5 h-3.5" /> {spot.distance}
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-emerald-300 border border-slate-700">
                  {spot.cost}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div>
                  <span className="text-[11px] text-slate-500 block">Accessibility:</span>
                  <span>{spot.access}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Darkness Quality:</span>
                  <span className="text-emerald-300 font-semibold">{spot.darknessLevel}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">💡 Pro-Tip:</span>
                <span>{spot.tip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
