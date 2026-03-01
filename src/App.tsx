import { useState, useEffect, useCallback } from 'react';

// Confetti component
function Confetti() {
  const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff85a1', '#a855f7', '#f97316', '#06b6d4'];
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: 6 + Math.random() * 10,
    shape: Math.random() > 0.5 ? 'circle' : 'rect',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            width: piece.shape === 'circle' ? piece.size : piece.size * 0.6,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: piece.shape === 'circle' ? '50%' : '2px',
            top: '-20px',
          }}
        />
      ))}
    </div>
  );
}

// Floating emoji component
function FloatingEmojis() {
  const emojis = ['🎈', '🎉', '🎊', '⭐', '✨', '🎁', '🎂', '💫', '🥳', '🎀'];
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 6,
    size: 20 + Math.random() * 24,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float"
          style={{
            left: `${item.left}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: `${item.size}px`,
            opacity: 0.6,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
}

// Stars background
function StarsBackground() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    size: 2 + Math.random() * 4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-yellow-200 animate-starTwinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// Birthday cake SVG
function BirthdayCake() {
  return (
    <div className="relative w-48 h-56 mx-auto">
      {/* Candle flames */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-6">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className="w-4 h-6 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-candle"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
            <div className="w-1.5 h-8 bg-gradient-to-b from-pink-300 to-pink-400 rounded-sm" />
          </div>
        ))}
      </div>
      {/* Cake layers */}
      <div className="absolute bottom-0 w-full">
        {/* Top layer */}
        <div className="mx-auto w-32 h-10 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-lg relative overflow-hidden">
          <div className="absolute top-1 left-0 right-0 flex justify-around">
            {['🍓', '🫐', '🍓', '🫐', '🍓'].map((f, i) => (
              <span key={i} className="text-xs">{f}</span>
            ))}
          </div>
          {/* Frosting drips */}
          <div className="absolute -bottom-2 left-2 w-4 h-4 bg-pink-200 rounded-full" />
          <div className="absolute -bottom-3 left-8 w-3 h-5 bg-pink-200 rounded-full" />
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-pink-200 rounded-full" />
          <div className="absolute -bottom-4 right-10 w-3 h-5 bg-pink-200 rounded-full" />
        </div>
        {/* Middle layer */}
        <div className="mx-auto w-40 h-12 bg-gradient-to-b from-amber-200 to-amber-300 relative">
          <div className="absolute top-0 left-0 right-0 h-2 bg-pink-200 rounded-sm" />
          <div className="absolute bottom-2 left-0 right-0 flex justify-around">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-red-400" />
            ))}
          </div>
        </div>
        {/* Bottom layer */}
        <div className="mx-auto w-48 h-14 bg-gradient-to-b from-orange-200 to-orange-300 rounded-b-lg relative">
          <div className="absolute top-0 left-0 right-0 h-2 bg-amber-100 rounded-sm" />
          <div className="absolute bottom-3 left-0 right-0 flex justify-around px-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-green-400 border border-green-500" />
            ))}
          </div>
        </div>
        {/* Plate */}
        <div className="mx-auto w-52 h-3 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-full" />
      </div>
    </div>
  );
}

// Wish card component
function WishCard({ emoji, title, message, delay }: { emoji: string; title: string; message: string; delay: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    const el = document.getElementById(`wish-${delay}`);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      id={`wish-${delay}`}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay * 200}ms` }}
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default h-full">
        <div className="text-4xl mb-3">{emoji}</div>
        <h3 className="text-lg font-bold text-yellow-300 mb-2">{title}</h3>
        <p className="text-white/80 text-sm leading-relaxed">{message}</p>
      </div>
    </div>
  );
}

