import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 처리 (현재는 시각적 피드백만)
  };

  return (
    <section id="inquiry" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[640px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl mb-4 tracking-tight"
            style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}
          >
            Contact
          </h2>
          <div className="w-16 h-px bg-black/20 mx-auto" />
          <p
            className="mt-6 text-sm opacity-70 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            SOLMONT에 대해 궁금한 점이 있으시면 언제든 문의해 주세요.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 성함 */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm tracking-wider mb-3 opacity-70"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              성함
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력해 주세요"
              className="w-full px-5 py-4 bg-[#FAFAF8] border border-black/10 rounded-sm text-sm placeholder:text-black/40 focus:outline-none focus:border-[#8B7355] focus:ring-1 focus:ring-[#8B7355]/30 transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          {/* 이메일 */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm tracking-wider mb-3 opacity-70"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              이메일
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full px-5 py-4 bg-[#FAFAF8] border border-black/10 rounded-sm text-sm placeholder:text-black/40 focus:outline-none focus:border-[#8B7355] focus:ring-1 focus:ring-[#8B7355]/30 transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          {/* 본문 */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm tracking-wider mb-3 opacity-70"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              본문
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="문의 내용을 입력해 주세요"
              rows={6}
              className="w-full px-5 py-4 bg-[#FAFAF8] border border-black/10 rounded-sm text-sm placeholder:text-black/40 focus:outline-none focus:border-[#8B7355] focus:ring-1 focus:ring-[#8B7355]/30 transition-all duration-300 resize-none"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          {/* 문의하기 버튼 */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 rounded-full border-2 border-[#8B7355] text-[#8B7355] text-sm tracking-wider hover:bg-[#8B7355] hover:text-white hover:shadow-lg hover:shadow-[#8B7355]/25 active:scale-[0.99] transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              문의하기
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
