export interface Match {
  team1: string;
  team2: string;
  score1: string;
  score2: string;
  time: string;
  status: 'live' | 'upcoming' | 'completed';
  league: string;
}

export interface DateGroup {
  date: number;
  matches: Match[];
}

export interface Region {
  id: string;
  name: string;
  icon: any; // Lucide icon component type
}

export interface Team {
  id: string;
  name: string;
  league: string;
}

export interface Competition {
  id: string;
  name: string;
  icon: any; // Lucide icon component type
}

export interface DateInfo {
  day: string;
  date: string;
  active: boolean;
}