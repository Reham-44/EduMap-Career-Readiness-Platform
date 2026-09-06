import { Link } from 'react-router-dom';
import { Target, Clock, Users, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Badge } from '@/components/Badge';
import { challenges } from '@/data/challenges';

const difficultyColors: Record<string, 'success' | 'warning' | 'error'> = {
  Beginner: 'success',
  Intermediate: 'warning',
  Advanced: 'error',
};

export function ChallengesPublic() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">Real-World Challenges</h1>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">Solve real business and legal problems from Egyptian companies. Prove your skills and build your portfolio.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {challenges.map((ch) => (
            <div key={ch.id} className="card p-5 hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <Badge variant={difficultyColors[ch.difficulty]}>{ch.difficulty}</Badge>
                <Badge variant="neutral">{ch.faculty}</Badge>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{ch.title}</h3>
              <p className="text-xs text-slate-500 mb-3">{ch.company}</p>
              <p className="text-sm text-slate-600 mb-4 flex-1 line-clamp-2">{ch.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {ch.skills.slice(0, 3).map((s) => (
                  <span key={s} className="badge bg-slate-100 text-slate-600 text-xs">{s}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {ch.estimatedTime}</span>
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {ch.participants}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/signup" className="btn-primary text-base px-6 py-3">
            Sign up to join challenges
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
