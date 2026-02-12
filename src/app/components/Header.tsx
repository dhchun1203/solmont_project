import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl tracking-widest" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
          SOLMONT
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="#collection" className="text-sm tracking-wider hover:opacity-60 transition-opacity" style={{ fontFamily: 'Inter, sans-serif' }}>
            컬렉션
          </a>
          <a href="#craft" className="text-sm tracking-wider hover:opacity-60 transition-opacity" style={{ fontFamily: 'Inter, sans-serif' }}>
            제작 과정
          </a>
          <a href="#sustainability" className="text-sm tracking-wider hover:opacity-60 transition-opacity" style={{ fontFamily: 'Inter, sans-serif' }}>
            지속가능성
          </a>
          <a href="#stores" className="text-sm tracking-wider hover:opacity-60 transition-opacity" style={{ fontFamily: 'Inter, sans-serif' }}>
            매장 안내
          </a>
          <a href="#contact" className="text-sm tracking-wider hover:opacity-60 transition-opacity" style={{ fontFamily: 'Inter, sans-serif' }}>
            문의
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#lookbook"
            className="px-6 py-3 bg-[#8B7355] text-white text-sm tracking-wider hover:bg-[#6F5B44] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            룩북 보기
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#FAFAF8] border-t border-black/5">
          <div className="px-6 py-8 flex flex-col gap-6">
            <a href="#collection" className="text-sm tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setIsMenuOpen(false)}>
              컬렉션
            </a>
            <a href="#craft" className="text-sm tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setIsMenuOpen(false)}>
              제작 과정
            </a>
            <a href="#sustainability" className="text-sm tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setIsMenuOpen(false)}>
              지속가능성
            </a>
            <a href="#stores" className="text-sm tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setIsMenuOpen(false)}>
              매장 안내
            </a>
            <a href="#contact" className="text-sm tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setIsMenuOpen(false)}>
              문의
            </a>
            <a
              href="#lookbook"
              className="px-6 py-3 bg-[#8B7355] text-white text-sm tracking-wider text-center"
              style={{ fontFamily: 'Inter, sans-serif' }}
              onClick={() => setIsMenuOpen(false)}
            >
              룩북 보기
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
