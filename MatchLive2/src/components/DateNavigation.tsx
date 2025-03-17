import React from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { dates } from '../data/sports';
import { useTheme } from '../hooks/useTheme';

interface DateNavigationProps {
  selectedDate: number;
  setSelectedDate: (date: number) => void;
}

export const DateNavigation: React.FC<DateNavigationProps> = ({ selectedDate, setSelectedDate }) => {
  const { theme } = useTheme();

  const handlePrevDate = () => {
    setSelectedDate(Math.max(0, selectedDate - 1));
  };

  const handleNextDate = () => {
    setSelectedDate(Math.min(dates.length - 1, selectedDate + 1));
  };

  return (
    <div className={`${theme.nav.bg} border-b border-gray-700`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4 py-2 overflow-x-auto">
          <button 
            onClick={handlePrevDate}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            disabled={selectedDate === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full bg-primary-500 text-white">
            <Calendar className="h-5 w-5" />
          </button>
          {dates.map((date, index) => (
            <button
              key={date.day}
              onClick={() => setSelectedDate(index)}
              className={`flex flex-col items-center p-2 rounded ${
                selectedDate === index
                  ? 'bg-primary-500 text-white'
                  : theme.text.secondary
              }`}
            >
              <span className="text-sm">{date.day}</span>
              <span className="text-xs">{date.date}</span>
            </button>
          ))}
          <button 
            onClick={handleNextDate}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            disabled={selectedDate === dates.length - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};