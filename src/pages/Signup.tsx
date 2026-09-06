import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, GraduationCap, Calendar, Briefcase } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
import type { University, Faculty, Section, AcademicStatus, CareerExperience } from '@/types';
import { useLang } from '@/contexts/LanguageContext';

const universities: University[] = ['Cairo University', 'Ain Shams University', 'Helwan University'];
const faculties: Faculty[] = ['Commerce', 'Law'];
const sections: Section[] = ['Arabic', 'English'];
const academicStatuses: AcademicStatus[] = ['Fourth Year', 'Fresh Graduate'];
const careerExperiences: CareerExperience[] = ['No experience', 'Internship experience', 'Part-time experience', 'Full-time experience'];

export function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const { showToast } = useToast();
  const { t } = useLang();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    university: '',
    faculty: '',
    section: '',
    academicStatus: '',
    careerExperience: '',
    graduationYear: '',
  });
  const [error, setError] = useState('');

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const required = ['fullName', 'email', 'password', 'university', 'faculty', 'section', 'academicStatus', 'careerExperience', 'graduationYear'];
    for (const field of required) {
      if (!form[field as keyof typeof form]) {
        setError(t.auth.fillAllFields);
        return;
      }
    }

    if (form.password.length < 6) {
      setError(t.auth.passwordMinLength);
      return;
    }

    const result = signup({
      fullName: form.fullName,
      email: form.email,
      password: form.password,
      university: form.university as University,
      faculty: form.faculty as Faculty,
      section: form.section as Section,
      academicStatus: form.academicStatus as AcademicStatus,
      careerExperience: form.careerExperience as CareerExperience,
      graduationYear: form.graduationYear,
    });

    if (!result.success) {
      setError(result.error || t.auth.fillAllFields);
      return;
    }

    showToast(t.toasts.accountCreated, 'success');
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="px-4 py-4 flex items-center justify-between">
        <Logo />
        <Link to="/login" className="text-sm text-slate-500 hover:text-primary-600 font-medium">
          {t.auth.alreadyHaveAccount}
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          <div className="card p-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">{t.auth.createAccount}</h1>
            <p className="text-sm text-slate-500 mb-6">{t.auth.signupSubtitle}</p>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-error-50 border border-error-200 text-sm text-error-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.auth.fullName}</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="text" value={form.fullName} onChange={(e) => update('fullName', e.target.value)} placeholder={t.auth.fullNamePlaceholder} className="input-field pl-10" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.auth.email}</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder={t.auth.emailPlaceholder} className="input-field pl-10" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.auth.password}</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="password" value={form.password} onChange={(e) => update('password', e.target.value)} placeholder={t.auth.passwordMinLength} className="input-field pl-10" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.auth.university}</label>
                  <select value={form.university} onChange={(e) => update('university', e.target.value)} className="input-field">
                    <option value="">{t.auth.selectUniversity}</option>
                    {universities.map((u, index) => <option key={u} value={u}>{t.universities[index]}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.auth.faculty}</label>
                  <select value={form.faculty} onChange={(e) => update('faculty', e.target.value)} className="input-field">
                    <option value="">{t.auth.selectFaculty}</option>
                    {faculties.map((f, index) => <option key={f} value={f}>{t.faculties[index]}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.auth.section}</label>
                  <select value={form.section} onChange={(e) => update('section', e.target.value)} className="input-field">
                    <option value="">{t.auth.selectSection}</option>
                    {sections.map((s, index) => <option key={s} value={s}>{t.sections[index]}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.auth.graduationYear}</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="text" value={form.graduationYear} onChange={(e) => update('graduationYear', e.target.value)} placeholder="2026" className="input-field pl-10" />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.auth.academicStatus}</label>
                  <select value={form.academicStatus} onChange={(e) => update('academicStatus', e.target.value)} className="input-field">
                    <option value="">{t.auth.selectStatus}</option>
                    {academicStatuses.map((s, index) => <option key={s} value={s}>{t.academicStatuses[index]}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.auth.careerExperience}</label>
                  <select value={form.careerExperience} onChange={(e) => update('careerExperience', e.target.value)} className="input-field">
                    <option value="">{t.auth.selectExperience}</option>
                    {careerExperiences.map((c, index) => <option key={c} value={c}>{t.careerExperiences[index]}</option>)}
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full text-base py-3">
                {t.auth.createAccount}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
