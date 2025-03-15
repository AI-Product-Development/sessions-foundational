import { Match, Team } from './types';
import { 
  generateFootballMatches,
  generateBasketballMatches,
  generateHockeyMatches,
  generateCricketMatches,
  generateTennisMatches,
  generateTeams
} from './generators';
import { dates } from './mockData';

type Listener = (matches: Match[]) => void;

class MockService {
  private matches: Match[] = [];
  private listeners: Listener[] = [];
  private updateInterval: number = 30000; // 30 seconds
  private intervalId?: NodeJS.Timeout;

  constructor() {
    this.initializeMatches();
    this.startUpdates();
  }

  private initializeMatches() {
    // Generate matches for all dates and sports
    dates.forEach(date => {
      const footballMatches = generateFootballMatches(date.fullDate, 6);
      const basketballMatches = generateBasketballMatches(date.fullDate, 6);
      const hockeyMatches = generateHockeyMatches(date.fullDate, 6);
      const cricketMatches = generateCricketMatches(date.fullDate, 6);
      const tennisMatches = generateTennisMatches(date.fullDate, 6);
      
      this.matches = [
        ...this.matches,
        ...footballMatches,
        ...basketballMatches,
        ...hockeyMatches,
        ...cricketMatches,
        ...tennisMatches
      ];
    });
  }

  private startUpdates() {
    this.intervalId = setInterval(() => {
      this.updateRandomMatch();
    }, this.updateInterval);
  }

  private updateRandomMatch() {
    const liveMatches = this.matches.filter(m => m.status === 'LIVE');
    if (liveMatches.length === 0) return;

    const matchIndex = Math.floor(Math.random() * liveMatches.length);
    const match = liveMatches[matchIndex];
    const fullMatchIndex = this.matches.findIndex(m => m.id === match.id);

    if (match.time && match.status === 'LIVE') {
      // Update score occasionally
      if (Math.random() > 0.7) {
        const isHome = Math.random() > 0.5;
        let scoreIncrement = 1;

        // Sport-specific score increments
        switch (match.id.charAt(0)) {
          case '3': // Basketball
            scoreIncrement = Math.random() > 0.7 ? 3 : 2; // 3-pointers or 2-pointers
            break;
          case '4': // Tennis
            scoreIncrement = 1; // One game at a time
            break;
          case '5': // Cricket
            scoreIncrement = Math.random() > 0.9 ? 6 : (Math.random() > 0.7 ? 4 : 1); // 6s, 4s, or singles
            break;
          default:
            scoreIncrement = 1;
        }
        
        this.matches[fullMatchIndex] = {
          ...match,
          score: {
            home: match.score.home + (isHome ? scoreIncrement : 0),
            away: match.score.away + (isHome ? 0 : scoreIncrement)
          }
        };
      }

      // Update time
      if (!['Break', 'HT', 'Lunch', 'Tea', 'Stumps'].includes(match.time.period)) {
        const sportId = match.id.charAt(0);
        const maxMinutes = this.getMaxMinutes(sportId, match.time.period);
        const newMinute = Math.min(match.time.current + 1, maxMinutes);
        
        this.matches[fullMatchIndex] = {
          ...match,
          time: {
            ...match.time,
            current: newMinute
          }
        };
      }
    }

    this.notifyListeners();
  }

  private getMaxMinutes(sportId: string, period: string): number {
    switch (sportId) {
      case '1': // Football
        return 45;
      case '2': // Hockey
        return 20;
      case '3': // Basketball
        return 12;
      case '4': // Tennis
        return 40; // Tennis scoring (0, 15, 30, 40)
      case '5': // Cricket
        return 90; // Overs
      default:
        return 45;
    }
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener([...this.matches]));
  }

  private generateMatchesForTeam(team: Team, date: string, count: number = 3): Match[] {
    const sportId = team.id.split('-')[0];
    const generator = this.getMatchGenerator(sportId);
    const matches: Match[] = [];
    
    for (let i = 0; i < count; i++) {
      const isHome = Math.random() > 0.5;
      const otherTeam = generateTeams(sportId, 1)[0];
      const match = generator(date, 1)[0];
      
      matches.push({
        ...match,
        homeTeam: isHome ? team : otherTeam,
        awayTeam: isHome ? otherTeam : team
      });
    }
    
    return matches;
  }

  private getMatchGenerator(sportId: string) {
    switch (sportId) {
      case '1': return generateFootballMatches;
      case '2': return generateHockeyMatches;
      case '3': return generateBasketballMatches;
      case '4': return generateTennisMatches;
      case '5': return generateCricketMatches;
      default: return generateFootballMatches;
    }
  }

  subscribe(listener: Listener) {
    this.listeners.push(listener);
    listener([...this.matches]);
    
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
      if (this.listeners.length === 0 && this.intervalId) {
        clearInterval(this.intervalId);
      }
    };
  }

  getMatches() {
    return [...this.matches];
  }

  getMatchesBySport(sportId: string) {
    return this.matches.filter(match => match.id.startsWith(sportId));
  }

  getMatchesByDateAndSport(date: string, sportId: string, teamId?: string) {
    let matches = this.matches.filter(
      match => match.date === date && match.id.startsWith(sportId)
    );

    if (teamId) {
      // Find matches where the team is either home or away
      matches = matches.filter(match => 
        match.homeTeam.id === teamId || match.awayTeam.id === teamId
      );

      // If we don't have enough matches for this team, generate more
      if (matches.length < 3) {
        const team = matches[0]?.homeTeam.id === teamId 
          ? matches[0].homeTeam 
          : matches[0]?.awayTeam;

        if (team) {
          const newMatches = this.generateMatchesForTeam(team, date, 3 - matches.length);
          this.matches = [...this.matches, ...newMatches];
          matches = [...matches, ...newMatches];
        }
      }
    }

    return matches;
  }
}

export const mockService = new MockService();