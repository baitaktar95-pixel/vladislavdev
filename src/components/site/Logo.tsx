export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="Vladislav Dev — веб-разработчик и AI специалист в Тирасполе">
      <div className="relative">
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_8px_rgba(76,201,255,0.6)]"
          role="img"
        >
          <title>Vladislav Dev — веб-разработчик и AI специалист в Тирасполе</title>
          {/* V shape with connecting lines */}
          <path
            d="M8 8 L20 32 L32 8"
            stroke="#4CC9FF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Connecting line between dots at top */}
          <line
            x1="8"
            y1="8"
            x2="32"
            y2="8"
            stroke="#4CC9FF"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.5"
          />
          {/* Three dots */}
          <circle cx="8" cy="8" r="3" fill="#4CC9FF" />
          <circle cx="32" cy="8" r="3" fill="#4CC9FF" />
          <circle cx="20" cy="32" r="3" fill="#4CC9FF" />
        </svg>
      </div>
      <span className="font-display font-bold text-base tracking-tight">
        <span className="text-foreground">Vladislav</span>
        <span className="text-neon"> Dev</span>
      </span>
    </div>
  );
}
