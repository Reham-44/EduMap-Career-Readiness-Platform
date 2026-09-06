import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Star, Users, Search } from 'lucide-react';
import { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Badge } from '@/components/Badge';
import { useAuth } from '@/contexts/AuthContext';
import { useLang } from '@/contexts/LanguageContext';

const mockCandidates = [
  { id: 'c1', name: 'Sara Ahmed', university: 'Cairo University', career: 'Business Analyst', score: 94, skills: ['Excel', 'Power BI', 'Business Analysis'], challengesCompleted: 3 },
  { id: 'c2', name: 'Mohamed Adel', university: 'Ain Shams University', career: 'Finance', score: 91, skills: ['Financial Analysis', 'Excel', 'Financial Modeling'], challengesCompleted: 2 },
  { id: 'c3', name: 'Nour Hassan', university: 'Helwan University', career: 'Marketing', score: 89, skills: ['Digital Marketing', 'Content Strategy', 'Market Research'], challengesCompleted: 4 },
  { id: 'c4', name: 'Yara Khaled', university: 'Cairo University', career: 'Legal Practice', score: 88, skills: ['Case Analysis', 'Legal Research', 'Legal Writing'], challengesCompleted: 2 },
  { id: 'c5', name: 'Omar Sherif', university: 'Ain Shams University', career: 'Accounting', score: 86, skills: ['Accounting', 'Excel', 'Financial Analysis'], challengesCompleted: 3 },
  { id: 'c6', name: 'Farida Tarek', university: 'Helwan University', career: 'Compliance & Risk', score: 85, skills: ['Regulatory Knowledge', 'Risk Assessment', 'Audit'], challengesCompleted: 2 },
];

export function CompanyCandidates() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [career, setCareer] = useState('All');
  const { t } = useLang();

  if (!user) return null;
  const careers = [...new Set(mockCandidates.map((candidate) => candidate.career))];
  const visibleCandidates = mockCandidates.filter((candidate) =>
    (career === 'All' || candidate.career === career) &&
    `${candidate.name} ${candidate.university} ${candidate.career}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <AppLayout role="company">
      <Link to="/company/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 mb-4">
        <ArrowLeft className="w-4 h-4" /> {t.company.backToDashboard}
      </Link>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">{t.company.candidates}</h1>
        <p className="text-sm text-slate-500 mt-1">{t.company.candidatesSubtitle}</p>
      </div>

      <div className="card p-6 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-5 h-5 text-primary-600" />
          <h3 className="font-bold text-slate-900">{t.company.allCandidates}</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mb-5">
          <label className="relative">
            <span className="sr-only">{t.company.allCandidates}</span>
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} className="input-field ps-10" placeholder={t.company.allCandidates} />
          </label>
          <label>
            <span className="sr-only">{t.company.career}</span>
            <select value={career} onChange={(event) => setCareer(event.target.value)} className="input-field">
              <option value="All">{t.opportunities.all}</option>
              {careers.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-semibold text-slate-400 uppercase border-b border-slate-100">
                <th className="pb-3 pr-4">{t.company.candidate}</th>
                <th className="pb-3 pr-4">{t.company.university}</th>
                <th className="pb-3 pr-4">{t.company.career}</th>
                <th className="pb-3 pr-4">{t.company.challenges}</th>
                <th className="pb-3 pr-4">{t.company.score}</th>
                <th className="pb-3"></th>
              </tr>
            </thead>
            <tbody>
              {visibleCandidates.map((c) => (
                <tr key={c.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => navigate(`/company/candidates/${c.id}`)}>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-xs font-semibold">
                        {c.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <span className="font-medium text-slate-800 text-sm">{c.name}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4 text-sm text-slate-600">{c.university}</td>
                  <td className="py-3 pr-4"><Badge variant="primary">{c.career}</Badge></td>
                  <td className="py-3 pr-4 text-sm text-slate-600">{c.challengesCompleted}</td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-warning-500 fill-warning-500" />
                      <span className="text-sm font-bold text-slate-700">{c.score}%</span>
                    </div>
                  </td>
                  <td className="py-3">
                    <button onClick={(e) => { e.stopPropagation(); navigate(`/company/candidates/${c.id}`); }} className="text-sm font-semibold text-primary-600 hover:text-primary-700">
                      {t.common.view}
                    </button>
                  </td>
                </tr>
              ))}
              {visibleCandidates.length === 0 && <tr><td colSpan={6} className="py-8 text-center text-sm text-slate-500">{t.company.candidatesSubtitle}</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
