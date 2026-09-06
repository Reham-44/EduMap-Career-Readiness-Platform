import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp, Target, Award, Briefcase, ArrowRight, Users, Calendar, Sparkles, AlertCircle } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';
import { StatCard } from '@/components/StatCard';
import { ProgressBar } from '@/components/ProgressBar';
import { Badge } from '@/components/Badge';
import { EmptyState } from '@/components/EmptyState';
import { useAuth } from '@/contexts/AuthContext';
import { getCareerById } from '@/data/careers';
import { getChallengesByCareerId, getChallengeById } from '@/data/challenges';
import { getMentorById } from '@/data/mentors';
import { getOpportunitiesByFaculty } from '@/data/opportunities';
import { useLang } from '@/contexts/LanguageContext';

export function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { t } = useLang();

  if (!user) return null;

  const hour = new Date().getHours();
  const greeting = hour < 12 ? t.dashboard.goodMorning : hour < 18 ? t.dashboard.goodAfternoon : t.dashboard.goodEvening;

  const career = user.topCareer ? getCareerById(user.topCareer) : null;
  const careerChallenges = user.topCareer ? getChallengesByCareerId(user.topCareer) : [];
  const recommendedChallenge = careerChallenges[0];
  const joinedCount = user.joinedChallenges?.length || 0;
  const completedCount = user.challengeEvaluations ? Object.keys(user.challengeEvaluations).length : 0;

  const roadmapProgress = user.roadmapProgress || {};
  const totalSkills = career?.roadmap.reduce((acc, stage) => acc + stage.skills.length, 0) || 0;
  const completedSkills = Object.values(roadmapProgress).filter((s) => s === 'completed').length;
  const overallProgress = totalSkills > 0 ? Math.round((completedSkills / totalSkills) * 100) : 0;

  const skillMatch = career ? Math.round((career.skills.reduce((acc, s) => {
    const current = user.skillLevels?.[s.name] || 0;
    return acc + Math.min(1, current / s.required);
  }, 0) / career.skills.length) * 100) : 0;

  const upcomingSession = user.bookedSessions?.[0];
  const upcomingMentor = upcomingSession ? getMentorById(upcomingSession.mentorId) : null;

  const nextSkill = career?.roadmap.flatMap((stage) => stage.skills).find((skill) => {
    const status = roadmapProgress[skill.id];
    return status !== 'completed';
  });

  return (
    <AppLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">{greeting}, {user.fullName?.split(' ')[0]} 👋</h1>
        <p className="text-sm text-slate-500 mt-1">{t.dashboard.overview}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<TrendingUp className="w-5 h-5" />} label={t.dashboard.roadmapProgress} value={`${overallProgress}%`} color="primary" />
        <StatCard icon={<Award className="w-5 h-5" />} label={t.dashboard.skillMatch} value={`${skillMatch}%`} color="secondary" />
        <StatCard icon={<Target className="w-5 h-5" />} label={t.dashboard.challengesCompleted} value={completedCount} color="success" />
        <StatCard icon={<Briefcase className="w-5 h-5" />} label={t.dashboard.careerGoal} value={user.careerGoal || t.common.notSet} color="warning" subtitle={career?.title || t.dashboard.takeAssessment} />
      </div>

      {!user.topCareer && (
        <div className="card p-6 mb-8 bg-primary-50 border-primary-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">{t.dashboard.completeAssessment}</h3>
              <p className="text-sm text-slate-600 mb-3">{t.dashboard.completeAssessmentDesc}</p>
              <button onClick={() => navigate('/assessment')} className="btn-primary">{t.dashboard.takeAssessment}</button>
            </div>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Continue Learning */}
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary-600" />
            <h3 className="font-bold text-slate-900">{t.dashboard.continueLearning}</h3>
          </div>
          {nextSkill ? (
            <>
              <p className="text-sm text-slate-500 mb-1">{t.dashboard.nextSkill}</p>
              <p className="font-semibold text-slate-900 mb-3">{nextSkill.name}</p>
              <ProgressBar value={overallProgress} className="mb-4" showLabel />
              <Link to="/roadmap" className="btn-primary w-full">{t.common.continue}</Link>
            </>
          ) : (
            <p className="text-sm text-slate-500">{t.dashboard.completeAssessmentDesc}</p>
          )}
        </div>

        {/* Upcoming Mentorship */}
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-secondary-600" />
            <h3 className="font-bold text-slate-900">{t.dashboard.upcomingMentorship}</h3>
          </div>
          {upcomingSession && upcomingMentor ? (
            <>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-sm font-semibold">
                  {upcomingMentor.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{upcomingMentor.name}</p>
                  <p className="text-xs text-slate-500">{upcomingMentor.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                <Calendar className="w-4 h-4 text-slate-400" />
                {upcomingSession.date} - {upcomingSession.time}
              </div>
              <Link to="/mentorship" className="btn-secondary w-full">{t.dashboard.viewSessions}</Link>
            </>
          ) : (
            <>
              <p className="text-sm text-slate-500 mb-4">{t.dashboard.noSessions}</p>
              <Link to="/mentorship" className="btn-secondary w-full">{t.dashboard.bookSession}</Link>
            </>
          )}
        </div>

        {/* Recommended Challenge */}
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-success-600" />
            <h3 className="font-bold text-slate-900">{t.dashboard.recommendedChallenge}</h3>
          </div>
          {recommendedChallenge ? (
            <>
              <p className="font-semibold text-slate-900 mb-1">{recommendedChallenge.title}</p>
              <p className="text-xs text-slate-500 mb-3">{recommendedChallenge.company}</p>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="success">94% Match</Badge>
                <Badge variant="neutral">{recommendedChallenge.difficulty}</Badge>
              </div>
              <Link to={`/app/challenges/${recommendedChallenge.id}`} className="btn-primary w-full">
                {t.common.viewDetails}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </>
          ) : (
            <p className="text-sm text-slate-500">{t.dashboard.completeAssessmentDesc}</p>
          )}
        </div>
      </div>

      {/* Joined Challenges Quick View */}
      {joinedCount > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900">{t.dashboard.activeChallenges}</h3>
            <Link to="/challenges" className="text-sm text-primary-600 font-medium hover:text-primary-700">{t.common.viewAll}</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {user.joinedChallenges!.slice(0, 3).map((chId) => {
              const ch = getChallengeById(chId);
              if (!ch) return null;
              const submitted = user.challengeSubmissions?.[chId];
              return (
                <div key={chId} className="card p-5">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">{ch.title}</h4>
                  <p className="text-xs text-slate-500 mb-3">{ch.company}</p>
                  <Badge variant={submitted ? 'success' : 'warning'}>
                    {submitted ? t.challenges.submitted : t.common.inProgress}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </AppLayout>
  );
}
