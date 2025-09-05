import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

export default function TokenDetailPage({ params }: { params: { slug: string } }) {
  const name = params.slug.toUpperCase();
  return (
    <div className="min-h-screen flex flex-col bg-[#141118] text-white">
      <Header />
      <main className="flex-1 px-6 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col gap-8 lg:col-span-2">
            <GlassCard>
              <div className="flex items-center gap-4">
                <img src={`https://picsum.photos/seed/${name}/128`} alt={`${name} Token`} className="size-16 rounded-full" />
                <div>
                  <h1 className="text-3xl font-bold">{name}</h1>
                  <p className="text-white/60">Symbol: {name.slice(0, 4)}</p>
                </div>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="mb-4 flex items-baseline justify-between">
                <div>
                  <p className="text-base font-medium text-white/60">Bonding Curve</p>
                  <p className="text-4xl font-bold tracking-tight">$12,345</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-white/60">Last 7 Days</p>
                  <p className="text-base font-medium text-[#0bda73]">+5.2%</p>
                </div>
              </div>
              <div className="h-[250px]">
                <svg className="w-full h-full" viewBox="0 0 475 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" fill="none">
                  <defs>
                    <linearGradient id="paint0" x1="236" x2="236" y1="1.66" y2="248.33" gradientUnits="userSpaceOnUse">
                      <stop stopColor="var(--primary-color)" stopOpacity="0.3" />
                      <stop offset="1" stopColor="var(--primary-color)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 181.667C18.1538 181.667 18.1538 35 36.3077 35C54.4615 35 54.4615 68.3333 72.6154 68.3333C90.7692 68.3333 90.7692 155 108.923 155C127.077 155 127.077 55 145.231 55C163.385 55 163.385 168.333 181.538 168.333C199.692 168.333 199.692 101.667 217.846 101.667C236 101.667 236 75 254.154 75C272.308 75 272.308 201.667 290.462 201.667C308.615 201.667 308.615 248.333 326.769 248.333C344.923 248.333 344.923 1.66667 363.077 1.66667C381.231 1.66667 381.231 135 399.385 135C417.538 135 417.538 215 435.692 215C453.846 215 453.846 41.6667 472 41.6667V248.333H0V181.667Z" fill="url(#paint0)" />
                  <path d="M0 181.667C18.1538 181.667 18.1538 35 36.3077 35C54.4615 35 54.4615 68.3333 72.6154 68.3333C90.7692 68.3333 90.7692 155 108.923 155C127.077 155 127.077 55 145.231 55C163.385 55 163.385 168.333 181.538 168.333C199.692 168.333 199.692 101.667 217.846 101.667C236 101.667 236 75 254.154 75C272.308 75 272.308 201.667 290.462 201.667C308.615 201.667 308.615 248.333 326.769 248.333C344.923 248.333 344.923 1.66667 363.077 1.66667C381.231 1.66667 381.231 135 399.385 135C417.538 135 417.538 215 435.692 215C453.846 215 453.846 41.6667 472 41.6667" stroke="var(--primary-color)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="border-b border-[#473b54]">
                <div className="flex gap-1 px-4">
                  <button className="border-b-2 border-b-[var(--primary-color)] px-4 py-3 text-sm font-bold text-white">Trades</button>
                  <button className="border-b-2 border-b-transparent px-4 py-3 text-sm font-bold text-white/60 hover:text-white">Liquidity</button>
                  <button className="border-b-2 border-b-transparent px-4 py-3 text-sm font-bold text-white/60 hover:text-white">About</button>
                </div>
              </div>
              <div className="p-4 overflow-x-auto">
                <table className="w-full text-left min-w-[480px]">
                  <thead>
                    <tr className="border-b border-[#473b54]">
                      <th className="px-4 py-3 text-sm font-medium text-white/60">Time</th>
                      <th className="px-4 py-3 text-sm font-medium text-white/60">Price</th>
                      <th className="px-4 py-3 text-sm font-medium text-white/60">Amount</th>
                      <th className="px-4 py-3 text-sm font-medium text-white/60">User</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { t: "10:30 AM", p: "$0.005", a: "+1000", u: "User A", c: "text-[#0bda73]" },
                      { t: "10:25 AM", p: "$0.004", a: "-500", u: "User B", c: "text-[#ff4d4d]" },
                      { t: "10:20 AM", p: "$0.003", a: "+2000", u: "User C", c: "text-[#0bda73]" },
                      { t: "10:15 AM", p: "$0.002", a: "-1500", u: "User D", c: "text-[#ff4d4d]" },
                      { t: "10:10 AM", p: "$0.001", a: "+1000", u: "User E", c: "text-[#0bda73]" },
                    ].map((r) => (
                      <tr key={r.t} className="border-b border-[#473b54] last:border-b-0">
                        <td className="px-4 py-4 text-sm text-white">{r.t}</td>
                        <td className="px-4 py-4 text-sm text-white">{r.p}</td>
                        <td className={`px-4 py-4 text-sm ${r.c}`}>{r.a}</td>
                        <td className="px-4 py-4 text-sm text-white">{r.u}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>
          <div className="flex flex-col gap-8">
            <GlassCard>
              <h2 className="text-2xl font-bold">OKB Pool</h2>
              <p className="mb-4 text-white/60">Progress: 75%</p>
              <div className="mb-1 flex justify-between text-sm font-medium text-white/80">
                <span>0 OKB</span>
                <span>100,000 OKB</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-[#473b54]">
                <div className="h-2.5 rounded-full bg-[var(--primary-color)]" style={{ width: "75%" }} />
              </div>
              <div className="mt-1 flex justify-end text-sm font-medium text-white/80">
                <span>75,000 OKB</span>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex flex-col gap-4">
                <Button className="bg-[var(--primary-color)] text-white hover:scale-105">Buy</Button>
                <Button className="bg-[#302839] text-white hover:scale-105">Sell</Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
