import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";

export default function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111714] text-white">
      <Header />
      <main className="px-10 md:px-20 lg:px-40 flex-1 py-10">
        <div className="flex flex-col max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-6 p-4">
            <h1 className="text-white tracking-tight text-4xl font-bold">Explore Tokens</h1>
            <div className="flex gap-3 flex-wrap">
              <button className="flex h-10 items-center justify-center gap-x-2 rounded-md bg-[#29382f] pl-4 pr-3 text-white hover:bg-[#34463b] transition-colors">
                <p className="text-sm font-medium">Time: All</p>
                <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>
              </button>
              <button className="flex h-10 items-center justify-center gap-x-2 rounded-md bg-[#29382f] pl-4 pr-3 text-white hover:bg-[#34463b] transition-colors">
                <p className="text-sm font-medium">DEX: All</p>
                <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 p-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <GlassCard key={i} className="group relative flex flex-col gap-4 p-4 backdrop-blur-2xl transition-all duration-300 hover:border-[var(--primary-color)]/50 hover:bg-[var(--primary-color)]/10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                      style={{ backgroundImage: `url(https://picsum.photos/seed/${i}/200)` }}
                    />
                    <div>
                      <h3 className="text-white text-lg font-bold">Token {String.fromCharCode(65 + (i % 26))}</h3>
                      <p className="text-gray-400 text-sm">$TK{String.fromCharCode(65 + (i % 26))}</p>
                    </div>
                  </div>
                  {i % 2 === 0 && (
                    <div className="rounded-full bg-[var(--primary-color)]/20 px-3 py-1 text-xs font-medium text-[var(--primary-color)]">Trending</div>
                  )}
                </div>
                <svg className="w-full" viewBox="0 0 244 60" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <path d="M1 59L31.5 40L49 48L74 23.5L95.5 32L121.5 1L147 15L171 8L193.5 23.5L217.5 15L243 28.5" stroke="#38E07B" strokeWidth="2"/>
                </svg>
              </GlassCard>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
