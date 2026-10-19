import { motion } from 'framer-motion';

/**
 * Polaroid.jsx
 * ------------------------------------------------------------------
 * A single reusable "photo" frame: white border, soft shadow,
 * optional rotation, used by LetterPage, PhotoCollage, and FinalPage.
 * ------------------------------------------------------------------
 */
const Polaroid = ({
  src,
  alt = '',
  rotate = 0,
  className = '',
  style = {},
  delay = 0,
  navyBorder = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: rotate - 6 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={`polaroid-frame inline-block ${navyBorder ? 'ring-1 ring-navy/70' : ''} ${className}`}
      style={style}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover block"
        loading="lazy"
      />
    </motion.div>
  );
};

export default Polaroid;
