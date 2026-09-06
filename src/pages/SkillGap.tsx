import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, AlertCircle, TrendingUp, ArrowLeft } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { ProgressBar } from '@/components/ProgressBar';
import { Badge } from '@/components/Badge';
import { useAuth } from '@/contexts/AuthContext';
import { getCareerById } from '@/data/careers';
import { calculateSkillGaps } from '@/utils/recommendationEngine';
import type { SkillGapItem } from '@/types';
import { useLang } from '@/contexts/LanguageContext';

const levelConfig: Record<SkillGapItem['level'], { variant: 'success' | 'secondary' | 'warning' | 'error'; color: string }> = {
  'Strong': { variant: 'success', color: 'bg-success-500' },
  'Good': { variant: 'secondary', color: 'bg-secondary-500' },
  'Needs Improvement': { variant: 'warning', color: 'bg-warning-500' },
  'Critical Gap': { variant: 'error', color: 'bg-error-500' },
};

export function SkillGap() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { t } = useLang();

  if (!user || !user.topCareer) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <div className="px-4 py-4"><Logo /></div>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="card p-8 text-center max-w-md">
            <AlertCircle className="w-12 h-12 text-warning-500 mx-auto mb-3" />
            <h2 className="text-lg font-semibold text-slate-800 mb-2">{t.skillGap.noMatch}</h2>
            <p className="text-sm text-slate-500 mb-4">{t.skillGap.noMatchDesc}</p>
            <button onClick={() => navigate('/assessment')} className="btn-primary">{t.assessmentResult.takeAssessment}</button>
          </div>
        </div>
      </div>
    );
  }

  const career = getCareerById(user.topCareer);
  const skillGaps = calculateSkillGaps(user.topCareer, user.skillLevels);
  const biggestGaps = [...skillGaps].sort((a, b) => b.gap - a.gap).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="px-4 py-4"><Logo /></div>
      <div className="flex-1 px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/assessment-result" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 mb-4">
            <ArrowLeft className="w-4 h-4" /> {t.common.back}
          </Link>

          <div className="mb-6">
            <h1 className="text-3xl font-bold text-slate-900">{t.skillGap.title}</h1>
            <p className="mt-2 text-slate-500">
              {t.skillGap.subtitle} <span className="font-semibold text-primary-600">{career?.title}</span>.
            </p>
          </div>

          {/* Skill comparison cards */}
          <div className="space-y-4 mb-8">
            {skillGaps.map((gap) => {
              const config = levelConfig[gap.level];
              return (
                <div key={gap.skill} className="card p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-slate-900">{gap.skill}</h3>
                    <Badge variant={config.variant}>{gap.level === 'Strong' ? t.skillGap.levels.strong : gap.level === 'Good' ? t.skillGap.levels.good : gap.level === 'Needs Improvement' ? t.skillGap.levels.needsImprovement : t.skillGap.levels.criticalGap}</Badge>
                  </div>

                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-500">{t.skillGap.requiredLevel}</span>
                        <span className="font-semibold text-slate-700">{gap.required}%</span>
                      </div>
                      <ProgressBar value={gap.required} size="sm" color="bg-slate-400" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-500">{t.skillGap.yourLevel}</span>
                        <span className="font-semibold text-slate-700">{gap.current}%</span>
                      </div>
                      <ProgressBar value={gap.current} size="sm" color={config.color} />
                    </div>
                  </div>

                  {gap.gap > 0 && (
                    <p className="text-xs text-error-600 mt-2.5">
                      {t.skillGap.gapMessage} {gap.gap}%
                    </p>
                  )}
                  {gap.gap <= 0 && (
                    <p className="text-xs text-success-600 mt-2.5">
                      {t.skillGap.meetLevel}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Biggest gaps */}
          <div className="card p-6 mb-8 bg-gradient-to-br from-error-50 to-white">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-error-600" />
              {t.skillGap.biggestGaps}
            </h3>
            <div className="space-y-3">
              {biggestGaps.map((gap, i) => (
                <div key={gap.skill} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-error-100 text-error-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-800">{gap.skill}</p>
                    <p className="text-xs text-slate-500">{t.skillGap.gapMessage} {gap.gap}%</p>
                  </div>
                  <Badge variant="error">{gap.level === 'Strong' ? t.skillGap.levels.strong : gap.level === 'Good' ? t.skillGap.levels.good : gap.level === 'Needs Improvement' ? t.skillGap.levels.needsImprovement : t.skillGap.levels.criticalGap}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link to="/roadmap" className="btn-primary text-base px-6 py-3">
              {t.skillGap.buildRoadmap}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
