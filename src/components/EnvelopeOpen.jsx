import { motion } from 'framer-motion';

/**
 * EnvelopeOpen.jsx  —  Screen 2
 * ------------------------------------------------------------------
 * The envelope flap swings open and a card slides up out of it.
 * Floating balloons drift up from the bottom of the viewport.
 * Tapping the card OR the text below it advances to Screen 3.
 * ------------------------------------------------------------------
 */
const Balloon = ({ left, delay, hue }) => (
  <motion.div
    className="absolute bottom-0 w-10 h-12 sm:w-14 sm:h-16 rounded-full"
    style={{ left, background: hue }}
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: '-120vh', opacity: [0, 1, 1, 0] }}
    transition={{ duration: 9, delay, repeat: Infinity, ease: 'linear' }}
  >
    <div className="absolute left-1/2 -translate-x-1/2 top-full w-px h-16 bg-navy/20" />
  </motion.div>
);

const EnvelopeOpen = ({ config, onContinue }) => {
  const balloonPositions = ['6%', '16%', '82%', '90%', '12%', '86%'];

  return (
    <motion.section
      key="envelope-open"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden"
    >
      {/* Floating balloons */}
      <div className="pointer-events-none absolute inset-0">
        {balloonPositions.slice(0, config.envelopeOpen.balloonCount || 6).map((left, i) => (
          <Balloon key={i} left={left} delay={i * 1.4} hue={i % 2 === 0 ? '#a9bcd8' : '#c9d3e6'} />
        ))}
      </div>

      {/* Envelope with open flap */}
      <div className="relative w-72 h-48 sm:w-96 sm:h-64 mb-6 z-10">
        <div className="absolute inset-0 bg-navy rounded-md shadow-2xl" />
        <motion.div
          className="absolute inset-x-0 top-0 h-1/2 bg-navy-light rounded-t-md origin-top"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 0%)' }}
          initial={{ rotateX: 0 }}
          animate={{ rotateX: 180 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />

        {/* Card popping up */}
        <motion.button
          type="button"
          onClick={onContinue}
          aria-label="Open the card for more"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: -70, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          whileHover={{ y: -80 }}
          whileTap={{ scale: 0.97 }}
          className="absolute inset-x-6 top-6 bottom-6 bg-cream rounded-sm shadow-xl border border-navy/10 flex flex-col items-center justify-center px-4 focus-visible:outline-none cursor-pointer"
        >
          <h2 className="font-script text-2xl sm:text-3xl text-navy whitespace-pre-line leading-tight pointer-events-none">
            {config.envelopeOpen.heading}
          </h2>
        </motion.button>
      </div>

      {/* -- تم التعديل هنا: تحويل p إلى button ليكون قابلاً للضغط -- */}
      <motion.button
        onClick={onContinue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        // أضفنا تأثيرات عند مرور الماوس (hover:text-navy) للإشارة إلى أنه قابل للضغط
        className="italic text-navy/70 text-sm sm:text-base z-20 cursor-pointer hover:text-navy transition-colors focus-visible:outline-none"
      >
        {config.envelopeOpen.subtext || 'tap on the letter for more'}
      </motion.button>
    </motion.section>
  );
};

export default EnvelopeOpen;