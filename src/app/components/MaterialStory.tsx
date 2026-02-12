import ImageWithFallback from './figma/ImageWithFallback';

const materials = [
  {
    id: 1,
    name: 'Cashmere',
    origin: '내몽골',
    description: '고지대에서 공수한 초극세 섬유로, 비교할 수 없는 부드러움과 따뜻함을 제공합니다.',
    image:
      'https://images.unsplash.com/photo-1532526674046-5b3f6d7d2ab1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHdvb2wlMjB0ZXh0dXJlfGVufDF8fHx8MTc3MDg3ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    name: 'Merino Wool',
    origin: '뉴질랜드',
    description: '자연스러운 통기성과 온도 조절 기능, 전통 농장에서 윤리적으로 공수합니다.',
    image:
      'https://images.unsplash.com/photo-1762360411005-863ffdaa7691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwdGV4dGlsZSUyMGZhYnJpYyUyMGRldGFpbHxlbnwxfHx8fDE3NzA4NzgxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    name: 'Japanese Silk',
    origin: '교토',
    description: '광택이 나고 고급스러우며, 대대로 전해 내려온 전통 기법으로 직조됩니다.',
    image:
      'https://images.unsplash.com/photo-1654707635478-b57d95c4e8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2xvdGhpbmclMjBkZXRhaWx8ZW58MXx8fHwxNzcwODQwODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export default function MaterialStory() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFAF8]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2
            className="text-4xl lg:text-5xl mb-6 tracking-tight"
            style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}
          >
            Material Story
          </h2>
          <p
            className="text-base opacity-70 max-w-[600px] mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            우리의 탁월함에 대한 헌신은 우리가 선택하는 소재에서 시작됩니다. 각 섬유는
            원산지, 장인 정신, 그리고 세심함의 이야기를 담고 있습니다.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {materials.map((material) => (
            <div key={material.id} className="group cursor-default">
              <div className="aspect-[4/5] mb-6 overflow-hidden bg-white">
                <ImageWithFallback
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3
                className="text-2xl mb-1 tracking-tight group-hover:opacity-80 transition-opacity duration-300"
                style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}
              >
                {material.name}
              </h3>
              <p
                className="text-xs uppercase tracking-widest mb-3 opacity-60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {material.origin}
              </p>
              <p
                className="text-sm opacity-70 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                {material.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
