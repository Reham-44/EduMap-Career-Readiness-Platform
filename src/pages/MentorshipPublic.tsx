import { Link } from 'react-router-dom';
import { Target, Users, Award, ArrowRight, Star } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Badge } from '@/components/Badge';
import { mentors } from '@/data/mentors';
import { useLang } from '@/contexts/LanguageContext';

export function MentorshipPublic() {
  const { t } = useLang();
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">{t.mentorship.title}</h1>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">{t.mentorship.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mentors.slice(0, 6).map((mentor) => (
            <div key={mentor.id} className="card p-6 hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-semibold">
                  {mentor.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{mentor.name}</h3>
                  <p className="text-xs text-slate-500">{mentor.title}</p>
                </div>
              </div>
              <div className="space-y-1.5 mb-4 text-sm text-slate-600">
                <p><span className="text-slate-400">{t.mentorship.company}:</span> {mentor.company}</p>
                <p><span className="text-slate-400">{t.mentorship.experience}:</span> {mentor.yearsExperience}</p>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-warning-500 fill-warning-500" />
                  <span className="font-semibold">{mentor.rating}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {mentor.skills.map((s) => (
                  <span key={s} className="badge bg-slate-100 text-slate-600 text-xs">{s}</span>
                ))}
              </div>
              <Link to="/signup" className="btn-secondary w-full mt-auto">{t.mentorship.signUpToBook}</Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/signup" className="btn-primary text-base px-6 py-3">
            {t.mentorship.signUpToBook}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
