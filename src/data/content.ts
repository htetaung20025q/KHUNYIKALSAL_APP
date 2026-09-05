import { ContentArticle, ContentCategory } from '@/types';

export const CONTENT_CATEGORIES: ContentCategory[] = [
  'Emergency Safety',
  'First Response Awareness',
  'Fire Safety',
  'Road Safety',
  'Disaster Preparedness',
];

export const CONTENT_ARTICLES: ContentArticle[] = [
  {
    slug: 'essential-emergency-preparedness-guide',
    title: 'Essential Household Emergency Preparedness Plan',
    category: 'Emergency Safety',
    description:
      'Learn how to prepare an actionable emergency plan for your family, including emergency contact trees, go-bags, and communication protocols.',
    readTime: '4 min read',
    publishedDate: 'January 15, 2026',
    intro:
      'Unexpected emergencies can happen without warning. Having a structured household emergency plan significantly reduces panic, protects loved ones, and ensures quick coordination with emergency responders.',
    keyTakeaways: [
      'Identify two safe exit routes from every room in your home.',
      'Maintain an updated list of local emergency hotlines and family contacts.',
      'Assemble a portable emergency kit with 72 hours of water, dry food, and essential supplies.',
      'Designate an agreed meeting location outside your neighborhood.',
    ],
    safetyNotice:
      'Never re-enter a hazardous building until authorities declare it completely safe. In immediate life-threatening situations, prioritize personal evacuation over retrieving belongings.',
    sections: [
      {
        title: '1. Establishing Family Communication Protocols',
        content:
          'During widespread emergencies, mobile networks can experience congestion. Establish a primary out-of-town contact person that all family members can text. Text messages often transmit successfully even when voice lines are overloaded.',
        steps: [
          'Pre-program emergency numbers in every family phone with ICE (In Case of Emergency) tags.',
          'Save digital copies of important identification documents securely offline.',
          'Teach children how to dial local emergency numbers and state their physical address clearly.',
        ],
      },
      {
        title: '2. Assembling a 72-Hour Emergency Kit (Go-Bag)',
        content:
          'Keep an emergency backpack near your main entrance containing essential survival items. Check expiry dates on stored items every six months.',
        steps: [
          'Bottled drinking water (at least 3 liters per person per day).',
          'Non-perishable energy-dense foods and a manual can opener.',
          'Compact flashlight, spare batteries, and a battery-powered or hand-crank radio.',
          'Basic first-aid kit, personal daily prescriptions, and antiseptic wipes.',
          'Whistle to signal rescue teams, sturdy gloves, and dust masks.',
        ],
      },
      {
        title: '3. Evacuation Routes and Drills',
        content:
          'Draw a simple floor plan of your residence indicating primary and secondary exits. Practice evacuating with all household members twice a year during both daytime and nighttime scenarios.',
      },
    ],
    relatedSlugs: [
      'first-responder-awareness-bystander-safety',
      'earthquake-and-storm-safety-protocols',
      'residential-fire-prevention-and-evacuation',
    ],
  },
  {
    slug: 'first-responder-awareness-bystander-safety',
    title: 'Bystander Awareness: How to Safely Support Responders',
    category: 'First Response Awareness',
    description:
      'Practical guidelines on how members of the public can effectively clear access, report critical details, and stay safe at emergency scenes.',
    readTime: '5 min read',
    publishedDate: 'February 2, 2026',
    intro:
      'When an incident occurs in a public place, early bystander actions can make a decisive difference before trained responders arrive. Knowing how to report clearly and maintain scene safety prevents secondary accidents.',
    keyTakeaways: [
      'Prioritize personal scene safety before approaching or offering assistance.',
      'Communicate the exact location, visible hazards, and estimated number of affected persons.',
      'Keep roadways and building access points clear for arriving emergency vehicles.',
      'Do not move injured individuals unless there is immediate danger of fire or collapse.',
    ],
    safetyNotice:
      'Do not attempt heroic physical rescues in environments with live electrical wires, toxic gas fumes, or structural collapse risk. Avert becoming an additional casualty.',
    sections: [
      {
        title: '1. The 3-S Rule: Stop, Survey, Signal',
        content:
          'Before rushing in, pause and evaluate the surroundings. Look for live electrical wires, fuel leakage, moving traffic, or unstable debris. Once safe, signal for help immediately.',
        steps: [
          'STOP: Take a breath to prevent reactionary shock.',
          'SURVEY: Look 360 degrees for active hazards and access lanes.',
          'SIGNAL: Use Khu Nyi Kal Sal to transmit your exact GPS coordinates or call dispatch.',
        ],
      },
      {
        title: '2. Delivering Effective Incident Reports',
        content:
          'Dispatchers require clear, structured information. Keep your voice steady and answer all questions directly. Do not hang up until told to do so by the operator.',
        steps: [
          'State your exact location: Street names, nearby landmarks, or building numbers.',
          'Describe the nature of the emergency (e.g., vehicle collision, structural fire).',
          'Estimate the count of affected individuals and whether anyone is trapped.',
          'Note any special hazards such as fuel spills or smoke intensity.',
        ],
      },
      {
        title: '3. Scene Management and Crowd Control',
        content:
          'Encourage spectators to step back at least 15 meters. Designate one bystander to flag down emergency sirens at the nearest main intersection so responders locate the scene without delay.',
      },
    ],
    relatedSlugs: [
      'essential-emergency-preparedness-guide',
      'road-accident-immediate-response-steps',
    ],
  },
  {
    slug: 'residential-fire-prevention-and-evacuation',
    title: 'Residential Fire Safety, Prevention & Evacuation',
    category: 'Fire Safety',
    description:
      'Critical fire prevention practices, smoke alarm maintenance, and step-by-step escape protocols during indoor fire emergencies.',
    readTime: '4 min read',
    publishedDate: 'January 28, 2026',
    intro:
      'House fires can spread across rooms in under three minutes. Understanding common fire hazards and memorizing quick evacuation techniques protects lives and minimizes smoke inhalation.',
    keyTakeaways: [
      'Test smoke detectors monthly and replace batteries at least once a year.',
      'Never leave cooking appliances or open flames unattended.',
      'If smoke is present, stay low to the floor where the air is cooler and cleaner.',
      'Feel closed doors with the back of your hand before opening them.',
    ],
    safetyNotice:
      'If a door feels warm to the touch, do not open it. Heavy fire is likely on the other side. Use an alternate escape window or block door gaps with damp cloth and signal from the window.',
    sections: [
      {
        title: '1. Key Residential Fire Hazards',
        content:
          'Most structural home fires originate in kitchens or from overloaded electrical outlets. Implementing simple daily habits dramatically decreases fire risks.',
        steps: [
          'Unplug high-draw electrical heating and charging devices when not in use.',
          'Keep flammable materials such as towels, curtains, and paper away from cooking stoves.',
          'Never run electrical cords beneath rugs or pinch them under heavy furniture.',
        ],
      },
      {
        title: '2. Evacuation When Fire Strikes',
        content:
          'Smoke is the primary cause of fatalities in building fires. Staying low keeps you below toxic carbon monoxide plumes.',
        steps: [
          'Crawl on your hands and knees toward the nearest exit.',
          'Cover your mouth and nose with a damp cloth if readily available.',
          'Close interior doors behind you as you exit to slow fire spread.',
          'Once outdoors, stay out. Never re-enter a burning structure for pets or possessions.',
        ],
      },
    ],
    relatedSlugs: [
      'essential-emergency-preparedness-guide',
      'first-responder-awareness-bystander-safety',
    ],
  },
  {
    slug: 'road-accident-immediate-response-steps',
    title: 'Roadway Accidents: Immediate Scene Safety Guidelines',
    category: 'Road Safety',
    description:
      'What drivers and witnesses should do immediately following a traffic collision to prevent secondary impacts and coordinate emergency response.',
    readTime: '4 min read',
    publishedDate: 'February 10, 2026',
    intro:
      'Secondary collisions on busy roadways pose severe risks to accident victims and responders. Knowing how to secure the perimeter and signal traffic creates a safer environment.',
    keyTakeaways: [
      'Turn on hazard lights immediately and set up warning triangles 50 meters back.',
      'Turn off vehicle ignitions to eliminate spark sources near fuel tanks.',
      'Keep occupants safely behind highway barriers rather than standing in traffic lanes.',
      'Avoid moving non-ambulatory injured passengers unless vehicle fire threatens.',
    ],
    safetyNotice:
      'Never walk backward into live traffic lanes. Wear reflective clothing or use phone flashlights when securing an accident scene at night.',
    sections: [
      {
        title: '1. Securing the Incident Area',
        content:
          'Stop your vehicle safely past the collision site. Put on hazard lights and ensure you do not block arriving ambulances or fire trucks.',
        steps: [
          'Deploy reflective warning triangles 50-100 meters behind the crash site.',
          'Instruct uninjured passengers to move to the road shoulder behind guardrails.',
          'Turn off the ignition keys in all affected vehicles if accessible.',
        ],
      },
      {
        title: '2. Contacting Emergency Services',
        content:
          'Open Khu Nyi Kal Sal to transmit your accurate road coordinates and select "Road Accident" to expedite traffic police and medical dispatch.',
      },
    ],
    relatedSlugs: [
      'first-responder-awareness-bystander-safety',
      'essential-emergency-preparedness-guide',
    ],
  },
  {
    slug: 'earthquake-and-storm-safety-protocols',
    title: 'Severe Weather and Earthquake Response Protocols',
    category: 'Disaster Preparedness',
    description:
      'Comprehensive preparedness steps and immediate actions during earthquakes, severe flooding, and high-velocity windstorms.',
    readTime: '6 min read',
    publishedDate: 'February 18, 2026',
    intro:
      'Natural disasters often disrupt power grids, road access, and clean water supplies. Prepared communities that understand basic shelter and recovery protocols recover much faster.',
    keyTakeaways: [
      'Drop, Cover, and Hold On during active earthquake tremors.',
      'Never attempt to drive or walk through moving floodwater.',
      'Store emergency drinking water before forecasted severe weather events.',
      'Stay away from glass windows and power poles during violent windstorms.',
    ],
    safetyNotice:
      'Just 15 cm of moving floodwater can knock down an adult, and 30 cm can float a passenger vehicle. Never cross flooded roads or bridges.',
    sections: [
      {
        title: '1. Earthquake Actions: Drop, Cover, and Hold On',
        content:
          'When ground shaking begins, drop immediately to avoid being knocked down. Protect your head and torso beneath sturdy furniture.',
        steps: [
          'DROP to your hands and knees.',
          'COVER your head and neck beneath a sturdy desk or table.',
          'HOLD ON to your shelter until all shaking ceases completely.',
          'Be prepared for subsequent aftershocks in the hours following the main event.',
        ],
      },
      {
        title: '2. Flood and Storm Surge Precautions',
        content:
          'Keep drains clear around residential compounds. Move electrical appliances and valued records to elevated floors when flood alerts are issued.',
      },
    ],
    relatedSlugs: [
      'essential-emergency-preparedness-guide',
      'residential-fire-prevention-and-evacuation',
    ],
  },
];
