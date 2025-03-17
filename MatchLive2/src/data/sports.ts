import { Trophy, Globe } from 'lucide-react';
import type { Region, Team, Competition, DateInfo, DateGroup } from '../types';

export const sports = ['Football', 'Hockey', 'Basketball', 'Tennis', 'Cricket'];

export const dates: DateInfo[] = [
  { day: 'SUN', date: 'MAR 16', active: false },
  { day: 'MON', date: 'MAR 17', active: false },
  { day: 'TUE', date: 'MAR 18', active: false },
  { day: 'WED', date: 'MAR 19', active: false },
  { day: 'THU', date: 'MAR 20', active: false },
];

export const regions: Region[] = [
  { id: 'nba', name: 'NBA', icon: Trophy },
  { id: 'euroleague', name: 'EuroLeague', icon: Globe },
  { id: 'atp', name: 'ATP Tour', icon: Globe },
  { id: 'wta', name: 'WTA Tour', icon: Globe },
];

export const teams: Team[] = [
  { id: 'heat', name: 'Miami Heat', league: 'NBA' },
  { id: 'pacers', name: 'Indiana Pacers', league: 'NBA' },
  { id: 'celtics', name: 'Boston Celtics', league: 'NBA' },
  { id: '76ers', name: 'Philadelphia 76ers', league: 'NBA' },
];

export const competitions: Competition[] = [
  { id: 'regular', name: 'NBA Regular Season', icon: Trophy },
  { id: 'euroleague', name: 'EuroLeague', icon: Trophy },
  { id: 'miami-open', name: 'Miami Open', icon: Trophy },
  { id: 'indian-wells', name: 'Indian Wells', icon: Trophy },
];