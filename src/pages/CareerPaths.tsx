import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { ProgressBar } from '@/components/ProgressBar';
import { careers } from '@/data/careers';
import type { Faculty } from '@/types';
import * as Icons from 'lucide-react';

export function CareerPaths() {
  const [filter, setFilter] = useState<Faculty | 'All'>('All');

  const filtered = filter === 'All' ? careers : careers.filter((c) => c.faculty === filter);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">Career Paths</h1>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">Explore career tracks available for Commerce and Law students.</p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {(['All', 'Commerce', 'Law'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                filter === f ? 'bg-primary-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {f === 'All' ? 'All Paths' : f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((career) => {
            const IconComp = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[career.icon] || Icons.Briefcase;
            return (
              <div key={career.id} className="card p-6 hover:shadow-lg transition-shadow flex flex-col">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  career.faculty === 'Commerce' ? 'bg-primary-50 text-primary-600' : 'bg-secondary-50 text-secondary-600'
                }`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{career.title}</h3>
                <p className="text-sm text-slate-500 mb-4 flex-1">{career.shortDesc}</p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Key Skills</p>
                  <div className="flex flex-wrap gap-1.5">
                    {career.skills.slice(0, 4).map((s) => (
                      <span key={s.name} className="badge bg-slate-100 text-slate-600">{s.name}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className={`badge ${career.faculty === 'Commerce' ? 'bg-primary-50 text-primary-700' : 'bg-secondary-50 text-secondary-700'}`}>
                    {career.faculty}
                  </span>
                  <Link to="/signup" className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="card p-8 bg-gradient-to-br from-primary-50 to-white">
            <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Commerce Students</h3>
            <p className="text-sm text-slate-500 mb-4">8 career tracks available including Accounting, Finance, Marketing, HR, Business Analytics, Business Analyst, Supply Chain, and Banking & FinTech.</p>
            <div className="space-y-1.5">
              {['Accounting', 'Finance', 'Marketing', 'HR', 'Business Analytics', 'Business Analyst', 'Supply Chain', 'Banking / FinTech'].map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-success-500" /> {p}
                </div>
              ))}
            </div>
          </div>
          <div className="card p-8 bg-gradient-to-br from-secondary-50 to-white">
            <div className="w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center mb-4">
              <Scale className="w-6 h-6 text-secondary-600" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Law Students</h3>
            <p className="text-sm text-slate-500 mb-4">6 career tracks available including Legal Practice, Corporate Legal, Compliance & Risk, Legal Research, HR & Labor Law, and Legal Tech.</p>
            <div className="space-y-1.5">
              {['Legal Practice', 'Corporate Legal', 'Compliance & Risk', 'Legal Research', 'HR & Labor Law', 'Legal Tech'].map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-success-500" /> {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
