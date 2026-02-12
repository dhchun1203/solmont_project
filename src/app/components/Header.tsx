import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/60 backdrop-blur-xl border-b border-white/30 shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset] transition-all duration-300 ease-out ${isMenuOpen ? 'rounded-b-2xl shadow-xl' : ''}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-2xl tracking-widest hover:opacity-70 transition-opacity duration-300"
          style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}
        >
          SOLMONT
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="#collection" onClick={(e) => handleNavClick(e, '#collection')} className="text-sm tracking-wider hover:opacity-60 transition-opacity duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            컬렉션
          </a>
          <a href="#craft" onClick={(e) => handleNavClick(e, '#craft')} className="text-sm tracking-wider hover:opacity-60 transition-opacity duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            제작 과정
          </a>
          <a href="#sustainability" onClick={(e) => handleNavClick(e, '#sustainability')} className="text-sm tracking-wider hover:opacity-60 transition-opacity duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            지속가능성
          </a>
          <a href="#stores" onClick={(e) => handleNavClick(e, '#stores')} className="text-sm tracking-wider hover:opacity-60 transition-opacity duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            매장 안내
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-sm tracking-wider hover:opacity-60 transition-opacity duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            문의
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#lookbook"
            onClick={(e) => handleNavClick(e, '#lookbook')}
            className="rounded-full px-8 py-3 border-2 border-[#8B7355] text-[#8B7355] text-sm tracking-wider hover:bg-[#8B7355] hover:text-white hover:border-[#6F5B44] hover:scale-105 hover:shadow-lg hover:shadow-[#8B7355]/25 active:scale-95 transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            룩북 보기
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 -m-2 hover:opacity-60 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mobile-menu-container ${isMenuOpen ? 'open' : ''}`}
      >
        <div className="mobile-menu-inner">
          <div
            className={`${isMenuOpen ? 'mobile-menu-expand' : ''}`}
          >
            <div className="px-6 py-8 flex flex-col items-center gap-6">
              <a href="#collection" onClick={(e) => handleNavClick(e, '#collection')} className="text-sm tracking-wider hover:opacity-60 transition-opacity duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                컬렉션
              </a>
              <a href="#craft" onClick={(e) => handleNavClick(e, '#craft')} className="text-sm tracking-wider hover:opacity-60 transition-opacity duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                제작 과정
              </a>
              <a href="#sustainability" onClick={(e) => handleNavClick(e, '#sustainability')} className="text-sm tracking-wider hover:opacity-60 transition-opacity duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                지속가능성
              </a>
              <a href="#stores" onClick={(e) => handleNavClick(e, '#stores')} className="text-sm tracking-wider hover:opacity-60 transition-opacity duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                매장 안내
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-sm tracking-wider hover:opacity-60 transition-opacity duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                문의
              </a>
              <a
                href="#lookbook"
                onClick={(e) => handleNavClick(e, '#lookbook')}
                className="rounded-full px-8 py-3 border-2 border-[#8B7355] text-[#8B7355] text-sm tracking-wider text-center hover:bg-[#8B7355] hover:text-white hover:border-[#6F5B44] hover:shadow-lg hover:shadow-[#8B7355]/25 active:scale-95 transition-all duration-300 min-w-[140px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                룩북 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
