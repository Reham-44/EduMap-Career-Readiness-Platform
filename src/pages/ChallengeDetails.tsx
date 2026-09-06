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
  const [solution, setSolution] = useState('');
  const [showEvaluation, setShowEvaluation] = useState(false);

  if (!user) return null;

  const challenge = id ? getChallengeById(id) : null;

  if (!challenge) {
    return (
      <AppLayout>
        <div className="card p-8 text-center max-w-md mx-auto mt-12">
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Challenge not found</h2>
          <Link to="/app/challenges" className="btn-primary mt-4">Back to Challenges</Link>
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
    showToast('Challenge added to your dashboard.', 'success');
  };

  const handleSubmit = () => {
    if (!solution.trim()) {
      showToast('Please describe your solution before submitting.', 'error');
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
    evalResult.feedback = evalResult.overall >= 85
      ? 'Excellent work! You demonstrated strong understanding and practical skills. Keep pushing your technical depth.'
      : evalResult.overall >= 75
      ? 'Strong understanding of the business problem. Improve the technical depth of your solution.'
      : 'Good effort. Focus on deepening your analysis and providing more structured deliverables.';

    updateUser({
      challengeSubmissions: { ...(user.challengeSubmissions || {}), [challenge.id]: sub },
      challengeEvaluations: { ...(user.challengeEvaluations || {}), [challenge.id]: evalResult },
    });

    showToast('Challenge submitted! Generating your evaluation...', 'success');
    setTimeout(() => setShowEvaluation(true), 500);
  };

  const addToPortfolio = () => {
    if (!evaluation) return;
    const project: PortfolioProject = {
      id: `portfolio-${challenge.id}`,
      challengeId: challenge.id,
      title: challenge.title,
      role: user.topCareer ? getCareerTitle(user.topCareer) : 'Student',
      skills: challenge.skills,
      score: evaluation.overall,
      company: challenge.company,
      status: 'Completed',
      addedAt: new Date().toISOString(),
    };
    const portfolio = user.portfolio || [];
    if (portfolio.some((p) => p.challengeId === challenge.id)) {
      showToast('This project is already in your portfolio.', 'info');
      return;
    }
    updateUser({ portfolio: [...portfolio, project] });
    showToast('Project added to your portfolio!', 'success');
    navigate('/app/portfolio');
  };

  return (
    <AppLayout>
      <Link to="/app/challenges" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 mb-4">
        <ArrowLeft className="w-4 h-4" /> Back to Challenges
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
            <Badge variant={difficultyColors[challenge.difficulty]}>{challenge.difficulty}</Badge>
            {isJoined && <Badge variant="primary">Joined</Badge>}
            {submission && <Badge variant="success">Submitted</Badge>}
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
            <Users className="w-4 h-4 text-slate-400" /> {challenge.participants} participants
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <h3 className="font-bold text-slate-900 mb-3">Description</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{challenge.description}</p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-slate-900 mb-3">Business Context</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{challenge.businessContext}</p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-slate-900 mb-3">The Problem</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{challenge.problem}</p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-slate-900 mb-3">Requirements</h3>
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
            <h3 className="font-bold text-slate-900 mb-3">Expected Deliverables</h3>
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
            <h3 className="font-bold text-slate-900 mb-4">Skills Required</h3>
            <div className="flex flex-wrap gap-2">
              {challenge.skills.map((s) => (
                <span key={s} className="badge bg-primary-50 text-primary-700">{s}</span>
              ))}
            </div>
          </div>

          {/* Join / Submit section */}
          {!isJoined && (
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 mb-3">Ready to take on this challenge?</h3>
              <p className="text-sm text-slate-500 mb-4">Join to access the full challenge and submit your solution.</p>
              <button onClick={handleJoin} className="btn-primary w-full">Join Challenge</button>
            </div>
          )}

          {isJoined && !submission && (
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 mb-3">Submit Your Solution</h3>
              <textarea
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                placeholder="Describe your solution..."
                rows={6}
                className="input-field mb-3 resize-none"
              />
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center mb-4">
                <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                <p className="text-xs text-slate-400">Upload your solution (mock placeholder)</p>
              </div>
              <button onClick={handleSubmit} className="btn-primary w-full">Submit Challenge</button>
            </div>
          )}

          {submission && evaluation && (
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-success-500" />
                <h3 className="font-bold text-slate-900">Submitted</h3>
              </div>
              <div className="text-center mb-4">
                <p className="text-3xl font-bold text-slate-900">{evaluation.overall}%</p>
                <p className="text-xs text-slate-500">Overall Score</p>
              </div>
              <button onClick={() => setShowEvaluation(true)} className="btn-secondary w-full mb-2">View Evaluation</button>
              <button onClick={addToPortfolio} className="btn-primary w-full">Add Project to Portfolio</button>
            </div>
          )}
        </div>
      </div>

      {/* Evaluation Modal */}
      <Modal open={showEvaluation} onClose={() => setShowEvaluation(false)} title="Challenge Evaluation" maxWidth="max-w-lg">
        {evaluation && (
          <div>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white mx-auto mb-3 shadow-sm">
                <Award className="w-8 h-8" />
              </div>
              <p className="text-3xl font-bold text-slate-900">{evaluation.overall}%</p>
              <p className="text-sm text-slate-500">Overall Performance</p>
            </div>

            <div className="space-y-3 mb-6">
              {[
                { label: 'Problem Solving', value: evaluation.problemSolving },
                { label: 'Technical Skills', value: evaluation.technicalSkills },
                { label: 'Communication', value: evaluation.communication },
                { label: 'Business Understanding', value: evaluation.businessUnderstanding },
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
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Skills Demonstrated</h4>
              <div className="flex flex-wrap gap-2">
                {evaluation.skillsDemonstrated.map((s) => (
                  <span key={s} className="badge bg-success-50 text-success-700">{s}</span>
                ))}
              </div>
            </div>

            <button onClick={addToPortfolio} className="btn-primary w-full">Add Project to Portfolio</button>
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
