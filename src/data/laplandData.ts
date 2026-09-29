export interface TripPreferences {
  startingLocation: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  travelers: number;
  totalBudgetINR: number;
  transportPreference: 'flight-local' | 'flight-train' | 'flight-rental';
  accommodationPreference: 'budget' | 'midrange' | 'cabin' | 'glass-igloo';
  foodPreference: 'vegetarian' | 'non-vegetarian' | 'vegan' | 'indian';
  travelInterests: string[];
}

export interface FlightOption {
  id: string;
  name: string;
  airline: string;
  airlineCode: string;
  departureAirport: string;
  arrivalAirport: string;
  departureTime: string;
  arrivalTime: string;
  stops: number;
  routeStops: string;
  duration: string;
  estimatedPriceINR: number;
  baggage: string;
  tag?: string;
  recommendedFor: string;
}

export interface AccommodationOption {
  id: string;
  name: string;
  type: 'budget' | 'midrange' | 'cabin' | 'glass-igloo';
  location: string;
  city: string;
  pricePerNightINR: number;
  rating: number;
  distanceToAttractions: string;
  facilities: string[];
  description: string;
  isOptionalUpgrade?: boolean;
}

export interface ActivityItem {
  id: string;
  name: string;
  category: 'aurora' | 'husky' | 'reindeer' | 'snow' | 'santa' | 'culture';
  location: string;
  duration: string;
  estimatedPriceINR: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  ageRequirements: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  isIncludedByDefault: boolean;
}

export interface ItineraryDay {
  dayNumber: number;
  date: string;
  location: string;
  title: string;
  summary: string;
  morning: {
    title: string;
    description: string;
    time: string;
    attractions: string[];
  };
  afternoon: {
    title: string;
    description: string;
    time: string;
    attractions: string[];
  };
  evening: {
    title: string;
    description: string;
    time: string;
    attractions: string[];
  };
  transportation: string;
  foodRecommendation: string;
  estimatedActivityCostINR: number;
  estimatedDailyCostINR: number;
}

export interface DestinationHub {
  id: string;
  name: string;
  subtitle: string;
  distanceFromRovaniemi: string;
  travelTime: string;
  highlights: string[];
  suitableFor: string;
  estimatedCostINR: string;
  coordinates: { x: number; y: number }; // percentage on map
}

export const INITIAL_PREFERENCES: TripPreferences = {
  startingLocation: 'Visakhapatnam, India',
  destination: 'Lapland, Finland (Rovaniemi & Arctic Wilderness)',
  departureDate: '2026-12-20',
  returnDate: '2026-12-30',
  travelers: 1,
  totalBudgetINR: 500000,
  transportPreference: 'flight-local',
  accommodationPreference: 'midrange',
  foodPreference: 'vegetarian',
  travelInterests: [
    'Northern Lights',
    'Santa Claus Village',
    'Husky Sledding',
    'Reindeer Safari',
    'Snowmobile Safari',
    'Arctic SnowHotel'
  ]
};

export const FLIGHT_OPTIONS: FlightOption[] = [
  {
    id: 'fl-1',
    name: 'Standard Arctic Route (Best Value)',
    airline: 'Air India + Finnair',
    airlineCode: 'AI / AY',
    departureAirport: 'Visakhapatnam (VTZ)',
    arrivalAirport: 'Rovaniemi Airport (RVN)',
    departureTime: '08:35 (Day 1)',
    arrivalTime: '21:15 (Day 1)',
    stops: 2,
    routeStops: 'VTZ → New Delhi (DEL) → Helsinki (HEL) → RVN',
    duration: '16h 40m',
    estimatedPriceINR: 108000,
    baggage: '23 kg Checked Baggage + 8 kg Cabin Bag',
    tag: 'Recommended',
    recommendedFor: 'Best balance of transit duration, baggage allowance, and price.'
  },
  {
    id: 'fl-2',
    name: 'Fast Arctic Express',
    airline: 'IndiGo + Finnair',
    airlineCode: '6E / AY',
    departureAirport: 'Visakhapatnam (VTZ)',
    arrivalAirport: 'Rovaniemi Airport (RVN)',
    departureTime: '06:15 (Day 1)',
    arrivalTime: '19:40 (Day 1)',
    stops: 2,
    routeStops: 'VTZ → Mumbai (BOM) → Helsinki (HEL) → RVN',
    duration: '17h 25m',
    estimatedPriceINR: 118000,
    baggage: '23 kg Checked Baggage + 8 kg Cabin Bag',
    tag: 'Fastest Arrival',
    recommendedFor: 'Arrives earlier in Rovaniemi allowing gentle evening rest.'
  },
  {
    id: 'fl-3',
    name: 'North Lapland Gateway (Ski & Fells)',
    airline: 'Air India + Finnair',
    airlineCode: 'AI / AY',
    departureAirport: 'Visakhapatnam (VTZ)',
    arrivalAirport: 'Kittilä Airport (KTT)',
    departureTime: '08:35 (Day 1)',
    arrivalTime: '22:10 (Day 1)',
    stops: 2,
    routeStops: 'VTZ → New Delhi (DEL) → Helsinki (HEL) → KTT',
    duration: '17h 35m',
    estimatedPriceINR: 114000,
    baggage: '23 kg Checked Baggage + 8 kg Cabin Bag',
    tag: 'Alternative Hub',
    recommendedFor: 'Best for travelers planning direct access to Levi Ski Resort.'
  },
  {
    id: 'fl-4',
    name: 'Budget Hybrid (Flight + Arctic Night Train)',
    airline: 'IndiGo + Air France / Finnair + VR Train',
    airlineCode: '6E / AF / VR',
    departureAirport: 'Visakhapatnam (VTZ)',
    arrivalAirport: 'Helsinki Central Station to Rovaniemi (VR Night Train)',
    departureTime: '06:30 (Day 1)',
    arrivalTime: '07:20 (+1 Day)',
    stops: 2,
    routeStops: 'VTZ → DEL → HEL (Flight) + VR Double-Decker Sleeper Train',
    duration: '22h 50m',
    estimatedPriceINR: 88000,
    baggage: '20 kg Checked Baggage + 7 kg Cabin Bag',
    tag: 'Budget Saver',
    recommendedFor: 'Saves ₹20,000 on flights and covers 1 night of hotel accommodation.'
  }
];

