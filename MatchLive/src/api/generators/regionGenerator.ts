import { Region } from '../types';

const regionData = {
  football: [
    { name: 'England', code: 'GB-ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { name: 'Spain', code: 'ES', flag: '🇪🇸' },
    { name: 'Italy', code: 'IT', flag: '🇮🇹' },
    { name: 'Germany', code: 'DE', flag: '🇩🇪' },
    { name: 'Champions League', code: 'UEFA', flag: '🏆' }
  ],
  hockey: [
    { name: 'NHL', code: 'NHL', flag: '🏒' },
    { name: 'Sweden', code: 'SE', flag: '🇸🇪' },
    { name: 'International', code: 'INTL', flag: '🌍' },
    { name: 'Champions League', code: 'IHF', flag: '🏆' }
  ],
  basketball: [
    { name: 'NBA', code: 'NBA', flag: '🏀' },
    { name: 'EuroLeague', code: 'EUR', flag: '🇪🇺' },
    { name: 'Spain', code: 'ES', flag: '🇪🇸' },
    { name: 'International', code: 'FIBA', flag: '🌍' }
  ],
  tennis: [
    { name: 'ATP', code: 'ATP', flag: '🎾' },
    { name: 'WTA', code: 'WTA', flag: '🎾' },
    { name: 'Grand Slams', code: 'GS', flag: '🏆' },
    { name: 'Davis Cup', code: 'DC', flag: '🏆' }
  ],
  cricket: [
    { name: 'India', code: 'IN', flag: '🇮🇳' },
    { name: 'England', code: 'GB-ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { name: 'Australia', code: 'AU', flag: '🇦🇺' },
    { name: 'International', code: 'ICC', flag: '🌍' }
  ]
};

export function generateRegions(sportId: string): Region[] {
  const sportKey = getSportKey(sportId);
  const regions = regionData[sportKey as keyof typeof regionData];
  
  return regions.map((region, index) => ({
    id: `${sportId}-region-${index + 1}`,
    name: region.name,
    code: region.code,
    flag: region.flag
  }));
}

function getSportKey(sportId: string): string {
  switch (sportId) {
    case '1': return 'football';
    case '2': return 'hockey';
    case '3': return 'basketball';
    case '4': return 'tennis';
    case '5': return 'cricket';
    default: return 'football';
  }
}