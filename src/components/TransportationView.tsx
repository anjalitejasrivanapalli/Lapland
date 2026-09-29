import React from 'react';
import { 
  Bus, 
  Train, 
  Car, 
  Plane, 
  Clock, 
  DollarSign, 
  ThumbsUp, 
  ThumbsDown, 
  ShieldCheck, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { TripPreferences } from '../data/laplandData';

interface TransportationViewProps {
  formatMoney: (inr: number) => string;
  preferences: TripPreferences;
}

export const TransportationView: React.FC<TransportationViewProps> = ({
  formatMoney,
  preferences
}) => {
  const localTransportOptions = [
    {
      id: 'santa-bus',
      title: "Santa's Express Bus (Line 8)",
      type: 'Public Transit',
      icon: '🚌',
      estimatedPriceINR: 450,
      priceDetails: '€4.50 per one-way ride (€9.00 return)',
      duration: '15 mins (City Center ⇄ Santa Village / Airport)',
      advantages: [
        'Highly economical and reliable',
        'Direct link from Rovaniemi Railway Station & City Center to Santa Claus Village and Airport',
        'Runs every 30-60 minutes in winter with heated coaches and luggage racks'
      ],
      disadvantages: [
        'Stops running around 18:00–19:00 in the evening',
        'Can get crowded immediately after flights land'
      ],
      recommendation: 'Top choice for daily transport between hotel and Santa Claus Village.'
    },
    {
      id: 'vr-train',
      title: 'VR Double-Decker Arctic Sleeper Train (Santa Claus Express)',
      type: 'Intercity Rail',
      icon: '🚆',
      estimatedPriceINR: 8500,
      priceDetails: '€85 - €130 for private ensuite 2-berth sleeper compartment',
      duration: '11 hours overnight (Helsinki Central ⇄ Rovaniemi)',
      advantages: [
        'Scenic, legendary Scandinavian train experience with private bathroom/shower in upper deck cabins',
        'Saves the cost of one night hotel accommodation',
        'Departs central Helsinki at 23:13, wakes up in snowy Lapland at 07:20'
      ],
      disadvantages: [
        'Takes 11 hours compared to 1h 20m flight',
        'Must book 2–3 months early for Christmas season dates'
      ],
      recommendation: 'Great budget saver if combining Helsinki sightseeing with Lapland.'
    },
    {
      id: 'meneve-taxi',
      title: 'Rovaniemi Licensed Taxis & Menevä App',
      type: 'On-Demand Private Taxi',
      icon: '🚕',
      estimatedPriceINR: 2200,
      priceDetails: '€20 - €28 for typical city to airport or Santa Village hop',
      duration: '10–12 minutes',
      advantages: [
        'Available 24/7 in freezing winter nights and early mornings',
        'Direct door-to-door transfer with heated boot for bags',
        'Can be booked via English smartphone app (Menevä) with fixed upfront pricing'
      ],
      disadvantages: [
        'Higher cost than public bus (€25 vs €4.50)',
        'Surge wait times during peak flight arrival banks'
      ],
      recommendation: 'Best for late-night airport arrivals and northern lights emergencies.'
    },
    {
      id: 'rental-car',
      title: 'Winter Rental Car (Studded Tyres + 4WD)',
      type: 'Self-Drive Rental',
      icon: '🚗',
      estimatedPriceINR: 6500,
      priceDetails: '₹6,500/day (€70/day) including studded winter tires & insurance',
      duration: 'Flexible on-demand travel across Lapland',
      advantages: [
        'Total independence to chase Northern Lights into dark wilderness away from tours',
        'Easy to explore Levi, Saariselkä, or Pyhä on your own schedule',
        'Cars come equipped with engine block heater cables and mandatory studded tires'
      ],
      disadvantages: [
        'Driving in dark sub-zero icy blizzards requires extreme caution for drivers without ice experience',
        'Must remember to plug in engine heater cord overnight when temperatures drop below -15°C',
        'Parking fees in city center'
      ],
      recommendation: 'Only recommended for confident winter drivers; solo travelers usually prefer guided safari shuttles.'
    },
    {
      id: 'safari-shuttle',
      title: 'Tour Operator Safari Shuttles',
      type: 'Activity Shuttle',
      icon: '🚐',
      estimatedPriceINR: 0,
      priceDetails: 'Included free in most booked safaris (Husky, Reindeer, Aurora, Snowmobile)',
      duration: '15–30 minutes pickup before tour',
      advantages: [
        'Zero extra transport cost—safari operators pick you up from central hotel doorsteps',
        'Warm modern minivans with local guide commentary',
        'Eliminates need for personal navigation in frozen rural wilderness'
      ],
      disadvantages: [
        'Fixed timetable matching tour start and end times'
      ],
      recommendation: 'Primary mode of getting to remote husky farms, reindeer pastures, and snowmobile tracks.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Section 6</span>
            <span className="text-xs text-slate-500">· Transit Solutions & Comparison</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Bus className="w-6 h-6 text-sky-400" />
            Lapland Transportation Planner: International & Local
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Compare prices, travel durations, pros, and cons to ensure economical, safe, and stress-free Arctic transit.
          </p>
        </div>
      </div>

      {/* International Transit Summary Banner */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Plane className="w-4 h-4 text-cyan-400" />
          International Transit: Visakhapatnam ⇄ Finland
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="font-bold text-cyan-300 block">Outbound: 20 December 2026</span>
            <p className="text-slate-300">
              VTZ (08:35) → New Delhi (DEL) → Helsinki (HEL) → Rovaniemi (RVN, 21:15).
            </p>
            <span className="text-slate-500 text-[11px] block">
              Total transit: ~16h 40m. Schengen passport control and customs completed at Helsinki Airport.
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="font-bold text-emerald-300 block">Inbound: 30 December 2026</span>
            <p className="text-slate-300">
              Rovaniemi (RVN, 13:40) → Helsinki (HEL) → New Delhi (DEL) → Visakhapatnam (VTZ).
            </p>
            <span className="text-slate-500 text-[11px] block">
              Direct baggage transfer through to India. Duty-free shopping available during Helsinki layover.
            </span>
          </div>
        </div>
      </div>

      {/* Local Transportation Cards Grid */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Bus className="w-4 h-4 text-amber-400" />
          Local Ground Transportation Options in Lapland
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {localTransportOptions.map((opt) => (
            <div
              key={opt.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-4 hover:border-slate-700 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{opt.icon}</span>
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      {opt.title}
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {opt.type}
                      </span>
                    </h4>
                    <span className="text-xs text-slate-400">{opt.priceDetails}</span>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[11px] text-slate-500 block">Duration</span>
                  <span className="text-xs font-bold text-cyan-300 flex items-center sm:justify-end gap-1">
                    <Clock className="w-3.5 h-3.5" /> {opt.duration}
                  </span>
                </div>
              </div>

              {/* Pros & Cons Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="font-semibold text-emerald-400 flex items-center gap-1 text-[11px]">
                    <ThumbsUp className="w-3.5 h-3.5" /> Key Advantages
                  </span>
                  <ul className="space-y-1 text-slate-300">
                    {opt.advantages.map((adv, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400">•</span>
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="font-semibold text-rose-400 flex items-center gap-1 text-[11px]">
                    <ThumbsDown className="w-3.5 h-3.5" /> Considerations & Disadvantages
                  </span>
                  <ul className="space-y-1 text-slate-300">
                    {opt.disadvantages.map((dis, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-400">•</span>
                        <span>{dis}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-xs text-slate-400 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                💡 <strong className="text-amber-300">Travel Agent Recommendation:</strong> {opt.recommendation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
