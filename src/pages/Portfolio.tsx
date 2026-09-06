import { Link } from 'react-router-dom';
import { FolderOpen, Award, Building2, ArrowRight, Star } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';
import { Badge } from '@/components/Badge';
import { EmptyState } from '@/components/EmptyState';
import { useAuth } from '@/contexts/AuthContext';
import { useLang } from '@/contexts/LanguageContext';

export function Portfolio() {
  const { user } = useAuth();
  const { t } = useLang();
  if (!user) return null;

  const projects = user.portfolio || [];

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">{t.portfolio.title}</h1>
        <p className="text-sm text-slate-500 mt-1">{t.portfolio.subtitle}</p>
      </div>

      {projects.length === 0 ? (
        <EmptyState
          icon={<FolderOpen className="w-7 h-7" />}
          title={t.portfolio.noProjects}
          message={t.portfolio.noProjectsDesc}
          actionLabel={t.portfolio.browseChallenges}
          actionTo="/app/challenges"
        />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div key={project.id} className="card p-6 hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="success">{t.common.completed}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-warning-500 fill-warning-500" />
                  <span className="text-sm font-bold text-slate-700">{project.score}%</span>
                </div>
              </div>

              <h3 className="font-bold text-slate-900 mb-1">{project.title}</h3>
              <p className="text-xs text-slate-500 mb-1">{t.portfolio.role}: {project.role}</p>
              <div className="flex items-center gap-1 text-xs text-slate-500 mb-3">
                <Building2 className="w-3.5 h-3.5" /> {project.company}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.skills.map((s) => (
                  <span key={s} className="badge bg-primary-50 text-primary-700 text-xs">{s}</span>
                ))}
              </div>

              <button className="btn-secondary w-full mt-auto">{t.common.viewProject}</button>
            </div>
          ))}
        </div>
      )}

      {projects.length > 0 && (
        <div className="mt-8 card p-6 bg-gradient-to-br from-primary-50 to-white">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-primary-600" />
            <div>
              <h3 className="font-bold text-slate-900">{projects.length} {t.portfolio.projectsInPortfolio}</h3>
              <p className="text-sm text-slate-500">{t.portfolio.averageScore}: {Math.round(projects.reduce((acc, p) => acc + p.score, 0) / projects.length)}%</p>
            </div>
          </div>
          <Link to="/app/challenges" className="btn-primary mt-4">
            {t.portfolio.takeMore}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </AppLayout>
  );
}
