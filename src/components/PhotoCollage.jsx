import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WatercolorFlower from './decorations/WatercolorFlower.jsx';

/**
 * PhotoCollage.jsx
 * ------------------------------------------------------------------
 * تصميم القلب المتدرج (15 صورة - شبكة 30 عموداً):
 * - الصف الأول: 4 صور (2 في الجهة اليسرى و 2 في الجهة اليمنى مع فجوة في المنتصف)
 * - الصف الثاني: 5 صور (عرض القلب الكامل)
 * - الصف الثالث: 3 صور (متمركزة في المنتصف)
 * - الصف الرابع: صورتان (متمركزتان في المنتصف)
 * - الصف الخامس: صورة واحدة (نقطة نهاية القلب في الأسفل)
 * ------------------------------------------------------------------
 * تفاعل الصور:
 * عند النقر على أي صورة يتم تكبيرها في نافذة أنيقة (Modal) يظهر أسفلها
 * الرسالة الخاصة بها مع إمكانية التنقل بين الذكريات.
 * ------------------------------------------------------------------
 */

// إحداثيات ومواقع الصور الـ 15 في الشبكة المكونة من 30 عموداً و 5 صفوف
const PHOTO_GRID_POSITIONS = [
  // الصف الأول (4 صور: 2 يسار، 2 يمين)
  { gridRow: 1, gridColumn: '1 / span 6' },  // ph1 (أعلى اليسار 1)
  { gridRow: 1, gridColumn: '7 / span 6' },  // ph2 (أعلى اليسار 2)
  { gridRow: 1, gridColumn: '19 / span 6' }, // ph3 (أعلى اليمين 1)
  { gridRow: 1, gridColumn: '25 / span 6' }, // ph4 (أعلى اليمين 2)

  // الصف الثاني (5 صور: كامل العرض)
  { gridRow: 2, gridColumn: '1 / span 6' },  // ph5
  { gridRow: 2, gridColumn: '7 / span 6' },  // ph6
  { gridRow: 2, gridColumn: '13 / span 6' }, // ph7 (المنتصف)
  { gridRow: 2, gridColumn: '19 / span 6' }, // ph8
  { gridRow: 2, gridColumn: '25 / span 6' }, // ph9

  // الصف الثالث (3 صور متمركزة)
  { gridRow: 3, gridColumn: '7 / span 6' },  // ph10
  { gridRow: 3, gridColumn: '13 / span 6' }, // ph11 (المنتصف)
  { gridRow: 3, gridColumn: '19 / span 6' }, // ph12

  // الصف الرابع (صورتان متمركزتان)
  { gridRow: 4, gridColumn: '10 / span 6' }, // ph13
  { gridRow: 4, gridColumn: '16 / span 6' }, // ph14

  // الصف الخامس (صورة واحدة - رأس القلب)
  { gridRow: 5, gridColumn: '13 / span 6' }, // ph15
];

