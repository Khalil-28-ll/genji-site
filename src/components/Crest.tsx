interface CrestProps {
  glyph: string;
  size?: number;
}

/**
 * 简洁的平安风格“花押”图形：以线条与低饱和色绘制各角色的象征物。
 */
export default function Crest({ glyph, size = 64 }: CrestProps) {
  const g = glyph || 'default';
  return (
    <svg
      className="crest"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label={`象征纹章：${glyph}`}
    >
      <circle cx="32" cy="32" r="30" fill="var(--paper)" stroke="var(--line)" strokeWidth="1" />
      {renderGlyph(g)}
    </svg>
  );
}

function renderGlyph(glyph: string) {
  const ink = 'var(--ink)';
  const accent = 'var(--vermilion)';
  const gold = 'var(--gold)';
  const fuji = 'var(--fuji)';
  const moss = 'var(--moss)';
  const rose = 'var(--rose)';
  switch (glyph) {
    case 'paulownia':
      return (
        <g fill="none" stroke={accent} strokeWidth="1.4">
          <path d="M32 44v-12" />
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${22 + i * 10} ${20 + i * 4})`}>
              <circle r="3.4" fill={accent} stroke="none" />
              <circle r="1.8" cx="4" cy="-3" fill={gold} stroke="none" />
              <circle r="1.8" cx="-4" cy="-3" fill={gold} stroke="none" />
            </g>
          ))}
        </g>
      );
    case 'wisteria':
      return (
        <g fill={fuji} stroke="none">
          <path d="M32 14c4 10 4 18 0 26-4-8-4-16 0-26z" opacity="0.85" />
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx={32 - 7 + i * 5} cy={42 - i * 3} r={2.6} />
          ))}
          <path d="M24 30c8 2 8 2 16 0" stroke={moss} strokeWidth="1" fill="none" />
        </g>
      );
    case 'murasaki':
      return (
        <g>
          <circle cx="32" cy="30" r="8" fill={fuji} opacity="0.85" />
          <circle cx="32" cy="30" r="4.5" fill="none" stroke={ink} strokeWidth="1" />
          <path d="M32 38v8M24 30l-7 3M40 30l7 3" stroke={moss} strokeWidth="1.2" fill="none" />
        </g>
      );
    case 'hollyhock':
      return (
        <g fill="none" stroke={rose} strokeWidth="1.3">
          <path d="M32 48V18" />
          <circle cx="32" cy="18" r="4" fill={rose} stroke="none" />
          <circle cx="32" cy="28" r="4.5" fill={rose} opacity="0.75" stroke="none" />
          <circle cx="32" cy="39" r="4" fill={rose} opacity="0.55" stroke="none" />
          <path d="M27 28h10M26 39h12" stroke={moss} strokeWidth="1" />
        </g>
      );
    case 'yugao':
      return (
        <g>
          <circle cx="32" cy="30" r="9" fill="none" stroke={ink} strokeWidth="1.2" />
          <path d="M32 21c-5 4-5 14 0 18 5-4 5-14 0-18z" fill={gold} opacity="0.7" />
          <circle cx="32" cy="30" r="2.4" fill={accent} />
          <path d="M23 30c-5 1-7 4-7 4M41 30c5 1 7 4 7 4" stroke={moss} strokeWidth="1.2" fill="none" />
        </g>
      );
    case 'moon':
      return (
        <g>
          <path
            d="M38 16c8 6 8 22 0 30 10-3 14-12 12-24-2-8-6-10-12-6z"
            fill={gold}
            opacity="0.85"
          />
          <path d="M20 42c3 2 6 3 9 3" stroke={ink} strokeWidth="1.2" fill="none" opacity="0.6" />
          <path d="M18 47c5 2 10 3 15 2" stroke={ink} strokeWidth="1" fill="none" opacity="0.4" />
        </g>
      );
    case 'matsu':
      return (
        <g stroke={moss} strokeWidth="1.3" fill="none">
          <path d="M32 46V28" />
          <path d="M32 40c-8-2-14-8-17-14M32 38c8-2 14-8 17-14M32 42c-9 0-17-3-23-8M32 40c9 0 17-3 23-8" />
        </g>
      );
    case 'sakura':
      return (
        <g fill={rose}>
          {[0, 1, 2, 3, 4].map((i) => {
            const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
            const x = 32 + Math.cos(a) * 9;
            const y = 30 + Math.sin(a) * 9;
            return <ellipse key={i} cx={x} cy={y} rx="3.4" ry="5.4" transform={`rotate(${(i * 72) + 20} ${x} ${y})`} />;
          })}
          <circle cx="32" cy="30" r="2.2" fill={gold} />
        </g>
      );
    case 'cicada':
      return (
        <g fill="none" stroke={ink} strokeWidth="1.2">
          <ellipse cx="32" cy="32" rx="5" ry="11" />
          <path d="M27 26c-6-2-9-7-9-10 5 0 9 2 11 6M37 26c6-2 9-7 9-10-5 0-9 2-11 6" opacity="0.7" />
          <path d="M32 21v-4" />
        </g>
      );
    case 'benibana':
      return (
        <g>
          <circle cx="32" cy="30" r="10" fill={accent} opacity="0.75" />
          <circle cx="32" cy="30" r="4" fill={gold} />
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const a = (i / 6) * Math.PI * 2;
            return (
              <circle
                key={i}
                cx={32 + Math.cos(a) * 8}
                cy={30 + Math.sin(a) * 8}
                r="2.6"
                fill={accent}
                opacity="0.9"
              />
            );
          })}
        </g>
      );
    case 'cherry':
      return (
        <g>
          <circle cx="32" cy="30" r="10" fill={rose} opacity="0.4" />
          <g fill={rose}>
            {[0, 1, 2, 3, 4].map((i) => {
              const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
              const x = 32 + Math.cos(a) * 7;
              const y = 30 + Math.sin(a) * 7;
              return <ellipse key={i} cx={x} cy={y} rx="2.8" ry="4.2" transform={`rotate(${i * 72} ${x} ${y})`} />;
            })}
          </g>
          <circle cx="32" cy="30" r="1.8" fill={gold} />
          <path d="M22 40c4-4 8-4 12 0" stroke={moss} strokeWidth="1" fill="none" />
        </g>
      );
    case 'asagao':
      return (
        <g>
          <path d="M32 48V34" stroke={moss} strokeWidth="1.2" fill="none" />
          <path d="M32 34c-5 0-9-2-12-5 4-3 8-4 12-3 4-1 8 0 12 3-3 3-7 5-12 5z" fill={fuji} opacity="0.85" />
          <circle cx="32" cy="29" r="2.4" fill={gold} />
        </g>
      );
    case 'nadeshiko':
      return (
        <g>
          <g fill={rose}>
            {[0, 1, 2, 3, 4].map((i) => {
              const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
              const x = 32 + Math.cos(a) * 8;
              const y = 30 + Math.sin(a) * 8;
              return (
                <path
                  key={i}
                  d={`M${x - 3} ${y}q3 -4 6 0q-1 -3 -3 -3q-2 0 -3 3z`}
                  transform={`rotate(${i * 72 + 18} ${x} ${y})`}
                />
              );
            })}
          </g>
          <circle cx="32" cy="30" r="2" fill={gold} />
        </g>
      );
    case 'mist':
      return (
        <g stroke={ink} strokeWidth="1.2" fill="none" opacity="0.65">
          <path d="M18 30c6-4 12-4 18 0 6 4 10 3 12 0" />
          <path d="M16 38c7-3 14-3 21 0 5 2 9 1 11-1" />
          <path d="M22 46c6-2 12-2 18 0" />
        </g>
      );
    case 'kashiwagi':
      return (
        <g fill="none" stroke={moss} strokeWidth="1.3">
          <path d="M32 46V24c-6-1-10-5-12-10 6 0 10 2 12 6 2-4 6-6 12-6-2 5-6 9-12 10z" />
          <path d="M32 30c-4-2-7-5-9-9M32 30c4-2 7-5 9-9" opacity="0.6" />
        </g>
      );
    case 'incense':
      return (
        <g fill="none" stroke={gold} strokeWidth="1.4">
          <path d="M32 46c-10 0-14-8-9-15 4-5 12-5 15-12-2 8-8 11-12 11 2-6 0-12-6-14 2 7 0 14-7 17 3-8-2-13-9-13 5 6 4 13-1 18" />
          <circle cx="32" cy="14" r="2" fill={gold} stroke="none" />
        </g>
      );
    case 'boat':
      return (
        <g fill="none" stroke={ink} strokeWidth="1.3">
          <path d="M14 40c8 5 28 5 36 0M20 40v-7c4-1 6-1 10 0M44 40v-7c-4-1-6-1-10 0" />
          <path d="M24 34c6-3 12-3 18 0" stroke={gold} strokeWidth="1" />
        </g>
      );
    case 'wakana':
      return (
        <g fill="none" stroke={moss} strokeWidth="1.3">
          <path d="M32 48V32" />
          <path d="M32 40c-5-2-8-6-9-11 5 0 9 2 11 6M32 38c5-2 8-6 9-11-5 0-9 2-11 6" />
          <circle cx="32" cy="28" r="2" fill={gold} stroke="none" />
        </g>
      );
    default:
      return (
        <g fill="none" stroke={accent} strokeWidth="1.3">
          <circle cx="32" cy="30" r="9" />
          <path d="M32 21c-4 4-4 14 0 18 4-4 4-14 0-18z" opacity="0.5" />
        </g>
      );
  }
}
