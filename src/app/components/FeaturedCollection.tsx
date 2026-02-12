import ImageWithFallback from './figma/ImageWithFallback';

const collections = [
  {
    id: 1,
    title: 'Winter Essentials',
    description: '세련된 아우터웨어와 레이어링 피스',
    image:
      'https://images.unsplash.com/photo-1752950823536-2db75f37980d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDg3ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'Tailored Suiting',
    description: '정교하게 재단된 블레이저와 팬츠',
    image:
      'https://images.unsplash.com/photo-1516763296043-f676c1105999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3MDgyOTU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Soft Knits',
    description: '캐시미어와 메리노 에센셜',
    image:
      'https://images.unsplash.com/photo-1588352979339-ded596bbb3e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGxvb2tib29rfGVufDF8fHx8MTc3MDg3ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export default function FeaturedCollection() {
  return (
    <section id="collection" className="py-24 lg:py-32 bg-[#FAFAF8]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2
            className="text-4xl lg:text-5xl mb-4 tracking-tight"
            style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}
          >
            Featured Collection
          </h2>
          <div className="w-16 h-px bg-black/30 mx-auto" />
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {collections.map((item) => (
            <div key={item.id} className="group">
              <div className="aspect-[3/4] mb-6 overflow-hidden bg-white">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3
                className="text-2xl mb-2 tracking-tight"
                style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm opacity-70"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
