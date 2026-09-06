import { Link } from 'react-router-dom';
import { Compass, GitBranch, TrendingUp, Target, Briefcase, ArrowRight, Search, Map } from 'lucide-react';
import { Navbar } from '@/components/Navbar';

const steps = [
  { icon: Search, title: 'Take the Assessment', desc: 'Answer 15 questions about your interests, skills, and work preferences. Our engine analyzes your answers to find the best career matches.', color: 'primary' },
  { icon: Compass, title: 'Get Your Career Matches', desc: 'See which career tracks fit you best with match scores and detailed reasoning for each recommendation.', color: 'secondary' },
  { icon: GitBranch, title: 'See Your Skill Gaps', desc: 'Compare your current skill levels to what employers expect. Identify exactly what you need to learn.', color: 'success' },
  { icon: TrendingUp, title: 'Follow Your Personalized Roadmap', desc: 'Track your progress through structured learning stages, from fundamentals to career-ready skills.', color: 'warning' },
  { icon: Target, title: 'Solve Real Challenges', desc: 'Tackle real-world business and legal problems from Egyptian companies. Get evaluated on your performance.', color: 'error' },
  { icon: Briefcase, title: 'Unlock Opportunities', desc: 'Get matched with internships and jobs based on your proven performance and completed challenges.', color: 'primary' },
];

const colorMap: Record<string, string> = {
  primary: 'bg-primary-50 text-primary-600',
  secondary: 'bg-secondary-50 text-secondary-600',
  success: 'bg-success-50 text-success-600',
  warning: 'bg-warning-50 text-warning-600',
  error: 'bg-error-50 text-error-600',
};

export function HowItWorks() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white mx-auto mb-5 shadow-sm">
            <Map className="w-8 h-8" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">How EduMap Works</h1>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">Six steps from where you are to where you want to be. No guessing, no wasted effort.</p>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="card p-6 flex gap-5 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${colorMap[step.color]} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-slate-400">STEP {i + 1}</span>
                    <h3 className="font-bold text-slate-900 text-lg">{step.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/signup" className="btn-primary text-base px-6 py-3">
            Start Your Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
