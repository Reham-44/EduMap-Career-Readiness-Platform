import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Calendar, Building2, Target, CheckCircle2, Upload, Award, Star } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';
import { Badge } from '@/components/Badge';
import { ProgressBar } from '@/components/ProgressBar';
import { Modal } from '@/components/Modal';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
import { getChallengeById } from '@/data/challenges';
import type { ChallengeSubmission, ChallengeEvaluation, PortfolioProject } from '@/types';
import { useLang } from '@/contexts/LanguageContext';

const difficultyColors: Record<string, 'success' | 'warning' | 'error'> = {
  Beginner: 'success',
  Intermediate: 'warning',
  Advanced: 'error',
};

export function ChallengeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const { showToast } = useToast();
  const { t } = useLang();
  const [solution, setSolution] = useState('');
  const [showEvaluation, setShowEvaluation] = useState(false);

  if (!user) return null;

  const challenge = id ? getChallengeById(id) : null;

  if (!challenge) {
    return (
      <AppLayout>
        <div className="card p-8 text-center max-w-md mx-auto mt-12">
          <h2 className="text-lg font-semibold text-slate-800 mb-2">{t.challenges.notFound}</h2>
          <Link to="/app/challenges" className="btn-primary mt-4">{t.challenges.backToChallenges}</Link>
        </div>
      </AppLayout>
    );
  }

  const isJoined = user.joinedChallenges?.includes(challenge.id);
  const submission = user.challengeSubmissions?.[challenge.id];
  const evaluation = user.challengeEvaluations?.[challenge.id];

  const handleJoin = () => {
    if (isJoined) return;
    const joined = user.joinedChallenges || [];
    updateUser({ joinedChallenges: [...joined, challenge.id] });
    showToast(t.challenges.challengeAdded, 'success');
  };

  const handleSubmit = () => {
    if (!solution.trim()) {
      showToast(t.challenges.pleaseDescribe, 'error');
      return;
    }
    const sub: ChallengeSubmission = {
      challengeId: challenge.id,
      solution,
      submittedAt: new Date().toISOString(),
    };

    const evalResult: ChallengeEvaluation = {
      challengeId: challenge.id,
      problemSolving: Math.floor(Math.random() * 20) + 75,
      technicalSkills: Math.floor(Math.random() * 25) + 65,
      communication: Math.floor(Math.random() * 20) + 70,
      businessUnderstanding: Math.floor(Math.random() * 15) + 78,
      overall: 0,
      feedback: '',
      skillsDemonstrated: challenge.skills,
    };
    evalResult.overall = Math.round((evalResult.problemSolving + evalResult.technicalSkills + evalResult.communication + evalResult.businessUnderstanding) / 4);
    evalResult.feedback = t.evaluation.feedback;

    updateUser({
      challengeSubmissions: { ...(user.challengeSubmissions || {}), [challenge.id]: sub },
      challengeEvaluations: { ...(user.challengeEvaluations || {}), [challenge.id]: evalResult },
    });

    showToast(t.challenges.submittedMsg, 'success');
    setTimeout(() => setShowEvaluation(true), 500);
  };

  const addToPortfolio = () => {
    if (!evaluation) return;
    const project: PortfolioProject = {
      id: `portfolio-${challenge.id}`,
      challengeId: challenge.id,
      title: challenge.title,
      role: user.topCareer ? (t.careerTitles[user.topCareer] || user.topCareer) : t.sidebar.student,
      skills: challenge.skills,
      score: evaluation.overall,
      company: challenge.company,
      status: 'Completed',
      addedAt: new Date().toISOString(),
    };
    const portfolio = user.portfolio || [];
    if (portfolio.some((p) => p.challengeId === challenge.id)) {
      showToast(t.evaluation.alreadyInPortfolio, 'info');
      return;
    }
    updateUser({ portfolio: [...portfolio, project] });
    showToast(t.evaluation.addedToPortfolio, 'success');
    navigate('/app/portfolio');
  };

  return (
    <AppLayout>
      <Link to="/app/challenges" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 mb-4">
        <ArrowLeft className="w-4 h-4" /> {t.challenges.backToChallenges}
      </Link>

      {/* Header */}
      <div className="card p-6 mb-6">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-500">{challenge.company}</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">{challenge.title}</h1>
            <p className="text-sm text-slate-500 mt-1">{challenge.category}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant={difficultyColors[challenge.difficulty]}>{challenge.difficulty === 'Beginner' ? t.difficulty.beginner : challenge.difficulty === 'Intermediate' ? t.difficulty.intermediate : t.difficulty.advanced}</Badge>
            {isJoined && <Badge variant="primary">{t.challenges.joined}</Badge>}
            {submission && <Badge variant="success">{t.challenges.submitted}</Badge>}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Clock className="w-4 h-4 text-slate-400" /> {challenge.estimatedTime}
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Calendar className="w-4 h-4 text-slate-400" /> {challenge.deadline}
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Users className="w-4 h-4 text-slate-400" /> {challenge.participants} {t.challenges.participants}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <h3 className="font-bold text-slate-900 mb-3">{t.challenges.description}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{challenge.description}</p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-slate-900 mb-3">{t.challenges.businessContext}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{challenge.businessContext}</p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-slate-900 mb-3">{t.challenges.theProblem}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{challenge.problem}</p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-slate-900 mb-3">{t.challenges.requirements}</h3>
            <ul className="space-y-2">
              {challenge.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-success-500 flex-shrink-0 mt-0.5" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-slate-900 mb-3">{t.challenges.deliverables}</h3>
            <ul className="space-y-2">
              {challenge.deliverables.map((del, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <Target className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  {del}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="font-bold text-slate-900 mb-4">{t.challenges.skillsRequired}</h3>
            <div className="flex flex-wrap gap-2">
              {challenge.skills.map((s) => (
                <span key={s} className="badge bg-primary-50 text-primary-700">{s}</span>
              ))}
            </div>
          </div>

          {/* Join / Submit section */}
          {!isJoined && (
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 mb-3">{t.challenges.readyToJoin}</h3>
              <p className="text-sm text-slate-500 mb-4">{t.challenges.readyToJoinDesc}</p>
              <button onClick={handleJoin} className="btn-primary w-full">{t.challenges.joinChallenge}</button>
            </div>
          )}

          {isJoined && !submission && (
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 mb-3">{t.challenges.submitSolution}</h3>
              <textarea
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                placeholder={t.challenges.solutionPlaceholder}
                rows={6}
                className="input-field mb-3 resize-none"
              />
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center mb-4">
                <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                <p className="text-xs text-slate-400">{t.challenges.uploadPlaceholder}</p>
              </div>
              <button onClick={handleSubmit} className="btn-primary w-full">{t.challenges.submitChallenge}</button>
            </div>
          )}

          {submission && evaluation && (
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-success-500" />
                <h3 className="font-bold text-slate-900">{t.challenges.submitted}</h3>
              </div>
              <div className="text-center mb-4">
                <p className="text-3xl font-bold text-slate-900">{evaluation.overall}%</p>
                <p className="text-xs text-slate-500">{t.challenges.overallScore}</p>
              </div>
              <button onClick={() => setShowEvaluation(true)} className="btn-secondary w-full mb-2">{t.challenges.viewEvaluation}</button>
              <button onClick={addToPortfolio} className="btn-primary w-full">{t.challenges.addToPortfolio}</button>
            </div>
          )}
        </div>
      </div>

      {/* Evaluation Modal */}
      <Modal open={showEvaluation} onClose={() => setShowEvaluation(false)} title={t.evaluation.title} maxWidth="max-w-lg">
        {evaluation && (
          <div>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white mx-auto mb-3 shadow-sm">
                <Award className="w-8 h-8" />
              </div>
              <p className="text-3xl font-bold text-slate-900">{evaluation.overall}%</p>
              <p className="text-sm text-slate-500">{t.evaluation.overallPerformance}</p>
            </div>

            <div className="space-y-3 mb-6">
              {[
                { label: t.evaluation.problemSolving, value: evaluation.problemSolving },
                { label: t.evaluation.technicalSkills, value: evaluation.technicalSkills },
                { label: t.evaluation.communication, value: evaluation.communication },
                { label: t.evaluation.businessUnderstanding, value: evaluation.businessUnderstanding },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="font-semibold text-slate-700">{item.value}%</span>
                  </div>
                  <ProgressBar value={item.value} size="sm" />
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-50 mb-4">
              <p className="text-sm text-slate-600 italic">"{evaluation.feedback}"</p>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-700 mb-2">{t.evaluation.skillsDemonstrated}</h4>
              <div className="flex flex-wrap gap-2">
                {evaluation.skillsDemonstrated.map((s) => (
                  <span key={s} className="badge bg-success-50 text-success-700">{s}</span>
                ))}
              </div>
            </div>

            <button onClick={addToPortfolio} className="btn-primary w-full">{t.challenges.addToPortfolio}</button>
          </div>
        )}
      </Modal>
    </AppLayout>
  );
}

function getCareerTitle(careerId: string): string {
  const titles: Record<string, string> = {
    accounting: 'Accountant',
    finance: 'Financial Analyst',
    marketing: 'Marketing Specialist',
    hr: 'HR Specialist',
    'business-analytics': 'Data Analyst',
    'business-analyst': 'Business Analyst',
    'supply-chain': 'Supply Chain Analyst',
    'banking-fintech': 'FinTech Analyst',
    'legal-practice': 'Legal Associate',
    'corporate-legal': 'Corporate Legal Counsel',
    'compliance-risk': 'Compliance Officer',
    'legal-research': 'Legal Researcher',
    'hr-labor-law': 'Labor Law Consultant',
    'legal-tech': 'Legal Tech Specialist',
  };
  return titles[careerId] || 'Student';
}
