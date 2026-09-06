import { useState } from 'react';
import { Briefcase, MapPin, Star, Bookmark, Filter } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';
import { Badge } from '@/components/Badge';
import { EmptyState } from '@/components/EmptyState';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
import { opportunities } from '@/data/opportunities';
import type { Opportunity } from '@/types';

export function Opportunities() {
  const { user, updateUser } = useAuth();
  const { showToast } = useToast();
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [locationFilter, setLocationFilter] = useState<string>('All');
  const [minMatch, setMinMatch] = useState(0);

  if (!user) return null;

  const userOpps = opportunities.filter((o) => o.faculty === user.faculty);
  const savedSet = new Set(user.savedOpportunities || []);

  const locations = ['All', ...Array.from(new Set(userOpps.map((o) => o.location)))];
  const types = ['All', 'Internship', 'Entry-level'];

  const filtered = userOpps.filter((o) => {
    if (typeFilter !== 'All' && o.type !== typeFilter) return false;
    if (locationFilter !== 'All' && o.location !== locationFilter) return false;
    if (o.match < minMatch) return false;
    return true;
  });

  const sortedOpps = [...filtered].sort((a, b) => b.match - a.match);

  const toggleSave = (oppId: string) => {
    const saved = user.savedOpportunities || [];
    if (saved.includes(oppId)) {
      updateUser({ savedOpportunities: saved.filter((id) => id !== oppId) });
      showToast('Opportunity removed from saved.', 'info');
    } else {
      updateUser({ savedOpportunities: [...saved, oppId] });
      showToast('Opportunity saved!', 'success');
    }
  };

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Opportunities</h1>
        <p className="text-sm text-slate-500 mt-1">Internships and entry-level jobs matched to your profile.</p>
      </div>

      {/* Filters */}
      <div className="card p-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-sm font-medium text-slate-600">Filters</span>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5">Opportunity Type</label>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="input-field text-sm">
              {types.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5">Location</label>
            <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="input-field text-sm">
              {locations.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5">Minimum Match: {minMatch}%</label>
            <input type="range" min="0" max="100" value={minMatch} onChange={(e) => setMinMatch(Number(e.target.value))} className="w-full accent-primary-600" />
          </div>
        </div>
      </div>

      {sortedOpps.length === 0 ? (
        <EmptyState
          icon={<Briefcase className="w-7 h-7" />}
          title="No opportunities found"
          message="Try adjusting your filters to see more opportunities."
        />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sortedOpps.map((opp) => (
            <OpportunityCard key={opp.id} opp={opp} saved={savedSet.has(opp.id)} onToggleSave={() => toggleSave(opp.id)} />
          ))}
        </div>
      )}
    </AppLayout>
  );
}

function OpportunityCard({ opp, saved, onToggleSave }: { opp: Opportunity; saved: boolean; onToggleSave: () => void }) {
  return (
    <div className="card p-5 hover:shadow-lg transition-shadow flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Badge variant={opp.type === 'Internship' ? 'secondary' : 'primary'}>{opp.type}</Badge>
          <Badge variant={opp.match >= 90 ? 'success' : opp.match >= 80 ? 'warning' : 'neutral'}>{opp.match}% Match</Badge>
        </div>
        <button onClick={onToggleSave} className={`p-1.5 rounded-lg transition-colors ${saved ? 'text-primary-600 bg-primary-50' : 'text-slate-400 hover:bg-slate-100'}`}>
          <Bookmark className="w-4 h-4" fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>

      <h3 className="font-bold text-slate-900 mb-1">{opp.title}</h3>
      <p className="text-sm text-slate-500 mb-2">{opp.company}</p>

      <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {opp.location}</span>
      </div>

      {opp.salary && (
        <p className="text-xs text-slate-400 mb-3">{opp.salary}</p>
      )}

      <div className="flex flex-wrap gap-1.5 mb-4">
        {opp.requiredSkills.map((s) => (
          <span key={s} className="badge bg-slate-100 text-slate-600 text-xs">{s}</span>
        ))}
      </div>

      <button className="btn-secondary w-full mt-auto">View Details</button>
    </div>
  );
}
