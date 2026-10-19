import { motion } from 'framer-motion';
import WatercolorFlower from './decorations/WatercolorFlower.jsx';

/**
 * FinalPage.jsx  —  Screen 6
 * ------------------------------------------------------------------
 * تم ضبط الإحداثيات (left/right) بدقة لضمان ظهور الصورتين 
 * بجانب بعضهما (Side-by-side) مع تداخل بسيط، تماماً كالصورة المرجعية.
 * ------------------------------------------------------------------
 */
const FinalPage = ({ config, onRestart }) => {
  const { finale } = config;

  return (
    <motion.section
      key="finale"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center bg-[#fbfbfb] overflow-hidden"
    >
      {/* 
        حاوية الصور: تم تحديد نسبة أبعاد (aspect-ratio) وعرض أقصى 
        لضمان بقاء الصور بجانب بعضها مهما اختلف حجم الشاشة.
      */}
      <div className="relative w-full max-w-[360px] sm:max-w-[480px] aspect-[5/4] mx-auto mb-8 z-10 mt-8">
        
        {/* زهور مائية زرقاء (أعلى اليمين خلف الصورة الأولى) */}
        <WatercolorFlower className="absolute top-[-10%] right-[15%] w-32 sm:w-44 opacity-90 z-0 rotate-[15deg]" />

        {/* باقة زهور مائية ملونة (أسفل اليسار - تتقاطع مع الصورة الأولى) */}
        <WatercolorFlower className="absolute bottom-[-15%] left-[-10%] w-40 sm:w-52 opacity-100 z-30 rotate-[-10deg]" />

        {/* الصورة الأولى (على اليسار - أكبر قليلاً ومائلة لليسار) */}
        {finale.images[0] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15, x: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -5, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            // تم وضعها صراحة على اليسار (left-[8%]) لترك مساحة للصورة الثانية
            className="absolute top-[5%] left-[8%] w-[55%] aspect-[4/5] p-1 sm:p-1.5 bg-[#0a0f1d] rounded-sm shadow-[0_10px_25px_rgba(0,0,0,0.3)] z-10 overflow-hidden"
          >
            <img
              src={finale.images[0].src}
              alt={finale.images[0].alt || 'Memory 1'}
              className="w-full h-full object-cover rounded-sm"
            />
          </motion.div>
        )}

        {/* الصورة الثانية (على اليمين - أصغر قليلاً ومائلة لليمين وتغطي جزء من الأولى) */}
        {finale.images[1] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 15, x: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: 7, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            // تم وضعها صراحة على اليمين (right-[2%]) وأسفل قليلاً (top-[25%])
            className="absolute top-[25%] right-[2%] w-[48%] aspect-[4/5] p-1 sm:p-1.5 bg-[#0a0f1d] rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.4)] z-20 overflow-hidden"
          >
            <img
              src={finale.images[1].src}
              alt={finale.images[1].alt || 'Memory 2'}
              className="w-full h-full object-cover rounded-sm"
            />
          </motion.div>
        )}
      </div>

      {/* -- نص Happy Birthday -- */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative z-20 mt-4"
      >
        <p className="font-serif text-2xl sm:text-3xl text-[#0d162a] tracking-wide mb-0">
          {finale.heading || 'Happy'}
        </p>
        <h1 className="font-script text-6xl sm:text-7xl text-[#0d162a] leading-tight -mt-4">
          {finale.headingScript || 'Birthday'}
        </h1>
      </motion.div>

      {/* زر إعادة التشغيل */}
      {onRestart && (
        <button
          type="button"
          onClick={onRestart}
          className="mt-8 underline underline-offset-4 font-serif text-[#0d162a]/70 hover:text-[#0d162a] transition-colors focus-visible:outline-none z-20 text-sm sm:text-base"
        >
          {finale.restartLabel || 'Replay'}
        </button>
      )}
    </motion.section>
  );
};

export default FinalPage;