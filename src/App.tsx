import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  Wallet, 
  Plane, 
  Building2, 
  UtensilsCrossed, 
  Bus, 
  FileText, 
  Snowflake, 
  Moon, 
  ArrowRight, 
  ShieldCheck, 
  Printer, 
  CheckCircle2,
  Bot
} from 'lucide-react';
import { 
  INITIAL_PREFERENCES, 
  TripPreferences, 
  FLIGHT_OPTIONS, 
  ACCOMMODATION_OPTIONS, 
  ACTIVITIES_DATA,
  ELEVEN_DAY_ITINERARY 
} from './data/laplandData';

import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { TripPlannerForm } from './components/TripPlannerForm';
import { FlightPlannerView } from './components/FlightPlannerView';
import { DestinationsView } from './components/DestinationsView';
import { ActivitiesView } from './components/ActivitiesView';
import { DayByDayItineraryView } from './components/DayByDayItineraryView';
import { TransportationView } from './components/TransportationView';
import { AccommodationsView } from './components/AccommodationsView';
import { FoodAndDiningView } from './components/FoodAndDiningView';
import { BudgetCalculatorView } from './components/BudgetCalculatorView';
import { VisaAndDocumentsView } from './components/VisaAndDocumentsView';
import { WeatherAndPackingView } from './components/WeatherAndPackingView';
import { NorthernLightsDashboard } from './components/NorthernLightsDashboard';
import { LaplandMapView } from './components/LaplandMapView';
import { TripSummaryModal } from './components/TripSummaryModal';
import { AiTravelAgentModal } from './components/AiTravelAgentModal';

