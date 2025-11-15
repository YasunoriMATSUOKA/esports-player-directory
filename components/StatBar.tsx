
import React from 'react';

interface StatBarProps {
  label: string;
  value: string | number;
  maxValue?: number;
  gameColor: string;
}

const StatBar: React.FC<StatBarProps> = ({ label, value, maxValue, gameColor }) => {
  const percentage = maxValue && typeof value === 'number' ? (value / maxValue) * 100 : undefined;

  return (
    <div>
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-sm font-medium text-gray-300">{label}</span>
        <span className="font-teko text-2xl font-bold text-white">{value}{maxValue ? '%' : ''}</span>
      </div>
      {percentage !== undefined && (
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className={`bg-gradient-to-r ${gameColor} h-2.5 rounded-full`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default StatBar;
