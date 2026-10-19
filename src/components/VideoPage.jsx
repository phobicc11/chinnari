import { motion } from 'framer-motion';
import { SparkleStar } from './decorations/HandDrawnMarks.jsx';
import WatercolorFlower from './decorations/WatercolorFlower.jsx';
import { getYoutubeEmbedUrl } from '../utils/youtube.js';

/**
 * VideoPage.jsx  —  Screen 4
 * ------------------------------------------------------------------
 * تم إضافة إطار متوهج (Gradient Glow) بألوان الموقع (أزرق، ذهبي، كحلي)
 * ونقل الأسطوانة الدوارة (Vinyl Record) إلى أسفل اليمين مع حركة دوران مستمرة.
 * ------------------------------------------------------------------
 */
const VideoPage = ({ config, onNext, onBack }) => {
  const { video } = config;
  const embedUrl = getYoutubeEmbedUrl(video.youtubeId);

  return (
    <motion.section
      key="video"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center bg-[#fbfaf7] overflow-hidden"
    >
      {/* -- الزخارف الخلفية -- */}
      <WatercolorFlower className="hidden sm:block absolute top-8 right-6 w-44 opacity-80" />
      <WatercolorFlower className="hidden sm:block absolute bottom-8 left-6 w-40 opacity-70" flip />
      <SparkleStar className="absolute top-16 left-10 w-10 h-10 text-[#a9bcd8]" color="#a9bcd8" />
      <SparkleStar className="absolute top-32 right-12 w-6 h-6 text-[#cf9f53] opacity-60" color="#cf9f53" />

      <h2 className="font-script text-4xl sm:text-5xl text-[#0d162a] mb-12 z-10">
        {video.heading}
      </h2>

      {/* -- حاوية الفيديو مع الفريم المتوهج -- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="relative w-full max-w-xl z-10"
      >
        {/* 
          طبقة التوهج (Glow Layer): 
          تدرج لوني يجمع بين ألوان الموقع مع تأثير تمويه (Blur) وحركة نبض (Pulse) 
        */}
        <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-r from-[#a9bcd8] via-[#cf9f53] to-[#1b2b54] rounded-2xl blur-lg opacity-60 animate-pulse" />
        
        {/* الحاوية البيضاء الأساسية التي تحمل الفيديو */}
        <div className="relative p-3 sm:p-4 bg-white rounded-2xl ring-1 ring-white/50 shadow-xl">
          
          {/* -- مشغل الفيديو -- */}
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-black relative z-10 shadow-inner">
            <iframe
              className="w-full h-full"
              src={embedUrl}
              title={video.caption || 'Song for you'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* -- الوصف (Caption) -- */}
          {video.caption && (
            <p className="mt-4 mb-2 text-sm sm:text-base text-[#0d162a]/90 italic font-semibold relative z-10">
              {video.caption}
            </p>
          )}

          {/* -- أسطوانة الموسيقى الدوارة (Vinyl Record) أسفل اليمين -- */}
          <motion.div
            // حركة الدوران المستمرة
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            // تم وضعها أسفل اليمين (bottom, right)
            className="absolute -bottom-8 -right-4 sm:-bottom-12 sm:-right-8 w-20 h-20 sm:w-28 sm:h-28 bg-[#111] rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.6)] border-[3px] sm:border-[4px] border-[#222] flex items-center justify-center z-20"
          >
            {/* تفاصيل خطوط الأسطوانة الداخلية */}
            <div className="w-[85%] h-[85%] rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-[70%] h-[70%] rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-[50%] h-[50%] rounded-full border border-white/5 flex items-center justify-center">
                  
                  {/* ملصق الأسطوانة الملون (Label) */}
                  <div className="w-[75%] h-[75%] rounded-full bg-gradient-to-br from-[#cf9f53] to-[#a9bcd8] flex items-center justify-center shadow-inner">
                    {/* الفتحة البيضاء في المنتصف */}
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#fbfaf7] shadow-inner" />
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* -- حاوية أزرار التنقل (رجوع و التالي) -- */}
      <div className="mt-16 flex items-center justify-center gap-8 z-10">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="underline underline-offset-4 font-serif text-[#0d162a] hover:text-[#cf9f53] transition-colors focus-visible:outline-none text-lg"
          >
            {video.backLabel || 'Back'}
          </button>
        )}

        {onNext && (
          <button
            type="button"
            onClick={onNext}
            className="underline underline-offset-4 font-serif text-[#0d162a] hover:text-[#cf9f53] transition-colors focus-visible:outline-none text-lg font-semibold"
          >
            {video.nextLabel}
          </button>
        )}
      </div>
    </motion.section>
  );
};

export default VideoPage;