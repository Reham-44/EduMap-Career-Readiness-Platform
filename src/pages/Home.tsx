import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  GitBranch,
  TrendingUp,
  Target,
  Briefcase,
  Compass,
  BarChart3,
  Users,
  GraduationCap,
  Scale,
  Sparkles,
  CheckCircle2,
  Building2,
  Star,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { ProgressBar } from '@/components/ProgressBar';

const journeySteps = [
  { icon: Search, label: 'Assessment' },
  { icon: GitBranch, label: 'Skill Gap' },
  { icon: TrendingUp, label: 'Roadmap' },
  { icon: Target, label: 'Real Challenge' },
  { icon: Briefcase, label: 'Career Opportunity' },
];

const problems = [
  'I don\'t know which career fits me.',
  'I don\'t know what skills companies expect.',
  'I have a degree but no practical experience.',
  'My CV doesn\'t prove what I can actually do.',
  'I apply to jobs but rarely get interviews.',
];

const solutionSteps = [
  { icon: Compass, title: 'Discover', desc: 'Take a career assessment to find paths that match your interests and strengths.' },
  { icon: GitBranch, title: 'Analyze', desc: 'See exactly which skills you have and which ones you need to develop.' },
  { icon: TrendingUp, title: 'Learn', desc: 'Follow a personalized roadmap with structured learning at every stage.' },
  { icon: Target, title: 'Prove', desc: 'Solve real business challenges from companies and get evaluated on your performance.' },
  { icon: Briefcase, title: 'Connect', desc: 'Unlock internships and jobs matched to your proven skills and performance.' },
];

const howItWorksSteps = [
  { step: 1, title: 'Take the Assessment', desc: 'Answer 15 questions about your interests, skills, and work preferences.' },
  { step: 2, title: 'Get Your Career Matches', desc: 'See which career tracks fit you best with match scores and reasoning.' },
  { step: 3, title: 'See Your Skill Gaps', desc: 'Compare your current skill levels to what employers expect.' },
  { step: 4, title: 'Follow Your Personalized Roadmap', desc: 'Track your progress through structured learning stages.' },
  { step: 5, title: 'Solve Real Challenges', desc: 'Tackle real-world business problems from Egyptian companies.' },
  { step: 6, title: 'Unlock Opportunities', desc: 'Get matched with internships and jobs based on your proven performance.' },
];

const stats = [
  { value: '10K+', label: 'Students' },
  { value: '100+', label: 'Companies' },
  { value: '500+', label: 'Challenges' },
  { value: '80%+', label: 'Skill Completion Rate' },
];

const commercePaths = ['Accounting', 'Finance', 'Marketing', 'HR', 'Business Analytics', 'Business Analysis', 'Supply Chain', 'Banking / FinTech'];
const lawPaths = ['Legal Practice', 'Corporate Legal', 'Compliance & Risk', 'Legal Research', 'HR & Labor Law', 'Legal Tech'];

