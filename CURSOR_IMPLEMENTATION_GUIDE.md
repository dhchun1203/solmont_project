# 프리미엄 패션 브랜드 랜딩페이지 구현 가이드 (Cursor용)

## 📋 프로젝트 개요
고급 의류 브랜드(MAISON) 랜딩페이지
- **컨셉**: 프리미엄 패션 하우스, 미니멀 톤, 타이포그래피 중심
- **디자인 철학**: 넉넉한 여백, 세련된 타이포그래피, 시대를 초월한 우아함
- **반응형**: 모바일 우선 설계

---

## 🎨 디자인 시스템

### 컬러 팔레트
```css
/* 메인 컬러 */
--background: #FAFAF8;         /* 오프화이트 배경 */
--foreground: #1A1A1A;         /* 차콜 텍스트 */
--black: #000000;              /* 순수 블랙 */
--white: #FFFFFF;              /* 순수 화이트 */

/* 포인트 컬러 */
--accent: #8B7355;             /* 브론즈/골드 - 버튼, 하이라이트 */
--accent-hover: #6F5B44;       /* 브론즈 다크 - 호버 상태 */

/* 투명도 */
opacity: 0.8;  /* 부제목 */
opacity: 0.7;  /* 본문 */
opacity: 0.6;  /* 섹션 라벨 */
opacity: 0.5;  /* 푸터 텍스트 */
```

### 타이포그래피
```css
/* 폰트 임포트 (fonts.css) */
@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap');

/* 폰트 사용 */
제목(H1-H6): font-family: 'Cormorant, serif'; font-weight: 300-400;
본문/버튼: font-family: 'Inter, sans-serif'; font-weight: 300-400;

/* 폰트 크기 */
- Hero Title: text-5xl lg:text-7xl (60px → 72px+)
- Section Title: text-4xl lg:text-5xl (36px → 48px)
- Sub-heading: text-2xl lg:text-3xl (24px → 30px)
- Body Large: text-base lg:text-lg (16px → 18px)
- Body: text-sm (14px)
- Caption: text-xs (12px)

/* Letter Spacing */
- 제목: tracking-tight
- 네비게이션/버튼: tracking-wider / tracking-widest
- 섹션 라벨: tracking-widest uppercase
```

### 간격(Spacing)
```css
/* 섹션 패딩 */
py-24 lg:py-32        /* 섹션 상하 여백 */
px-6 lg:px-12         /* 좌우 여백 */

/* 컨테이너 */
max-w-[1440px] mx-auto   /* 최대 너비 1440px, 중앙 정렬 */

/* 요소 간격 */
mb-8                  /* 소제목 하단 */
mb-12 lg:mb-16        /* 본문 하단 */
mb-16 lg:mb-20        /* 섹션 헤더 하단 */
gap-4 lg:gap-6        /* 그리드 간격 */
gap-8 lg:gap-12       /* 카드 간격 */
```

### 버튼 스타일
```tsx
/* Primary Button (브론즈) */
className="px-8 py-4 bg-black text-white text-sm tracking-widest hover:bg-black/80 transition-colors"

/* Secondary Button (아웃라인) */
className="px-8 py-4 bg-transparent border border-black text-black text-sm tracking-widest hover:bg-black hover:text-white transition-colors"

/* Accent Button (골드) */
className="px-6 py-3 bg-[#8B7355] text-white text-sm tracking-wider hover:bg-[#6F5B44] transition-colors"
```

---

## 🏗️ 프로젝트 구조

```
src/
├── app/
│   ├── App.tsx                          # 메인 앱 컴포넌트
│   └── components/
│       ├── Header.tsx                   # 헤더 (네비게이션)
│       ├── Hero.tsx                     # 히어로 섹션
│       ├── BrandEssence.tsx            # 브랜드 핵심 가치
│       ├── FeaturedCollection.tsx       # 주요 컬렉션
│       ├── CraftAtelier.tsx            # 제작 과정
│       ├── MaterialStory.tsx           # 소재 스토리
│       ├── Sustainability.tsx          # 지속가능성
│       ├── LookbookGallery.tsx         # 룩북 갤러리
│       ├── StoreStockist.tsx           # 매장 안내
│       ├── FinalCTA.tsx                # 최종 CTA
│       ├── Footer.tsx                  # 푸터
│       └── figma/
│           └── ImageWithFallback.tsx   # 이미지 컴포넌트
└── styles/
    ├── fonts.css                        # 폰트 임포트
    └── theme.css                        # 테마 변수
```

