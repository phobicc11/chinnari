import { motion } from 'framer-motion';
import Polaroid from './Polaroid.jsx';
import WatercolorFlower from './decorations/WatercolorFlower.jsx';
import { DoodleHeart, SparkleStar } from './decorations/HandDrawnMarks.jsx';

/**
 * LetterPage.jsx  —  Screen 3
 * ------------------------------------------------------------------
 * Responsive split layout: letter copy on the left, 
 * two staggered polaroids (side-by-side diagonal) + doodle heart on the right.
 * ------------------------------------------------------------------
 */
const LetterPage = ({ config, onNext, onBack }) => {
  const { letter } = config;

  return (
    <motion.section
      key="letter"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen px-6 sm:px-12 py-16 flex flex-col lg:flex-row items-start lg:items-center gap-12 max-w-7xl mx-auto"
    >
      {/* زهور مائية في الزوايا */}
      <WatercolorFlower className="hidden lg:block absolute top-6 right-10 w-44 opacity-70" />
      <WatercolorFlower className="hidden lg:block absolute bottom-10 left-0 w-40 opacity-60" flip />

      {/* Left: text */}
      <div className="flex-1 text-left order-2 lg:order-1 z-10 w-full">
        <h2 className="font-script text-4xl sm:text-5xl text-navy mb-6">{letter.heading}</h2>

        <p className="mb-4 text-navy/90 italic font-semibold">{letter.salutation}</p>

        {letter.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed text-navy/90 italic text-[14px] sm:text-[15.5px] max-w-xl">
            {p}
          </p>
        ))}

        <p className="italic text-navy/90 mt-6 font-semibold">{letter.signOff}</p>

        {/* حاوية أزرار التنقل */}
        <div className="mt-10 flex items-center gap-8">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="underline underline-offset-4 font-serif text-navy hover:text-wax transition-colors focus-visible:outline-none"
            >
              {letter.backLabel || 'Back'}
            </button>
          )}

          <button
            type="button"
            onClick={onNext}
            className="underline underline-offset-4 font-serif text-navy hover:text-wax transition-colors focus-visible:outline-none font-semibold"
          >
            {letter.nextLabel || 'Next'}
          </button>
        </div>
      </div>

      {/* Right: staggered photos + heart doodle + big star */}
      <div className="relative flex-1 order-1 lg:order-2 w-full flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
        {/* حاوية الصور تم تكبيرها وتحديد أبعادها لترتيب الصور بشكل قطري */}
        <div className="relative w-full max-w-[320px] sm:max-w-[420px] aspect-[4/5]">
          
          {/* النجمة الكبيرة الزرقاء خلف الصور (كما في صورتك) */}
          <SparkleStar className="absolute top-[10%] left-[45%] -translate-x-1/2 w-64 sm:w-80 h-64 sm:h-80 text-[#8fbadd] opacity-40 z-0" />

          {/* الصورة الأولى (أعلى اليسار) */}
          {letter.images[0] && (
            <Polaroid
              src={letter.images[0].src}
              alt={letter.images[0].alt}
              rotate={-3}
              delay={0.1}
              // تأخذ نصف العرض وتتمركز أعلى اليسار
              className="absolute top-[5%] left-0 w-[55%] sm:w-[50%] z-10 shadow-lg" 
            />
          )}

          {/* الصورة الثانية (أسفل اليمين) */}
          {letter.images[1] && (
            <Polaroid
              src={letter.images[1].src}
              alt={letter.images[1].alt}
              rotate={4}
              delay={0.3}
              // تأخذ نصف العرض وتتمركز أسفل اليمين بجوار الصورة الأولى
              className="absolute bottom-[20%] right-0 w-[55%] sm:w-[50%] z-20 shadow-lg"
            />
          )}

          {/* رسمة القلب في الأسفل */}
          <DoodleHeart 
            className="absolute -bottom-[5%] right-[10%] w-32 sm:w-40 text-[#1b2a4a] z-30" 
            color="#111" 
          />
        </div>
      </div>
    </motion.section>
  );
};

export default LetterPage;