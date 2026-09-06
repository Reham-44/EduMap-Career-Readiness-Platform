import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { ProgressBar } from '@/components/ProgressBar';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
import { getQuestions } from '@/data/questions';
import { calculateCareerMatches, calculateStrengths, getInitialSkillLevels } from '@/utils/recommendationEngine';

export function Assessment() {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const { showToast } = useToast();
  const questions = getQuestions(user?.faculty || 'Commerce');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Redirecting...</div>;
  }

  const question = questions[currentQ];
  const progress = ((currentQ + 1) / questions.length) * 100;
  const selectedOption = answers[question.id];

  const handleSelect = (optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }));
  };

  const handleNext = () => {
    if (selectedOption === undefined) {
      showToast('Please select an answer to continue.', 'error');
      return;
    }
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const matches = calculateCareerMatches(user.faculty, answers);
      const strengths = calculateStrengths(user.faculty, answers);
      const topCareer = matches[0]?.careerId || '';
      const skillLevels = getInitialSkillLevels(topCareer);

      updateUser({
        assessmentAnswers: answers,
        careerMatches: matches,
        topCareer,
        skillLevels,
      });

      showToast('Assessment complete! Generating your career map...', 'success');
      setTimeout(() => navigate('/assessment-result'), 500);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="px-4 py-4">
        <Logo />
      </div>
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-500">Career Assessment</span>
              <span className="text-sm font-semibold text-primary-600">Question {currentQ + 1} of {questions.length}</span>
            </div>
            <ProgressBar value={progress} color="bg-primary-600" size="md" />
          </div>

          <div className="card p-8 animate-fade-in" key={currentQ}>
            <h2 className="text-xl font-bold text-slate-900 mb-6">{question.text}</h2>

            <div className="space-y-2.5">
              {question.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                    selectedOption === i
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    selectedOption === i ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {selectedOption === i ? <CheckCircle2 className="w-4 h-4" /> : option.label}
                  </div>
                  <span className="text-sm font-medium text-slate-700">{option.text}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                onClick={handlePrev}
                disabled={currentQ === 0}
                className="btn-ghost disabled:opacity-40 disabled:pointer-events-none"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>
              <button onClick={handleNext} className="btn-primary">
                {currentQ === questions.length - 1 ? 'Submit' : 'Next'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
