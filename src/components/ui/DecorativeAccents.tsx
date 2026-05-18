export function OliveBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 20.5c14-6 28-4 38 2s20 8 34 4 24-10 38-18"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        opacity="0.6"
      />
      <ellipse cx="22" cy="14" rx="5" ry="3" fill="currentColor" opacity="0.15" />
      <ellipse cx="40" cy="12" rx="4.5" ry="2.5" fill="currentColor" opacity="0.15" />
      <ellipse cx="56" cy="16" rx="5" ry="3" fill="currentColor" opacity="0.15" />
      <ellipse cx="74" cy="14" rx="4" ry="2.5" fill="currentColor" opacity="0.15" />
      <ellipse cx="90" cy="18" rx="5" ry="3" fill="currentColor" opacity="0.15" />
      <ellipse cx="108" cy="16" rx="4" ry="2.5" fill="currentColor" opacity="0.15" />
      <circle cx="22" cy="14" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="40" cy="12" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="56" cy="16" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="74" cy="14" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="90" cy="18" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="108" cy="16" r="1.5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line x1="0" y1="8" x2="72" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <circle cx="100" cy="8" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="100" cy="8" r="6" stroke="currentColor" strokeWidth="0.5" opacity="0.3" fill="none" />
      <line x1="128" y1="8" x2="200" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}

export function CornerFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 2h76v8H10v70H2V2z"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.2"
        fill="none"
      />
      <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.15" />
    </svg>
  );
}
