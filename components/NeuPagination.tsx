import React from 'react';
import { PaginationProps } from '../types';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { neuStyle } from '../neu-styles';
export const NeuPagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, className = '' }) => {
const getPageNumbers = () => {
const pages = [];
if (totalPages <= 5) {
for (let i = 1; i <= totalPages; i++) pages.push(i);
} else {
if (currentPage <= 3) {
pages.push(1, 2, 3, 4, '...', totalPages);
} else if (currentPage >= totalPages - 2) {
pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
} else {
pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
}
}
return pages;
};
return (
<div className={`flex items-center gap-2 ${className}`}>
<button
onClick={() => onPageChange(Math.max(1, currentPage - 1))}
disabled={currentPage === 1}
className={`
w-10 h-10 rounded-full flex items-center justify-center transition-all
${currentPage === 1 ? 'opacity-50 cursor-not-allowed text-gray-400' : ' hover:translate-y-[-2px] active:translate-y-0 text-gray-600'}
`}
>
<ChevronLeft size={18} />
</button>
<div className="flex items-center gap-2 px-2">
{getPageNumbers().map((page, index) => (
<React.Fragment key={index}>
{page === '...' ? (
<span className="text-gray-400"><MoreHorizontal size={20} /></span>
) : (
<button
onClick={() => onPageChange(page as number)}
className={`
w-10 h-10 rounded-full font-bold transition-all text-sm
${currentPage === page ? ' text-indigo-500' : ' hover:bg-white/40 text-gray-600'}
`}
>
{page}
</button>
)}
</React.Fragment>
))}
</div>
<button
onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
disabled={currentPage === totalPages}
className={`
w-10 h-10 rounded-full flex items-center justify-center transition-all
${currentPage === totalPages ? 'opacity-50 cursor-not-allowed text-gray-400' : ' hover:translate-y-[-2px] active:translate-y-0 text-gray-600'}
`}
>
<ChevronRight size={18} />
</button>
</div>
);
};