// Shared region mapping for vegan.place — single source of truth so the
// homepage, hub pages and map can never drift apart again.
// A country not listed explicitly falls back to Asia-Pacific.

export const REGIONS = [
  'North America',
  'Europe',
  'Asia-Pacific',
  'Latin America',
  'Africa & Middle East',
] as const;

export type Region = (typeof REGIONS)[number];

const SLUGS: Record<Region, string> = {
  'North America': 'north-america',
  Europe: 'europe',
  'Asia-Pacific': 'asia-pacific',
  'Latin America': 'latin-america',
  'Africa & Middle East': 'africa-middle-east',
};

export function regionSlug(region: Region): string {
  return SLUGS[region];
}

export function regionFromSlug(slug: string): Region | undefined {
  return (Object.keys(SLUGS) as Region[]).find((r) => SLUGS[r] === slug);
}

export function regionOf(country: string): Region {
  if (['United States', 'Canada', 'Mexico'].includes(country)) return 'North America';
  if (['Brazil', 'Argentina', 'Chile', 'Peru', 'Colombia', 'Ecuador', 'Uruguay', 'Guatemala', 'Costa Rica', 'Panama', 'Jamaica'].includes(country)) return 'Latin America';
  if (
    [
      'United Kingdom', 'Germany', 'France', 'Netherlands', 'Spain',
      'Portugal', 'Denmark', 'Sweden', 'Ireland', 'Czechia',
      'Czech Republic', 'Austria', 'Italy', 'Greece', 'Hungary',
      'Belgium', 'Poland', 'Switzerland', 'Finland', 'Iceland',
      'Estonia', 'Latvia', 'Lithuania', 'Slovenia', 'Croatia', 'Serbia',
      'Bulgaria', 'Romania', 'Norway',
    ].includes(country)
  ) {
    return 'Europe';
  }
  if (['South Africa', 'Israel', 'United Arab Emirates', 'Kenya', 'Ghana', 'Nigeria', 'Egypt', 'Morocco', 'Lebanon', 'Jordan', 'Qatar', 'Ethiopia', 'Tunisia', 'Saudi Arabia', 'Oman', 'Turkey'].includes(country)) return 'Africa & Middle East';
  return 'Asia-Pacific';
}

export const REGION_BLURBS: Record<Region, string> = {
  'North America':
    "From New York delis to LA taco trucks, the continent's deepest bench of vegan cooking.",
  Europe:
    'Old-world capitals with new-world kitchens: Rome, Paris, London and the quieter stars between them.',
  'Asia-Pacific':
    'Temple food, night markets and Melbourne laneways: the region where plant-based eating is both oldest and newest.',
  'Latin America':
    'A small shelf so far, growing fast: São Paulo, Buenos Aires, Lima and Santiago.',
  'Africa & Middle East':
    'Cape Town, Tel Aviv and Dubai: three very different tables, one shared appetite.',
};
