import { useNavigate } from 'react-router-dom';
import { Lock, CheckCircle2, Circle, Play, ArrowRight, AlertCircle } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';
import { ProgressBar } from '@/components/ProgressBar';
import { Badge } from '@/components/Badge';
import { useAuth } from '@/contexts/AuthContext';
import { getCareerById } from '@/data/careers';
import type { RoadmapSkillStatus } from '@/types';

export function Roadmap() {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  if (!user.topCareer) {
    return (
      <AppLayout>
        <div className="card p-8 text-center max-w-md mx-auto mt-12">
          <AlertCircle className="w-12 h-12 text-warning-500 mx-auto mb-3" />
          <h2 className="text-lg font-semibold text-slate-800 mb-2">No career path selected</h2>
          <p className="text-sm text-slate-500 mb-4">Take the assessment to get your personalized roadmap.</p>
          <button onClick={() => navigate('/assessment')} className="btn-primary">Take Assessment</button>
        </div>
      </AppLayout>
    );
  }

  const career = getCareerById(user.topCareer);
  if (!career) return null;

  const roadmapProgress = user.roadmapProgress || {};

  const allSkills = career.roadmap.flatMap((stage) => stage.skills);
  const totalSkills = allSkills.length;
  const completedCount = Object.values(roadmapProgress).filter((s) => s === 'completed').length;
  const overallProgress = Math.round((completedCount / totalSkills) * 100);

  const getSkillStatus = (skillId: string): RoadmapSkillStatus => {
    return roadmapProgress[skillId] || 'locked';
  };

  const toggleSkill = (skillId: string) => {
    const current = roadmapProgress[skillId] || 'locked';
    const newStatus: RoadmapSkillStatus = current === 'completed' ? 'locked' : 'completed';
    updateUser({ roadmapProgress: { ...roadmapProgress, [skillId]: newStatus } });
  };

  const markInProgress = (skillId: string) => {
    updateUser({ roadmapProgress: { ...roadmapProgress, [skillId]: 'in_progress' } });
  };

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">{career.title} Roadmap</h1>
        <p className="text-sm text-slate-500 mt-1">Follow your personalized learning path to become job-ready.</p>
      </div>

      {/* Overall progress */}
      <div className="card p-6 mb-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-slate-900">Overall Progress</h3>
          <span className="text-2xl font-bold text-primary-600">{overallProgress}%</span>
        </div>
        <ProgressBar value={overallProgress} size="lg" color="bg-primary-600" />
        <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-success-500" /> {completedCount} Completed</span>
          <span className="flex items-center gap-1.5"><Play className="w-4 h-4 text-warning-500" /> {Object.values(roadmapProgress).filter((s) => s === 'in_progress').length} In Progress</span>
          <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-slate-400" /> {totalSkills - completedCount} Remaining</span>
        </div>
      </div>

      {/* Roadmap stages */}
      <div className="space-y-6">
        {career.roadmap.map((stage, stageIdx) => (
          <div key={stage.id} className="card p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
                {stageIdx + 1}
              </div>
              <h3 className="font-bold text-slate-900 text-lg">{stage.title}</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {stage.skills.map((skill) => {
                const status = getSkillStatus(skill.id);
                return (
                  <div key={skill.id} className={`p-4 rounded-xl border-2 transition-all ${
                    status === 'completed' ? 'border-success-200 bg-success-50/50' :
                    status === 'in_progress' ? 'border-warning-200 bg-warning-50/50' :
                    'border-slate-200 bg-white'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {status === 'completed' && <CheckCircle2 className="w-5 h-5 text-success-500" />}
                        {status === 'in_progress' && <Play className="w-5 h-5 text-warning-500" />}
                        {status === 'locked' && <Lock className="w-5 h-5 text-slate-400" />}
                        <h4 className="font-semibold text-slate-900 text-sm">{skill.name}</h4>
                      </div>
                      <Badge variant={status === 'completed' ? 'success' : status === 'in_progress' ? 'warning' : 'neutral'}>
                        {status === 'completed' ? 'Completed' : status === 'in_progress' ? 'In Progress' : 'Locked'}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-500 mb-3">{skill.description}</p>
                    <div className="flex gap-2">
                      {status !== 'completed' && (
                        <button onClick={() => toggleSkill(skill.id)} className="text-xs font-semibold text-primary-600 hover:text-primary-700">
                          Mark as Complete
                        </button>
                      )}
                      {status === 'locked' && (
                        <button onClick={() => markInProgress(skill.id)} className="text-xs font-semibold text-secondary-600 hover:text-secondary-700">
                          Start Learning
                        </button>
                      )}
                      {status === 'completed' && (
                        <button onClick={() => toggleSkill(skill.id)} className="text-xs font-semibold text-slate-400 hover:text-slate-600">
                          Undo
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button onClick={() => navigate('/app/challenges')} className="btn-primary text-base px-6 py-3">
          Explore Challenges
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </AppLayout>
  );
}
