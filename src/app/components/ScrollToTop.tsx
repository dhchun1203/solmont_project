import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const SCROLL_THRESHOLD = 400;

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 flex items-center gap-2 px-5 py-3 bg-[#FAFAF8] border border-black/20 text-black text-xs tracking-widest uppercase hover:bg-black hover:text-white hover:border-black transition-colors duration-300 shadow-sm"
      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
      aria-label="맨 위로 스크롤"
    >
      <ChevronUp size={18} strokeWidth={2} />
      Scroll to Top
    </button>
  );
}
