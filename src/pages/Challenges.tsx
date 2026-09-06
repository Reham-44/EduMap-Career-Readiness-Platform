import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Target, Users, Clock, ArrowRight, AlertCircle } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';
import { Badge } from '@/components/Badge';
import { EmptyState } from '@/components/EmptyState';
import { useAuth } from '@/contexts/AuthContext';
import { challenges } from '@/data/challenges';
import type { Challenge, Faculty } from '@/types';
import { useLang } from '@/contexts/LanguageContext';

const difficultyColors: Record<string, 'success' | 'warning' | 'error'> = {
  Beginner: 'success',
  Intermediate: 'warning',
  Advanced: 'error',
};

export function Challenges() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { t } = useLang();
  const [filter, setFilter] = useState<Faculty | 'All'>('All');

  if (!user) return null;

  const userFaculty = user.faculty;
  const relevantChallenges = filter === 'All'
    ? challenges.filter((c) => c.faculty === userFaculty)
    : challenges.filter((c) => c.faculty === filter && c.faculty === userFaculty);

  const joinedSet = new Set(user.joinedChallenges || []);

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">{t.challenges.title}</h1>
        <p className="text-sm text-slate-500 mt-1">{t.challenges.subtitle}</p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter('All')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${filter === 'All' ? 'bg-primary-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
        >
          {t.challenges.allChallenges} {userFaculty}
        </button>
        <button
          onClick={() => setFilter(userFaculty)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${filter === userFaculty ? 'bg-primary-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
        >
          {userFaculty} {t.challenges.facultyOnly}
        </button>
      </div>

      {relevantChallenges.length === 0 ? (
        <EmptyState
          icon={<Target className="w-7 h-7" />}
          title={t.challenges.noChallenges}
          message={t.challenges.noChallengesDesc}
        />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {relevantChallenges.map((ch) => (
            <ChallengeCard key={ch.id} challenge={ch} joined={joinedSet.has(ch.id)} />
          ))}
        </div>
      )}
    </AppLayout>
  );
}

function ChallengeCard({ challenge, joined }: { challenge: Challenge; joined: boolean }) {
  const { t } = useLang();
  return (
    <Link to={`/app/challenges/${challenge.id}`} className="card p-5 hover:shadow-lg transition-shadow flex flex-col group">
      <div className="flex items-center justify-between mb-3">
        <Badge variant={difficultyColors[challenge.difficulty] || 'neutral'}>{challenge.difficulty === 'Beginner' ? t.difficulty.beginner : challenge.difficulty === 'Intermediate' ? t.difficulty.intermediate : t.difficulty.advanced}</Badge>
        {joined && <Badge variant="primary">{t.challenges.joined}</Badge>}
      </div>
      <h3 className="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">{challenge.title}</h3>
      <p className="text-xs text-slate-500 mb-3">{challenge.company}</p>
      <p className="text-sm text-slate-600 mb-4 flex-1 line-clamp-2">{challenge.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {challenge.skills.slice(0, 3).map((s) => (
          <span key={s} className="badge bg-slate-100 text-slate-600 text-xs">{s}</span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-400">
        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {challenge.estimatedTime}</span>
        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {challenge.participants} {t.challenges.participants}</span>
      </div>
    </Link>
  );
}