export default function App() {
  const [preferences, setPreferences] = useState<TripPreferences>(INITIAL_PREFERENCES);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [currency, setCurrency] = useState<'INR' | 'EUR' | 'USD'>('INR');
  
  const [selectedFlightId, setSelectedFlightId] = useState<string>('fl-1');
  const [selectedHotelId, setSelectedHotelId] = useState<string>('acc-midrange');
  const [selectedActivityIds, setSelectedActivityIds] = useState<string[]>([
    'act-aurora-tour',
    'act-husky-safari',
    'act-reindeer-safari',
    'act-snowmobile-safari',
    'act-santa-village',
    'act-santapark',
    'act-arktikum-culture'
  ]);

  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState<boolean>(false);

  // Currency Formatter
  const formatMoney = (inr: number) => {
    if (currency === 'INR') {
      return `₹${inr.toLocaleString('en-IN')}`;
    } else if (currency === 'EUR') {
      const eur = Math.round(inr / 90);
      return `€${eur.toLocaleString('en-US')}`;
    } else {
      const usd = Math.round(inr / 86.5);
      return `$${usd.toLocaleString('en-US')}`;
    }
  };

  // Preference Handlers
  const handleUpdatePreferences = (newPrefs: Partial<TripPreferences>) => {
    setPreferences(prev => {
      const updated = { ...prev, ...newPrefs };
      // Sync accommodation selection if accommodationPreference changed
      if (newPrefs.accommodationPreference) {
        if (newPrefs.accommodationPreference === 'budget') setSelectedHotelId('acc-budget');
        if (newPrefs.accommodationPreference === 'midrange') setSelectedHotelId('acc-midrange');
        if (newPrefs.accommodationPreference === 'cabin') setSelectedHotelId('acc-cabin');
        if (newPrefs.accommodationPreference === 'glass-igloo') setSelectedHotelId('acc-glass-igloo');
      }
      return updated;
    });
  };

  const handleResetPreferences = () => {
    setPreferences(INITIAL_PREFERENCES);
    setSelectedFlightId('fl-1');
    setSelectedHotelId('acc-midrange');
    setSelectedActivityIds([
      'act-aurora-tour',
      'act-husky-safari',
      'act-reindeer-safari',
      'act-snowmobile-safari',
      'act-santa-village',
      'act-santapark',
      'act-arktikum-culture'
    ]);
  };

  const handleToggleActivity = (activityId: string) => {
    if (selectedActivityIds.includes(activityId)) {
      setSelectedActivityIds(selectedActivityIds.filter(id => id !== activityId));
    } else {
      setSelectedActivityIds([...selectedActivityIds, activityId]);
    }
  };

  // Automatic Real-time Financial Calculations
  const calculatedCosts = useMemo(() => {
    const flight = FLIGHT_OPTIONS.find(f => f.id === selectedFlightId) || FLIGHT_OPTIONS[0];
    const hotel = ACCOMMODATION_OPTIONS.find(h => h.id === selectedHotelId) || ACCOMMODATION_OPTIONS[1];

    const flightsCost = flight.estimatedPriceINR * preferences.travelers;
    const accommodationCost = hotel.pricePerNightINR * 10; // 10 nights total

    // Food: ₹3,500/day for 11 days per traveler
    const dailyFoodRate = preferences.foodPreference === 'vegan' ? 3200 : 3500;
    const foodCost = dailyFoodRate * 11 * preferences.travelers;

    // Local transportation: bus tickets, airport taxi & shuttles
    let transportBase = 11500;
    if (preferences.transportPreference === 'flight-rental') transportBase = 48000;
    const localTransportCost = transportBase * preferences.travelers;

    // Activities
    const activitiesCost = selectedActivityIds
      .filter(id => id !== 'act-aurora-tour')
      .reduce((sum, id) => {
        const a = ACTIVITIES_DATA.find(act => act.id === id);
        return sum + (a ? a.estimatedPriceINR * preferences.travelers : 0);
      }, 0);

    // Northern lights
    const auroraItem = ACTIVITIES_DATA.find(a => a.id === 'act-aurora-tour');
    const northernLightsCost = selectedActivityIds.includes('act-aurora-tour') && auroraItem
      ? auroraItem.estimatedPriceINR * preferences.travelers
      : 0;

    // Visa & Insurance
    const visaCost = 10400 * preferences.travelers; // €90 + VFS fee
    const insuranceCost = 3100 * preferences.travelers; // €30,000 Schengen policy

    // Shopping & Emergency Reserve
    const shoppingCost = 20000;
    const emergencyCost = 25000;

    const total = flightsCost +
      visaCost +
      insuranceCost +
      accommodationCost +
      foodCost +
      localTransportCost +
      activitiesCost +
      northernLightsCost +
      shoppingCost +
      emergencyCost;

    const remaining = preferences.totalBudgetINR - total;

    return {
      flights: flightsCost,
      visa: visaCost,
      insurance: insuranceCost,
      accommodation: accommodationCost,
      food: foodCost,
      localTransport: localTransportCost,
      activities: activitiesCost,
      northernLights: northernLightsCost,
      shopping: shoppingCost,
      emergency: emergencyCost,
      total,
      remaining
    };
  }, [preferences, selectedFlightId, selectedHotelId, selectedActivityIds]);

  // 1-Click Budget Optimization Handlers
  const handleApplyCheaperHotel = () => {
    setSelectedHotelId('acc-budget');
    handleUpdatePreferences({ accommodationPreference: 'budget' });
  };

  const handleApplyCheaperFlights = () => {
    setSelectedFlightId('fl-1');
  };

  const handleApplyPublicTransport = () => {
    handleUpdatePreferences({ transportPreference: 'flight-local' });
  };

  const handleOptimizeItinerary = () => {
    setSelectedHotelId('acc-budget');
    setSelectedFlightId('fl-1');
    handleUpdatePreferences({
      accommodationPreference: 'budget',
      transportPreference: 'flight-local'
    });
    // Keep 5 top activities
    setSelectedActivityIds([
      'act-aurora-tour',
      'act-husky-safari',
      'act-reindeer-safari',
      'act-santa-village',
      'act-arktikum-culture'
    ]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Header & Navigation Bar */}
      <HeaderNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        currency={currency}
        onCurrencyChange={setCurrency}
        preferences={preferences}
        totalCostINR={calculatedCosts.total}
        onOpenAiModal={() => setIsAiModalOpen(true)}
        onOpenSummaryModal={() => setIsSummaryModalOpen(true)}
      />

      {/* Main Body Content based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div className="space-y-12">
            <HeroSection
              preferences={preferences}
              onPlanTripClick={() => setActiveTab('plan')}
              onExploreActivitiesClick={() => setActiveTab('activities')}
              onOpenAiModal={() => setIsAiModalOpen(true)}
              formatMoney={formatMoney}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
              <TripPlannerForm
                preferences={preferences}
                onUpdatePreferences={handleUpdatePreferences}
                onResetPreferences={handleResetPreferences}
                formatMoney={formatMoney}
                totalCostINR={calculatedCosts.total}
              />

              <div className="border-t border-slate-800 pt-10">
                <ActivitiesView
                  selectedActivityIds={selectedActivityIds}
                  onToggleActivity={handleToggleActivity}
                  formatMoney={formatMoney}
                  preferences={preferences}
                />
              </div>

              <div className="border-t border-slate-800 pt-10">
                <DayByDayItineraryView
                  formatMoney={formatMoney}
                  preferences={preferences}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'plan' && (
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <TripPlannerForm
              preferences={preferences}
              onUpdatePreferences={handleUpdatePreferences}
              onResetPreferences={handleResetPreferences}
              formatMoney={formatMoney}
              totalCostINR={calculatedCosts.total}
            />
          </div>
        )}

        {activeTab === 'flights' && (
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <FlightPlannerView
              selectedFlightId={selectedFlightId}
              onSelectFlight={setSelectedFlightId}
              formatMoney={formatMoney}
              preferences={preferences}
            />
          </div>
        )}

        {activeTab === 'destinations' && (
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <DestinationsView
              formatMoney={formatMoney}
            />
          </div>
        )}

        {activeTab === 'activities' && (
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <ActivitiesView
              selectedActivityIds={selectedActivityIds}
              onToggleActivity={handleToggleActivity}
              formatMoney={formatMoney}
              preferences={preferences}
            />
          </div>
        )}

        {activeTab === 'hotels' && (
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <AccommodationsView
              selectedHotelId={selectedHotelId}
              onSelectHotel={setSelectedHotelId}
              formatMoney={formatMoney}
              preferences={preferences}
            />
          </div>
        )}

        {activeTab === 'food' && (
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <FoodAndDiningView
              formatMoney={formatMoney}
              preferences={preferences}
              onUpdateDietaryPreference={(diet) => handleUpdatePreferences({ foodPreference: diet })}
            />
          </div>
        )}

        {activeTab === 'budget' && (
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <BudgetCalculatorView
              preferences={preferences}
              costs={calculatedCosts}
              onApplyCheaperHotel={handleApplyCheaperHotel}
              onApplyCheaperFlights={handleApplyCheaperFlights}
              onApplyPublicTransport={handleApplyPublicTransport}
              onOptimizeItinerary={handleOptimizeItinerary}
              formatMoney={formatMoney}
            />
          </div>
        )}

        {activeTab === 'itinerary' && (
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <DayByDayItineraryView
              formatMoney={formatMoney}
              preferences={preferences}
            />
          </div>
        )}

        {activeTab === 'aurora' && (
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <NorthernLightsDashboard
              formatMoney={formatMoney}
              preferences={preferences}
              onOpenAiModal={() => setIsAiModalOpen(true)}
            />
          </div>
        )}

        {activeTab === 'transport' && (
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <TransportationView
              formatMoney={formatMoney}
              preferences={preferences}
            />
          </div>
        )}

        {activeTab === 'weather' && (
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <WeatherAndPackingView />
          </div>
        )}

        {activeTab === 'visa' && (
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <VisaAndDocumentsView
              preferences={preferences}
              formatMoney={formatMoney}
            />
          </div>
        )}

        {activeTab === 'map' && (
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <LaplandMapView />
          </div>
        )}
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          type="button"
          onClick={() => setIsAiModalOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-extrabold text-xs shadow-2xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
        >
          <Bot className="w-4 h-4 text-slate-950" />
          <span>Ask Lapland AI Agent</span>
          <span className="w-2 h-2 rounded-full bg-slate-950 animate-pulse" />
        </button>
      </div>

      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsSummaryModalOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-900/95 hover:bg-slate-800 text-white font-bold text-xs shadow-2xl border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
        >
          <FileText className="w-4 h-4 text-emerald-400" />
          <span>Trip Summary ({formatMoney(calculatedCosts.total)})</span>
        </button>
      </div>

      {/* Modals */}
      <AiTravelAgentModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        preferences={preferences}
        onUpdatePreferences={handleUpdatePreferences}
        formatMoney={formatMoney}
        totalCostINR={calculatedCosts.total}
      />

      <TripSummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
        preferences={preferences}
        costs={calculatedCosts}
        formatMoney={formatMoney}
        onModifyTrip={() => setActiveTab('plan')}
      />

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 px-4 py-8 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Snowflake className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-300 font-semibold">Lapland Arctic Voyager</span>
            <span>· Official 2026 Solo Travel Architecture</span>
          </div>

          <p className="text-center md:text-right text-[11px] text-slate-500">
            Trip: Visakhapatnam (VTZ) → Lapland (RVN) · 20–30 Dec 2026 · Estimated rates verified against Finnish MFA, Rovaniemi Tourism & Finnair guidelines.
          </p>
        </div>
      </footer>
    </div>
  );
}