---

## 📦 필요한 패키지

```bash
npm install lucide-react
# 또는
pnpm add lucide-react
```

---

## 🔧 섹션별 구현 가이드

### 1. Header (헤더)

**파일**: `/src/app/components/Header.tsx`

**구조**:
- 고정 헤더 (sticky top-0, z-50)
- 로고 중앙, 네비게이션 좌측, CTA 버튼 우측
- 모바일: 햄버거 메뉴

**코드**:
```tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl tracking-widest" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
          MAISON
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
```

---

### 2. Hero (히어로 섹션)

**파일**: `/src/app/components/Hero.tsx`

**구조**:
- 전체 화면 높이 (min-h-screen)
- 배경 이미지 (opacity 40%)
- 대형 타이포그래피 중심
- 짧은 설명 문구
- 2개의 CTA 버튼

**배경 이미지 URL**:
```
https://images.unsplash.com/photo-1705232497552-abd05ad64485?w=1080
(검색어: luxury fashion model editorial)
```

**텍스트**:
- 제목: "Quiet Luxury, Made to Last."
- 부제목: "세심한 주의를 기울여 제작된 우리의 작품은 프리미엄 소재의 아름다움과 시대를 초월한 디자인을 기념합니다. 오랫동안 함께하세요."

**코드**:
```tsx
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#FAFAF8]">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1705232497552-abd05ad64485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzcwNzg4MjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury fashion editorial"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-12 text-center pt-32 pb-20">
        <h1 
          className="text-5xl lg:text-7xl mb-6 tracking-tight"
          style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}
        >
          Quiet Luxury, Made to Last.
        </h1>
        
        <p 
          className="text-base lg:text-lg mb-12 max-w-[600px] mx-auto leading-relaxed opacity-80"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
        >
          세심한 주의를 기울여 제작된 우리의 작품은 프리미엄 소재의 아름다움과 
          시대를 초월한 디자인을 기념합니다. 오랫동안 함께하세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#collection"
            className="px-8 py-4 bg-black text-white text-sm tracking-widest hover:bg-black/80 transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            컬렉션 보기
          </a>
          <a 
            href="#craft"
            className="px-8 py-4 bg-transparent border border-black text-black text-sm tracking-widest hover:bg-black hover:text-white transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            제작 과정
          </a>
        </div>
      </div>
    </section>
  );
}
```

---

### 3. Brand Essence (브랜드 핵심 가치)

**파일**: `/src/app/components/BrandEssence.tsx`

**구조**:
- 3개 컬럼 그리드
- 각 항목: 세로선 + 제목 + 설명

**텍스트**:
```javascript
// 제목 (영어 유지)
1. "Tailoring"
2. "Materials"
3. "Timeless Design"

// 설명 (한글)
1. "모든 의류는 마스터 장인의 손길로 완성되어, 오래도록 지속되는 완벽한 실루엣을 보장합니다."
2. "이탈리아산 캐시미어부터 일본산 실크까지, 최고급 천연 섬유만을 엄선합니다."
3. "우리의 컬렉션은 트렌드를 초월하여, 시즌마다 소중히 간직할 수 있는 작품을 제공합니다."
```

**코드**:
```tsx
export function BrandEssence() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Tailoring */}
          <div className="text-center">
            <div className="w-px h-12 bg-black/20 mx-auto mb-8"></div>
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
          <div className="text-center">
            <div className="w-px h-12 bg-black/20 mx-auto mb-8"></div>
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
          <div className="text-center">
            <div className="w-px h-12 bg-black/20 mx-auto mb-8"></div>
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
```

---

### 4. Featured Collection (주요 컬렉션)

**파일**: `/src/app/components/FeaturedCollection.tsx`

**구조**:
- 섹션 헤더
- 3개 컬럼 그리드 (이미지 + 제목 + 설명)

