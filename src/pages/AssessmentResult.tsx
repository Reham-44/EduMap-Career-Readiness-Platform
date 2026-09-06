import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Award, Sparkles } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { ProgressBar } from '@/components/ProgressBar';
import { Badge } from '@/components/Badge';
import { useAuth } from '@/contexts/AuthContext';
import { getCareerById } from '@/data/careers';
import { calculateStrengths } from '@/utils/recommendationEngine';
import { useLang } from '@/contexts/LanguageContext';

export function AssessmentResult() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { t } = useLang();

  if (!user || !user.careerMatches || user.careerMatches.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <div className="px-4 py-4"><Logo /></div>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="card p-8 text-center max-w-md">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">{t.assessmentResult.noResult}</h2>
            <p className="text-sm text-slate-500 mb-4">{t.assessmentResult.noResultDesc}</p>
            <button onClick={() => navigate('/assessment')} className="btn-primary">{t.assessmentResult.takeAssessment}</button>
          </div>
        </div>
      </div>
    );
  }

  const topMatch = user.careerMatches[0];
  const career = getCareerById(topMatch.careerId);
  const strengths = calculateStrengths(user.faculty, user.assessmentAnswers || {});
  const skillsToImprove = career?.skills.filter((s) => s.required > 70).slice(0, 5).map((s) => s.name) || [];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="px-4 py-4"><Logo /></div>
      <div className="flex-1 px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-slide-up">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white mx-auto mb-4 shadow-sm">
              <Sparkles className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">{t.assessmentResult.title}</h1>
            <p className="mt-2 text-slate-500">{t.assessmentResult.subtitle}</p>
          </div>

          {/* Top Match */}
          <div className="card p-8 mb-6 bg-gradient-to-br from-primary-600 to-primary-800 border-0 text-white">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-primary-200" />
              <span className="text-sm font-medium text-primary-200">{t.assessmentResult.topMatch}</span>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl font-bold">{t.careerTitles[topMatch.careerId] || topMatch.title}</h2>
                <p className="text-primary-200 mt-1">{career?.shortDesc}</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold">{topMatch.score}<span className="text-2xl">%</span></p>
                <p className="text-primary-200 text-sm">{t.assessmentResult.matchScore}</p>
              </div>
            </div>
          </div>

          {/* Top 3 Matches */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {user.careerMatches.slice(0, 3).map((match, i) => (
              <div key={match.careerId} className="card p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-400">#{i + 1}</span>
                  <Badge variant={i === 0 ? 'primary' : 'neutral'}>{match.score}% {t.assessmentResult.matchScore}</Badge>
                </div>
                <h3 className="font-bold text-slate-900">{t.careerTitles[match.careerId] || match.title}</h3>
                <ProgressBar value={match.score} className="mt-3" size="sm" />
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Why This Path */}
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success-500" />
                {t.assessmentResult.whyThisPath}
              </h3>
              <div className="space-y-2.5">
                {topMatch.reasons.map((reason, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-success-500 flex-shrink-0 mt-0.5" style={{ width: 18, height: 18 }} />
                    <span className="text-sm text-slate-600">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths */}
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary-600" />
                {t.assessmentResult.yourStrengths}
              </h3>
              <div className="space-y-3">
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
          </div>

          {/* Skills to Improve */}
          <div className="card p-6 mb-8">
            <h3 className="font-bold text-slate-900 mb-4">{t.assessmentResult.skillsToImprove}</h3>
            <div className="flex flex-wrap gap-2">
              {skillsToImprove.map((skill) => (
                <span key={skill} className="badge bg-warning-50 text-warning-700">{skill}</span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/skill-gap" className="btn-primary text-base px-6 py-3">
              {t.assessmentResult.viewSkillGap}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/roadmap" className="btn-secondary text-base px-6 py-3">
              {t.assessmentResult.viewRoadmap}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
