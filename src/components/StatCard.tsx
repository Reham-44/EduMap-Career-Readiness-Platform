import type { ReactNode } from 'react';

export function StatCard({
  icon,
  label,
  value,
  color = 'primary',
  subtitle,
}: {
  icon: ReactNode;
  label: string;
  value: string | number;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  subtitle?: string;
}) {
  const colorMap = {
    primary: 'bg-primary-50 text-primary-600',
    secondary: 'bg-secondary-50 text-secondary-600',
    success: 'bg-success-50 text-success-600',
    warning: 'bg-warning-50 text-warning-600',
    error: 'bg-error-50 text-error-600',
  };

  return (
    <div className="card p-5">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-11 h-11 rounded-xl ${colorMap[color]} flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-sm text-slate-500 mt-0.5">{label}</p>
      {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
    </div>
  );
}
