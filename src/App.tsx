import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { ToastProvider } from '@/contexts/ToastContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

// Public pages
import { Home } from '@/pages/Home';
import { HowItWorks } from '@/pages/HowItWorks';
import { CareerPaths } from '@/pages/CareerPaths';
import { ChallengesPublic } from '@/pages/ChallengesPublic';
import { MentorshipPublic } from '@/pages/MentorshipPublic';
import { OpportunitiesPublic } from '@/pages/OpportunitiesPublic';
import { Login } from '@/pages/Login';
import { Signup } from '@/pages/Signup';
import { CompanyLogin } from '@/pages/CompanyLogin';

// Student flow pages (no sidebar)
import { Onboarding } from '@/pages/Onboarding';
import { Assessment } from '@/pages/Assessment';
import { AssessmentResult } from '@/pages/AssessmentResult';
import { SkillGap } from '@/pages/SkillGap';

// Student app pages (with sidebar)
import { Dashboard } from '@/pages/Dashboard';
import { CareerMap } from '@/pages/CareerMap';
import { Roadmap } from '@/pages/Roadmap';
import { Challenges } from '@/pages/Challenges';
import { ChallengeDetails } from '@/pages/ChallengeDetails';
import { Mentorship } from '@/pages/Mentorship';
import { Opportunities } from '@/pages/Opportunities';
import { Portfolio } from '@/pages/Portfolio';
import { Profile } from '@/pages/Profile';

// Company pages
import { CompanyDashboard } from '@/pages/CompanyDashboard';
import { CompanyCandidates } from '@/pages/CompanyCandidates';
import { CandidateDetails } from '@/pages/CandidateDetails';
import { useAuth } from '@/contexts/AuthContext';

function RequireRole({ children, role }: { children: ReactNode; role: 'student' | 'company' }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen bg-slate-50" />;
  if (!user) return <Navigate to={role === 'company' ? '/company/login' : '/login'} replace />;
  if (user.accountType !== role) return <Navigate to={role === 'company' ? '/app/dashboard' : '/company/dashboard'} replace />;
  return <>{children}</>;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LanguageProvider>
        <ToastProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/career-paths" element={<CareerPaths />} />
            <Route path="/public/challenges" element={<ChallengesPublic />} />
            <Route path="/public/mentorship" element={<MentorshipPublic />} />
            <Route path="/public/opportunities" element={<OpportunitiesPublic />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/company/login" element={<CompanyLogin />} />

            {/* Student flow routes (no sidebar) */}
            <Route path="/onboarding" element={<RequireRole role="student"><Onboarding /></RequireRole>} />
            <Route path="/assessment" element={<RequireRole role="student"><Assessment /></RequireRole>} />
            <Route path="/assessment-result" element={<RequireRole role="student"><AssessmentResult /></RequireRole>} />
            <Route path="/skill-gap" element={<RequireRole role="student"><SkillGap /></RequireRole>} />
            <Route path="/skill-gaps" element={<Navigate to="/skill-gap" replace />} />
            <Route path="/app/skill-gaps" element={<Navigate to="/skill-gap" replace />} />

            {/* Student app routes (with sidebar) */}
            <Route path="/app/dashboard" element={<Dashboard />} />
            <Route path="/app/career-map" element={<CareerMap />} />
            <Route path="/app/roadmap" element={<Roadmap />} />
            <Route path="/app/challenges" element={<Challenges />} />
            <Route path="/app/challenges/:id" element={<ChallengeDetails />} />
            <Route path="/app/mentorship" element={<Mentorship />} />
            <Route path="/app/opportunities" element={<Opportunities />} />
            <Route path="/app/portfolio" element={<Portfolio />} />
            <Route path="/app/profile" element={<Profile />} />

            {/* Canonical student URLs, while retaining legacy /app links. */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/career-map" element={<CareerMap />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/challenges/:id" element={<ChallengeDetails />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/profile" element={<Profile />} />

            {/* Company routes (with sidebar) */}
            <Route path="/company/dashboard" element={<RequireRole role="company"><CompanyDashboard /></RequireRole>} />
            <Route path="/company/candidates" element={<RequireRole role="company"><CompanyCandidates /></RequireRole>} />
            <Route path="/company/candidates/:id" element={<RequireRole role="company"><CandidateDetails /></RequireRole>} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ToastProvider>
        </LanguageProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
