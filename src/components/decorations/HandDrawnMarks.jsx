/**
 * HandDrawnMarks.jsx
 * ------------------------------------------------------------------
 * Small hand-drawn-style vector accents: a single-line heart doodle
 * and a four-point sparkle/star, both used on the Letter and Video
 * screens per the reference mockups.
 * ------------------------------------------------------------------
 */

export const DoodleHeart = ({ className = '', color = '#1b2a4a' }) => (
  <svg viewBox="0 0 200 120" className={className} aria-hidden="true" focusable="false">
    <path
      d="M20 60 C 20 30, 60 20, 75 45 C 90 20, 130 30, 130 60 C 130 90, 90 105, 75 95 C 60 105, 20 90, 20 60 Z M 130 60 C 160 62, 185 70, 195 80"
      stroke={color}
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SparkleStar = ({ className = '', color = '#1b2a4a' }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
    <path
      d="M50 2 L58 40 L98 50 L58 60 L50 98 L42 60 L2 50 L42 40 Z"
      fill={color}
    />
  </svg>
);

export default DoodleHeart;