**이미지 URL**:
```javascript
const collections = [
  {
    id: 1,
    title: 'Winter Essentials',
    description: '세련된 아우터웨어와 레이어링 피스',
    image: 'https://images.unsplash.com/photo-1752950823536-2db75f37980d?w=1080',
  },
  {
    id: 2,
    title: 'Tailored Suiting',
    description: '정교하게 재단된 블레이저와 팬츠',
    image: 'https://images.unsplash.com/photo-1516763296043-f676c1105999?w=1080',
  },
  {
    id: 3,
    title: 'Soft Knits',
    description: '캐시미어와 메리노 에센셜',
    image: 'https://images.unsplash.com/photo-1588352979339-ded596bbb3e5?w=1080',
  },
];
```

**코드**:
```tsx
import { ImageWithFallback } from './figma/ImageWithFallback';

const collections = [
  {
    id: 1,
    title: 'Winter Essentials',
    description: '세련된 아우터웨어와 레이어링 피스',
    image: 'https://images.unsplash.com/photo-1752950823536-2db75f37980d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDg3ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'Tailored Suiting',
    description: '정교하게 재단된 블레이저와 팬츠',
    image: 'https://images.unsplash.com/photo-1516763296043-f676c1105999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3MDgyOTU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Soft Knits',
    description: '캐시미어와 메리노 에센셜',
    image: 'https://images.unsplash.com/photo-1588352979339-ded596bbb3e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGxvb2tib29rfGVufDF8fHx8MTc3MDg3ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function FeaturedCollection() {
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
          <div className="w-16 h-px bg-black/30 mx-auto"></div>
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
```

---

### 5. Craft & Atelier (제작 과정)

**파일**: `/src/app/components/CraftAtelier.tsx`

**구조**:
- 좌측: 큰 이미지
- 우측: 제목 + 설명 + 3단계 프로세스

**이미지 URL**:
```
https://images.unsplash.com/photo-1673201230274-c4dbd20c3f79?w=1080
```

**텍스트**:
```javascript
// 섹션 제목
"Craft & Atelier"

// 설명
"원단에서 마무리까지, 모든 디테일은 의도적입니다. 우리의 아틀리에는 전통 기법과 현대적 정밀함을 결합하여 시간의 시험을 견디는 의류를 만듭니다."

// 프로세스
const processes = [
  { number: '01', title: 'Pattern', description: '맞춤 템플릿으로 정밀한 패턴 제작' },
  { number: '02', title: 'Cut', description: '숙련된 장인이 프리미엄 원단을 손으로 재단' },
  { number: '03', title: 'Finish', description: '모든 솔기와 스티치를 손으로 완벽하게 마무리' },
];
```

**코드**:
```tsx
import { ImageWithFallback } from './figma/ImageWithFallback';

const processes = [
  { number: '01', title: 'Pattern', description: '맞춤 템플릿으로 정밀한 패턴 제작' },
  { number: '02', title: 'Cut', description: '숙련된 장인이 프리미엄 원단을 손으로 재단' },
  { number: '03', title: 'Finish', description: '모든 솔기와 스티치를 손으로 완벽하게 마무리' },
];

export function CraftAtelier() {
  return (
    <section id="craft" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-gray-100">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1673201230274-c4dbd20c3f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYXRlbGllciUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MDg3ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Craft atelier"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
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
              원단에서 마무리까지, 모든 디테일은 의도적입니다. 우리의 아틀리에는 전통 기법과 현대적 정밀함을 
              결합하여 시간의 시험을 견디는 의류를 만듭니다.
            </p>

            {/* Process Steps */}
            <div className="space-y-8">
              {processes.map((process) => (
                <div key={process.number} className="flex gap-6">
                  <div 
                    className="text-4xl opacity-30"
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
        </div>
      </div>
    </section>
  );
}
```

---

### 6. Material Story (소재 스토리)

**파일**: `/src/app/components/MaterialStory.tsx`

**구조**:
- 섹션 헤더
- 3개 컬럼 그리드 (이미지 + 소재명 + 원산지 + 설명)

