import { motion } from 'framer-motion';

/**
 * EnvelopeCover.jsx  —  Screen 1
 * ------------------------------------------------------------------
 * تصميم مطابق للصورة المرجعية: ظرف أزرق داكن واقعي مع طيات خلفية،
 * وختم شمعي ذهبي/نحاسي مميز، وتنسيق أنيق للنصوص والخلفية.
 * ------------------------------------------------------------------
 */
const EnvelopeCover = ({ config, onOpen }) => {
  return (
    <motion.section
      key="cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      // لون خلفية كريمي/أوف-وايت يطابق الصورة
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-[#fbfaf7]"
    >
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-script text-6xl sm:text-7xl text-[#111a30] mb-8"
        style={{ letterSpacing: '0.02em' }}
      >
        {config.cover.eyebrow || 'For you'}
      </motion.h1>

      <motion.button
        type="button"
        onClick={onOpen}
        aria-label="Open the envelope"
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.97 }}
        // أبعاد الظرف مطابقة لنسبة العرض إلى الارتفاع في الصورة
        className="relative w-[300px] h-[200px] sm:w-[420px] sm:h-[280px] focus-visible:outline-none group shadow-2xl rounded-sm overflow-hidden"
      >
        {/* -- هيكل الظرف الخلفي الأساسي (أغمق درجة) -- */}
        <div className="absolute inset-0 bg-[#0d162a]" />

        {/* -- الطية اليسرى -- */}
        <div 
          className="absolute inset-0 bg-[#121e38]"
          style={{ clipPath: 'polygon(0 0, 50% 50%, 0 100%)' }}
        />

        {/* -- الطية اليمنى -- */}
        <div 
          className="absolute inset-0 bg-[#121e38]"
          style={{ clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)' }}
        />

        {/* -- الطية السفلية -- */}
        <div 
          className="absolute inset-0 bg-[#162545]"
          style={{ clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)' }}
        />

        {/* -- الطية العلوية (المتحركة مع تأثير الظل) -- */}
        <div
          className="absolute inset-x-0 top-0 h-[65%] bg-gradient-to-b from-[#1b2b54] to-[#152243] origin-top transition-transform duration-300 group-hover:-translate-y-2 z-10"
          style={{ 
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            filter: 'drop-shadow(0px 8px 6px rgba(0,0,0,0.4))'
          }}
        />

        {/* -- الختم الشمعي (Wax Seal) -- */}
        {/* تم وضعه في نقطة التقاء الطيات */}
        <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div 
            // استخدام شكل غير منتظم (Border Radius) مع تدرج ذهبي ليعطي ملمس الشمع الواقعي
            className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gradient-to-br from-[#e4bb79] via-[#cf9f53] to-[#a37229] shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
            style={{ borderRadius: '48% 52% 47% 53% / 54% 45% 55% 46%' }}
          >
            {/* الدائرة الداخلية لإعطاء عمق لختم الشمع */}
            <div 
              className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border-[2px] border-[#a87832] opacity-80"
              style={{ borderRadius: '52% 48% 55% 45% / 46% 54% 48% 52%' }}
            >
               {/* رسمة الوردة أو الشعار الداخلي (مبسط بـ SVG) */}
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 sm:w-8 sm:h-8 text-[#85591e] opacity-70">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.5C12 21.5 5 16 5 10.5C5 7.46243 7.46243 5 10.5 5C11.5367 5 12.5065 5.28639 13.3444 5.77663M12 21.5C12 21.5 19 16 19 10.5C19 7.46243 16.5376 5 13.5 5C13.4479 5 13.396 5.00069 13.3444 5.00206M12 21.5C12 21.5 12 18 12 14.5M13.3444 5.77663C14.0048 6.1627 14.5 6.88371 14.5 7.75C14.5 8.99264 13.4926 10 12.25 10C11.192 10 10.3045 9.2709 10.0553 8.28315M13.3444 5.00206C13.3444 5.00206 13.3444 5.38934 13.3444 5.77663" />
               </svg>
            </div>
          </div>
        </div>
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-[#111a30]/80 mt-8 text-sm sm:text-base font-serif italic tracking-wide"
      >
        {config.cover.subtext || 'tap on the letter to open'}
      </motion.p>
    </motion.section>
  );
};

export default EnvelopeCover;