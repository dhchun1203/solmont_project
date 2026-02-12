import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 mb-12">
          {/* Logo & Description */}
          <div>
            <h3
              className="text-3xl mb-4 tracking-wide"
              style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}
            >
              SOLMONT
            </h3>
            <p
              className="text-sm opacity-60 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              탁월한 장인 정신과 지속 가능한 관행을 통해 시대를 초월하는 작품을 창조하는
              프리미엄 패션 하우스입니다.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-sm mb-4 tracking-widest opacity-60 uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              둘러보기
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#collection"
                  className="text-sm hover:opacity-60 transition-opacity"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                >
                  컬렉션
                </a>
              </li>
              <li>
                <a
                  href="#craft"
                  className="text-sm hover:opacity-60 transition-opacity"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                >
                  제작 과정
                </a>
              </li>
              <li>
                <a
                  href="#sustainability"
                  className="text-sm hover:opacity-60 transition-opacity"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                >
                  지속가능성
                </a>
              </li>
              <li>
                <a
                  href="#stores"
                  className="text-sm hover:opacity-60 transition-opacity"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                >
                  매장 위치
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm mb-4 tracking-widest opacity-60 uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              문의
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@solmont.com"
                className="flex items-center gap-2 text-sm hover:opacity-60 transition-opacity"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                <Mail size={16} />
                info@solmont.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:opacity-60 transition-opacity"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                <Instagram size={16} />
                @solmont
              </a>
            </div>
            <p
              className="text-sm opacity-60 mt-6"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              강남구 압구정로 123
              <br />
              서울, 대한민국
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-xs opacity-50"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            © 2026 SOLMONT. 모든 권리 보유.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs opacity-50 hover:opacity-100 transition-opacity"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              개인정보처리방침
            </a>
            <a
              href="#"
              className="text-xs opacity-50 hover:opacity-100 transition-opacity"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              서비스 약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
