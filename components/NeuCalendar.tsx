import React, { useState } from 'react';
import { CalendarProps } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuCalendar: React.FC<CalendarProps> = ({ selectedDate = new Date(), onDateSelect, className = '' }) => {
const [currentDate, setCurrentDate] = useState(new Date(selectedDate));
const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const handlePrevMonth = () => {
setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
};
const handleNextMonth = () => {
setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
};
const renderDays = () => {
const days = [];
const totalDays = daysInMonth(currentDate.getFullYear(), currentDate.getMonth());
const startDay = firstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());
// Empty cells for previous month
for (let i = 0; i < startDay; i++) {
days.push(<div key={`empty-${i}`} className="w-8 h-8" />);
}
// Days of the month
for (let i = 1; i <= totalDays; i++) {
const isSelected = selectedDate.getDate() === i && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();
const isToday = new Date().getDate() === i &&
new Date().getMonth() === currentDate.getMonth() &&
new Date().getFullYear() === currentDate.getFullYear();
days.push(
<button
key={i}
onClick={() => onDateSelect(new Date(currentDate.getFullYear(), currentDate.getMonth(), i))}
className={`
w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-200
${isSelected ? ' text-indigo-500 bg-transparent' : isToday ? ' text-indigo-500 font-bold border border-indigo-500/20'
: 'hover:bg-gray-200/50 text-gray-600'
}
`}
>
{i}
</button>
);
}
return days;
};
return (
<div className={`p-6 rounded-[2rem] border border-white/20 w-fit ${className}`} style={neuStyle('flat')}>
<div className="flex items-center justify-between mb-6">
<button onClick={handlePrevMonth}
className="w-8 h-8 rounded-full flex items-center justify-center active:translate-y-px text-gray-500"
>
<ChevronLeft size={16} />
</button>
<h3 className="text-lg font-bold text-gray-700">
{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
</h3>
<button onClick={handleNextMonth}
className="w-8 h-8 rounded-full flex items-center justify-center active:translate-y-px text-gray-500"
>
<ChevronRight size={16} />
</button>
</div>
<div className="grid grid-cols-7 gap-1 mb-2 text-center">
{['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
<span key={d} className="text-xs font-bold text-gray-400 w-9">{d}</span>
))}
</div>
<div className="grid grid-cols-7 gap-1 place-items-center">
{renderDays()}
</div>
</div>
);
};