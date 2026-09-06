import { Link } from 'react-router-dom';

export function Logo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 text-white font-bold text-lg shadow-sm">
        E
      </div>
      {showText && (
        <span className="text-xl font-bold text-slate-900 tracking-tight">
          Edu<span className="text-primary-600">Map</span>
        </span>
      )}
    </Link>
  );
}