export const ACCOMMODATION_OPTIONS: AccommodationOption[] = [
  {
    id: 'acc-budget',
    name: "Santa's Hostel Rudolf & Borealis Guesthouse",
    type: 'budget',
    location: 'Koskikatu & Asemieskatu, Rovaniemi Center',
    city: 'Rovaniemi',
    pricePerNightINR: 6500,
    rating: 4.2,
    distanceToAttractions: '600m to Lordi Square, 8km to Santa Claus Village (Line 8 Bus)',
    facilities: ['Fast Free Wi-Fi', 'Private Ensuite Room', 'Shared Guest Kitchen', 'Keyless Digital Check-in', 'Central Heating'],
    description: 'Clean, secure, and highly functional Scandinavian private room. Perfect for budget-conscious travelers who plan to spend days outdoors.'
  },
  {
    id: 'acc-midrange',
    name: 'Scandic Rovaniemi City / Original Sokos Hotel Vaakuna',
    type: 'midrange',
    location: 'Koskikatu 23, Rovaniemi City Center',
    city: 'Rovaniemi',
    pricePerNightINR: 13500,
    rating: 4.6,
    distanceToAttractions: 'Directly on pedestrian boulevard; Santa Express Bus stop outside door; 8km to Santa Village',
    facilities: ['Hot Nordic Buffet Breakfast Included', 'Traditional Finnish Sauna', '24/7 Front Desk', 'Thermal Clothing Drying Cabinet', 'Luggage Storage'],
    description: 'Prime central hotel with warm modern rooms, daily hot breakfast buffet with vegetarian options, and evening relaxation sauna.'
  },
  {
    id: 'acc-cabin',
    name: 'Ounasvaaran Lakituvat Traditional Chalets',
    type: 'cabin',
    location: 'Ounasvaara Hillside, Rovaniemi',
    city: 'Rovaniemi',
    pricePerNightINR: 18500,
    rating: 4.8,
    distanceToAttractions: 'On hillside away from light pollution; 3km from City Center; 10km to Santa Village',
    facilities: ['Private Finnish Sauna', 'Wood-burning Fireplace', 'Full Kitchen', 'Dark Hilltop Aurora Viewing Deck', 'Direct Cross-Country Ski Trails'],
    description: 'Authentic pine-log chalet surrounded by snow-laden pine trees with zero city light pollution for prime aurora viewing straight from your porch.'
  },
  {
    id: 'acc-glass-igloo',
    name: "Santa's Igloos Arctic Circle / Arctic TreeHouse Hotel",
    type: 'glass-igloo',
    location: 'Arctic Circle, Rovaniemi (Next to Santa Village)',
    city: 'Arctic Circle',
    pricePerNightINR: 42000,
    rating: 4.9,
    distanceToAttractions: 'Walking distance to Santa Claus Village; 100m to Arctic Line; 3km to Airport',
    facilities: ['Heated Thermal Glass Roof', 'Motorized Aurora Alarm', 'Luxury Ensuite Shower & Toilet', 'Underfloor Heating', 'Gourmet Breakfast'],
    description: 'Bucket-list heated glass igloo allowing you to sleep under the starlit Arctic sky and watch the Northern Lights dancing directly overhead from your bed.',
    isOptionalUpgrade: true
  }
];

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    id: 'act-aurora-tour',
    name: 'Small-Group Northern Lights Wilderness Hunt & Photography',
    category: 'aurora',
    location: 'Arctic Wilderness outside Rovaniemi (10–50km depending on cloud forecast)',
    duration: '4 hours (20:30 – 00:30)',
    estimatedPriceINR: 11000,
    difficulty: 'Easy',
    ageRequirements: 'All ages',
    description: 'Professional aurora hunter guides you by comfortable heated minivan to the clearest micro-climate skies. Includes DSLR tripod photography, Arctic thermal overalls, campfire sausages, and hot Lappish berry juice.',
    highlights: ['Cloud-tracking satellite navigation', 'High-res Aurora portrait photos included', 'Campfire storytelling in traditional Kota', 'Thermal snow boots & overalls provided'],
    imageUrl: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=800&q=80',
    isIncludedByDefault: true
  },
  {
    id: 'act-husky-safari',
    name: '10 km Siberian Husky Sledding Adventure (Self-Drive)',
    category: 'husky',
    location: 'Bearhill Husky Farm, Rovaniemi Taiga Forest',
    duration: '2.5 hours (Activity time 1h15m on sled)',
    estimatedPriceINR: 14500,
    difficulty: 'Moderate',
    ageRequirements: 'Ages 4+ (Drivers 18+)',
    description: 'Take the reins of your own team of eager Alaskan/Siberian huskies as they dash through enchanted snow-covered forests and across frozen marshes. Learn musher steering commands and spend time cuddling the friendly dogs.',
    highlights: ['Drive your own 6-dog sled team', '10 km scenic wilderness trail', 'Kennel tour & puppy cuddle time', 'Hot tea and cookies by fireplace'],
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    isIncludedByDefault: true
  },
  {
    id: 'act-reindeer-safari',
    name: 'Traditional Sámi Reindeer Farm & Sleigh Ride (3 km)',
    category: 'reindeer',
    location: 'Arctic Circle Reindeer Pastures',
    duration: '2 hours',
    estimatedPriceINR: 9200,
    difficulty: 'Easy',
    ageRequirements: 'All ages',
    description: 'Experience Lapland’s oldest and most serene mode of winter transport. Sit under warm reindeer hides in a traditional wooden sled as gentle reindeer glide silently through snow-laden pine woods. Feed the reindeer lichen by hand and receive an official International Reindeer Driving License.',
    highlights: ['3 km tranquil forest sleigh trail', 'Hand-feeding reindeer with fresh lichen', 'Authentic Sámi herder tales & joik songs', 'Official Reindeer Drivers License card'],
    imageUrl: 'https://images.unsplash.com/photo-1543877087-eb7155015b42?auto=format&fit=crop&w=800&q=80',
    isIncludedByDefault: true
  },
  {
    id: 'act-snowmobile-safari',
    name: 'Arctic Forest Snowmobile Safari & Ice Lake Crossing',
    category: 'snow',
    location: 'Rovaniemi Wilderness Trails',
    duration: '2.5 hours',
    estimatedPriceINR: 12500,
    difficulty: 'Moderate',
    ageRequirements: 'Drivers 18+ with valid car license; passengers 4+',
    description: 'Feel the exhilarating rush of modern snowmobiling through glistening powder snow across winding forest tracks and vast frozen river surfaces. Stop at a scenic wilderness vantage point for hot drinks.',
    highlights: ['Twin-seater or solo snowmobile options', 'Full protective gear: helmet, balaclava, boots & suit', 'Breathtaking viewpoints over frozen river valleys', 'Professional safety instruction'],
    imageUrl: 'https://images.unsplash.com/photo-1516431883659-655d41c09bf9?auto=format&fit=crop&w=800&q=80',
    isIncludedByDefault: true
  },
  {
    id: 'act-santa-village',
    name: 'Santa Claus Village & Arctic Circle Crossing Ceremony',
    category: 'santa',
    location: 'Arctic Circle, 8 km north of Rovaniemi',
    duration: 'Full Day (Self-guided / VIP access)',
    estimatedPriceINR: 3500,
    difficulty: 'Easy',
    ageRequirements: 'All ages',
    description: 'Step across the geographic 66°33′45.9″ Arctic Circle latitude line and receive an official Arctic Circle Crossing Certificate. Meet Santa Claus in his private chamber, send postcards with the unique Arctic Circle Postmark from the Santa Claus Main Post Office, and browse Finnish artisan design stores (Iittala, Marimekko).',
    highlights: ['Free village entry (only photos/certificates paid)', 'Official Arctic Circle Crossing Certificate', 'Unique Santa Claus Main Post Office postmark', 'Meet Santa Claus all year round'],
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    isIncludedByDefault: true
  },
  {
    id: 'act-santapark',
    name: 'SantaPark Home Cavern of the Elves (Christmas Eve Special)',
    category: 'santa',
    location: 'Deep underground cavern, Rovaniemi',
    duration: '3.5 hours',
    estimatedPriceINR: 4200,
    difficulty: 'Easy',
    ageRequirements: 'All ages',
    description: 'An underground wonderland carved into solid bedrock beneath the Arctic Circle. Attend Elf School to earn your Elf diploma, decorate handmade gingerbread cookies in Mrs. Gingerbread’s bakery, ride the Magic Train through winter seasons, and visit the underground Ice Princess Gallery with sculpted ice thrones.',
    highlights: ['Elf School graduation diploma & hat', 'Mrs. Gingerbread bakery workshop', 'Magic Train ride through Arctic seasons', 'Ice Bar & Ice Princess Throne'],
    imageUrl: 'https://images.unsplash.com/photo-1512474932049-78ac69eed10c?auto=format&fit=crop&w=800&q=80',
    isIncludedByDefault: true
  },
  {
    id: 'act-ice-fishing',
    name: 'Lake Ice Fishing & Open-Fire Campfire Grilling',
    category: 'snow',
    location: 'Lake Lehtojärvi, Rovaniemi area',
    duration: '3 hours',
    estimatedPriceINR: 9800,
    difficulty: 'Easy',
    ageRequirements: 'All ages',
    description: 'Experience genuine Arctic solitude. Snowshoe or walk out onto a thick frozen lake, drill your own hole through 50cm of pristine crystal-clear ice with an auger, and drop your jigging line for Arctic char, perch, or pike. Warm up around a lakeside open fire with fresh campfire treats and herbal tea.',
    highlights: ['Hands-on ice drilling with manual auger', 'Catch & prepare fish over open campfire', 'Snowshoe walk across frozen lake expanse', 'Thermal winter suits and boots provided'],
    imageUrl: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=800&q=80',
    isIncludedByDefault: true
  },
  {
    id: 'act-arktikum-culture',
    name: 'Arktikum Science Centre & Regional Museum of Lapland',
    category: 'culture',
    location: 'Pohjoisranta 4, Rovaniemi Center',
    duration: '2.5 hours',
    estimatedPriceINR: 1800,
    difficulty: 'Easy',
    ageRequirements: 'All ages',
    description: 'A world-class architectural marvel featuring a 172-meter glass tunnel pointing true north. Discover Arctic indigenous Sámi culture, the flora and fauna of polar regions, northern lights scientific mechanics, and the history of Rovaniemi during World War II.',
    highlights: ['Stunning 172m glass tunnel exhibition hall', 'Interactive Aurora Northern Lights 3D theater', 'Rich Sámi culture handicrafts and silver jewelry', 'Warm indoor educational experience'],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    isIncludedByDefault: true
  },
  {
    id: 'act-snowhotel-icebar',
    name: 'Arctic SnowHotel & Ice Restaurant Guided Visit',
    category: 'snow',
    location: 'Sinettä, 27 km outside Rovaniemi',
    duration: '3 hours',
    estimatedPriceINR: 6500,
    difficulty: 'Easy',
    ageRequirements: 'All ages',
    description: 'Every winter, artists carve an entire palace from 30 million kilograms of natural ice and snow. Marvel at hand-sculpted snow bedrooms, visit the Ice Chapel, and sip a lingonberry cocktail served in a solid ice glass inside the Ice Bar.',
    highlights: ['Spectacular illuminated ice sculpture suites', 'Drink served in an authentic hand-carved ice glass', 'Opportunity to experience Arctic Snow Sauna', 'Return transfer from Rovaniemi included'],
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    isIncludedByDefault: false
  },
  {
    id: 'act-snowshoe-taiga',
    name: 'Arctic Taiga Snowshoeing Trek & Outdoor Sauna',
    category: 'snow',
    location: 'Ounasvaara Forest Trails',
    duration: '3 hours',
    estimatedPriceINR: 7200,
    difficulty: 'Moderate',
    ageRequirements: 'Ages 8+',
    description: 'Strap on lightweight modern snowshoes and venture deep into silent, powder-covered pine and birch forests where normal boots would sink thigh-deep. End with a relaxing session in a wood-fired sauna and optional snow roll!',
    highlights: ['Walk effortlessly over deep powdery snow', 'Panoramic viewpoints over frozen Kemijoki river', 'Traditional Finnish wood-heated sauna session', 'Hot tea and roasted gingerbread over campfire'],
    imageUrl: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=800&q=80',
    isIncludedByDefault: false
  }
];