**이미지 & 텍스트**:
```javascript
const materials = [
  {
    id: 1,
    name: 'Cashmere',
    origin: '내몽골',
    description: '고지대에서 공수한 초극세 섬유로, 비교할 수 없는 부드러움과 따뜻함을 제공합니다.',
    image: 'https://images.unsplash.com/photo-1532526674046-5b3f6d7d2ab1?w=1080',
  },
  {
    id: 2,
    name: 'Merino Wool',
    origin: '뉴질랜드',
    description: '자연스러운 통기성과 온도 조절 기능, 전통 농장에서 윤리적으로 공수합니다.',
    image: 'https://images.unsplash.com/photo-1762360411005-863ffdaa7691?w=1080',
  },
  {
    id: 3,
    name: 'Japanese Silk',
    origin: '교토',
    description: '광택이 나고 고급스러우며, 대대로 전해 내려온 전통 기법으로 직조됩니다.',
    image: 'https://images.unsplash.com/photo-1654707635478-b57d95c4e8e1?w=1080',
  },
];
```

**코드**: (계속)
```tsx
import { ImageWithFallback } from './figma/ImageWithFallback';

const materials = [
  {
    id: 1,
    name: 'Cashmere',
    origin: '내몽골',
    description: '고지대에서 공수한 초극세 섬유로, 비교할 수 없는 부드러움과 따뜻함을 제공합니다.',
    image: 'https://images.unsplash.com/photo-1532526674046-5b3f6d7d2ab1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHdvb2wlMjB0ZXh0dXJlfGVufDF8fHx8MTc3MDg3ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    name: 'Merino Wool',
    origin: '뉴질랜드',
    description: '자연스러운 통기성과 온도 조절 기능, 전통 농장에서 윤리적으로 공수합니다.',
    image: 'https://images.unsplash.com/photo-1762360411005-863ffdaa7691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwdGV4dGlsZSUyMGZhYnJpYyUyMGRldGFpbHxlbnwxfHx8fDE3NzA4NzgxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    name: 'Japanese Silk',
    origin: '교토',
    description: '광택이 나고 고급스러우며, 대대로 전해 내려온 전통 기법으로 직조됩니다.',
    image: 'https://images.unsplash.com/photo-1654707635478-b57d95c4e8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2xvdGhpbmclMjBkZXRhaWx8ZW58MXx8fHwxNzcwODQwODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function MaterialStory() {
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
            우리의 탁월함에 대한 헌신은 우리가 선택하는 소재에서 시작됩니다. 
            각 섬유는 원산지, 장인 정신, 그리고 세심함의 이야기를 담고 있습니다.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {materials.map((material) => (
            <div key={material.id}>
              <div className="aspect-[4/5] mb-6 overflow-hidden bg-white">
                <ImageWithFallback
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 
                className="text-2xl mb-1 tracking-tight"
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
```

---

### 7. Sustainability (지속가능성)

**파일**: `/src/app/components/Sustainability.tsx`

**구조**:
- 섹션 헤더
- 3개 통계 카드

**텍스트**:
```javascript
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
```

**코드**:
```tsx
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

export function Sustainability() {
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
            우리는 진정한 럭셔리는 적게 만들되 더 좋게 만드는 것에 있다고 믿습니다. 우리의 지속 가능성에 대한 
            접근은 투명성, 품질, 그리고 수명에 뿌리를 두고 있습니다.
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
```

---

### 8. Lookbook Gallery (룩북 갤러리)

**파일**: `/src/app/components/LookbookGallery.tsx`

**구조**:
- 2x3 그리드 (모바일 2열, 태블릿/데스크톱 3열)
- 클릭 시 모달로 확대

**이미지 URL**:
```javascript
const lookbookImages = [
  'https://images.unsplash.com/photo-1705232497552-abd05ad64485?w=1080',
  'https://images.unsplash.com/photo-1752950823536-2db75f37980d?w=1080',
  'https://images.unsplash.com/photo-1516763296043-f676c1105999?w=1080',
  'https://images.unsplash.com/photo-1588352979339-ded596bbb3e5?w=1080',
  'https://images.unsplash.com/photo-1654707635478-b57d95c4e8e1?w=1080',
  'https://images.unsplash.com/photo-1673201230274-c4dbd20c3f79?w=1080',
];
```

