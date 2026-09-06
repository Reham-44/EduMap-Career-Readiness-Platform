import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Map,
  GitBranch,
  TrendingUp,
  Target,
  Users,
  FolderOpen,
  Briefcase,
  User,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { Logo } from './Logo';
import { useAuth } from '@/contexts/AuthContext';

const studentLinks = [
  { label: 'Dashboard', to: '/app/dashboard', icon: LayoutDashboard },
  { label: 'My Career Map', to: '/app/career-map', icon: Map },
  { label: 'Skill Gaps', to: '/app/skill-gaps', icon: GitBranch },
  { label: 'Roadmap', to: '/app/roadmap', icon: TrendingUp },
  { label: 'Challenges', to: '/app/challenges', icon: Target },
  { label: 'Mentorship', to: '/app/mentorship', icon: Users },
  { label: 'Portfolio', to: '/app/portfolio', icon: FolderOpen },
  { label: 'Opportunities', to: '/app/opportunities', icon: Briefcase },
  { label: 'Profile', to: '/app/profile', icon: User },
];

const companyLinks = [
  { label: 'Dashboard', to: '/company/dashboard', icon: LayoutDashboard },
  { label: 'Challenges', to: '/company/challenges', icon: Target },
  { label: 'Candidates', to: '/company/candidates', icon: Users },
];

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isCompany = user?.accountType === 'company';
  const links = isCompany ? companyLinks : studentLinks;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="px-5 py-5 border-b border-slate-100">
        <Logo />
      </div>

      <div className="px-3 py-4 flex-1 overflow-y-auto">
        <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          {isCompany ? 'Company' : 'Student'}
        </p>
        <nav className="space-y-1">
          {links.map((link) => {
            const active = location.pathname === link.to;
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-3 border-t border-slate-100">
        <div className="flex items-center gap-3 px-3 py-2 mb-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-sm font-semibold">
            {isCompany ? (user?.companyName?.[0] || 'C') : (user?.fullName?.[0] || 'S')}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-800 truncate">
              {isCompany ? user?.companyName : user?.fullName}
            </p>
            <p className="text-xs text-slate-400 truncate">{isCompany ? 'Company Account' : user?.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium text-slate-600 hover:bg-error-50 hover:text-error-600 transition-colors"
        >
          <LogOut className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:flex w-64 flex-shrink-0 bg-white border-e border-slate-200 fixed inset-y-0 start-0 z-30">
        {sidebarContent}
      </aside>

      <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-slate-200 flex items-center justify-between px-4 h-14">
        <Logo />
        <button onClick={() => setMobileOpen(true)} className="p-2 rounded-lg text-slate-600 hover:bg-slate-100">
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative w-64 bg-white h-full animate-slide-in-right">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
