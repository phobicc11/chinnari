/**
 * clientConfig.js
 * ------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH for the entire greeting card experience.
 *
 * To spin up a new client site: duplicate this file's VALUES only.
 * Do not rename top-level keys — every component maps over this
 * exact shape. Image paths can point to /src/assets/<client>/...
 * or to any hosted URL.
 * ------------------------------------------------------------------
 */

// --- استدعاء الصور الأساسية وصفحات الرسالة والختام ---
import pf1 from '../assets/1.jpg';
import pf2 from '../assets/2.jpg';
import bp1 from '../assets/3.jpg';
import bp2 from '../assets/4.jpg';

// --- استدعاء صور القلب الـ 15 (ph1 إلى ph15) ---
import ph1 from '../assets/5.jpg';
import ph2 from '../assets/6.jpg';
import ph3 from '../assets/7.jpg';
import ph4 from '../assets/8.jpg';
import ph5 from '../assets/9.jpg';
import ph6 from '../assets/10.jpg';
import ph7 from '../assets/11.jpg';
import ph8 from '../assets/12.jpg';
import ph9 from '../assets/13.jpg';
import ph10 from '../assets/1.jpg';
import ph11 from '../assets/2.jpg';
import ph12 from '../assets/3.jpg';
import ph13 from '../assets/4.jpg';
import ph14 from '../assets/5.jpg';
import ph15 from '../assets/6.jpg';

