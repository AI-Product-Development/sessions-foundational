export function generateDates() {
  const today = new Date();
  const dates = [];
  
  // Yesterday to 3 days ahead
  for (let i = -1; i <= 3; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    const day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date).toUpperCase();
    const monthDay = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short' }).format(date).toUpperCase();
    const fullDate = date.toISOString().split('T')[0];
    
    dates.push({
      day,
      date: monthDay,
      fullDate,
      isActive: i === 0 // Today is active
    });
  }
  
  return dates;
}