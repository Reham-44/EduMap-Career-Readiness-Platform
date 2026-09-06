import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Building2 } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
import { useLang } from '@/contexts/LanguageContext';

export function CompanyLogin() {
  const navigate = useNavigate();
  const { loginAsCompany } = useAuth();
  const { showToast } = useToast();
  const { t } = useLang();
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim()) return;
    loginAsCompany(companyName.trim());
    showToast(t.auth.companyPortal, 'success');
    navigate('/company/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="px-4 py-4">
        <Logo />
      </div>
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="card p-8">
            <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-4">
              <Building2 className="w-7 h-7 text-primary-600" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">{t.auth.companyPortal}</h1>
            <p className="text-sm text-slate-500 mb-6">
              {t.auth.companyPortalDesc}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.auth.companyName}</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder={t.auth.companyNamePlaceholder}
                  className="input-field"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                {t.auth.enterCompanyPortal}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-center text-sm text-slate-500 mt-6">
              {t.auth.areYouStudent}{' '}
              <Link to="/login" className="text-primary-600 font-semibold hover:text-primary-700">
                {t.auth.studentLogin}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
