import React from 'react';
import { TableProps } from '../types';

export const NeuTable = <T extends Record<string, any>>({ 
  data, 
  columns, 
  className = '' 
}: TableProps<T>) => {
  return (
    <div className={`overflow-x-auto rounded-3xl shadow-neu-flat bg-neu-base p-2 border border-white/20 ${className}`}>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-300/30">
            {columns.map((col, index) => (
              <th 
                key={index} 
                className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500 first:pl-6 last:pr-6"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300/30">
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className="group hover:bg-white/30 transition-colors duration-200"
            >
              {columns.map((col, colIndex) => (
                <td 
                  key={colIndex} 
                  className="p-4 text-sm font-semibold text-gray-700 first:pl-6 last:pr-6 first:rounded-l-xl last:rounded-r-xl"
                >
                  {col.render 
                    ? col.render(row[col.accessorKey], row) 
                    : String(row[col.accessorKey])
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};