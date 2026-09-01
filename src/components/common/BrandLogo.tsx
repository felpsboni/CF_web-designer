interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export function BrandLogo({ size = 'md', showSubtitle = true, className = '' }: BrandLogoProps) {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  const titleSize = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl',
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Ícone Navegador com Brilho Neon */}
      <div className={`relative ${iconDimensions} rounded-xl p-1 bg-white border border-cyan-400/80 shadow-[0_0_15px_rgba(0,242,254,0.4)] flex items-center justify-center shrink-0 group-hover:shadow-[0_0_20px_rgba(0,242,254,0.7)] group-hover:border-cyan-300 transition-all duration-300`}>
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          {/* Top Browser Bar */}
          <g fill="#00B4D8">
            <circle cx="15" cy="18" r="3.5" />
            <circle cx="26" cy="18" r="3.5" />
            <circle cx="37" cy="18" r="3.5" />
            <rect x="47" y="14" width="40" height="8" rx="2.5" />
          </g>
          <line x1="10" y1="28" x2="90" y2="28" stroke="#00B4D8" strokeWidth="2.5" strokeLinecap="round" />

          {/* Letter F */}
          <path d="M16 38 H44 V48 H27 V56 H40 V66 H27 V86 H16 Z" fill="#0A2540" />

          {/* Letter C with Gradient */}
          <defs>
            <linearGradient id="c-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
          <path
            d="M78 48 C74 41 66 38 57 38 C43 38 34 49 34 62 C34 75 43 86 57 86 C67 86 75 81 79 74 L70 68 C67 73 63 76 57 76 C49 76 45 70 45 62 C45 54 49 48 57 48 C63 48 67 51 70 55 Z"
            fill="url(#c-grad)"
          />
        </svg>
      </div>

      {/* Texto FC Web Designer */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-display font-extrabold ${titleSize} tracking-tight text-white group-hover:text-cyan-400 transition-colors`}>
            FC WEB
          </span>
          <span className={`font-display font-light ${titleSize} tracking-tight text-cyan-400`}>
            DESIGNER
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] tracking-wider text-slate-400 uppercase mt-0.5 font-medium">
            Carlos & Felipe
          </span>
        )}
      </div>
    </div>
  );
}