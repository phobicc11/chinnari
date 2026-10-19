import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WatercolorFlower from './decorations/WatercolorFlower.jsx';
import { SparkleStar, DoodleHeart } from './decorations/HandDrawnMarks.jsx';

/**
 * QuizPage.jsx — Screen 3.5 (After LetterPage)
 * ------------------------------------------------------------------
 * An 8-question romantic quiz with both multiple-choice & open-ended questions.
 * Upon submitting, displays a gorgeous review summary screen with a prompt:
 * "Take a screenshot of your answers and send them to me! 💌"
 * Then allows continuing to the next screen.
 * ------------------------------------------------------------------
 */
const QuizPage = ({ config, onNext, onBack }) => {
  const quiz = config.quiz || {};
  const questions = quiz.questions || [];

  // Store answers keyed by question ID
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleTextChange = (id, val) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  };

  const handleChoiceSelect = (id, option) => {
    setAnswers((prev) => ({ ...prev, [id]: option }));
  };

  const answeredCount = Object.keys(answers).filter(
    (k) => answers[k] && answers[k].toString().trim().length > 0
  ).length;

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopy = () => {
    const textToCopy = questions
      .map((q, idx) => `${idx + 1}. ${q.question}\nAnswer: ${answers[q.id] || '(No answer)'}`)
      .join('\n\n');

    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <motion.section
      key="quiz"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen px-4 sm:px-8 py-14 flex flex-col items-center justify-center bg-[#fdfbf7] overflow-hidden"
    >
      {/* Decorative Background Accents */}
      <WatercolorFlower className="absolute top-[-2%] left-[-6%] w-60 md:w-80 opacity-75 rotate-[-15deg] pointer-events-none" />
      <WatercolorFlower className="absolute top-[4%] right-[-5%] w-56 md:w-72 opacity-75 rotate-[20deg] flip-x pointer-events-none" />
      <WatercolorFlower className="absolute bottom-[2%] left-[-4%] w-64 md:w-72 opacity-70 rotate-[15deg] pointer-events-none" />
      <WatercolorFlower className="absolute bottom-[-3%] right-[-6%] w-64 md:w-80 opacity-80 rotate-[-10deg] flip-x pointer-events-none" />
      <SparkleStar className="absolute top-12 left-[12%] w-8 h-8 text-[#a9bcd8] opacity-60 pointer-events-none" color="#a9bcd8" />
      <SparkleStar className="absolute top-28 right-[15%] w-6 h-6 text-wax opacity-60 pointer-events-none" color="#c98a4b" />

      <div className="w-full max-w-2xl z-10 mx-auto">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            /* ============================================================ */
            /* 1. QUIZ QUESTIONS FORM VIEW                                  */
            /* ============================================================ */
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="font-script text-4xl sm:text-5xl text-navy mb-3">
                  {quiz.heading || 'A Little Quiz for You'}
                </h2>
                <p className="font-serif italic text-navy/80 text-sm sm:text-base max-w-md mx-auto">
                  {quiz.subtitle || 'Answer these 8 questions from the heart! ✨'}
                </p>

                {/* Progress pill */}
                <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-wax/15 border border-wax/30 text-xs font-serif text-navy">
                  <span className="w-2 h-2 rounded-full bg-wax"></span>
                  <span>
                    Answered: <strong className="text-navy">{answeredCount}</strong> / {questions.length}
                  </span>
                </div>
              </div>

              {/* Questions List */}
              <form onSubmit={handleSubmit} className="w-full space-y-6">
                {questions.map((q, idx) => {
                  const currentVal = answers[q.id] || '';
                  const isAnswered = Boolean(currentVal && currentVal.trim?.() !== '');

                  return (
                    <motion.div
                      key={q.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      className={`p-5 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-sm border transition-all duration-200 shadow-sm ${
                        isAnswered ? 'border-wax shadow-md ring-1 ring-wax/30' : 'border-navy/10 hover:border-navy/30'
                      }`}
                    >
                      {/* Question Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-navy text-white font-serif text-sm flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <h3 className="font-serif text-base sm:text-lg text-navy font-semibold leading-snug pt-0.5">
                          {q.question}
                        </h3>
                      </div>

                      {/* Multiple Choice Options */}
                      {q.type === 'choice' && q.options && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                          {q.options.map((option, optIdx) => {
                            const isSelected = currentVal === option;
                            return (
                              <button
                                key={optIdx}
                                type="button"
                                onClick={() => handleChoiceSelect(q.id, option)}
                                className={`px-4 py-3.5 rounded-xl border text-sm sm:text-base font-serif font-medium transition-all text-left flex items-center justify-between ${
                                  isSelected
                                    ? 'bg-navy text-white border-navy shadow-md scale-[1.01]'
                                    : 'bg-[#fbfaf7] text-navy/90 border-navy/15 hover:border-wax hover:bg-wax/10'
                                }`}
                              >
                                <span>{option}</span>
                                {isSelected ? (
                                  <span className="text-wax text-lg">✓</span>
                                ) : (
                                  <span className="w-4 h-4 rounded-full border border-navy/30 inline-block"></span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Open-Ended Text Input */}
                      {q.type === 'text' && (
                        <div className="mt-3">
                          <textarea
                            rows="2"
                            value={currentVal}
                            onChange={(e) => handleTextChange(q.id, e.target.value)}
                            placeholder={q.placeholder || 'Type your answer here...'}
                            className="w-full px-4 py-3 rounded-xl border border-navy/20 bg-[#fbfaf7] text-navy placeholder:text-navy/40 font-serif text-sm sm:text-base focus:border-wax focus:ring-2 focus:ring-wax/20 focus:outline-none transition-all resize-none"
                          />
                        </div>
                      )}
                    </motion.div>
                  );
                })}

                {/* Submit button */}
                <div className="pt-4 flex flex-col items-center">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-navy hover:bg-navy-light text-white font-serif font-semibold text-lg shadow-lg hover:shadow-xl transition-all border border-wax/40 flex items-center justify-center gap-2"
                  >
                    <span>{quiz.submitLabel || 'Submit Answers ✨'}</span>
                  </motion.button>
                </div>
              </form>

              {/* Navigation Back */}
              {onBack && (
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={onBack}
                    className="underline underline-offset-4 font-serif text-navy hover:text-wax transition-colors focus-visible:outline-none text-base"
                  >
                    {quiz.backLabel || 'Back'}
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            /* ============================================================ */
            /* 2. SUBMITTED SCREENSHOT SUMMARY VIEW                         */
            /* ============================================================ */
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45 }}
              className="flex flex-col items-center"
            >
              {/* Important Screenshot Notice Banner */}
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full p-4 sm:p-5 mb-6 rounded-2xl bg-gradient-to-r from-wax/20 via-wax/30 to-wax/20 border-2 border-wax/60 shadow-lg text-center backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <span className="text-2xl animate-bounce">📸</span>
                  <h3 className="font-serif font-bold text-navy text-base sm:text-lg">
                    {quiz.screenshotNotice || 'Take a screenshot of your answers and send them to me! 💌'}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-serif text-navy/80 italic">
                  Capture this screen now so I can see what you answered ❤️
                </p>
              </motion.div>

              {/* The Answers Card (Clean for Screenshot) */}
              <div
                id="quiz-summary-card"
                className="w-full p-6 sm:p-8 rounded-3xl bg-white shadow-2xl border-2 border-navy/15 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-navy via-wax to-navy"></div>

                {/* Card Header */}
                <div className="text-center pb-6 border-b border-navy/10 mb-6">
                  <h3 className="font-script text-3xl sm:text-4xl text-navy mb-1">
                    Your Quiz Answers
                  </h3>
                  <p className="font-serif text-xs sm:text-sm text-navy/70 italic">
                    Special Birthday Quiz Responses
                  </p>
                </div>

                {/* Answers List */}
                <div className="space-y-5">
                  {questions.map((q, idx) => {
                    const ans = answers[q.id] || '(No answer provided)';
                    return (
                      <div key={q.id} className="p-3.5 sm:p-4 rounded-xl bg-[#fdfbf7] border border-navy/10">
                        <p className="font-serif text-xs sm:text-sm text-navy/70 font-semibold mb-1">
                          Q{idx + 1}: {q.question}
                        </p>
                        <p className="font-serif text-sm sm:text-base text-navy font-bold italic bg-wax/10 px-3 py-2 rounded-lg border border-wax/20">
                          “ {ans} ”
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Doodle Heart at bottom of card */}
                <div className="mt-6 flex justify-center">
                  <DoodleHeart className="w-24 text-navy/80" color="#1b2a4a" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full">
                {/* Copy to clipboard */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-6 py-2.5 rounded-full border border-navy/30 bg-white hover:bg-navy/5 text-navy font-serif text-sm transition-all shadow-sm flex items-center gap-1.5"
                >
                  <span>{copied ? '✓ Copied to Clipboard!' : '📋 Copy Answers Text'}</span>
                </button>

                {/* Edit Answers */}
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-navy/30 bg-white hover:bg-navy/5 text-navy font-serif text-sm transition-all shadow-sm"
                >
                  {quiz.editLabel || 'Edit Answers ✏️'}
                </button>

                {/* Continue to Next Screen */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onNext}
                  className="px-8 py-3 rounded-full bg-navy hover:bg-navy-light text-white font-serif font-semibold text-base shadow-lg hover:shadow-xl transition-all border border-wax flex items-center gap-2"
                >
                  <span>{quiz.continueLabel || 'Continue to Next Screen 🎵'}</span>
                  <span className="text-lg">›</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default QuizPage;
