import React from 'react';
import { 
  Building2, 
  Star, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Coffee, 
  Wifi, 
  Flame, 
  ShieldCheck, 
  Info,
  Calendar
} from 'lucide-react';
import { ACCOMMODATION_OPTIONS, AccommodationOption, TripPreferences } from '../data/laplandData';

interface AccommodationsViewProps {
  selectedHotelId: string;
  onSelectHotel: (hotelId: string) => void;
  formatMoney: (inr: number) => string;
  preferences: TripPreferences;
}

export const AccommodationsView: React.FC<AccommodationsViewProps> = ({
  selectedHotelId,
  onSelectHotel,
  formatMoney,
  preferences
}) => {
  const nights = 10; // 20 Dec to 30 Dec 2026

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Section 7</span>
            <span className="text-xs text-slate-500">· Curated Winter Stays</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Building2 className="w-6 h-6 text-amber-400" />
            Lapland Accommodation Planner: Hotels, Cabins & Glass Igloos
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Selected for central heating, sauna access, solo traveler security, and proximity to Santa Express Bus stops.
          </p>
        </div>

        <div className="text-xs bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 font-medium">
          Duration: <strong>{nights} Nights</strong> (20–30 Dec 2026)
        </div>
      </div>

      {/* Glass Igloo Advisory Note */}
      <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4 flex items-start gap-3 text-xs text-cyan-200">
        <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-cyan-300">Glass Igloo Budget Tip:</strong> Glass igloos in Lapland cost ₹40,000+ per night during Christmas week. In this planner, glass igloos are offered as an <strong>optional upgrade</strong>. Staying at a central hotel (Scandic or Rudolf) for the duration keeps you safely within your ₹5,00,000 budget while saving over ₹2,50,000!
        </p>
      </div>

      {/* Accommodations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACCOMMODATION_OPTIONS.map((hotel) => {
          const isSelected = hotel.id === selectedHotelId;
          const totalCost = hotel.pricePerNightINR * nights;

          return (
            <div
              key={hotel.id}
              onClick={() => onSelectHotel(hotel.id)}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all cursor-pointer relative ${
                isSelected
                  ? 'border-amber-400 bg-slate-900/95 ring-2 ring-amber-500/30 shadow-xl'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900/80'
              }`}
            >
              {hotel.isOptionalUpgrade && (
                <span className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  Optional Luxury Upgrade
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                      {hotel.type.toUpperCase()}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {hotel.rating}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {hotel.name}
                  </h3>

                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    {hotel.location}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {hotel.description}
                </p>

                {/* Distance & Transit */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                  <span className="text-[11px] font-semibold text-slate-400 block">Distance to Attractions:</span>
                  <span className="text-slate-300 block">{hotel.distanceToAttractions}</span>
                </div>

                {/* Facilities Badges */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-400 block">Facilities & Amenities:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {hotel.facilities.map((fac, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Selection Bar */}
              <div className="pt-5 mt-5 border-t border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-slate-400 block">
                    {formatMoney(hotel.pricePerNightINR)} / night
                  </span>
                  <span className="text-xl font-black text-white block">
                    {formatMoney(totalCost)}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Total for {nights} nights
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectHotel(hotel.id);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  {isSelected ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" /> Selected Stay
                    </>
                  ) : (
                    'Select This Hotel'
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