// Main App
export default function App() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [cakeBlown, setCakeBlown] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleBlowCandle = useCallback(() => {
    setCakeBlown(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  }, []);

  const handleSurprise = useCallback(() => {
    setShowSurprise(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  }, []);

  const wishes = [
    { emoji: '🌟', title: 'Kesuksesan', message: 'Semoga semua impian dan cita-citamu tercapai. Terus berjuang dan jangan pernah menyerah!' },
    { emoji: '❤️', title: 'Kebahagiaan', message: 'Semoga harimu selalu dipenuhi kebahagiaan, tawa, dan cinta dari orang-orang tersayang.' },
    { emoji: '💪', title: 'Kesehatan', message: 'Semoga selalu diberikan kesehatan dan kekuatan untuk menjalani setiap hari dengan semangat.' },
    { emoji: '🤲', title: 'Keberkahan', message: 'Semoga setiap langkahmu diberkahi dan dimudahkan dalam segala urusan.' },
    { emoji: '🎯', title: 'Pencapaian', message: 'Semoga di tahun yang baru ini kamu bisa meraih pencapaian-pencapaian yang luar biasa!' },
    { emoji: '🌈', title: 'Keindahan', message: 'Semoga hidupmu selalu berwarna dan penuh dengan momen-momen indah yang tak terlupakan.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden">
      <StarsBackground />
      <FloatingEmojis />
      {showConfetti && <Confetti />}

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative z-20 px-4">
        <div className="text-center">
          {/* Greeting */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <p className="text-lg md:text-xl text-yellow-300/80 tracking-[0.3em] uppercase font-light mb-4">
              ✨ Special Day ✨
            </p>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-2 bg-gradient-to-r from-yellow-200 via-pink-300 to-yellow-200 bg-clip-text text-transparent animate-gradient drop-shadow-lg">
              Selamat Ulang Tahun!
            </h1>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.8s', opacity: 0 }}>
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent to-yellow-400" />
              <span className="text-3xl animate-bounce-slow">🎂</span>
              <div className="h-[1px] w-16 md:w-24 bg-gradient-to-l from-transparent to-yellow-400" />
            </div>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '1.1s', opacity: 0 }}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              Ibra Ahmad Risky
            </h2>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '1.4s', opacity: 0 }}>
            <p className="text-xl md:text-2xl text-white/70 mt-4 max-w-xl mx-auto leading-relaxed">
              Hari ini adalah hari spesialmu! 🥳<br />
              Semoga semua harapan dan doamu terkabul
            </p>
          </div>

          <div className="animate-fadeInUp mt-10" style={{ animationDelay: '1.8s', opacity: 0 }}>
            <a
              href="#cake"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 active:scale-95"
            >
              <span>Lihat Ucapan</span>
              <span className="animate-bounce-slow">🎁</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce-slow">
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-sm">Scroll ke bawah</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Cake Section */}
      <section id="cake" className="min-h-screen flex flex-col items-center justify-center relative z-20 px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            🎂 Kue Ulang Tahunmu 🎂
          </h2>
          <p className="text-white/60 mb-12 text-lg">Tekan tombol untuk meniup lilinnya!</p>

          <div className="mb-10 animate-float">
            {!cakeBlown ? (
              <BirthdayCake />
            ) : (
              <div className="relative w-48 h-56 mx-auto">
                <div className="absolute bottom-0 w-full">
                  <div className="mx-auto w-32 h-10 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-lg relative overflow-hidden">
                    <div className="absolute top-1 left-0 right-0 flex justify-around">
                      {['🍓', '🫐', '🍓', '🫐', '🍓'].map((f, i) => (
                        <span key={i} className="text-xs">{f}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mx-auto w-40 h-12 bg-gradient-to-b from-amber-200 to-amber-300 relative">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-pink-200 rounded-sm" />
                    <div className="absolute bottom-2 left-0 right-0 flex justify-around">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-red-400" />
                      ))}
                    </div>
                  </div>
                  <div className="mx-auto w-48 h-14 bg-gradient-to-b from-orange-200 to-orange-300 rounded-b-lg relative">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-amber-100 rounded-sm" />
                    <div className="absolute bottom-3 left-0 right-0 flex justify-around px-2">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="w-3 h-3 rounded-full bg-green-400 border border-green-500" />
                      ))}
                    </div>
                  </div>
                  <div className="mx-auto w-52 h-3 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-full" />
                </div>
              </div>
            )}
          </div>

          {!cakeBlown ? (
            <button
              onClick={handleBlowCandle}
              className="px-10 py-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full text-xl font-bold hover:from-orange-500 hover:to-red-600 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-110 active:scale-95 animate-pulse-glow"
            >
              🌬️ Tiup Lilinnya!
            </button>
          ) : (
            <div className="animate-scaleIn">
              <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-3">
                🎉 Lilinnya sudah padam! 🎉
              </p>
              <p className="text-white/70 text-lg">
                Semoga semua doamu terkabul, Ibra! ✨
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Wishes Section */}
      <section className="min-h-screen relative z-20 px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
              💝 Doa & Harapan 💝
            </h2>
            <p className="text-white/60 text-lg max-w-lg mx-auto">
              Kumpulan doa dan harapan terbaik untuk perjalanan hidupmu ke depan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishes.map((wish, index) => (
              <WishCard key={index} {...wish} delay={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Personal Message Section */}
      <section className="min-h-screen flex items-center justify-center relative z-20 px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 text-4xl opacity-20">🎀</div>
            <div className="absolute top-4 right-4 text-4xl opacity-20">🎀</div>
            <div className="absolute bottom-4 left-4 text-4xl opacity-20">🎀</div>
            <div className="absolute bottom-4 right-4 text-4xl opacity-20">🎀</div>

            <div className="text-6xl mb-6 animate-heartbeat">💌</div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pink-300 via-rose-300 to-pink-400 bg-clip-text text-transparent">
              Pesan Spesial Untukmu
            </h2>

            <div className="space-y-4 text-white/80 text-lg leading-relaxed">
              <p>
                Hai <span className="text-yellow-300 font-bold">Ibra Ahmad Risky</span>! 👋
              </p>
              <p>
                Di hari yang spesial ini, aku ingin mengucapkan selamat ulang tahun yang penuh kebahagiaan! 🎉
              </p>
              <p>
                Terima kasih sudah menjadi teman yang luar biasa. Kehadiranmu selalu membawa keceriaan dan semangat bagi orang-orang di sekitarmu. 😊
              </p>
              <p>
                Semoga di usia yang baru ini, kamu semakin dewasa, semakin bijaksana, dan semakin dekat dengan semua impianmu. 🌟
              </p>
              <p>
                Jangan pernah berhenti bermimpi dan terus jadi versi terbaik dari dirimu sendiri! 💪
              </p>
              <p className="text-xl font-semibold text-yellow-300 pt-4">
                Happy Birthday, Bro! 🥳🎂🎈
              </p>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-pink-400" />
              <span className="text-pink-300 font-light italic">Dari temanmu yang tulus</span>
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-pink-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Surprise Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative z-20 px-4 py-20">
        <div className="text-center">
          {!showSurprise ? (
            <div className="animate-fadeIn">
              <p className="text-2xl text-white/60 mb-8">Ada satu lagi untukmu... 🤫</p>
              <button
                onClick={handleSurprise}
                className="px-12 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full text-xl font-bold hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 active:scale-95 animate-pulse-glow"
              >
                🎁 Buka Kejutan!
              </button>
            </div>
          ) : (
            <div className="animate-scaleIn max-w-2xl">
              <div className="text-8xl md:text-9xl mb-8 animate-bounce-slow">🎉</div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-200 via-pink-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent animate-gradient">
                HAPPY BIRTHDAY!
              </h2>
              <div className="text-5xl md:text-7xl mb-6 flex items-center justify-center gap-4">
                <span className="animate-float" style={{ animationDelay: '0s' }}>🎈</span>
                <span className="animate-float" style={{ animationDelay: '0.5s' }}>🎊</span>
                <span className="animate-float" style={{ animationDelay: '1s' }}>🥳</span>
                <span className="animate-float" style={{ animationDelay: '1.5s' }}>🎁</span>
                <span className="animate-float" style={{ animationDelay: '2s' }}>🎈</span>
              </div>
              <p className="text-2xl md:text-3xl text-white/80 font-light">
                Ibra Ahmad Risky, kamu luar biasa! 🌟
              </p>
              <p className="text-lg text-white/50 mt-4">
                Semoga panjang umur, sehat selalu, dan bahagia selalu! 🤲
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-10 text-center border-t border-white/10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-2xl">🎂</span>
          <p className="text-white/40 text-sm">
            Dibuat dengan <span className="text-red-400">❤️</span> untuk <span className="text-yellow-300">Ibra Ahmad Risky</span>
          </p>
          <span className="text-2xl">🎂</span>
        </div>
        <p className="text-white/20 text-xs">Happy Birthday! 🎉</p>
      </footer>
    </div>
  );
}
