export default function BrandEssence() {
  return (
    <section id="brand-essence" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Tailoring */}
          <div className="text-center group cursor-default transition-transform duration-300 hover:-translate-y-1">
            <div className="w-px h-12 bg-black/20 mx-auto mb-8 group-hover:h-14 group-hover:bg-black/30 transition-all duration-300" />
            <h3
              className="text-2xl lg:text-3xl mb-4 tracking-tight"
              style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}
            >
              Tailoring
            </h3>
            <p
              className="text-sm leading-relaxed opacity-70"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              모든 의류는 마스터 장인의 손길로 완성되어, 오래도록 지속되는 완벽한 실루엣을 보장합니다.
            </p>
          </div>

          {/* Materials */}
          <div className="text-center group cursor-default transition-transform duration-300 hover:-translate-y-1">
            <div className="w-px h-12 bg-black/20 mx-auto mb-8 group-hover:h-14 group-hover:bg-black/30 transition-all duration-300" />
            <h3
              className="text-2xl lg:text-3xl mb-4 tracking-tight"
              style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}
            >
              Materials
            </h3>
            <p
              className="text-sm leading-relaxed opacity-70"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              이탈리아산 캐시미어부터 일본산 실크까지, 최고급 천연 섬유만을 엄선합니다.
            </p>
          </div>

          {/* Timeless Design */}
          <div className="text-center group cursor-default transition-transform duration-300 hover:-translate-y-1">
            <div className="w-px h-12 bg-black/20 mx-auto mb-8 group-hover:h-14 group-hover:bg-black/30 transition-all duration-300" />
            <h3
              className="text-2xl lg:text-3xl mb-4 tracking-tight"
              style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}
            >
              Timeless Design
            </h3>
            <p
              className="text-sm leading-relaxed opacity-70"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              우리의 컬렉션은 트렌드를 초월하여, 시즌마다 소중히 간직할 수 있는 작품을 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