**코드**:
```tsx
import { useState } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const lookbookImages = [
  'https://images.unsplash.com/photo-1705232497552-abd05ad64485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzcwNzg4MjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1752950823536-2db75f37980d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDg3ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1516763296043-f676c1105999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3MDgyOTU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1588352979339-ded596bbb3e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGxvb2tib29rfGVufDF8fHx8MTc3MDg3ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1654707635478-b57d95c4e8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2xvdGhpbmclMjBkZXRhaWx8ZW58MXx8fHwxNzcwODQwODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1673201230274-c4dbd20c3f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYXRlbGllciUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MDg3ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
];

export function LookbookGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="lookbook" className="py-24 lg:py-32 bg-[#FAFAF8]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 
            className="text-4xl lg:text-5xl mb-4 tracking-tight"
            style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}
          >
            Lookbook Gallery
          </h2>
          <div className="w-16 h-px bg-black/30 mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {lookbookImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="aspect-[3/4] overflow-hidden bg-white group cursor-pointer"
            >
              <ImageWithFallback
                src={image}
                alt={`Lookbook ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:opacity-70 transition-opacity"
            aria-label="Close modal"
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl max-h-[90vh] w-full">
            <ImageWithFallback
              src={selectedImage}
              alt="Lookbook detail"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
```

---

### 9. Store & Stockist (매장 안내)

**파일**: `/src/app/components/StoreStockist.tsx`

**구조**:
- 섹션 헤더
- 4개 매장 정보 카드

**텍스트**:
```javascript
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
    address: 'shop.maisonhouse.com',
    hours: '연중무휴 24/7',
  },
];
```

**코드**:
```tsx
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
    address: 'shop.maisonhouse.com',
    hours: '연중무휴 24/7',
  },
];

