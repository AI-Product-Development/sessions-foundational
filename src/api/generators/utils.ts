export function getSportKey(sportId: string): string {
  switch (sportId) {
    case '1': return 'football';
    case '2': return 'hockey';
    case '3': return 'basketball';
    case '4': return 'tennis';
    case '5': return 'cricket';
    default: return 'football';
  }
}

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}