/**
 * theme.config.ts — swap to restyle TripCraft
 * 2026 Design: Magazine Wanderlust — warm editorial, ink textures, bento day cards
 */

export const theme = {
  name:    'WanderAI',
  tagline: 'Go somewhere beautiful.',
  sub:     'AI-powered itineraries · Weather-aware · Kids mode · Print to PDF',

  style: 'magazine' as const,

  bg:          '#0c0a06',           // warm near-black
  bgCard:      'rgba(217,119,6,0.04)',
  bgCardHover: 'rgba(217,119,6,0.08)',
  border:      'rgba(217,119,6,0.15)',
  borderHover: 'rgba(217,119,6,0.30)',

  accent1:    '#d97706',           // amber — warmth of travel
  accent2:    '#b45309',
  accent3:    '#f97316',           // orange glow
  accentText: '#fcd34d',
  accentGlow: 'rgba(217,119,6,0.15)',

  blobs: [
    { x: '-5%',  y: '-15%', w: '600px', h: '500px', color: 'rgba(180,83,9,0.18)',  blur: '130px' },
    { x: '55%',  y: '30%',  w: '400px', h: '400px', color: 'rgba(217,119,6,0.10)', blur: '110px' },
    { x: '15%',  y: '70%',  w: '300px', h: '300px', color: 'rgba(249,115,22,0.07)', blur: '90px' },
  ],

  fontHeading: "'Georgia', 'Times New Roman', serif",  // editorial feel
  fontBody:    "'Inter', sans-serif",
  fontMono:    "'JetBrains Mono', monospace",

  quickDestinations: [
    { emoji: '🗼', name: 'Paris' },
    { emoji: '🗾', name: 'Tokyo' },
    { emoji: '🏝️', name: 'Bali' },
    { emoji: '🗽', name: 'New York' },
    { emoji: '🦁', name: 'Safari' },
    { emoji: '🏔️', name: 'Alps' },
  ],

  stats: [
    { icon: '🌍', label: 'Destinations', value: '195+' },
    { icon: '📅', label: 'Max days',     value: '14 days' },
    { icon: '🧒', label: 'Family mode',  value: 'Built-in' },
    { icon: '🌤', label: 'Weather',      value: 'Live' },
  ],

  pricing: [
    {
      name: 'Free', price: '$0', sub: 'forever', highlight: false,
      features: ['2 itineraries / day', 'Up to 14 days', 'Weather forecast', 'Kids mode', 'Print to PDF', 'All destinations'],
      cta: 'Start free',
    },
    {
      name: 'Pro', price: '$6', sub: '/month', highlight: true,
      features: ['Unlimited itineraries', 'Save & edit trips', 'Hotel + flight links', 'Offline PDF export', 'Trip notes', 'Priority AI speed'],
      cta: 'Go Pro →',
    },
  ],

  metaTitle:       'WanderAI — AI Travel Itinerary Planner',
  metaDescription: 'Plan your perfect trip in seconds. AI builds a day-by-day itinerary with weather, budget estimates, and family-friendly options. Free to start.',
}

export type Theme = typeof theme
export default theme