export function StoreStockist() {
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
            엄선된 부티크에서 직접 컬렉션을 경험하거나, 
            전 세계 어디서든 쇼핑하실 수 있습니다.
          </p>
        </div>

        {/* Store Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stores.map((store, index) => (
            <div key={index} className="border border-black/10 p-8">
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
            className="inline-block px-8 py-4 border border-black text-black text-sm tracking-widest hover:bg-black hover:text-white transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            예약하기
          </a>
        </div>
      </div>
    </section>
  );
}
```

---

### 10. Final CTA (최종 CTA)

**파일**: `/src/app/components/FinalCTA.tsx`

**구조**:
- 중앙 정렬 텍스트 + CTA 버튼

**텍스트**:
```
제목: "Discover pieces you'll keep for years."
본문: "우리 컬렉션의 모든 의류는 당신의 옷장에서 소중한 부분이 되도록 디자인되었습니다. 진정한 장인 정신의 차이를 경험하세요."
버튼: "프라이빗 뷰잉 요청하기"
```

**코드**:
```tsx
export function FinalCTA() {
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
          className="inline-block px-10 py-5 bg-[#8B7355] text-white text-sm tracking-widest hover:bg-[#6F5B44] transition-colors"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          프라이빗 뷰잉 요청하기
        </a>
      </div>
    </section>
  );
}
```

---

### 11. Footer (푸터)

**파일**: `/src/app/components/Footer.tsx`

**구조**:
- 3컬럼 그리드 (로고+설명 / 링크 / 연락처)
- 하단 바 (저작권 + 약관)

**텍스트**:
```javascript
// 로고 설명
"탁월한 장인 정신과 지속 가능한 관행을 통해 시대를 초월하는 작품을 창조하는 프리미엄 패션 하우스입니다."

// 네비게이션
"둘러보기"
- 컬렉션
- 제작 과정
- 지속가능성
- 매장 위치

// 연락처
"문의"
- info@maisonhouse.com
- @maison
- 강남구 압구정로 123
  서울, 대한민국

// 하단
"© 2026 MAISON. 모든 권리 보유."
"개인정보처리방침"
"서비스 약관"
```

**코드**:
```tsx
import { Instagram, Mail } from 'lucide-react';

export function Footer() {
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
              MAISON
            </h3>
            <p 
              className="text-sm opacity-60 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              탁월한 장인 정신과 지속 가능한 관행을 통해 
              시대를 초월하는 작품을 창조하는 프리미엄 패션 하우스입니다.
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
                href="mailto:info@maisonhouse.com"
                className="flex items-center gap-2 text-sm hover:opacity-60 transition-opacity"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                <Mail size={16} />
                info@maisonhouse.com
              </a>
              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:opacity-60 transition-opacity"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                <Instagram size={16} />
                @maison
              </a>
            </div>
            <p 
              className="text-sm opacity-60 mt-6"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              강남구 압구정로 123<br />
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
            © 2026 MAISON. 모든 권리 보유.
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
```

---

## 🖼️ ImageWithFallback 컴포넌트

**파일**: `/src/app/components/figma/ImageWithFallback.tsx`

이 컴포넌트는 이미지 로딩 실패 시 대체 이미지를 표시합니다.

```tsx
import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageWithFallback({ src, alt, className = '' }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-400 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className={`bg-gray-100 animate-pulse ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        style={{ display: loading ? 'none' : 'block' }}
      />
    </>
  );
}
```

---

## 📝 Cursor에 전달할 프롬프트

Cursor에 다음과 같이 요청하세요:

```
프리미엄 패션 브랜드(MAISON) 랜딩페이지를 React + TypeScript + Tailwind CSS로 구현해주세요.

**디자인 스타일:**
- 미니멀 프리미엄 패션 브랜드
- 오프화이트(#FAFAF8) 배경 + 블랙(#1A1A1A) 텍스트
- 브론즈/골드(#8B7355) 포인트 컬러
- 세리프 헤드라인(Cormorant) + 산세리프 본문(Inter)
- 넉넉한 여백, 타이포그래피 중심

**필요한 패키지:**
lucide-react (아이콘)

**구성 섹션 (11개):**
1. Header - 고정 헤더, 로고 중앙, 네비게이션, CTA 버튼
2. Hero - 전체 화면 높이, 배경 이미지, 대형 타이포그래피 "Quiet Luxury, Made to Last."
3. Brand Essence - 3개 컬럼 (Tailoring, Materials, Timeless Design)
4. Featured Collection - 3개 상품 그리드
5. Craft & Atelier - 이미지 + 3단계 프로세스
6. Material Story - 3개 소재 카드 (Cashmere, Merino Wool, Japanese Silk)
7. Sustainability - 3개 통계 카드
8. Lookbook Gallery - 2x3 그리드, 클릭 시 모달
9. Store & Stockist - 4개 매장 정보
10. Final CTA - 중앙 정렬 CTA
11. Footer - 3컬럼 + 하단 바

**이미지:**
Unsplash에서 다음 검색어로 이미지 가져오기:
- elegant fashion portrait
- minimalist fashion photography
- premium clothing detail
- fashion atelier workshop
- luxury fashion model editorial
- cashmere wool texture

**모든 본문 텍스트는 한글, 제목은 영어로 유지**

첨부한 가이드 문서의 각 섹션별 코드와 텍스트를 정확히 따라 구현해주세요.
```

---

## ✅ 체크리스트

Cursor에서 구현 후 확인사항:

- [ ] 폰트 로딩 확인 (Cormorant, Inter)
- [ ] 반응형 동작 확인 (모바일 → 데스크톱)
- [ ] 이미지 로딩 확인
- [ ] 네비게이션 링크 동작
- [ ] 모바일 메뉴 토글
- [ ] 룩북 갤러리 모달
- [ ] 호버 효과 (버튼, 이미지 확대)
- [ ] 타이포그래피 일관성
- [ ] 컬러 팔레트 일관성
- [ ] 간격/여백 일관성

---

## 🎯 최종 팁

1. **폰트 먼저 설정**: fonts.css에 Google Fonts 임포트
2. **컬러 변수 활용**: theme.css의 CSS 변수 또는 Tailwind 클래스
3. **컴포넌트 순서**: App.tsx에서 순서대로 임포트
4. **이미지 최적화**: Unsplash URL에 `?w=1080` 파라미터 추가
5. **모바일 우선**: Tailwind의 `lg:` 브레이크포인트 활용

이 가이드를 Cursor에 첨부하고 위의 프롬프트와 함께 전달하면 동일한 결과물을 얻을 수 있습니다!