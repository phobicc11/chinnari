/**
 * WatercolorFlower.jsx
 * ------------------------------------------------------------------
 * A soft, hand-painted-feeling blue floral sprig rendered as inline
 * SVG (no binary asset dependency — safe to theme via `tint`).
 * Used as an absolutely-positioned background decoration.
 * ------------------------------------------------------------------
 */
const WatercolorFlower = ({ className = '', tint = '#a9bcd8', flip = false }) => {
  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      aria-hidden="true"
      focusable="false"
    >
      <g opacity="0.85">
        {/* Petal cluster */}
        <ellipse cx="110" cy="60" rx="34" ry="42" fill={tint} opacity="0.55" transform="rotate(-15 110 60)" />
        <ellipse cx="150" cy="85" rx="30" ry="38" fill={tint} opacity="0.45" transform="rotate(20 150 85)" />
        <ellipse cx="80" cy="95" rx="28" ry="36" fill={tint} opacity="0.5" transform="rotate(-35 80 95)" />
        <circle cx="112" cy="88" r="14" fill="#f4d35e" opacity="0.9" />
        {/* Leaves / stem */}
        <path
          d="M112 100 C 100 140, 90 170, 60 200"
          stroke="#7f9b7a"
          strokeWidth="4"
          fill="none"
          opacity="0.6"
          strokeLinecap="round"
        />
        <ellipse cx="80" cy="150" rx="20" ry="10" fill="#8ea884" opacity="0.55" transform="rotate(-30 80 150)" />
        <ellipse cx="65" cy="180" rx="18" ry="9" fill="#8ea884" opacity="0.5" transform="rotate(-10 65 180)" />
      </g>
    </svg>
  );
};

export default WatercolorFlower;
