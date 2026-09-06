import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Award, GitBranch, TrendingUp, Target, AlertCircle, CheckCircle2 } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';
import { ProgressBar } from '@/components/ProgressBar';
import { Badge } from '@/components/Badge';
import { useAuth } from '@/contexts/AuthContext';
import { getCareerById } from '@/data/careers';
import { calculateStrengths, calculateSkillGaps } from '@/utils/recommendationEngine';

export function CareerMap() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  if (!user.careerMatches || user.careerMatches.length === 0) {
    return (
      <AppLayout>
        <div className="card p-8 text-center max-w-md mx-auto mt-12">
          <AlertCircle className="w-12 h-12 text-warning-500 mx-auto mb-3" />
          <h2 className="text-lg font-semibold text-slate-800 mb-2">No career map yet</h2>
          <p className="text-sm text-slate-500 mb-4">Take the assessment to generate your career map.</p>
          <button onClick={() => navigate('/assessment')} className="btn-primary">Take Assessment</button>
        </div>
      </AppLayout>
    );
  }

  const topMatch = user.careerMatches[0];
  const career = getCareerById(topMatch.careerId);
  const strengths = calculateStrengths(user.faculty, user.assessmentAnswers || {});
  const skillGaps = calculateSkillGaps(user.topCareer || topMatch.careerId, user.skillLevels);

  const roadmapProgress = user.roadmapProgress || {};
  const totalSkills = career?.roadmap.reduce((acc, stage) => acc + stage.skills.length, 0) || 0;
  const completedSkills = Object.values(roadmapProgress).filter((s) => s === 'completed').length;
  const overallProgress = totalSkills > 0 ? Math.round((completedSkills / totalSkills) * 100) : 0;

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">My Career Map</h1>
        <p className="text-sm text-slate-500 mt-1">Your personalized career journey from assessment to opportunity.</p>
      </div>

      {/* Top career match */}
      <div className="card p-8 mb-6 bg-gradient-to-br from-primary-600 to-primary-800 border-0 text-white">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-5 h-5 text-primary-200" />
          <span className="text-sm font-medium text-primary-200">Your Top Career Match</span>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold">{topMatch.title}</h2>
            <p className="text-primary-200 mt-1">{career?.shortDesc}</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold">{topMatch.score}<span className="text-2xl">%</span></p>
            <p className="text-primary-200 text-sm">Match Score</p>
          </div>
        </div>
      </div>

      {/* Journey timeline */}
      <div className="card p-6 mb-6">
        <h3 className="font-bold text-slate-900 mb-5">Your Career Journey</h3>
        <div className="space-y-4">
          {[
            { icon: CheckCircle2, label: 'Assessment', status: 'Completed', to: '/assessment-result', color: 'success' },
            { icon: GitBranch, label: 'Skill Gap Analysis', status: skillGaps.length > 0 ? 'Available' : 'Pending', to: '/skill-gaps', color: 'secondary' },
            { icon: TrendingUp, label: 'Personalized Roadmap', status: `${overallProgress}% Complete`, to: '/app/roadmap', color: 'primary' },
            { icon: Target, label: 'Real Challenges', status: `${user.joinedChallenges?.length || 0} Joined`, to: '/app/challenges', color: 'warning' },
            { icon: Award, label: 'Portfolio', status: `${user.portfolio?.length || 0} Projects`, to: '/app/portfolio', color: 'success' },
          ].map((step, i) => {
            const Icon = step.icon;
            return (
              <Link key={i} to={step.to} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-primary-50 transition-colors group">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  step.color === 'success' ? 'bg-success-100 text-success-600' :
                  step.color === 'secondary' ? 'bg-secondary-100 text-secondary-600' :
                  step.color === 'primary' ? 'bg-primary-100 text-primary-600' :
                  'bg-warning-100 text-warning-600'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 text-sm">{step.label}</p>
                  <p className="text-xs text-slate-500">{step.status}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-600 transition-colors" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* All career matches */}
      <div className="card p-6 mb-6">
        <h3 className="font-bold text-slate-900 mb-4">All Career Matches</h3>
        <div className="space-y-3">
          {user.careerMatches.map((match, i) => (
            <div key={match.careerId} className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm flex-shrink-0">
                {i + 1}
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-slate-700">{match.title}</span>
                  <span className="text-sm font-semibold text-slate-500">{match.score}%</span>
                </div>
                <ProgressBar value={match.score} size="sm" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths */}
      <div className="card p-6">
        <h3 className="font-bold text-slate-900 mb-4">Your Strengths</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {strengths.map((s, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">{s.name}</span>
                <span className="text-sm font-semibold text-slate-500">{s.score}%</span>
              </div>
              <ProgressBar value={s.score} size="sm" color={s.score >= 80 ? 'bg-success-500' : 'bg-primary-500'} />
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