export function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Career-readiness for Egyptian students
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                From University to Career — <span className="text-primary-600">With a Map.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Discover the career path that fits you, identify the skills you are missing, gain practical experience, and connect with real opportunities.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/signup" className="btn-primary text-base px-6 py-3">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/career-paths" className="btn-secondary text-base px-6 py-3">
                  Explore Career Paths
                </Link>
              </div>
            </div>

            {/* Journey visual */}
            <div className="relative animate-slide-up">
              <div className="card p-6 lg:p-8">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">The EduMap Journey</h3>
                <div className="space-y-1">
                  {journeySteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div key={i} className="flex items-center gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-sm">
                            <Icon className="w-5 h-5" />
                          </div>
                          {i < journeySteps.length - 1 && <div className="w-0.5 h-8 bg-slate-200" />}
                        </div>
                        <div className="pb-8">
                          <p className="font-semibold text-slate-800">{step.label}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Graduation Shouldn't Be the Start of the Guessing Game.
            </h2>
            <p className="mt-4 text-slate-600">These are the struggles we hear from students every day.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((problem, i) => (
              <div key={i} className="card p-5 flex items-start gap-3 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-error-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-error-500 text-lg">!</span>
                </div>
                <p className="text-sm text-slate-700 font-medium pt-1">{problem}</p>
              </div>
            ))}
            <div className="card p-5 flex items-center gap-3 bg-primary-50 border-primary-200">
              <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary-600" />
              </div>
              <p className="text-sm text-primary-800 font-semibold pt-1">EduMap solves all of these.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              EduMap Turns Uncertainty Into a Career Plan.
            </h2>
            <p className="mt-4 text-slate-600">Five steps from lost to job-ready.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {solutionSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="card p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white mx-auto mb-4 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-semibold text-primary-600 mb-1">STEP {i + 1}</p>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-4 text-slate-600">A clear path from where you are to where you want to be.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {howItWorksSteps.map((step, i) => (
              <div key={i} className="flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  {i < howItWorksSteps.length - 1 && <div className="w-0.5 h-full bg-slate-200 mt-2" />}
                </div>
                <div className="pt-1.5 pb-4">
                  <h3 className="font-semibold text-slate-900 text-lg">{step.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET USERS */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Who Is EduMap For?</h2>
            <p className="mt-4 text-slate-600">Built for Commerce and Law students in Egyptian universities.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-5">
                <GraduationCap className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Commerce Students</h3>
              <p className="text-sm text-slate-500 mb-5">From accounting to FinTech, discover the business career that fits you.</p>
              <div className="flex flex-wrap gap-2">
                {commercePaths.map((path) => (
                  <span key={path} className="badge bg-primary-50 text-primary-700">{path}</span>
                ))}
              </div>
            </div>
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-secondary-50 flex items-center justify-center mb-5">
                <Scale className="w-7 h-7 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Law Students</h3>
              <p className="text-sm text-slate-500 mb-5">From litigation to legal tech, find your place in the legal world.</p>
              <div className="flex flex-wrap gap-2">
                {lawPaths.map((path) => (
                  <span key={path} className="badge bg-secondary-50 text-secondary-700">{path}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3">
            <span className="badge bg-white/20 text-white">Prototype Metrics</span>
          </div>
          <p className="text-center text-white/70 text-sm mb-10">Mock statistics for demonstration purposes</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/70 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP SECTION */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white mx-auto mb-6 shadow-sm">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
            EduMap doesn't just tell students what to learn. It shows them why, helps them practice, measures their performance, and connects them to opportunities.
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-10 lg:p-16 text-center bg-gradient-to-br from-primary-600 to-secondary-600 border-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Your Degree Is the Starting Point.<br />Your Career Is the Destination.
            </h2>
            <Link to="/signup" className="inline-flex items-center gap-2 mt-8 bg-white text-primary-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-slate-50 transition-colors shadow-sm text-base">
              Build My Career Map
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 text-white font-bold text-lg">
                  E
                </div>
                <span className="text-xl font-bold text-white">EduMap</span>
              </div>
              <p className="text-sm">Career readiness for the next generation.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link to="/how-it-works" className="hover:text-white transition-colors">About</Link>
                <Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
                <Link to="/career-paths" className="hover:text-white transition-colors">Career Paths</Link>
                <Link to="/challenges" className="hover:text-white transition-colors">Challenges</Link>
                <Link to="/mentorship" className="hover:text-white transition-colors">Mentorship</Link>
                <Link to="/login" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">For Companies</h4>
              <p className="text-sm mb-3">Are you a company looking to discover talent?</p>
              <Link to="/company/login" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-medium">
                <Building2 className="w-4 h-4" />
                Company Portal
              </Link>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-slate-800 text-center text-sm">
            <p>&copy; 2026 EduMap. Built for Egyptian university students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
