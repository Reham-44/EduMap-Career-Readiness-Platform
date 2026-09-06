import { Link } from 'react-router-dom';
import { Briefcase, MapPin, ArrowRight, Filter } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Badge } from '@/components/Badge';
import { opportunities } from '@/data/opportunities';

export function OpportunitiesPublic() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">Opportunities</h1>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">Internships and entry-level jobs from Egyptian companies, matched to your skills and career path.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {opportunities.map((opp) => (
            <div key={opp.id} className="card p-5 hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant={opp.type === 'Internship' ? 'secondary' : 'primary'}>{opp.type}</Badge>
                <Badge variant={opp.match >= 90 ? 'success' : 'warning'}>{opp.match}% Match</Badge>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{opp.title}</h3>
              <p className="text-sm text-slate-500 mb-2">{opp.company}</p>
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {opp.location}</span>
              </div>
              {opp.salary && <p className="text-xs text-slate-400 mb-3">{opp.salary}</p>}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {opp.requiredSkills.map((s) => (
                  <span key={s} className="badge bg-slate-100 text-slate-600 text-xs">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/signup" className="btn-primary text-base px-6 py-3">
            Sign up to see your matches
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
