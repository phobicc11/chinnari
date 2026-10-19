/**
 * getYoutubeEmbedUrl
 * ------------------------------------------------------------------
 * Accepts either a bare 11-character YouTube video ID or a full
 * watch/share URL and always returns a clean embed URL.
 * ------------------------------------------------------------------
 */
export const getYoutubeEmbedUrl = (idOrUrl) => {
  if (!idOrUrl) return '';

  // 1. لو أنت كاتب الـ ID بس (11 حرف)
  if (/^[a-zA-Z0-9_-]{11}$/.test(idOrUrl)) {
    return `https://www.youtube.com/embed/${idOrUrl}`;
  }

  try {
    const url = new URL(idOrUrl);
    
    // 2. لو أنت حاطط لينك قصير (youtu.be/ID)
    if (url.hostname.includes('youtu.be')) {
      const videoId = url.pathname.slice(1); // بياخد الـ ID من اللينك
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // 3. لو أنت حاطط لينك طويل (youtube.com/watch?v=ID)
    const videoId = url.searchParams.get('v');
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  } catch (e) {
    // لو اللينك مش صالح هيتجاهل الخطأ
  }

  return idOrUrl;
};