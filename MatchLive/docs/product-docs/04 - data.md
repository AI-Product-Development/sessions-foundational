# 📊 LiveScore Clone - Data Structures & Mock Data

## 🏗️ Core Data Types

### Sport Type
```typescript
interface Sport {
  id: string;
  name: string;
  slug: string;
  isActive: boolean;
}

const mockSports: Sport[] = [
  { id: '1', name: 'Football', slug: 'football', isActive: false },
  { id: '2', name: 'Hockey', slug: 'hockey', isActive: false },
  { id: '3', name: 'Basketball', slug: 'basketball', isActive: true },
  { id: '4', name: 'Tennis', slug: 'tennis', isActive: false },
  { id: '5', name: 'Cricket', slug: 'cricket', isActive: false },
];
```

### Region & League Structure
```typescript
interface Region {
  id: string;
  name: string;
  code: string;
  flag?: string;
}

interface League {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  logo?: string;
  isFavorite: boolean;
}
```

### Team Structure
```typescript
interface Team {
  id: string;
  name: string;
  shortName: string;
  country: string;
  logo?: string;
  isFavorite: boolean;
}
```

### Match Structure
```typescript
type MatchStatus = 'SCHEDULED' | 'LIVE' | 'HT' | 'FT' | 'CANCELLED' | 'POSTPONED';

interface MatchScore {
  home: number;
  away: number;
  details?: TennisScore;
}

interface MatchTime {
  current: number;
  period: string;
  extraTime?: number;
}

interface Match {
  id: string;
  league: League;
  homeTeam: Team;
  awayTeam: Team;
  score: MatchScore;
  status: MatchStatus;
  time?: MatchTime;
  date: string;
  isFavorite: boolean;
}
```

### Tennis-Specific Structures
```typescript
interface TennisScore {
  sets: {
    home: number[];
    away: number[];
  };
  currentGame: {
    home: number;
    away: number;
  };
  currentSet: number;
  advantage?: 'home' | 'away';
  isDeuce?: boolean;
}
```

## 📅 Date Navigation
```typescript
interface DateOption {
  day: string;
  date: string;
  fullDate: string;
  isActive: boolean;
}
```

## 🔄 Mock Service Implementation

### Core Features
- Real-time score updates
- Sport-specific scoring systems
- Team filtering
- League/Competition filtering
- Region filtering
- Date-based filtering

### Match Generation
- Sport-specific match generators
- Realistic scoring patterns
- Time progression simulation
- League-appropriate teams

### State Management
- Context-based sport selection
- Filter context for navigation
- Real-time updates subscription
- Team/League favorites

## 🎯 Best Practices

1. **Data Consistency**
   - Unique IDs across all entities
   - Consistent naming conventions
   - Type-safe implementations

2. **Real-time Updates**
   - Efficient update cycles
   - Sport-specific update rules
   - Score validation

3. **Filtering System**
   - Multiple filter types (region, team, competition)
   - Combined filter support
   - Filter state persistence

4. **Sport-Specific Features**
   - Tennis scoring system
   - Basketball quarters
   - Football/Soccer periods
   - Cricket innings
   - Hockey periods

5. **Performance Optimization**
   - Efficient data structures
   - Minimal re-renders
   - Optimized filtering
   - Memory management

---
🔄 **Next Steps:** Implement additional sport-specific features and enhance real-time capabilities