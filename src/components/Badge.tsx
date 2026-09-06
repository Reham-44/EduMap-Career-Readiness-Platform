import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral' | 'info';

const variants: Record<Variant, string> = {
  primary: 'bg-primary-50 text-primary-700',
  secondary: 'bg-secondary-50 text-secondary-700',
  success: 'bg-success-50 text-success-700',
  warning: 'bg-warning-50 text-warning-700',
  error: 'bg-error-50 text-error-700',
  neutral: 'bg-slate-100 text-slate-700',
  info: 'bg-blue-50 text-blue-700',
};

export function Badge({
  children,
  variant = 'neutral',
  className = '',
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return <span className={`badge ${variants[variant]} ${className}`}>{children}</span>;
}
