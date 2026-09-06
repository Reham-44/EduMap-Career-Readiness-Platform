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
import { useLang } from '@/contexts/LanguageContext';

const journeyIcons = [Search, GitBranch, TrendingUp, Target, Briefcase];
const solutionIcons = [Compass, GitBranch, TrendingUp, Target, Briefcase];

export function Home() {
  const { t } = useLang();
  const journeySteps = [t.home.assessment, t.home.skillGap, t.home.roadmap, t.home.realChallenge, t.home.careerOpportunity];
  const solutionSteps = t.home.solutionSteps.map((step, index) => ({ ...step, icon: solutionIcons[index] }));
  const howItWorksSteps = t.home.howItWorksSteps;
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
                {t.home.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                {t.home.heroTitle} <span className="text-primary-600">{t.home.heroTitleHighlight}</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                {t.home.heroSubtitle}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/signup" className="btn-primary text-base px-6 py-3">
                  {t.home.startJourney}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/career-paths" className="btn-secondary text-base px-6 py-3">
                  {t.home.explorePaths}
                </Link>
              </div>
            </div>

            {/* Journey visual */}
            <div className="relative animate-slide-up">
              <div className="card p-6 lg:p-8">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">{t.home.journeyTitle}</h3>
                <div className="space-y-1">
                  {journeySteps.map((step, i) => {
                    const Icon = journeyIcons[i];
                    return (
                      <div key={i} className="flex items-center gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-sm">
                            <Icon className="w-5 h-5" />
                          </div>
                          {i < journeySteps.length - 1 && <div className="w-0.5 h-8 bg-slate-200" />}
                        </div>
                        <div className="pb-8">
                          <p className="font-semibold text-slate-800">{step}</p>
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
              {t.home.problemTitle}
            </h2>
            <p className="mt-4 text-slate-600">{t.home.problemSubtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.home.problems.map((problem, i) => (
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
              <p className="text-sm text-primary-800 font-semibold pt-1">{t.home.problemSolution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              {t.home.solutionTitle}
            </h2>
            <p className="mt-4 text-slate-600">{t.home.solutionSubtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {solutionSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="card p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white mx-auto mb-4 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-semibold text-primary-600 mb-1">{i + 1}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">{t.home.howItWorksTitle}</h2>
            <p className="mt-4 text-slate-600">{t.home.howItWorksSubtitle}</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {howItWorksSteps.map((step, i) => (
              <div key={i} className="flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">{t.home.targetUsersTitle}</h2>
            <p className="mt-4 text-slate-600">{t.home.targetUsersSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-5">
                <GraduationCap className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t.home.commerceStudents}</h3>
              <p className="text-sm text-slate-500 mb-5">{t.home.commerceDesc}</p>
              <div className="flex flex-wrap gap-2">
                {t.home.commercePaths.map((path) => (
                  <span key={path} className="badge bg-primary-50 text-primary-700">{path}</span>
                ))}
              </div>
            </div>
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-secondary-50 flex items-center justify-center mb-5">
                <Scale className="w-7 h-7 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t.home.lawStudents}</h3>
              <p className="text-sm text-slate-500 mb-5">{t.home.lawDesc}</p>
              <div className="flex flex-wrap gap-2">
                {t.home.lawPaths.map((path) => (
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
            <span className="badge bg-white/20 text-white">{t.home.statsLabel}</span>
          </div>
          <p className="text-center text-white/70 text-sm mb-10">{t.home.statsSubtitle}</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {t.home.stats.map((stat, i) => (
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
            {t.home.usp}
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-10 lg:p-16 text-center bg-gradient-to-br from-primary-600 to-secondary-600 border-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              {t.home.ctaTitle1}<br />{t.home.ctaTitle2}
            </h2>
            <Link to="/signup" className="inline-flex items-center gap-2 mt-8 bg-white text-primary-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-slate-50 transition-colors shadow-sm text-base">
              {t.home.ctaButton}
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
              <p className="text-sm">{t.home.footerTagline}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">{t.home.quickLinks}</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link to="/how-it-works" className="hover:text-white transition-colors">{t.home.footerAbout}</Link>
                <Link to="/how-it-works" className="hover:text-white transition-colors">{t.home.footerHowItWorks}</Link>
                <Link to="/career-paths" className="hover:text-white transition-colors">{t.home.footerCareerPaths}</Link>
                <Link to="/challenges" className="hover:text-white transition-colors">{t.home.footerChallenges}</Link>
                <Link to="/mentorship" className="hover:text-white transition-colors">{t.home.footerMentorship}</Link>
                <Link to="/login" className="hover:text-white transition-colors">{t.home.footerContact}</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">{t.home.footerCompanyTitle}</h4>
              <p className="text-sm mb-3">{t.home.footerCompanyDesc}</p>
              <Link to="/company/login" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-medium">
                <Building2 className="w-4 h-4" />
                {t.home.footerCompanyLink}
              </Link>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-slate-800 text-center text-sm">
            <p>{t.home.footerCopyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
