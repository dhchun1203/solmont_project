export default function FinalCTA() {
  return (
    <section className="py-32 lg:py-48 bg-[#FAFAF8] text-center">
      <div className="max-w-[800px] mx-auto px-6">
        <h2
          className="text-4xl lg:text-6xl mb-8 tracking-tight leading-tight"
          style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}
        >
          Discover pieces you'll keep for years.
        </h2>

        <p
          className="text-base lg:text-lg mb-12 opacity-70 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
        >
          우리 컬렉션의 모든 의류는 당신의 옷장에서 소중한 부분이 되도록 디자인되었습니다.
          진정한 장인 정신의 차이를 경험하세요.
        </p>

        <a
          href="#contact"
          className="inline-block px-10 py-5 bg-[#8B7355] text-white text-sm tracking-widest hover:bg-[#6F5B44] active:scale-95 transition-all duration-300"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          프라이빗 뷰잉 요청하기
        </a>
      </div>
    </section>
  );
}
