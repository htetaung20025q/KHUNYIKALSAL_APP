import { FAQItem, SupportArticle } from '@/types';

export const SUPPORT_ARTICLES: SupportArticle[] = [
  // Getting Started
  {
    id: 'install-the-app',
    title: 'Install the App',
    category: 'Getting Started',
    summary:
      'How to download and install Khu Nyi Kal Sal on supported Android and iOS devices.',
    steps: [
      'Visit the official Get App page on our website or search "Khu Nyi Kal Sal" on your app marketplace.',
      'Tap "Download" or "Install" and allow the package to download completely.',
      'Open the application and proceed past the initial security welcome screen.',
      'Check that your device OS is updated to at least Android 8.0 or iOS 14.0.',
    ],
    tips: 'Always install directly from official verified sources to ensure security integrity.',
    tags: ['install', 'download', 'setup', 'apk', 'ios', 'android'],
  },
  {
    id: 'create-an-account',
    title: 'Create an Account',
    category: 'Getting Started',
    summary:
      'Step-by-step account registration with phone verification and emergency contact binding.',
    steps: [
      'Launch Khu Nyi Kal Sal and tap "Register Account".',
      'Enter your active mobile phone number to receive a 6-digit OTP verification code.',
      'Input your legal name and primary residential township/city.',
      'Add at least two trusted emergency contacts (family members, workplace, or neighbors).',
      'Optionally fill in vital medical details (blood type, known drug allergies) which are encrypted on-device.',
    ],
    tips: 'Adding trusted contacts ensures family members receive immediate automated SMS alerts when you trigger SOS.',
    tags: ['account', 'register', 'signup', 'phone', 'profile', 'otp'],
  },
  {
    id: 'first-time-setup',
    title: 'First-Time Setup',
    category: 'Getting Started',
    summary:
      'Ensure background location permissions, battery optimization exemptions, and notification privileges are active.',
    steps: [
      'Grant "Allow all the time" or "While using app" location permission for accurate GPS dispatch.',
      'Enable High-Priority Notifications so alerts break through Do Not Disturb modes during emergencies.',
      'Disable aggressive battery saver restrictions for Khu Nyi Kal Sal in your phone settings.',
      'Perform a simulated "Safe Test Mode" ping inside Settings to confirm connectivity.',
    ],
    tips: 'Lock the app in your recent tasks tray if your phone manufacturer uses aggressive background process termination.',
    tags: ['setup', 'permissions', 'battery', 'notifications', 'first-time'],
  },

  // SOS Help
  {
    id: 'how-to-send-an-sos',
    title: 'How to Send an SOS',
    category: 'SOS Help',
    summary:
      'How to trigger an active emergency distress signal quickly from the app.',
    steps: [
      'Open the Khu Nyi Kal Sal app. The large red SOS button is centered on the home screen.',
      'Press and hold the red SOS button firmly for 3 seconds.',
      'A 3-second haptic vibration countdown will confirm the intent before broadcasting.',
      'Select the emergency category (Medical, Fire, Road Accident, Disaster) or leave default for General Emergency.',
      'Keep your screen on while the app broadcasts coordinates to nearby emergency responders and trusted contacts.',
    ],
    tips: 'If your hands are occupied, you can also trigger SOS using the pre-configured triple-press power button shortcut.',
    tags: ['sos', 'trigger', 'send', 'emergency', 'help', 'button'],
  },
  {
    id: 'how-sos-works',
    title: 'How SOS Works',
    category: 'SOS Help',
    summary:
      'Learn what happens under the hood once an SOS alert is broadcast.',
    steps: [
      'Step 1: Your phone samples GPS, cellular tower signals, and Wi-Fi beacons to lock high-precision coordinates.',
      'Step 2: Coordinates, timestamp, and your emergency health card are encrypted and transmitted to the regional emergency dispatch queue.',
      'Step 3: Instant SMS and push alerts with direct live map links are sent to your designated emergency contacts.',
      'Step 4: Nearby verified emergency volunteer units and municipal rescue personnel receive the incident radius notification.',
    ],
    tips: 'If mobile data is unavailable, Khu Nyi Kal Sal falls back to encrypted SMS gateway dispatch automatically.',
    tags: ['how it works', 'sos', 'process', 'sms', 'network', 'dispatch'],
  },
  {
    id: 'how-to-cancel-an-sos',
    title: 'How to Cancel an SOS',
    category: 'SOS Help',
    summary:
      'Accidentally pressed SOS? How to safely disarm the alert with your secure PIN.',
    steps: [
      'During the 3-second initial countdown, simply lift your finger or tap "Cancel" immediately.',
      'If the alert was already transmitted, tap the "Cancel Emergency" banner on the active screen.',
      'Enter your 4-digit security PIN to prevent unauthorized disarming.',
      'Select the reason (False Alarm / Resolved / Safe) to update responders and notify family members that you are safe.',
    ],
    tips: 'Never feel ashamed to cancel a false alarm. Responders appreciate prompt false-alarm notifications so units can redirect.',
    tags: ['cancel', 'false alarm', 'pin', 'disarm', 'stop sos'],
  },
  {
    id: 'sos-status',
    title: 'Understanding SOS Status Indicators',
    category: 'SOS Help',
    summary:
      'Understanding the live status banner on your active emergency screen.',
    steps: [
      '🟡 Transmitting: Attempting to connect to nearest dispatch towers.',
      '🟢 Acknowledged: Emergency center or responder unit has received and accepted your incident ticket.',
      '🔵 En Route: Assigned rescue vehicle or responder is currently navigating to your location.',
      '⚪ Resolved: Emergency has concluded and status is archived.',
    ],
    tips: 'Stay on the live tracking screen so arriving personnel can see real-time distance and battery status.',
    tags: ['status', 'tracking', 'indicators', 'en route', 'live map'],
  },

  // Location & Emergency
  {
    id: 'location-permission',
    title: 'Location Permission Guide',
    category: 'Location & Emergency',
    summary:
      'Why precise location permission is vital and how to configure it on Android and iOS.',
    steps: [
      'Open your smartphone Settings > Applications > Khu Nyi Kal Sal > Permissions.',
      'Tap "Location" and select "Allow all the time" or "Allow only while using the app".',
      'Toggle ON "Use Precise Location" for accurate GPS coordinates within 5 meters.',
      'Ensure "Google Location Accuracy" (Android) or "Precise Location" (iOS) is enabled in system settings.',
    ],
    tips: 'Without precise location, responders may only be able to approximate your neighborhood rather than your specific building.',
    tags: ['location', 'gps', 'permission', 'accuracy', 'privacy'],
  },
  {
    id: 'location-sharing',
    title: 'Location Sharing & Privacy Controls',
    category: 'Location & Emergency',
    summary:
      'How your location is safeguarded and who can view your position during emergencies.',
    steps: [
      'Khu Nyi Kal Sal does NOT continuously track your routine movements in the background.',
      'Location data is ONLY transmitted when an SOS is actively initiated by the user.',
      'Live location links expire automatically after 2 hours or when the incident is marked "Resolved".',
      'Emergency contacts receive a temporary encrypted web link with no account required to view your position.',
    ],
    tips: 'You can terminate location sharing at any instant by canceling the SOS ticket with your PIN.',
    tags: ['privacy', 'tracking', 'security', 'sharing', 'encryption'],
  },
  {
    id: 'emergency-response',
    title: 'Emergency Response Coordination',
    category: 'Location & Emergency',
    summary:
      'How local medical units, fire brigades, and traffic police collaborate on incoming alerts.',
    steps: [
      'Alerts are triaged based on category (Medical, Fire, Accident, Disaster).',
      'The nearest certified ambulance or response vehicle is notified via the responder dashboard.',
      'Responders receive route navigation, caller contact details, and vital medical notes (e.g., blood group).',
      'You will see the responder unit callsign and estimated arrival time once dispatched.',
    ],
    tips: 'Keep your phone line free after triggering SOS so dispatchers can call to confirm scene hazards.',
    tags: ['responders', 'ambulance', 'fire', 'police', 'triage', 'coordination'],
  },

  // Troubleshooting
  {
    id: 'sos-not-working',
    title: 'SOS Not Working',
    category: 'Troubleshooting',
    summary:
      'Resolve issues where the SOS button fails to trigger or display countdown.',
    steps: [
      'Verify that you are holding the button continuously for at least 3 full seconds.',
      'Check whether the screen protector or wet fingers are interfering with multi-touch gestures.',
      'Force close the app, clear app cache in phone settings, and relaunch.',
      'Verify that Airplane Mode is turned off and your SIM card has active cellular signal.',
      'Re-install the application if the problem persists or update to the latest release.',
    ],
    tips: 'If app fails completely, immediately dial 199 / 192 directly on your phone dialer.',
    tags: ['sos not working', 'fail', 'button stuck', 'freeze', 'crash'],
  },
  {
    id: 'location-not-working',
    title: 'Location Not Working or Inaccurate',
    category: 'Troubleshooting',
    summary:
      'Troubleshoot "Unable to fetch location" warnings or inaccurate map markers.',
    steps: [
      'Ensure GPS / Location toggle is enabled in your device Quick Settings pulldown.',
      'Step near an open window or step outside: tall concrete structures and metal roofs can block GPS satellites.',
      'Turn on Wi-Fi and Bluetooth scanning in phone settings to enhance indoor positioning.',
      'Go to Phone Settings > Apps > Khu Nyi Kal Sal > Permissions > Location > Turn ON "Precise Location".',
    ],
    tips: 'Restarting your phone frequently resolves stuck GPS hardware chipsets.',
    tags: ['location not working', 'gps error', 'inaccurate', 'map', 'coordinates'],
  },
  {
    id: 'notification-problems',
    title: 'Notification Problems & Missing Alerts',
    category: 'Troubleshooting',
    summary:
      'Fix issues where alerts, verification OTPs, or responder updates do not chime.',
    steps: [
      'Check phone Do Not Disturb (DND) settings and add Khu Nyi Kal Sal to the "Exceptions / Priority" whitelist.',
      'Check Battery Saver mode: make sure Khu Nyi Kal Sal is configured as "Unrestricted" or "Don\'t Optimize".',
      'On Xiaomi/Oppo/Vivo/Huawei phones, enable "Auto-start" permission and lock the app in RAM.',
      'Check that SMS inbox storage is not full if you are waiting for an OTP verification code.',
    ],
    tips: 'Third-party task killer apps frequently terminate emergency alert background listeners.',
    tags: ['notifications', 'alerts', 'dnd', 'sound', 'push', 'background'],
  },
  {
    id: 'app-not-working',
    title: 'App Not Working, Freezing, or Crashing',
    category: 'Troubleshooting',
    summary:
      'Common fixes for startup crashes, blank white screens, or frozen interfaces.',
    steps: [
      'Restart your phone to clear stale OS memory leaks.',
      'Check available device storage: Khu Nyi Kal Sal requires at least 150 MB of free storage.',
      'Clear app cache: Phone Settings > Apps > Khu Nyi Kal Sal > Storage > Clear Cache.',
      'Ensure your Google Play Services or iOS runtime is up to date.',
    ],
    tips: 'Do not use "Clear Data" unless you have your emergency contact information saved elsewhere.',
    tags: ['crash', 'freeze', 'blank screen', 'not opening', 'bug'],
  },
  {
    id: 'login-problems',
    title: 'Login & Verification Problems',
    category: 'Troubleshooting',
    summary:
      'Resolve OTP delivery delays, expired codes, or phone number mismatch issues.',
    steps: [
      'Verify your phone number format (include the appropriate country code without extra leading zeros).',
      'Wait up to 60 seconds before tapping "Resend OTP" to prevent duplicate code invalidation.',
      'Check if spam-blocking apps (e.g. Truecaller) have quarantined the SMS verification message.',
      'Contact support if your phone number changed and you need to migrate your saved emergency profile.',
    ],
    tips: 'Ensure your phone has sufficient cellular reception bars to receive inbound SMS.',
    tags: ['login', 'otp', 'verification', 'sms', 'phone number', 'account'],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is Khu Nyi Kal Sal free to download and use?',
    answer:
      'Yes. Khu Nyi Kal Sal is completely free for all citizens. There are no subscription fees, in-app purchases, or advertisement barriers. Our sole objective is public safety and rapid emergency connectivity.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'Does the app work when there is no internet connection?',
    answer:
      'Yes. If mobile data or Wi-Fi is unavailable, Khu Nyi Kal Sal automatically initiates an encrypted SMS fallback protocol to transmit your GPS coordinates to our automated SMS emergency dispatch gateway.',
    category: 'Connectivity',
  },
  {
    id: 'faq-3',
    question: 'How many emergency contacts can I add?',
    answer:
      'You can register up to 5 emergency contacts. When you trigger an SOS, all verified contacts receive simultaneous push notifications and automated SMS alerts containing your live coordinates.',
    category: 'Account',
  },
  {
    id: 'faq-4',
    question: 'Does Khu Nyi Kal Sal track my location 24/7?',
    answer:
      'No. We adhere to a strict privacy-first architecture. Your GPS location is only read and broadcast when you actively press the SOS button or use the safe testing function. When the app is idle, no location data is collected or logged.',
    category: 'Privacy',
  },
  {
    id: 'faq-5',
    question: 'What happens if I accidentally press the SOS button?',
    answer:
      'There is a built-in 3-second hold requirement with haptic vibration feedback to prevent accidental clicks. If an alert is sent accidentally, you can disarm it within seconds using your security PIN and select "False Alarm" to notify responders immediately.',
    category: 'SOS Help',
  },
  {
    id: 'faq-6',
    question: 'Can I use Khu Nyi Kal Sal for family members living in other cities?',
    answer:
      'Yes. You can add family members as emergency contacts regardless of their physical location. If they trigger an alert in another city, you will receive real-time updates and direct coordinates on your phone.',
    category: 'General',
  },
];