export const ELEVEN_DAY_ITINERARY: ItineraryDay[] = [
  {
    dayNumber: 1,
    date: '2026-12-20',
    location: 'Visakhapatnam → Helsinki → Rovaniemi',
    title: 'Arrival in the Arctic Wonderland',
    summary: 'Fly from Visakhapatnam via New Delhi and Helsinki to Rovaniemi. Transfer to your cozy hotel, settle in, and take a gentle evening stroll in festive Rovaniemi town.',
    morning: {
      time: '08:35 - 14:00',
      title: 'Flight Journey from India',
      description: 'Depart Visakhapatnam Airport (VTZ) on your connecting flights to Helsinki Vantaa (HEL). Complete Schengen immigration smoothly.',
      attractions: ['Visakhapatnam Airport', 'New Delhi Transit', 'Helsinki Vantaa Airport']
    },
    afternoon: {
      time: '16:00 - 21:15',
      title: 'Connecting Arctic Flight to Rovaniemi',
      description: 'Board Finnair connection into Lapland. Watch the landscape transform into endless snow-draped pine forests and frozen rivers.',
      attractions: ['Rovaniemi Arctic Airport', 'Arctic Welcome Gate']
    },
    evening: {
      time: '21:30 - 23:00',
      title: 'Hotel Check-in & First Snow Walk',
      description: 'Take Santa Express bus or taxi to your city center hotel. Enjoy a warm vegetarian soup or light supper, step outside to feel the crisp -10°C air, and rest well.',
      attractions: ['Lordi Square Christmas Tree', 'Koskikatu Pedestrian Boulevard']
    },
    transportation: 'International Flights + Rovaniemi Airport Taxi/Line 8 Bus',
    foodRecommendation: 'Warm vegetable soup, Finnish rye bread with cheese, and hot spiced blueberry tea.',
    estimatedActivityCostINR: 0,
    estimatedDailyCostINR: 110500 // Includes flight + 1st night
  },
  {
    dayNumber: 2,
    date: '2026-12-21',
    location: 'Rovaniemi & Arctic Circle',
    title: 'Santa Claus Village & Arctic Circle Crossing',
    summary: 'Cross the official Arctic Circle line, visit Santa’s Official Office, post stamped postcards from the Main Post Office, and embark on your first evening Northern Lights chase.',
    morning: {
      time: '09:30 - 13:00',
      title: 'Crossing the Arctic Circle Line',
      description: 'Ride the Santa Express Bus (Line 8) to Santa Claus Village. Cross the illuminated 66°33′45.9″ latitude line and collect your official certificate.',
      attractions: ['Arctic Circle Crossing Line', 'Santa Claus Office', 'Elf Hat Academy']
    },
    afternoon: {
      time: '13:00 - 17:00',
      title: 'Santa Claus Main Post Office & Village Exploration',
      description: 'Visit the world-famous Main Post Office where millions of children’s letters arrive. Send postcards to family stamped with the exclusive Arctic postmark. Lunch at a cozy cafe.',
      attractions: ['Santa Claus Main Post Office', 'Iittala & Marimekko Design Outlets', 'Snowman World']
    },
    evening: {
      time: '20:30 - 00:30',
      title: 'Northern Lights Wilderness Chase (Night 1)',
      description: 'Join professional aurora photographers in a heated minivan away from city lights. Enjoy campfire berry tea in a traditional wooden Kota while watching the dark skies.',
      attractions: ['Wilderness Aurora Spot', 'Traditional Sámi Kota', 'Campfire Gathering']
    },
    transportation: 'Santa Express Bus (Line 8) + Aurora Tour Minivan',
    foodRecommendation: 'Lunch: Traditional creamy salmon soup (or vegetarian pumpkin soup) at Santa’s Salmon Place / Cafe Linna. Dinner: Indian curry at Rang Mahal Rovaniemi.',
    estimatedActivityCostINR: 14500, // Aurora tour + certificates
    estimatedDailyCostINR: 17500
  },
  {
    dayNumber: 3,
    date: '2026-12-22',
    location: 'Rovaniemi Taiga Wilderness',
    title: 'Siberian Husky Sledding & Arktikum Science Museum',
    summary: 'Drive your own 6-dog Siberian husky sled team through snowy forests, warm up with hot cider, and spend the afternoon discovering Arctic culture at Arktikum.',
    morning: {
      time: '09:00 - 12:30',
      title: '10 km Self-Drive Husky Safari',
      description: 'Arrive at Bearhill Husky Farm. Receive musher driving instructions, step onto the sled runners, and let the excited dogs take you speeding through frosted taiga.',
      attractions: ['Bearhill Husky Kennels', 'Frozen Forest Trail', 'Husky Cuddle Area']
    },
    afternoon: {
      time: '14:00 - 17:00',
      title: 'Arktikum Science Museum & Sámi Culture',
      description: 'Walk through the 172-meter glass finger pointing north. Experience the interactive Northern Lights theater and learn about the indigenous Sámi reindeer herding traditions.',
      attractions: ['Arktikum Glass Tunnel', 'Northern Lights Simulation Theatre', 'Sámi Heritage Hall']
    },
    evening: {
      time: '18:30 - 21:30',
      title: 'Dinner & Riverside Northern Lights Stroll',
      description: 'Dine in downtown Rovaniemi. Afterward, take a leisurely stroll down the path behind Arktikum along the frozen Ounasjoki river, a renowned free spot for spotting the Aurora.',
      attractions: ['Arktikum Garden Shoreline', 'Lumberjack’s Candle Bridge (Jätkänkynttilä)']
    },
    transportation: 'Tour Operator Shuttle + Walking in Rovaniemi Center',
    foodRecommendation: 'Lunch: Hot lingonberry juice, Karelian rice pies (Karjalanpiirakka) with egg butter. Dinner: Gusto Artigiano Italian pasta or Rang Mahal Indian.',
    estimatedActivityCostINR: 16300, // Husky tour (14500) + Arktikum (1800)
    estimatedDailyCostINR: 19500
  },
  {
    dayNumber: 4,
    date: '2026-12-23',
    location: 'Arctic Forest & Reindeer Pastures',
    title: 'Traditional Sámi Reindeer Safari & Storytelling',
    summary: 'Travel through ancient snow-draped pines on a traditional wooden reindeer sleigh, feed the friendly herd, and earn your International Reindeer Driver’s License.',
    morning: {
      time: '10:00 - 13:00',
      title: 'Reindeer Sleigh Ride in Quiet Wilderness',
      description: 'Glide peacefully through pristine snow under warm wool blankets. Listen to the rhythmic crunch of snow and soft bell chimes as reindeer steer your wooden sled.',
      attractions: ['Jaakkola / Arctic Reindeer Pastures', '3 km Sleigh Trail', 'Reindeer Feeding Corral']
    },
    afternoon: {
      time: '13:30 - 16:30',
      title: 'Sámi Shaman Stories & Reindeer License',
      description: 'Gather around a crackling birch fire inside an authentic teepee (Kota). Listen to Sámi folklore, learn about Arctic survival, and receive your personalized driving license.',
      attractions: ['Traditional Kota Teepee', 'Sámi Handicraft Workshop', 'Lichen Feeding Experience']
    },
    evening: {
      time: '19:00 - 22:30',
      title: 'Relaxing Evening & Local Sauna Experience',
      description: 'Return to hotel. Enjoy an authentic Finnish sauna session (heat to 80°C, relax, rinse in cool water) followed by a peaceful evening reading or planning upcoming holiday days.',
      attractions: ['Hotel Finnish Sauna', 'Lordi Square Cafes']
    },
    transportation: 'Reindeer Farm Transfer Shuttle',
    foodRecommendation: 'Lunch: Traditional warm barley bread with melted Finnish cheese and sweet lingonberry jam. Dinner: Nili Restaurant (Lappish delicacies / vegetarian forest mushroom soup).',
    estimatedActivityCostINR: 9200,
    estimatedDailyCostINR: 12500
  },
  {
    dayNumber: 5,
    date: '2026-12-24',
    location: 'Rovaniemi Caverns & Sinettä Lake',
    title: 'Christmas Eve in Lapland: SantaPark & Arctic SnowHotel',
    summary: 'Celebrate an unforgettable Christmas Eve inside SantaPark underground cavern, followed by an evening visit to the illuminated ice sculptures of the Arctic SnowHotel.',
    morning: {
      time: '10:00 - 14:00',
      title: 'SantaPark Underground Home of the Elves',
      description: 'Descend 50 meters into the bedrock cavern. Attend Elf School, receive your diploma, decorate gingerbread in Mrs. Gingerbread’s kitchen, and ride the Magic Train.',
      attractions: ['Elf School Cavern', 'Mrs. Gingerbread Kitchen', 'Magic Train Ride', 'Underground Ice Gallery']
    },
    afternoon: {
      time: '15:00 - 18:30',
      title: 'Arctic SnowHotel Tour & Ice Bar',
      description: 'Visit the world-famous Arctic SnowHotel in Sinettä. Walk through massive rooms carved purely of snow and crystal-clear lake ice, and enjoy a drink from a solid ice glass.',
      attractions: ['Illuminated Snow Suites', 'Ice Bar & Ice Glass Drinks', 'Snow Chapel']
    },
    evening: {
      time: '19:30 - 22:30',
      title: 'Special Christmas Eve Festive Dinner',
      description: 'Join locals for a traditional Finnish Christmas Eve feast featuring roast root vegetables, gingerbread, spiced Glögi (warm spiced berry juice), and sweet rice porridge.',
      attractions: ['Festive Christmas Dining', 'Midnight Aurora Skywatch']
    },
    transportation: 'SantaPark Shuttle + Arctic SnowHotel Bus',
    foodRecommendation: 'Traditional Finnish Christmas Eve Glögi with almonds and raisins, oven-baked root vegetables, and warm cinnamon rice pudding (Riisipuuro).',
    estimatedActivityCostINR: 10700, // SantaPark (4200) + SnowHotel (6500)
    estimatedDailyCostINR: 14500
  },
  {
    dayNumber: 6,
    date: '2026-12-25',
    location: 'Rovaniemi Frozen Taiga',
    title: 'Christmas Day: Snowmobile Safari & Campfire Lunch',
    summary: 'Celebrate Christmas Day on a high-powered snowmobile zooming over frozen rivers and snow-packed forest trails, followed by a warm campfire lunch in the woods.',
    morning: {
      time: '10:00 - 13:30',
      title: 'Taiga Forest Snowmobile Expedition',
      description: 'Suit up in thermal windproof gear and helmet. Guide your snowmobile along scenic ridges and frozen marshes where snow clings half a meter thick to spruce trees.',
      attractions: ['Kemijoki River Crossing', 'Ounasvaara Wilderness Trails', 'Frozen Marshlands']
    },
    afternoon: {
      time: '13:30 - 16:30',
      title: 'Wilderness Campfire Lunch & Hot Glögi',
      description: 'Gather around a roaring outdoor fire in a snow clearing. Roast sausages or halloumi cheese on sticks, sip piping-hot spiced berry juice, and soak in the polar peace.',
      attractions: ['Wilderness Campfire Glade', 'Snow Sculptures & Pine Forest']
    },
    evening: {
      time: '18:00 - 22:00',
      title: 'Cozy Christmas Night & Hot Chocolate by the Fire',
      description: 'Return to Rovaniemi. Savor a slow evening with hot Finnish berry cider, pastries, and a warm fire, followed by a night sky walk across the Lumberjack Candle Bridge.',
      attractions: ['Jätkänkynttilä Bridge Illumination', 'Rovaniemi Christmas Lights']
    },
    transportation: 'Safari Base Transfer Shuttle',
    foodRecommendation: 'Campfire cooked vegetable skewers, grilled cheese, warm pea soup with mustard, and Finnish gingerbread (Piparkakut).',
    estimatedActivityCostINR: 12500, // Snowmobile safari
    estimatedDailyCostINR: 16000
  },
  {
    dayNumber: 7,
    date: '2026-12-26',
    location: 'Ounasvaara Winter Sports Area',
    title: 'Winter Sports & Panoramic Hilltop Views',
    summary: 'Spend Boxing Day experiencing Finnish winter sports on Ounasvaara Hill, featuring downhill skiing or gentle cross-country trails, plus panoramic river valley views.',
    morning: {
      time: '10:00 - 13:30',
      title: 'Skiing & Snow Fun at Ounasvaara Resort',
      description: 'Head to Ounasvaara, just 3 km from the center. Rent modern ski gear or take a beginner lesson on gentle slopes, or glide along peaceful cross-country ski tracks.',
      attractions: ['Ounasvaara Ski Slopes', 'Cross-Country Trails', 'Rental Equipment Lodge']
    },
    afternoon: {
      time: '14:00 - 17:00',
      title: 'Scenic Hilltop Observation Tower Walk',
      description: 'Walk the cleared nature path to the Ounasvaara observation tower. Look out over the vast frozen Kemijoki river and the snow-covered city of Rovaniemi bathed in pastel sunset light.',
      attractions: ['Ounasvaara Observation Tower', 'Sky Hotel Panoramic Cafe']
    },
    evening: {
      time: '18:30 - 21:30',
      title: 'Evening Warmth & Italian/Lappish Dinner',
      description: 'Enjoy dinner at Rosso Rovaniemi or Choco Deli (celebrated for handmade Arctic berry chocolates and artisanal hot chocolate).',
      attractions: ['Choco Deli Artisan Chocolatier', 'Koskikatu Evening Stroll']
    },
    transportation: 'Local City Bus / Short Taxi (10 mins)',
    foodRecommendation: 'Lunch: Hot sandwich and Karelian pastry at Ounasvaara Cafe. Dinner: Wood-fired vegetarian pizza or Finnish mushroom risotto.',
    estimatedActivityCostINR: 4500, // Ski equipment rental & lift pass
    estimatedDailyCostINR: 8000
  },
  {
    dayNumber: 8,
    date: '2026-12-27',
    location: 'Lake Lehtojärvi & Wilderness',
    title: 'Authentic Ice Fishing on a Frozen Arctic Lake',
    summary: 'Step out onto 50cm of solid blue lake ice, drill your own fishing hole with a manual auger, drop a lure into the silent depths, and grill your catch on a campfire.',
    morning: {
      time: '09:30 - 13:30',
      title: 'Lake Ice Drilling & Jigging Adventure',
      description: 'Travel to Lake Lehtojärvi. Strap on snowshoes to walk to the middle of the frozen lake. Use a hand drill to cut through thick crystal ice and wait for Arctic fish in total serenity.',
      attractions: ['Lake Lehtojärvi Ice Plain', 'Manual Ice Auger Drilling', 'Thermal Fishing Tents']
    },
    afternoon: {
      time: '14:00 - 17:00',
      title: 'Lakeside Campfire Cooking & Tea',
      description: 'Gather in a warm lakeside shelter. Warm up with freshly grilled catch or savory vegetable pastries, hot tea, and learn how Finns thrive through the dark polar winter.',
      attractions: ['Lakeside Wilderness Shelter', 'Lappish Tea Ceremony']
    },
    evening: {
      time: '19:00 - 23:00',
      title: 'Aurora Borealis Stargazing Opportunity',
      description: 'Lake Lehtojärvi is far from urban streetlights. Watch for the green aurora ribbons dancing above the open frozen lake before returning to town.',
      attractions: ['Open Lake Aurora Vantage', 'Starry Night Sky']
    },
    transportation: 'Tour Operator Heated Minivan',
    foodRecommendation: 'Campfire prepared meal: Grilled root vegetables, potato flatbread (Perunarieska), and warm cloudberry tea.',
    estimatedActivityCostINR: 9800, // Ice fishing safari
    estimatedDailyCostINR: 13000
  },
  {
    dayNumber: 9,
    date: '2026-12-28',
    location: 'Arctic Circle / Glass Igloo Experience',
    title: 'Deep Snowshoeing & Optional Glass Igloo Stargazing',
    summary: 'Trek through deep untouched powder on lightweight snowshoes through fairy-tale snowy pines, followed by an optional dream night in a heated Glass Igloo.',
    morning: {
      time: '10:00 - 13:30',
      title: 'Snowshoeing in the Silent Taiga',
      description: 'Hike through snowdrifts like an Arctic explorer. Learn to spot Arctic hare tracks, ptarmigans, and enjoy the pure silence of the winter forest.',
      attractions: ['Arctic Circle Nature Reserve', 'Pristine Powder Trails', 'Birdwatching & Animal Tracks']
    },
    afternoon: {
      time: '14:30 - 17:30',
      title: 'Check-in to Glass Igloo / Relax in Luxury',
      description: 'Check in to an optional heated Glass Igloo (or relax in your chalet/hotel). Admire the motorized heated glass dome and automated Aurora notification system.',
      attractions: ['Heated Thermal Glass Dome', 'Snow Sculpture Gardens']
    },
    evening: {
      time: '20:00 - 02:00',
      title: 'Sleeping Beneath the Northern Lights',
      description: 'Lie in bed looking straight up into the starry Arctic night. If the skies are clear and solar wind aligns, watch emerald ribbons of light dance directly overhead.',
      attractions: ['Glass Roof Aurora Watching', 'Polar Night Star Constellations']
    },
    transportation: 'Hotel Transfer / Line 8 Bus',
    foodRecommendation: 'Lunch: Wild mushroom soup and warm sourdough bread. Dinner: Three-course gourmet dinner featuring Arctic cloudberry dessert.',
    estimatedActivityCostINR: 7200, // Snowshoe trek (Glass igloo counted in accommodation)
    estimatedDailyCostINR: 10500
  },
  {
    dayNumber: 10,
    date: '2026-12-29',
    location: 'Rovaniemi City & Culture',
    title: 'Souvenir Shopping & Farewell Lapland Celebration',
    summary: 'Pick up authentic Lappish souvenirs (Kuksa wooden cups, cloudberry jam, Fazer chocolates), visit local design boutiques, and celebrate with a special farewell dinner.',
    morning: {
      time: '10:30 - 13:00',
      title: 'Authentic Lappish Craft & Design Shopping',
      description: 'Explore the shops of Rovaniemi for handcrafted wooden Kuksa drinking cups carved from birch gnarls, warm wool mittens, and Marimekko Scandinavian textiles.',
      attractions: ['Lauri Handicraft Factory Shop', 'Lordi Square Market', 'Fazer Confectionery Boutique']
    },
    afternoon: {
      time: '14:00 - 17:00',
      title: 'Pilke Science Centre & Timber Architecture',
      description: 'Visit Science Centre Pilke next to Arktikum, dedicated to northern forests and sustainable timber design, or enjoy an afternoon coffee with cinnamon buns.',
      attractions: ['Pilke Science Centre', 'Rovaniemi City Library (Alvar Aalto design)']
    },
    evening: {
      time: '18:30 - 22:00',
      title: 'Celebratory Farewell Dinner & Memory Walk',
      description: 'Dine in high style at Restaurant Nili or Monte Rosa. Toast to 10 unforgettable days in the Arctic Circle, pack your thermal luggage, and prepare for departure.',
      attractions: ['Restaurant Nili', 'Farewell Snow Walk along Kemijoki']
    },
    transportation: 'Walking within Rovaniemi Center',
    foodRecommendation: 'Lunch: Korvapuusti (cinnamon rolls) and Nordic drip coffee at Coffee House Rovaniemi. Dinner: Leipäjuusto (squeaky cheese with cloudberries) and saffron pasta.',
    estimatedActivityCostINR: 1200, // Pilke entrance
    estimatedDailyCostINR: 6500
  },
  {
    dayNumber: 11,
    date: '2026-12-30',
    location: 'Rovaniemi → Helsinki → Visakhapatnam',
    title: 'Homeward Journey with Arctic Memories',
    summary: 'Check out from your hotel, take the short shuttle to Rovaniemi Airport, and board your return flights back to Visakhapatnam with a heart full of memories.',
    morning: {
      time: '09:00 - 11:30',
      title: 'Checkout & Transfer to Rovaniemi Airport',
      description: 'Enjoy your final Scandinavian breakfast. Take the airport express shuttle or taxi to Rovaniemi Airport (RVN), just 10 minutes away.',
      attractions: ['Hotel Checkout', 'Rovaniemi Airport Souvenir Boutiques']
    },
    afternoon: {
      time: '13:00 - 18:00',
      title: 'Flight to Helsinki & International Connection',
      description: 'Fly from Rovaniemi to Helsinki Vantaa Airport (HEL). Connect to your international long-haul flight bound for India.',
      attractions: ['Helsinki Vantaa Duty Free', 'Long-haul Flight to Delhi']
    },
    evening: {
      time: '20:00 - Next Morning',
      title: 'Return to Visakhapatnam, India',
      description: 'Overnight flight arriving in Visakhapatnam, carrying unforgettable memories of Santa Claus, huskies, reindeer, and the Northern Lights.',
      attractions: ['Visakhapatnam Airport (VTZ)']
    },
    transportation: 'Airport Transfer + Return Flights RVN → HEL → DEL → VTZ',
    foodRecommendation: 'Airport meal in Helsinki (salmon bagel, fresh fruit, or Indian food options at DEL).',
    estimatedActivityCostINR: 0,
    estimatedDailyCostINR: 2000
  }
];