const PhotoCollage = ({ config, onNext, onBack }) => {
  const { collage } = config;
  const photos = collage.photos || [];

  // حالة الصورة المحددة للعرض المكبر (null تعني أن النافذة مغلقة)
  const [selectedIndex, setSelectedIndex] = useState(null);

  // دوال التنقل بين الصور داخل الـ Modal
  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  }, [photos.length]);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  }, [photos.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // الاستماع لأزرار لوحة المفاتيح (الأسهم للإغلاق والتنقل)
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <motion.section
      key="collage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#fbfbfb] overflow-hidden px-4 py-10"
    >
      {/* -- الزهور المائية في الخلفية -- */}
      <WatercolorFlower className="absolute top-[2%] left-[-8%] w-64 md:w-80 opacity-90 rotate-[-15deg] pointer-events-none" />
      <WatercolorFlower className="absolute top-[5%] right-[-5%] w-56 md:w-72 opacity-90 rotate-[20deg] flip-x pointer-events-none" />
      <WatercolorFlower className="absolute bottom-[5%] left-[-5%] w-64 md:w-72 opacity-85 rotate-[15deg] pointer-events-none" />
      <WatercolorFlower className="absolute bottom-[-2%] right-[-8%] w-72 md:w-80 opacity-100 rotate-[-10deg] flip-x pointer-events-none" />

      {/* -- رأس الصفحة وشارة التلميح التفاعلية (Feature Indicator) -- */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6 flex flex-col items-center text-center z-10 max-w-lg"
      >
        {collage.heading && (
          <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-navy mb-2 tracking-wide">
            {collage.heading}
          </h2>
        )}

        {/* شارة توضح للمستخدم إمكانية الضغط على الصور */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wax/15 border border-wax/40 text-navy font-serif text-xs sm:text-sm shadow-sm backdrop-blur-sm transition-all hover:bg-wax/25">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wax opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-wax"></span>
          </span>
          <span className="font-medium">
            {collage.hintText || '✨ Tap any photo to expand & reveal the special message ✨'}
          </span>
        </div>
      </motion.div>

      {/* -- شبكة القلب التفاعلية (15 صورة) -- */}
      <div
        className="grid w-full max-w-[340px] sm:max-w-md md:max-w-xl lg:max-w-2xl z-10 mx-auto"
        style={{
          gridTemplateColumns: 'repeat(30, minmax(0, 1fr))',
          gap: 0,
          filter: 'drop-shadow(0px 15px 35px rgba(10,13,29,0.18))'
        }}
      >
        {photos.slice(0, 15).map((photo, idx) => {
          const position = PHOTO_GRID_POSITIONS[idx] || {};
          return (
            <motion.div
              key={photo.id || idx}
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.04, ease: 'easeOut' }}
              whileHover={{
                scale: 1.08,
                zIndex: 30,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.96 }}
              style={{
                gridRow: position.gridRow,
                gridColumn: position.gridColumn,
              }}
              onClick={() => setSelectedIndex(idx)}
              className="group relative cursor-pointer border-[1.5px] sm:border-[2.5px] border-[#0a0d1d] bg-[#0a0d1d] overflow-hidden transition-shadow hover:shadow-2xl"
              title={photo.title || `Memory ${idx + 1}`}
            >
              <img
                src={photo.src}
                alt={photo.alt || `Memory ${idx + 1}`}
                className="w-full h-full object-cover aspect-[4/3] block transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />

              {/* تأثير تظليل وأيقونة مكبرة عند المرور فوق الصورة */}
              <div className="absolute inset-0 bg-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                <span className="bg-white/95 text-navy p-1.5 sm:p-2 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-200">
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* -- أزرار التنقل بين الصفحات (السابق / التالي) -- */}
      <div className="mt-10 flex items-center justify-center gap-8 z-20 relative">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 underline underline-offset-4 font-serif text-navy hover:text-wax transition-colors focus-visible:outline-none text-lg"
          >
            {collage.backLabel || 'Back'}
          </button>
        )}

        {onNext && (
          <button
            type="button"
            onClick={onNext}
            className="px-6 py-2 underline underline-offset-4 font-serif text-navy hover:text-wax transition-colors focus-visible:outline-none text-lg font-semibold"
          >
            {collage.nextLabel || 'Next'}
          </button>
        )}
      </div>

      {/* -- نافذة تكبير الصورة وعرض الرسالة (Lightbox Modal) -- */}
      <AnimatePresence>
        {selectedIndex !== null && selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy/80 backdrop-blur-md"
          >
            {/* بطاقة العرض المكبر */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 25 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#fdfbf7] rounded-2xl shadow-2xl overflow-hidden border border-wax/40 flex flex-col max-h-[90vh]"
            >
              {/* شريط الرأس في النافذة */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#f5efe6]/70 border-b border-wax/20">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-wax"></span>
                  <span className="font-serif font-semibold text-navy text-sm sm:text-base">
                    {selectedPhoto.title || `Memory ${selectedIndex + 1}`}
                  </span>
                  <span className="text-xs text-navy/60 font-sans">
                    ({selectedIndex + 1} / {photos.length})
                  </span>
                </div>

                {/* زر الإغلاق */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-navy/70 hover:text-navy hover:bg-navy/10 transition-colors focus-visible:outline-none"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* جسم النافذة: الصورة والرسالة */}
              <div className="p-5 sm:p-6 overflow-y-auto flex flex-col items-center text-center">
                {/* الصورة المكبرة */}
                <div className="relative w-full rounded-xl overflow-hidden shadow-md border-2 border-navy/10 bg-[#0a0d1d] max-h-[48vh] sm:max-h-[52vh] flex items-center justify-center">
                  <img
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt || `Memory ${selectedIndex + 1}`}
                    className="w-full h-auto max-h-[48vh] sm:max-h-[52vh] object-contain block mx-auto"
                  />
                </div>

                {/* فاصل زخرفي صغير */}
                <div className="my-4 flex items-center justify-center gap-2 text-wax opacity-80">
                  <span className="h-[1px] w-12 bg-wax/40"></span>
                  <span className="text-sm">❤</span>
                  <span className="h-[1px] w-12 bg-wax/40"></span>
                </div>

                {/* الرسالة التابعة للصورة */}
                <div className="w-full px-2">
                  <p
                    dir="auto"
                    className="font-serif text-base sm:text-lg text-navy/95 leading-relaxed italic bg-wax/10 p-4 rounded-xl border border-wax/25 shadow-inner"
                  >
                    “ {selectedPhoto.message || selectedPhoto.alt || 'A precious memory held in my heart ❤️'} ”
                  </p>
                </div>
              </div>

              {/* شريط التنقل السفلي بين الذكريات */}
              <div className="flex items-center justify-between px-5 py-3 bg-[#f5efe6]/70 border-t border-wax/20 text-sm font-serif">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-navy hover:text-wax hover:bg-white/60 transition-all focus-visible:outline-none"
                >
                  <span className="text-base">‹</span>
                  <span>Previous</span>
                </button>

                <div className="flex gap-1">
                  {photos.slice(0, 15).map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setSelectedIndex(dotIdx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        dotIdx === selectedIndex ? 'bg-wax w-5' : 'bg-navy/20 hover:bg-navy/40'
                      }`}
                      aria-label={`Go to memory ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-navy hover:text-wax hover:bg-white/60 transition-all focus-visible:outline-none"
                >
                  <span>Next</span>
                  <span className="text-base">›</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default PhotoCollage;