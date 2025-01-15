import { FC } from 'react';

interface StatusBadgeProps {
  status: 'draft' | 'in_progress' | 'completed';
}

const statusConfig = {
  draft: {
    color: 'bg-gray-100 text-gray-800',
    label: 'Draft',
  },
  in_progress: {
    color: 'bg-blue-100 text-blue-800',
    label: 'In Progress',
  },
  completed: {
    color: 'bg-green-100 text-green-800',
    label: 'Completed',
  },
};

export const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
  const config = statusConfig[status];
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
      {config.label}
    </span>
  );
};
