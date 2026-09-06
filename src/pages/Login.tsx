import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Building2 } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
import { useLang } from '@/contexts/LanguageContext';

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showToast } = useToast();
  const { t } = useLang();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError(t.auth.fillAllFields);
      return;
    }
    const result = login(email, password);
    if (!result.success) {
      setError(result.error || t.toasts.loginFailed);
      return;
    }
    showToast(t.toasts.welcomeBack, 'success');
    navigate('/app/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="px-4 py-4">
        <Logo />
      </div>
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="card p-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">{t.auth.welcomeBack}</h1>
            <p className="text-sm text-slate-500 mb-6">{t.auth.loginSubtitle}</p>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-error-50 border border-error-200 text-sm text-error-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.auth.email}</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.auth.emailPlaceholder}
                    className="input-field pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.auth.password}</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t.auth.passwordPlaceholder}
                    className="input-field pl-10"
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary w-full">
                {t.auth.login}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="text-center text-sm text-slate-500 mt-6">
              {t.auth.noAccount}{' '}
              <Link to="/signup" className="text-primary-600 font-semibold hover:text-primary-700">
                {t.auth.signUp}
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link to="/company/login" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600">
              <Building2 className="w-4 h-4" />
              {t.auth.companyLogin}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
