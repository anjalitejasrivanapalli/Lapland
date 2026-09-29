import React from 'react';
import { 
  Plane, 
  Clock, 
  Luggage, 
  ShieldCheck, 
  Info, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { FLIGHT_OPTIONS, FlightOption, TripPreferences } from '../data/laplandData';

interface FlightPlannerViewProps {
  selectedFlightId: string;
  onSelectFlight: (id: string) => void;
  formatMoney: (inr: number) => string;
  preferences: TripPreferences;
}

export const FlightPlannerView: React.FC<FlightPlannerViewProps> = ({
  selectedFlightId,
  onSelectFlight,
  formatMoney,
  preferences
}) => {
  const selectedFlight = FLIGHT_OPTIONS.find(f => f.id === selectedFlightId) || FLIGHT_OPTIONS[0];

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Section 3</span>
            <span className="text-xs text-slate-500">· International & Domestic Air Routes</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Plane className="w-6 h-6 text-sky-400" />
            Flight Planner: Visakhapatnam to Lapland, Finland
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Suggested practical winter routes from Visakhapatnam (VTZ) to Finnish Lapland airports (RVN / KTT).
          </p>
        </div>

        <div className="text-xs bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 font-medium">
          Departure: <strong>20 Dec 2026</strong> · Return: <strong>30 Dec 2026</strong>
        </div>
      </div>

      {/* Prominent Mandatory Compliance Disclaimer */}
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 flex items-start gap-3 text-xs text-amber-200">
        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-amber-300">
            Mandatory Price Disclosure: <strong>Estimated Price</strong>
          </p>
          <p className="text-amber-200/90 leading-relaxed">
            All airfares displayed below are curated estimates based on historical winter holiday flight tariffs between India and Finland. Real-time availability, seat inventories, and exact seasonal surcharges are confirmed only when tickets are issued by airlines during the autumn 2026 booking window.
          </p>
        </div>
      </div>

      {/* Flight Cards Grid */}
      <div className="grid grid-cols-1 gap-4">
        {FLIGHT_OPTIONS.map((flight) => {
          const isSelected = flight.id === selectedFlightId;
          const totalPrice = flight.estimatedPriceINR * preferences.travelers;

          return (
            <div
              key={flight.id}
              onClick={() => onSelectFlight(flight.id)}
              className={`rounded-2xl border p-5 sm:p-6 transition-all cursor-pointer relative ${
                isSelected
                  ? 'border-cyan-400 bg-slate-900/95 ring-2 ring-cyan-500/30 shadow-xl'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900/80'
              }`}
            >
              {flight.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  {flight.tag}
                </span>
              )}

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Airline & Route Details */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-black text-cyan-400 text-xs">
                      {flight.airlineCode}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        {flight.name}
                        <span className="text-xs text-slate-400 font-normal">({flight.airline})</span>
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        {flight.routeStops}
                      </p>
                    </div>
                  </div>

                  {/* Flight Schedule Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
                    <div>
                      <span className="text-[11px] text-slate-500 block">Departure (India)</span>
                      <strong className="text-white text-sm block">{flight.departureTime}</strong>
                      <span className="text-slate-400">{flight.departureAirport}</span>
                    </div>

                    <div className="flex flex-col justify-center sm:text-center border-y sm:border-y-0 sm:border-x border-slate-800 py-1 sm:py-0">
                      <span className="text-[11px] text-cyan-400 font-medium flex items-center justify-start sm:justify-center gap-1">
                        <Clock className="w-3 h-3" /> {flight.duration}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {flight.stops} Connection Stops
                      </span>
                    </div>

                    <div className="sm:text-right">
                      <span className="text-[11px] text-slate-500 block">Arrival (Lapland)</span>
                      <strong className="text-emerald-300 text-sm block">{flight.arrivalTime}</strong>
                      <span className="text-slate-400">{flight.arrivalAirport}</span>
                    </div>
                  </div>

                  {/* Baggage & Feature Chips */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1 text-slate-300">
                      <Luggage className="w-3.5 h-3.5 text-amber-400" />
                      {flight.baggage}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-300">{flight.recommendedFor}</span>
                  </div>
                </div>

                {/* Price & Selection CTA */}
                <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-6 gap-3">
                  <div className="text-left lg:text-right">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Estimated Price
                    </span>
                    <span className="text-2xl font-extrabold text-white block">
                      {formatMoney(totalPrice)}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Return for {preferences.travelers} {preferences.travelers === 1 ? 'person' : 'people'}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectFlight(flight.id);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" /> Selected Route
                      </>
                    ) : (
                      'Select Route'
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lapland Airport Comparison Guide */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
        <h4 className="text-sm font-bold text-white flex items-center gap-2">
          <Plane className="w-4 h-4 text-cyan-400" />
          Lapland Airport Destinations: Which One to Choose?
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="font-bold text-white text-sm block">Rovaniemi (RVN)</span>
            <span className="text-emerald-400 font-semibold block">Primary Recommendation</span>
            <p className="text-slate-400">
              Only 3km from Santa Claus Village and 8km from Rovaniemi City Center. Lowest taxi fares and direct Santa Express bus Line 8 connection.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="font-bold text-white text-sm block">Kittilä (KTT)</span>
            <span className="text-amber-400 font-semibold block">Ski Resort Hub</span>
            <p className="text-slate-400">
              Ideal for Levi & Ylläs winter sports. Located 170km north of Rovaniemi. Direct ski shuttles meet every arriving flight.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="font-bold text-white text-sm block">Ivalo (IVL)</span>
            <span className="text-sky-400 font-semibold block">Deep Arctic Fells</span>
            <p className="text-slate-400">
              Closest airport to Saariselkä, Kakslauttanen glass igloos, and Lake Inari Sámi heartland. 280km north of Arctic Circle.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="font-bold text-white text-sm block">Kuusamo (KAO)</span>
            <span className="text-purple-400 font-semibold block">Ruka Ski Village</span>
            <p className="text-slate-400">
              Gateway to Ruka ski hills and Oulanka National Park frozen canyon trails. 200km southeast of Rovaniemi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
