import { useNavigate } from 'react-router-dom';
import { Target, Users, Award, ArrowRight, Star, Building2 } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';
import { StatCard } from '@/components/StatCard';
import { Badge } from '@/components/Badge';
import { useAuth } from '@/contexts/AuthContext';
import { challenges } from '@/data/challenges';

const mockCandidates = [
  { id: 'c1', name: 'Sara Ahmed', university: 'Cairo University', career: 'Business Analyst', score: 94, skills: ['Excel', 'Power BI', 'Business Analysis'], challengesCompleted: 3 },
  { id: 'c2', name: 'Mohamed Adel', university: 'Ain Shams University', career: 'Finance', score: 91, skills: ['Financial Analysis', 'Excel', 'Financial Modeling'], challengesCompleted: 2 },
  { id: 'c3', name: 'Nour Hassan', university: 'Helwan University', career: 'Marketing', score: 89, skills: ['Digital Marketing', 'Content Strategy', 'Market Research'], challengesCompleted: 4 },
  { id: 'c4', name: 'Yara Khaled', university: 'Cairo University', career: 'Legal Practice', score: 88, skills: ['Case Analysis', 'Legal Research', 'Legal Writing'], challengesCompleted: 2 },
  { id: 'c5', name: 'Omar Sherif', university: 'Ain Shams University', career: 'Accounting', score: 86, skills: ['Accounting', 'Excel', 'Financial Analysis'], challengesCompleted: 3 },
  { id: 'c6', name: 'Farida Tarek', university: 'Helwan University', career: 'Compliance & Risk', score: 85, skills: ['Regulatory Knowledge', 'Risk Assessment', 'Audit'], challengesCompleted: 2 },
];

export function CompanyDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const activeChallenges = challenges.length;
  const totalParticipants = challenges.reduce((acc, c) => acc + c.participants, 0);
  const completedChallenges = challenges.filter((c) => c.participants > 50).length;

  return (
    <AppLayout role="company">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center">
            <Building2 className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{user.companyName || 'Company'} Dashboard</h1>
            <p className="text-sm text-slate-500">Discover top-performing students and manage your challenges.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<Target className="w-5 h-5" />} label="Active Challenges" value={activeChallenges} color="primary" />
        <StatCard icon={<Users className="w-5 h-5" />} label="Total Participants" value={totalParticipants} color="secondary" />
        <StatCard icon={<Award className="w-5 h-5" />} label="Completed Challenges" value={completedChallenges} color="success" />
        <StatCard icon={<Star className="w-5 h-5" />} label="Top Candidates" value={mockCandidates.length} color="warning" />
      </div>

      <div className="mb-6">
        <h3 className="font-bold text-slate-900 mb-4">Top Performing Students</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mockCandidates.map((candidate) => (
            <div key={candidate.id} className="card p-6 hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-semibold">
                  {candidate.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{candidate.name}</h3>
                  <p className="text-xs text-slate-500">{candidate.university}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4 text-sm text-slate-600">
                <p><span className="text-slate-400">Career:</span> {candidate.career}</p>
                <p><span className="text-slate-400">Challenges:</span> {candidate.challengesCompleted} completed</p>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-warning-500 fill-warning-500" />
                  <span className="font-semibold">{candidate.score}%</span>
                  <span className="text-slate-400 text-xs">avg score</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {candidate.skills.map((s) => (
                  <span key={s} className="badge bg-primary-50 text-primary-700 text-xs">{s}</span>
                ))}
              </div>

              <button onClick={() => navigate(`/company/candidates/${candidate.id}`)} className="btn-primary w-full mt-auto">
                View Candidate
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
