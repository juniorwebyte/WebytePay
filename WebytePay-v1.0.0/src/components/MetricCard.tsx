import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import type { MetricCard } from '../types/dashboard';

export function MetricCard({ title, value, change, icon: Icon }: MetricCard & { icon: any }) {
  const isPositive = change > 0;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${isPositive ? 'bg-green-50' : 'bg-red-50'}`}>
          <Icon className={`w-6 h-6 ${isPositive ? 'text-green-500' : 'text-red-500'}`} />
        </div>
      </div>
      <div className="flex items-center mt-4">
        {isPositive ? (
          <ArrowUpIcon className="w-4 h-4 text-green-500" />
        ) : (
          <ArrowDownIcon className="w-4 h-4 text-red-500" />
        )}
        <span className={`text-sm ml-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {Math.abs(change)}%
        </span>
        <span className="text-sm text-gray-500 ml-2">vs. último mês</span>
      </div>
    </div>
  );
}