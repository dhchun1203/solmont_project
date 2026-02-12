const stores = [
  {
    city: 'Seoul',
    location: '강남구',
    address: '강남구 압구정로 123',
    hours: '월–토 11:00–20:00',
  },
  {
    city: 'Seoul',
    location: '한남동',
    address: '용산구 이태원로 45',
    hours: '월–토 11:00–20:00',
  },
  {
    city: 'Busan',
    location: '해운대',
    address: '해운대 비치로 789',
    hours: '월–토 11:00–20:00',
  },
  {
    city: 'Online',
    location: '전세계 배송',
    address: 'shop.solmont.com',
    hours: '연중무휴 24/7',
  },
];

export default function StoreStockist() {
  return (
    <section id="stores" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2
            className="text-4xl lg:text-5xl mb-6 tracking-tight"
            style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}
          >
            Visit Us
          </h2>
          <p
            className="text-base opacity-70 max-w-[600px] mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            엄선된 부티크에서 직접 컬렉션을 경험하거나, 전 세계 어디서든 쇼핑하실 수
            있습니다.
          </p>
        </div>

        {/* Store Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stores.map((store, index) => (
            <div
              key={index}
              className="border border-black/10 p-8 cursor-default transition-all duration-300 hover:border-black/20 hover:shadow-sm"
            >
              <h3
                className="text-2xl mb-1 tracking-tight"
                style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}
              >
                {store.city}
              </h3>
              <p
                className="text-xs uppercase tracking-widest mb-6 opacity-60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {store.location}
              </p>
              <p
                className="text-sm mb-2"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                {store.address}
              </p>
              <p
                className="text-sm opacity-70"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                {store.hours}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block px-8 py-4 border border-black text-black text-sm tracking-widest hover:bg-black hover:text-white active:scale-95 transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            예약하기
          </a>
        </div>
      </div>
    </section>
  );
}
