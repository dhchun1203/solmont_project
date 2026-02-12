import ImageWithFallback from './figma/ImageWithFallback';

const processes = [
  { number: '01', title: 'Pattern', description: '맞춤 템플릿으로 정밀한 패턴 제작' },
  { number: '02', title: 'Cut', description: '숙련된 장인이 프리미엄 원단을 손으로 재단' },
  { number: '03', title: 'Finish', description: '모든 솔기와 스티치를 손으로 완벽하게 마무리' },
];

export default function CraftAtelier() {
  return (
    <section id="craft" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content (좌측) */}
          <div>
            <h2
              className="text-4xl lg:text-5xl mb-8 tracking-tight"
              style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}
            >
              Craft & Atelier
            </h2>

            <p
              className="text-lg mb-12 leading-relaxed opacity-80"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              원단에서 마무리까지, 모든 디테일은 의도적입니다. 우리의 아틀리에는 전통 기법과 현대적
              정밀함을 결합하여 시간의 시험을 견디는 의류를 만듭니다.
            </p>

            {/* Process Steps */}
            <div className="space-y-8">
              {processes.map((process) => (
                <div key={process.number} className="flex gap-6 group/item cursor-default transition-opacity duration-300 hover:opacity-100">
                  <div
                    className="text-4xl opacity-30 group-hover/item:opacity-50 transition-opacity duration-300"
                    style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}
                  >
                    {process.number}
                  </div>
                  <div>
                    <h3
                      className="text-xl mb-2 tracking-tight"
                      style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}
                    >
                      {process.title}
                    </h3>
                    <p
                      className="text-sm opacity-70 leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                    >
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image (우측) */}
          <div className="aspect-[4/5] overflow-hidden bg-gray-100 group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1673201230274-c4dbd20c3f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYXRlbGllciUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MDg3ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Craft atelier"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