export const DESTINATIONS_LIST: DestinationHub[] = [
  {
    id: 'dest-rovaniemi',
    name: 'Rovaniemi',
    subtitle: 'The Official Hometown of Santa Claus & Capital of Lapland',
    distanceFromRovaniemi: '0 km (Central Hub)',
    travelTime: 'Starting Location',
    highlights: ['Santa Claus Village & Arctic Circle line', 'SantaPark underground cavern', 'Arktikum Science Centre', 'Ounasvaara ski hills & river views'],
    suitableFor: 'First-time Arctic visitors, solo travelers, Christmas lovers & aurora hunters.',
    estimatedCostINR: 'Included in base stay',
    coordinates: { x: 50, y: 72 }
  },
  {
    id: 'dest-levi',
    name: 'Levi (Kittilä)',
    subtitle: 'Finland’s Premier Ski Resort & Vibrant Alpine Village',
    distanceFromRovaniemi: '170 km North',
    travelTime: '2h 15m by direct express bus (OnniBus / Matkahuolto)',
    highlights: ['43 downhill ski slopes & 230 km cross-country trails', 'Alpine village with heated streets', 'Levi Fell Summit with gondola views', 'Snowmobile tracks across fells'],
    suitableFor: 'Ski and snowboard enthusiasts, active winter adventurers.',
    estimatedCostINR: '₹2,800 bus return',
    coordinates: { x: 42, y: 38 }
  },
  {
    id: 'dest-saariselka',
    name: 'Saariselkä & Kakslauttanen',
    subtitle: 'Vast Fell Wilderness & Pioneer of Glass Igloos',
    distanceFromRovaniemi: '257 km North',
    travelTime: '3h 30m by Arctic express bus',
    highlights: ['Kakslauttanen Arctic Resort glass igloos', 'Urho Kekkonen National Park trails', 'Europe’s longest illuminated toboggan run (1.8 km)', 'High aurora probability on open fells'],
    suitableFor: 'Wilderness solitude, deep snow lovers, luxury glass igloo seekers.',
    estimatedCostINR: '₹4,500 bus return',
    coordinates: { x: 74, y: 30 }
  },
  {
    id: 'dest-inari',
    name: 'Inari & Lake Inari',
    subtitle: 'Heart of Indigenous Sámi Culture & Sacred Arctic Waters',
    distanceFromRovaniemi: '325 km North (Deep Arctic)',
    travelTime: '4h 15m by coach or short regional flight',
    highlights: ['Siida – National Museum of the Finnish Sámi', 'Lake Inari frozen expanse & sacred Ukko Island', 'Purest dark skies with zero light pollution for Auroras', 'Wilderness reindeer herding communities'],
    suitableFor: 'Cultural travelers, indigenous heritage enthusiasts, serious aurora chasers.',
    estimatedCostINR: '₹6,000 bus return',
    coordinates: { x: 70, y: 15 }
  },
  {
    id: 'dest-pyha-luosto',
    name: 'Pyhä-Luosto National Park',
    subtitle: 'Ancient Fells & Europe’s Only Working Amethyst Mine',
    distanceFromRovaniemi: '130 km Northeast',
    travelTime: '1h 45m by ski bus',
    highlights: ['Lampivaara Amethyst Mine (dig your own lucky gem)', 'Ancient 2-billion-year-old fell terrain', 'Isokuru Ravine snowshoeing', 'Atmospheric log-cabin villages'],
    suitableFor: 'Nature lovers, geological curiosity, quiet snowshoeing.',
    estimatedCostINR: '₹2,400 bus return',
    coordinates: { x: 68, y: 55 }
  }
];

