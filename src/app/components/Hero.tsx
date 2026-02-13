import { ChevronDown } from 'lucide-react';
import ImageWithFallback from './figma/ImageWithFallback';

const HERO_BG_IMAGE =
  'https://images.unsplash.com/photo-1705232497552-abd05ad64485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzcwNzg4MjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export default function Hero() {
  const handleScrollToBrandEssence = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#brand-essence');
    if (target) {
      const header = document.querySelector('header');
      const navBar = header?.querySelector(':scope > div:first-child');
      const headerHeight = navBar?.getBoundingClientRect().height ?? header?.getBoundingClientRect().height ?? 80;
      const targetRect = target.getBoundingClientRect();
      const scrollTop = window.scrollY + targetRect.top - headerHeight;
      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-24 lg:py-32 overflow-hidden bg-[#FAFAF8]">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <ImageWithFallback
          src={HERO_BG_IMAGE}
          alt="Luxury fashion editorial"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <h1
          className="text-5xl lg:text-7xl mb-8 tracking-tight leading-tight"
          style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}
        >
          Quiet Luxury,<br />Made to Last.
        </h1>

        <p
          className="text-base lg:text-lg mb-12 max-w-[600px] mx-auto leading-relaxed opacity-80"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
        >
          세심한 주의를 기울여 제작된 우리의 작품은 프리미엄 소재의 아름다움과
          시대를 초월한 디자인을 기념합니다. 오랫동안 함께하세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#collection"
            className="px-8 py-4 bg-black text-white text-sm tracking-widest hover:bg-black/80 active:scale-95 transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            컬렉션 보기
          </a>
          <a
            href="#craft"
            className="px-8 py-4 bg-transparent border border-black text-black text-sm tracking-widest hover:bg-black hover:text-white active:scale-95 transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            제작 과정
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#brand-essence"
        onClick={handleScrollToBrandEssence}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-black/60 hover:text-black transition-colors duration-300 group"
        aria-label="스크롤 다운"
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
        >
          Scroll
        </span>
        <ChevronDown
          size={24}
          className="animate-bounce group-hover:animate-none"
          strokeWidth={2}
        />
      </a>
    </section>
  );
}