const clientConfig = {
  // ---------------------------------------------------------------
  // 1. THEME — colors referenced via CSS custom properties in index.css
  //    (also mirrored in tailwind.config.js for utility classes)
  // ---------------------------------------------------------------
  theme: {
    background: '#fdfbf7', // cream
    primary: '#1b2a4a', // navy — headings, envelope, borders
    accent: '#c98a4b', // wax seal / gold accents
    balloon: '#a9bcd8', // balloon + watercolor flower tint
  },

  // ---------------------------------------------------------------
  // 2. RECIPIENT / META
  // ---------------------------------------------------------------
  meta: {
    recipientName: 'Love',
    senderName: 'Your Person',
    pageTitle: 'Happy Birthday, Love!',
  },

  // ---------------------------------------------------------------
  // 3. SCREEN 1 — COVER (closed envelope)
  // ---------------------------------------------------------------
  cover: {
    eyebrow: 'For you',
    subtext: 'tap on the letter to open',
  },

  // ---------------------------------------------------------------
  // 4. SCREEN 2 — ENVELOPE OPEN (card pop-up + balloons)
  // ---------------------------------------------------------------
  envelopeOpen: {
    heading: 'Happy Birthday,\nLove!',
    subtext: 'tap on the letter for more',
    balloonCount: 6,
  },

  // ---------------------------------------------------------------
  // 5. SCREEN 3 — LETTER PAGE
  // ---------------------------------------------------------------
  letter: {
    heading: 'Happy Birthday, Love!',
    salutation: 'Happy Birthday to my soulmate, my best friend, and the most important person in my world! ❤️',
    paragraphs: [
      'I’ve been thinking about what to write to you, but honestly, words will never be enough to describe how much you truly mean to me. I just want to take today to remind you of how deeply I love you and how grateful I am to have you in my life❤️🌎',
      'Thank you for being my safe space. From day one, you’ve shown me what real love, security, and care look like. The way you embrace me in every mood, protect my peace, and love me so unconditionally is something I will never take for granted. You always know how to calm my mind, understand me without me even speaking, and make every heavy day feel light just by being there❣️❣️❣️',
      'Thank you for all the effort you put into us, for paying attention to the smallest details, and for always making sure I feel safe, cherished, and valued. You are not just my boyfriend—you are my home, my anchor, and my biggest source of strength😍',
      'On your special day, I wish you all the happiness, success, and peace that your heart can hold. You deserve the absolute best that this life has to offer, and I promise to always be by your side, supporting you, loving you, and celebrating you through every step of the journey.👩‍❤️‍💋‍👨',
    ],
    signOff: 'Happy Birthday, my love. I love you more than words could ever say 🫂🫂🫂🥺',
    images: [
      { src: pf1, alt: 'A warm memory with you' },
      { src: pf2, alt: 'A special moment together' },
    ],
    backLabel: 'Back',
    nextLabel: 'Next',
  },

  // ---------------------------------------------------------------
  // 5.5 SCREEN 3.5 — QUIZ PAGE (8 Questions)
  // ---------------------------------------------------------------
  quiz: {
    heading: 'A Little Quiz for You',
    subtitle: 'Answer these 8 questions from the heart! ✨',
    screenshotNotice: '📸 Take a screenshot of your answers and send them to me! 💌',
    submitLabel: 'Submit Answers ✨',
    editLabel: 'Edit Answers ✏️',
    continueLabel: 'Continue to Next Screen 🎵',
    backLabel: 'Back',
    questions: [
      {
        id: 1,
        question: 'If we were in the Marvel universe, what superhero power would you want me to have?',
        type: 'text',
        placeholder: 'Type your answer here...',
      },
      {
        id: 2,
        question: 'If you had to order my exact favorite comfort food right now without asking me, what would you get?',
        type: 'text',
        placeholder: 'Type your answer here...',
      },
      {
        id: 3,
        question: "What’s your favorite memory of us together so far?",
        type: 'text',
        placeholder: 'Type your answer here...',
      },
      {
        id: 4,
        question: 'If we were in the Marvel universe, what superhero power would you want me to have?',
        type: 'choice',
        options: ['ME', 'SUPER GIRL'],
      },
      {
        id: 5,
        question: 'If you had to order my exact favorite comfort food right now without asking me, what would you get?',
        type: 'choice',
        options: ['Sushi', 'Mac'],
      },
      {
        id: 6,
        question: "What’s your favorite memory of us together so far?",
        type: 'text',
        placeholder: 'Type your answer here...',
      },
      {
        id: 7,
        question: "When you think about the future, what's something you really look forward to doing together?",
        type: 'choice',
        options: ['my future plan every thing with you', 'married me'],
      },
      {
        id: 8,
        question: "What's a song or a movie that always reminds you of me when you hear or see it?",
        type: 'text',
        placeholder: 'Type your answer here...',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 6. SCREEN 4 — VIDEO PAGE
  // ---------------------------------------------------------------
  video: {
    heading: 'Song For You',
    // Accepts a full YouTube watch/share URL OR a bare 11-char video ID.
    youtubeId: 'https://youtu.be/fOir_5j2NaE?si=6Bpb-kZYrEZoT-op',
    caption: 'love you — our song',
    backLabel: 'Back',
    nextLabel: 'Next',
  },

  // ---------------------------------------------------------------
  // 7. SCREEN 5 — PHOTO COLLAGE (15 photos in a heart-shaped grid)
  // ---------------------------------------------------------------
  collage: {
    heading: 'Our Special Memories',
    hintText: '✨ Tap any photo to expand & reveal the special message ✨',
    backLabel: 'Back',
    nextLabel: 'Next',
    // 15 photos mapped in order onto the heart layout with messages
    photos: [
      {
        id: 1,
        src: ph1,
        title: 'Memory 1',
        message: 'This is the first time we sit alone⏳',
        alt: 'This is the first time we sit alone',
      },
      {
        id: 2,
        src: ph2,
        title: 'Memory 2',
        message: 'Our crazy photooo😝',
        alt: 'Our crazy photooo',
      },
      {
        id: 3,
        src: ph3,
        title: 'Memory 3',
        message: 'The most photo we love❣️',
        alt: 'The most photo we love',
      },
      {
        id: 4,
        src: ph4,
        title: 'Memory 4',
        message: 'I will stay next to you for the end of life👩‍❤️‍💋‍👨',
        alt: 'I will stay next to you for the end of life',
      },
      {
        id: 5,
        src: ph5,
        title: 'Memory 5',
        message: 'FIRST CALL🥹🥹',
        alt: 'FIRST CALL',
      },
      {
        id: 6,
        src: ph6,
        title: 'Memory 6',
        message: 'FIRST EYE CONTACT💘',
        alt: 'FIRST EYE CONTACT',
      },
      {
        id: 7,
        src: ph7,
        title: 'Memory 7',
        message: 'HWA ENTA MSH OLT MSH RAI7 EL MADRSAA!!!',
        alt: 'HWA ENTA MSH OLT MSH RAI7 EL MADRSAA!!!',
      },
      {
        id: 8,
        src: ph8,
        title: 'Memory 8',
        message: 'Beside u ever🙈',
        alt: 'Beside u ever',
      },
      {
        id: 9,
        src: ph9,
        title: 'Memory 9',
        message: "I'm always proud of you, My doctor🧑‍⚕️",
        alt: "I'm always proud of you, My doctor",
      },
      {
        id: 10,
        src: ph10,
        title: 'Memory 10',
        message: 'Watch a movie with you is the best thing 😍',
        alt: 'Watch a movie with you is the best thing',
      },
      {
        id: 11,
        src: ph11,
        title: 'Memory 11',
        message: 'Until 3:00 AM',
        alt: 'Until 3:00 AM',
      },
      {
        id: 12,
        src: ph12,
        title: 'Memory 12',
        message: 'Dahab again!😍',
        alt: 'Dahab again!',
      },
      {
        id: 13,
        src: ph13,
        title: 'Memory 13',
        message: 'Dool kano henak😂',
        alt: 'Dool kano henak',
      },
      {
        id: 14,
        src: ph14,
        title: 'Memory 14',
        message: 'Hat coffee w arg3 mafesh madrsaa🥹',
        alt: 'Hat coffee w arg3 mafesh madrsaa',
      },
      {
        id: 15,
        src: ph15,
        title: 'Memory 15',
        message: 'First 10 hr call🤪',
        alt: 'First 10 hr call',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 8. SCREEN 6 — FINAL PAGE
  // ---------------------------------------------------------------
  finale: {
    images: [
      { src: bp1, alt: 'A cozy memory together' },
      { src: bp2, alt: 'A happy, sweet moment' },
    ],
    heading: 'Happy',
    headingScript: 'Birthday',
    restartLabel: 'Read again',
  },
};

export default clientConfig;