export const FOOD_ITEMS = [
  {
    name: 'Lohikeitto',
    finnishName: 'Lohikeitto',
    category: 'Soup / Main',
    description: 'World-famous creamy Finnish salmon soup simmered with potatoes, leeks, butter, and fragrant fresh dill. Served steaming hot with dark rye bread.',
    estimatedCostINR: 1400,
    dietary: 'Non-Vegetarian (Pescatarian)',
    recommendedPlace: "Santa's Salmon Place / Nili Restaurant"
  },
  {
    name: 'Poronkäristys',
    finnishName: 'Poronkäristys',
    category: 'Traditional Meat',
    description: 'Sautéed reindeer thinly shaved, stewed in butter and beer/water, served over creamy mashed potatoes with tart wild lingonberry jam and pickled cucumber.',
    estimatedCostINR: 2200,
    dietary: 'Non-Vegetarian',
    recommendedPlace: 'Restaurant Nili / Monte Rosa'
  },
  {
    name: 'Leipäjuusto with Cloudberries',
    finnishName: 'Leipäjuusto ja Lakkahillo',
    category: 'Dessert / Cheese',
    description: 'Traditional Finnish "squeaky cheese" gently baked until spotted golden, served warm and smothered with sweet golden Arctic cloudberry jam.',
    estimatedCostINR: 900,
    dietary: 'Vegetarian',
    recommendedPlace: 'Cafe Linna / Choco Deli Rovaniemi'
  },
  {
    name: 'Karjalanpiirakka',
    finnishName: 'Karjalanpiirakka',
    category: 'Pastry / Breakfast',
    description: 'Karelian rice pasties featuring a thin, crispy rye crust crimped around a creamy barley or rice porridge filling, topped with egg butter (munavoi).',
    estimatedCostINR: 350,
    dietary: 'Vegetarian',
    recommendedPlace: 'Fazer Bakeries & Supermarkets (K-Citymarket)'
  },
  {
    name: 'Korvapuusti',
    finnishName: 'Korvapuusti',
    category: 'Pastry / Snack',
    description: 'Fragrant Finnish cinnamon buns spiced with crushed cardamom seeds and pearl sugar. Best enjoyed during "Kahvi" (Finnish coffee break).',
    estimatedCostINR: 400,
    dietary: 'Vegetarian',
    recommendedPlace: 'Coffee House Rovaniemi'
  },
  {
    name: 'Mustikkapiirakka',
    finnishName: 'Mustikkapiirakka',
    category: 'Dessert',
    description: 'Rich Arctic wild bilberry tart baked with sour cream custard or rye crust. Sweet, slightly tart, and bursting with antioxidants.',
    estimatedCostINR: 650,
    dietary: 'Vegetarian',
    recommendedPlace: 'Cafe & Bar 21'
  },
  {
    name: 'Arctic Chanterelle & Root Stew',
    finnishName: 'Metsäsienipata',
    category: 'Vegetarian / Vegan',
    description: 'Hearty slow-cooked stew of wild Lappish chanterelles, root vegetables, oat cream, fresh thyme, and roasted baby potatoes.',
    estimatedCostINR: 1300,
    dietary: 'Vegetarian & Vegan',
    recommendedPlace: 'Restaurant Gustav / Cafe & Bar 21'
  },
  {
    name: 'Indian Dining in Rovaniemi (Rang Mahal)',
    finnishName: 'Intialainen Ravintola',
    category: 'Indian Food',
    description: 'Authentic Indian curries (Paneer Butter Masala, Dal Makhani, Chana Masala, Vegetable Biryani, Garlic Naan) located right on Koskikatu in Rovaniemi center.',
    estimatedCostINR: 1600,
    dietary: 'Indian / Vegetarian / Vegan',
    recommendedPlace: 'Rang Mahal Rovaniemi (Koskikatu 24)'
  }
];

