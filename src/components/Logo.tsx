import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoUrl from '@/Public/edumap-logo.png';

export function Logo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <Link to="/" className={`flex items-center gap-2 shrink-0 ${className}`}>
      {imageFailed ? (
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 text-white font-bold text-lg shadow-sm">
          E
        </div>
      ) : (
        <img
          src={logoUrl}
          alt="EduMap"
          onError={() => setImageFailed(true)}
          className="w-10 h-10 object-contain"
        />
      )}
      {showText && (
        <span className="text-xl font-bold text-slate-900 tracking-tight whitespace-nowrap">
          Edu<span className="text-primary-600">Map</span>
        </span>
      )}
    </Link>
  );
}
