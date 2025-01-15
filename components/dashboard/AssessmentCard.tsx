import { FC } from 'react';
import { StatusBadge } from './StatusBadge';

interface AssessmentCardProps {
  title: string;
  department: string;
  progress: number;
  status: 'draft' | 'in_progress' | 'completed';
}

export const AssessmentCard: FC<AssessmentCardProps> = ({
  title,
  department,
  progress,
  status,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{department}</p>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{progress}% Complete</span>
          <StatusBadge status={status} />
        </div>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};