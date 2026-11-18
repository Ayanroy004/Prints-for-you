import {useState} from 'react';
import {Layers} from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  title,
  className = 'w-full h-full object-cover',
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center bg-gradient-to-br from-[#FDF2F8] via-white to-[#F8FAFC] border border-slate-200/80"
      >
        <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#9D174D]">
          <Layers className="w-5 h-5" aria-hidden="true" />
        </div>
        <div className="space-y-1 max-w-[220px]">
          <p className="text-sm font-semibold text-[#0F172A]">
            {title || alt}
          </p>
          <p className="text-xs text-slate-500">Prints for you · Delhi Studio</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