export const PACKING_LIST_ITEMS = [
  { id: 'p1', category: 'Base Layer', item: 'Merino Wool Thermal Tops (2-3 pairs, 200+ gsm)', isEssential: true },
  { id: 'p2', category: 'Base Layer', item: 'Merino Wool Thermal Bottoms (2 pairs)', isEssential: true },
  { id: 'p3', category: 'Mid Layer', item: 'Fleece or Heavy Wool Sweater / Cardigan', isEssential: true },
  { id: 'p4', category: 'Mid Layer', item: 'Insulated outdoor pants or fleece-lined trekking trousers', isEssential: true },
  { id: 'p5', category: 'Outer Layer', item: 'Windproof & Waterproof Heavy Down Winter Parka (Rated to -25°C)', isEssential: true },
  { id: 'p6', category: 'Outer Layer', item: 'Waterproof Ski/Snowboard Trousers', isEssential: true },
  { id: 'p7', category: 'Footwear', item: 'Winter boots with thick rubber soles (rated -30°C, 1 size larger for wool socks)', isEssential: true },
  { id: 'p8', category: 'Footwear', item: 'Thick Merino Wool Ski Socks (4-5 pairs)', isEssential: true },
  { id: 'p9', category: 'Accessories', item: 'Windproof Insulated Mittens (warmer than finger gloves)', isEssential: true },
  { id: 'p10', category: 'Accessories', item: 'Thermal touch-screen inner glove liners (for camera operation)', isEssential: true },
  { id: 'p11', category: 'Accessories', item: 'Thermal fleece Balaclava & Wool Beanie', isEssential: true },
  { id: 'p12', category: 'Accessories', item: 'Chemical Hand Warmers & Foot Warmers (10-15 packs)', isEssential: true },
  { id: 'p13', category: 'Electronics', item: '20,000mAh Power Bank (Keep in inside jacket pocket so battery doesn’t freeze)', isEssential: true },
  { id: 'p14', category: 'Electronics', item: 'European Plug Adapter (Type C / Type F standard)', isEssential: true },
  { id: 'p15', category: 'Personal Care', item: 'Heavy Lip Balm with beeswax & intense moisturizing face cream (NO water-based creams)', isEssential: true },
  { id: 'p16', category: 'Personal Care', item: 'UV Sunglasses (snow glare is intense during twilight hours)', isEssential: false }
];
