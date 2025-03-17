import type { DateGroup } from '../types';

export const allMatches: Record<string, DateGroup[]> = {
  Basketball: [
    {
      date: 0,
      matches: [
        { 
          team1: 'LA Lakers', 
          team2: 'Golden State Warriors', 
          score1: '120', 
          score2: '112', 
          time: 'Final',
          status: 'completed',
          league: 'NBA Regular Season'
        },
        { 
          team1: 'Brooklyn Nets', 
          team2: 'New York Knicks', 
          score1: '98', 
          score2: '105', 
          time: 'Final',
          status: 'completed',
          league: 'NBA Regular Season'
        },
      ]
    },
    {
      date: 1,
      matches: [
        { 
          team1: 'Atlanta Hawks', 
          team2: 'Boston Celtics', 
          score1: '69', 
          score2: '84', 
          time: 'Break',
          status: 'live',
          league: 'NBA Regular Season'
        },
        { 
          team1: 'Miami Heat', 
          team2: 'Indiana Pacers', 
          score1: '0', 
          score2: '0', 
          time: '17:15',
          status: 'upcoming',
          league: 'NBA Regular Season'
        },
      ]
    },
    {
      date: 2,
      matches: [
        { 
          team1: 'Phoenix Suns', 
          team2: 'Milwaukee Bucks', 
          score1: '0', 
          score2: '0', 
          time: '19:30',
          status: 'upcoming',
          league: 'NBA Regular Season'
        },
        { 
          team1: 'Real Madrid', 
          team2: 'Barcelona', 
          score1: '0', 
          score2: '0', 
          time: '20:00',
          status: 'upcoming',
          league: 'EuroLeague'
        },
      ]
    }
  ],
  Tennis: [
    {
      date: 0,
      matches: [
        {
          team1: 'Carlos Alcaraz', 
          team2: 'Daniil Medvedev', 
          score1: '6,7,6', 
          score2: '4,5,4', 
          time: 'Completed',
          status: 'completed',
          league: 'Indian Wells - Final'
        }
      ]
    },
    {
      date: 1,
      matches: [
        {
          team1: 'Coco Gauff', 
          team2: 'Naomi Osaka', 
          score1: '4,2', 
          score2: '6,4', 
          time: '3rd Set',
          status: 'live',
          league: 'Miami Open - R1'
        },
        {
          team1: 'Iga Świątek', 
          team2: 'Jessica Pegula', 
          score1: '0', 
          score2: '0', 
          time: '18:00',
          status: 'upcoming',
          league: 'Miami Open - R1'
        }
      ]
    },
    {
      date: 2,
      matches: [
        {
          team1: 'Novak Djokovic', 
          team2: 'Stefanos Tsitsipas', 
          score1: '0', 
          score2: '0', 
          time: '20:00',
          status: 'upcoming',
          league: 'Miami Open - R2'
        }
      ]
    }
  ]
};