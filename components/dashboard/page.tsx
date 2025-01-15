import { AssessmentCard } from '@/components/dashboard/AssessmentCard';

const mockAssessments = [
  {
    title: 'Q4 2024 Assessment',
    department: 'Financial Department',
    progress: 45,
    status: 'in_progress' as const,
  },
  {
    title: 'Annual IT Review',
    department: 'IT Department',
    progress: 100,
    status: 'completed' as const,
  },
  {
    title: 'Q1 2025 Planning',
    department: 'Operations',
    progress: 0,
    status: 'draft' as const,
  },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Recent Assessments</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockAssessments.map((assessment, index) => (
          <AssessmentCard key={index} {...assessment} />
        ))}
      </div>
    </div>
  );
}