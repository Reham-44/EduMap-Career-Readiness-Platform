import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
import type { CareerGoal, ConfidenceLevel } from '@/types';

const goals: { value: CareerGoal; label: string; icon: string }[] = [
  { value: 'Internship', label: 'I want an Internship', icon: 'Briefcase' },
  { value: 'First Job', label: 'I want my first Job', icon: 'Building2' },
  { value: 'Discover path', label: 'I want to discover my career path', icon: 'Compass' },
  { value: 'Improve CV', label: 'I want to improve my CV', icon: 'FileText' },
  { value: 'Practical experience', label: 'I want practical experience', icon: 'Target' },
];

const confidenceLevels: { value: ConfidenceLevel; label: string; desc: string }[] = [
  { value: 'Know exactly', label: 'I know exactly what I want', desc: 'I have a clear career direction' },
  { value: 'Some ideas', label: 'I have some ideas', desc: 'I have a few directions in mind' },
  { value: 'No idea yet', label: 'I have no idea yet', desc: 'I need help discovering my path' },
];

export function Onboarding() {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const { showToast } = useToast();
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<CareerGoal | ''>('');
  const [confidence, setConfidence] = useState<ConfidenceLevel | ''>('');

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Redirecting...</div>;
  }

  const handleNext = () => {
    if (step === 1 && !goal) {
      showToast('Please select your main goal.', 'error');
      return;
    }
    if (step === 2 && !confidence) {
      showToast('Please select your confidence level.', 'error');
      return;
    }
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    updateUser({ careerGoal: goal as CareerGoal, confidence: confidence as ConfidenceLevel });
    showToast('Onboarding complete!', 'success');
    navigate('/assessment');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="px-4 py-4">
        <Logo />
      </div>
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  s <= step ? 'bg-primary-600 text-white' : 'bg-slate-200 text-slate-400'
                }`}>
                  {s < step ? <CheckCircle2 className="w-4 h-4" /> : s}
                </div>
                {s < 2 && <div className={`w-12 h-0.5 ${s < step ? 'bg-primary-600' : 'bg-slate-200'}`} />}
              </div>
            ))}
          </div>

          <div className="card p-8">
            {step === 1 && (
              <>
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-primary-600" />
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Let's Build Your Career Map.</h1>
                <p className="text-sm text-slate-500 mb-6">What is your main goal?</p>
                <div className="space-y-2">
                  {goals.map((g) => (
                    <button
                      key={g.value}
                      onClick={() => setGoal(g.value)}
                      className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                        goal === g.value ? 'border-primary-500 bg-primary-50' : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        goal === g.value ? 'border-primary-600 bg-primary-600' : 'border-slate-300'
                      }`}>
                        {goal === g.value && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <span className="text-sm font-medium text-slate-700">{g.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="w-14 h-14 rounded-2xl bg-secondary-50 flex items-center justify-center mb-5">
                  <Compass className="w-7 h-7 text-secondary-600" />
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">How confident are you?</h1>
                <p className="text-sm text-slate-500 mb-6">How confident are you about your career choice?</p>
                <div className="space-y-2">
                  {confidenceLevels.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => setConfidence(c.value)}
                      className={`w-full flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                        confidence === c.value ? 'border-primary-500 bg-primary-50' : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        confidence === c.value ? 'border-primary-600 bg-primary-600' : 'border-slate-300'
                      }`}>
                        {confidence === c.value && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-slate-700 block">{c.label}</span>
                        <span className="text-xs text-slate-400">{c.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            <div className="flex items-center justify-between mt-8">
              {step > 1 ? (
                <button onClick={() => setStep(step - 1)} className="btn-ghost">Back</button>
              ) : <div />}
              <button onClick={handleNext} className="btn-primary">
                {step === 2 ? 'Start Assessment' : 'Continue'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
