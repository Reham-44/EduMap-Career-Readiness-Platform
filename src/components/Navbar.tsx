import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogIn, UserPlus, Languages, Moon, Sun } from 'lucide-react';
import { Logo } from './Logo';
import { useLang } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { lang, toggleLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const localizedLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.howItWorks, to: '/how-it-works' },
    { label: t.nav.careerPaths, to: '/career-paths' },
    { label: t.nav.challenges, to: '/public/challenges' },
    { label: t.nav.mentorship, to: '/public/mentorship' },
    { label: t.nav.opportunities, to: '/public/opportunities' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {localizedLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50/50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={toggleTheme} className="btn-ghost px-3" aria-label={theme === 'dark' ? t.common.lightMode : t.common.darkMode}>
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {theme === 'dark' ? t.common.lightMode : t.common.darkMode}
            </button>
            <button onClick={toggleLang} className="btn-ghost px-3" aria-label={t.common.switchLanguage}>
              <Languages className="w-4 h-4" />
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>
            <button
              onClick={() => navigate('/login')}
              className="btn-ghost"
            >
              <LogIn className="w-4 h-4" />
              {t.nav.login}
            </button>
            <button onClick={() => navigate('/signup')} className="btn-primary">
              <UserPlus className="w-4 h-4" />
              {t.nav.getStarted}
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t.common.toggleMenu}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {localizedLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button onClick={toggleTheme} className="btn-ghost w-full" aria-label={theme === 'dark' ? t.common.lightMode : t.common.darkMode}>
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />} {theme === 'dark' ? t.common.lightMode : t.common.darkMode}
              </button>
              <button onClick={toggleLang} className="btn-ghost w-full">
                <Languages className="w-4 h-4" /> {lang === 'ar' ? 'English' : 'العربية'}
              </button>
              <button
                onClick={() => { setMobileOpen(false); navigate('/login'); }}
                className="btn-secondary w-full"
              >
                {t.nav.login}
              </button>
              <button
                onClick={() => { setMobileOpen(false); navigate('/signup'); }}
                className="btn-primary w-full"
              >
                {t.nav.getStarted}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
