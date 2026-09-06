import { Link } from 'react-router-dom';
import { FolderOpen, Award, Building2, ArrowRight, Star } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';
import { Badge } from '@/components/Badge';
import { EmptyState } from '@/components/EmptyState';
import { useAuth } from '@/contexts/AuthContext';

export function Portfolio() {
  const { user } = useAuth();
  if (!user) return null;

  const projects = user.portfolio || [];

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Portfolio</h1>
        <p className="text-sm text-slate-500 mt-1">Your completed challenges showcased as real-world projects.</p>
      </div>

      {projects.length === 0 ? (
        <EmptyState
          icon={<FolderOpen className="w-7 h-7" />}
          title="No projects in your portfolio yet"
          message="Complete challenges and add them to your portfolio to showcase your skills to employers."
          actionLabel="Browse Challenges"
          actionTo="/app/challenges"
        />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div key={project.id} className="card p-6 hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="success">{project.status}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-warning-500 fill-warning-500" />
                  <span className="text-sm font-bold text-slate-700">{project.score}%</span>
                </div>
              </div>

              <h3 className="font-bold text-slate-900 mb-1">{project.title}</h3>
              <p className="text-xs text-slate-500 mb-1">Role: {project.role}</p>
              <div className="flex items-center gap-1 text-xs text-slate-500 mb-3">
                <Building2 className="w-3.5 h-3.5" /> {project.company}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.skills.map((s) => (
                  <span key={s} className="badge bg-primary-50 text-primary-700 text-xs">{s}</span>
                ))}
              </div>

              <button className="btn-secondary w-full mt-auto">View Project</button>
            </div>
          ))}
        </div>
      )}

      {projects.length > 0 && (
        <div className="mt-8 card p-6 bg-gradient-to-br from-primary-50 to-white">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-primary-600" />
            <div>
              <h3 className="font-bold text-slate-900">{projects.length} Project{projects.length > 1 ? 's' : ''} in Portfolio</h3>
              <p className="text-sm text-slate-500">Average score: {Math.round(projects.reduce((acc, p) => acc + p.score, 0) / projects.length)}%</p>
            </div>
          </div>
          <Link to="/app/challenges" className="btn-primary mt-4">
            Take on More Challenges
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </AppLayout>
  );
}
