import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#f8fafc] font-sans antialiased">
      
      {/* ==================== HEADER ==================== */}
      <header className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center border-b border-[#334155]">
        <div className="text-xl font-bold tracking-wider text-[#22c55e]">
          FOOT<span className="text-[#facc15]">TAKTIC</span>
        </div>
        <nav className="flex gap-6 text-sm font-medium text-[#94a3b8]">
          <a href="#posts" className="hover:text-[#f8fafc] transition-colors">Posts</a>
          <a href="#tags" className="hover:text-[#f8fafc] transition-colors">Tags</a>
          <a href="#about" className="hover:text-[#f8fafc] transition-colors">About</a>
        </nav>
      </header>

      {/* ==================== MAIN CONTENT ==================== */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        
        {/* ==================== WORLD CUP BANNER 2026 ==================== */}
        <div className="relative w-full min-h-[380px] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center my-8 bg-cover bg-center"
             style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6)), url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80')` }}>
          
          <div className="absolute inset-x-0 flex justify-between px-8 text-6xl font-black text-[#38bdf8] opacity-10 pointer-events-none select-none tracking-widest">
            <span>FOOT</span>
            <span>TAKTIC</span>
          </div>

          <div className="relative z-10 bg-[#0f172a]/85 border-2 border-[#38bdf8]/30 p-8 rounded-2xl max-w-[450px] w-[90%] text-center shadow-2xl backdrop-blur-sm">
            <h2 className="text-[#facc15] text-2xl font-extrabold tracking-wider mb-3">WORLD CUP 2026</h2>
            
            <div className="flex justify-center gap-4 text-3xl mb-4">
              <span>🇺🇸</span>
              <span>🇨🇦</span>
              <span>🇲🇽</span>
            </div>

            <div className="flex justify-center gap-6 mb-6">
              <div className="flex items-baseline text-[#ffffff]">
                <span className="text-3xl font-black text-[#facc15] mr-1">18</span>
                <span className="text-xs text-[#94a3b8] font-bold">DAYS</span>
              </div>
              <div className="flex items-baseline text-[#ffffff]">
                <span className="text-3xl font-black text-[#facc15] mr-1">23</span>
                <span className="text-xs text-[#94a3b8] font-bold">HOURS</span>
              </div>
              <div className="flex items-baseline text-[#ffffff]">
                <span className="text-3xl font-black text-[#facc15] mr-1">06</span>
                <span className="text-xs text-[#94a3b8] font-bold">MINS</span>
              </div>
            </div>

            <div className="flex gap-3 justify-between">
              <a href="#live" className="flex-1 py-3 text-xs font-bold text-center text-white rounded-lg border border-[#f87171] bg-gradient-to-b from-[#ef4444] to-[#b91c1c] hover:scale-105 transition-all">LIVE</a>
              <a href="#news" className="flex-1 py-3 text-xs font-bold text-center text-white rounded-lg border border-[#4ade80] bg-gradient-to-b from-[#22c55e] to-[#15803d] hover:scale-105 transition-all">NEWS</a>
              <a href="#transfers" className="flex-1 py-3 text-xs font-bold text-center text-white rounded-lg border border-[#38bdf8] bg-gradient-to-b from-[#0ea5e9] to-[#0369a1] hover:scale-105 transition-all">TRANSFERS</a>
            </div>
          </div>
        </div>

        {/* ==================== HERO SECTION ==================== */}
        <section className="py-6">
          <h1 className="text-4xl font-extrabold mb-4 tracking-tight">
            Foot Taktic <span className="text-xl">📶</span>
          </h1>
          <p className="text-[#94a3b8] text-lg leading-relaxed">
            مرحباً بكِ في منصة التحليلات الكروية وأحدث الأخبار الحصرية لكأس العالم 2026 وتغطية مباشرة لأبرز الانتقالات.
          </p>
        </section>

        <hr className="border-[#334155] my-8" />

        {/* ==================== FEATURED POSTS ==================== */}
        <section id="posts" className="py-4">
          <h2 className="text-2xl font-bold tracking-wide mb-6">Featured Posts</h2>
          <div className="space-y-6">
            <article className="p-5 rounded-xl bg-[#1e293b] border border-[#334155] hover:border-[#22c55e] transition-colors group cursor-pointer">
              <span className="text-xs text-[#22c55e] font-bold">FEATURED</span>
              <h3 className="text-xl font-semibold mt-1 mb-2 group-hover:text-[#22c55e] transition-colors">
                استعدادات المنتخبات العربية لمونديال 2026
              </h3>
              <p className="text-[#94a3b8] text-sm">قراءة شاملة في تكتيك المنتخبات وحظوظها في المجموعات الجديدة المتطورة.</p>
            </article>
          </div>
        </section>

      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="max-w-4xl mx-auto px-4 py-8 mt-12 border-t border-[#334155] text-center text-sm text-[#94a3b8]">
        <p>&copy; 2026 Foot Taktic. All rights reserved.</p>
      </footer>
    </div>
  );
}
