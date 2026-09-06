import { useNavigate } from 'react-router-dom';
import { Lock, CheckCircle2, Circle, Play, ArrowRight, AlertCircle } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';
import { ProgressBar } from '@/components/ProgressBar';
import { Badge } from '@/components/Badge';
import { useAuth } from '@/contexts/AuthContext';
import { getCareerById } from '@/data/careers';
import type { RoadmapSkillStatus } from '@/types';
import { useLang } from '@/contexts/LanguageContext';

export function Roadmap() {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const { t } = useLang();

  if (!user) return null;

  if (!user.topCareer) {
    return (
      <AppLayout>
        <div className="card p-8 text-center max-w-md mx-auto mt-12">
          <AlertCircle className="w-12 h-12 text-warning-500 mx-auto mb-3" />
          <h2 className="text-lg font-semibold text-slate-800 mb-2">{t.roadmap.noCareer}</h2>
          <p className="text-sm text-slate-500 mb-4">{t.roadmap.noCareerDesc}</p>
          <button onClick={() => navigate('/assessment')} className="btn-primary">{t.assessmentResult.takeAssessment}</button>
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
        <h1 className="text-2xl font-bold text-slate-900">{t.careerTitles[career.id] || career.title} {t.roadmap.title}</h1>
        <p className="text-sm text-slate-500 mt-1">{t.roadmap.subtitle}</p>
      </div>

      {/* Overall progress */}
      <div className="card p-6 mb-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-slate-900">{t.roadmap.overallProgress}</h3>
          <span className="text-2xl font-bold text-primary-600">{overallProgress}%</span>
        </div>
        <ProgressBar value={overallProgress} size="lg" color="bg-primary-600" />
        <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-success-500" /> {completedCount} {t.roadmap.completed}</span>
          <span className="flex items-center gap-1.5"><Play className="w-4 h-4 text-warning-500" /> {Object.values(roadmapProgress).filter((s) => s === 'in_progress').length} {t.roadmap.inProgress}</span>
          <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-slate-400" /> {totalSkills - completedCount} {t.roadmap.remaining}</span>
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
                        {status === 'completed' ? t.common.completed : status === 'in_progress' ? t.common.inProgress : t.common.locked}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-500 mb-3">{skill.description}</p>
                    <div className="flex gap-2">
                      {status !== 'completed' && (
                        <button onClick={() => toggleSkill(skill.id)} className="text-xs font-semibold text-primary-600 hover:text-primary-700">
                          {t.common.markComplete}
                        </button>
                      )}
                      {status === 'locked' && (
                        <button onClick={() => markInProgress(skill.id)} className="text-xs font-semibold text-secondary-600 hover:text-secondary-700">
                          {t.common.startLearning}
                        </button>
                      )}
                      {status === 'completed' && (
                        <button onClick={() => toggleSkill(skill.id)} className="text-xs font-semibold text-slate-400 hover:text-slate-600">
                          {t.common.undo}
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
        <button onClick={() => navigate('/challenges')} className="btn-primary text-base px-6 py-3">
          {t.roadmap.exploreChallenges}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </AppLayout>
  );
}
