const initiatives = [
  {
    title: 'Responsible Sourcing',
    stat: '100%',
    description: '검증된 지속 가능한 출처로 추적 가능한 모든 소재',
  },
  {
    title: 'Small-Batch Production',
    stat: '<500',
    description: '낭비를 최소화하고 품질을 보장하는 한정 수량',
  },
  {
    title: 'Lifetime Repair',
    stat: 'Forever',
    description: '모든 의류에 대한 무상 수선 서비스',
  },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2
            className="text-4xl lg:text-5xl mb-6 tracking-tight"
            style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}
          >
            Sustainability
          </h2>
          <p
            className="text-base opacity-70 max-w-[600px] mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            우리는 진정한 럭셔리는 적게 만들되 더 좋게 만드는 것에 있다고 믿습니다. 우리의 지속
            가능성에 대한 접근은 투명성, 품질, 그리고 수명에 뿌리를 두고 있습니다.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {initiatives.map((initiative, index) => (
            <div key={index} className="text-center p-8 border border-black/10">
              <div
                className="text-5xl mb-4"
                style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}
              >
                {initiative.stat}
              </div>
              <h3
                className="text-xl mb-3 tracking-tight"
                style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}
              >
                {initiative.title}
              </h3>
              <p
                className="text-sm opacity-70 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                {initiative.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
