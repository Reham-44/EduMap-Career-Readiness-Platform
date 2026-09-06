export function ProgressBar({
  value,
  max = 100,
  className = '',
  color,
  showLabel = false,
  size = 'md',
}: {
  value: number;
  max?: number;
  className?: string;
  color?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const heightClass = size === 'sm' ? 'h-1.5' : size === 'lg' ? 'h-4' : 'h-2.5';

  const barColor = color || (percentage >= 80 ? 'bg-success-500' : percentage >= 60 ? 'bg-secondary-500' : percentage >= 40 ? 'bg-warning-500' : 'bg-error-500');

  return (
    <div className={`w-full ${className}`}>
      <div className={`w-full ${heightClass} bg-slate-100 rounded-full overflow-hidden`}>
        <div
          className={`h-full ${barColor} rounded-full transition-all duration-700 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="flex justify-between mt-1">
          <span className="text-xs text-slate-500">{Math.round(percentage)}%</span>
        </div>
      )}
    </div>
  );
}
