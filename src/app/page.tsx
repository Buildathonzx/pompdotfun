import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#111714] text-white">
      <Header />
      <main className="px-6 md:px-20 lg:px-40 flex flex-1 justify-center py-10">
        <div className="flex flex-col max-w-[960px] flex-1 gap-12">
          <section className="p-4">
            <div
              className="flex min-h-[520px] flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-2xl items-start justify-end px-6 pb-12 md:px-12 shadow-2xl shadow-[var(--primary-color)]/10"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,0,0,0.3) 0%, rgba(17,23,20,0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9nSeIzmsJ-K3K7dukOU89I5sIU9plmPmkxA6DXxX3R5H-9vhTRusuQs2e_nVuNq-TQ6CHNkFdFXEChCGvCZiWpt2sKgGUoajwiMiNxBm6G2tiCBL5RtIH-v4nYFMa3P7d5z_aR53xA8fRjmkXp6BJNLVX30Jg1bnqzRprL1ToqPfxrEtts9PMdXM_-917owVgmDxh19aKiacQpeenYvw84yCLXTSVJgHyq066l6x-Edx_KFJ8I9F7jCclwm9wLphRO8VF45T_lIU")',
              }}
            >
              <div className="flex flex-col gap-4 text-left max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg">
                  Launch and Trade Meme Tokens on X Layer
                </h1>
                <h2 className="text-white/80 text-lg leading-relaxed">
                  Discover, create, and trade the hottest meme tokens on the X Layer network.
                </h2>
              </div>
              <Button className="bg-[var(--primary-color)] text-[#111714] hover:bg-opacity-90 rounded-xl h-12 px-8">
                <Link href="/create">Get Started</Link>
              </Button>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {["Total Value Locked", "Tokens Launched", "Active Users"].map((label, i) => (
              <GlassCard key={label} className="hover:bg-[var(--primary-color)]/10 transition-all">
                <p className="text-white/80 text-base font-medium leading-normal">{label}</p>
                <p className="text-white text-3xl font-bold leading-tight mt-1">
                  {i === 0 ? "$12.5M" : i === 1 ? "250+" : "15,000+"}
                </p>
                <p className="text-[#38e07b] text-base font-bold leading-normal">{i === 0 ? "+15%" : i === 1 ? "+20%" : "+10%"}</p>
              </GlassCard>
            ))}
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] px-4">Trending Tokens</h2>
            <div className="flex overflow-x-auto no-scrollbar py-4">
              <div className="flex items-stretch px-4 gap-6">
                {["DogeX","MeowX","FrogX"].map((name, idx) => (
                  <GlassCard key={name} className="min-w-52 hover:-translate-y-2 transition-transform duration-300">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                      style={{ backgroundImage: `url(${[
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuDJT7fqLnFnqIDeW9FCLHt9lxaYlmOSR3UW43ixOreV0DuaTK6HYiEeElQOnjW7D5fWoFSIuEfJZtG6VD-aLOfWTIz4XYjoiFfCWn9VZ6VRUAJiCR1gqAiAAH36jaUOrrkZKdCiC0GeY_bY1yZYUHJdYaOAPHJ2Azfro6p0dxe0TMt_bsXi_HWqnQ_cOaKw0p3M_T0phNIjMKWUffy4tAYOQ52hJmmbZB3LxYgMEfuFUHS9476pAnwl0lsm1HeZS2F0C6pavmWEu68",
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAyjDMoqG4S3hnEq_rNBzwWgR40v8D9GJD2Z-j29qAXyVYYJ79AAwwvqwYDYaNdogOT-EMtoZSTKZev_6zyI9QELkA8a3PoQybvfrHyYTl8M9ks4J4vaTCbSu6paQDuTShLpsr_JMQhzqZ3JeNUXVWUsvtSR2Tv1bT-KsKkqv90DOGApXRuyiO-Ru7RWW48aTLxdfV8Lg8xp3fXk987rUFsPYw6L9AqtRDshXz66Px1sDYc5VjaUzNzaEG3QzT1-p7tlj_LAz4Z_AM",
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuDPU-0e58yKjkZiuyW4VirKEYiozFfdrw597sQyxkdEyHl7Hi3wx5FgeGaSJJJM2-RLJkBQ9rM-sNa8GGVN2nYVRottZpWRQiAQc0wQ5qTVzLqy-JWgOcmyTj6wKVET_dXGbz3TkTizo6-hA0t_drBK2K09435MAgcY7yb6ESBFsxjWlSKLHWUONIMEx8b4PMzJH44ZsWtlc5y3raHt9lr0MNv9Yehzc_CKVCVD02le5nPAFGkApRLYsGdA6_dz8Uez-FYP1mfIxB0",
                      ][idx]})` }}
                    />
                    <div className="mt-4">
                      <p className="text-white text-lg font-bold leading-normal">{name}</p>
                      <p className="text-white/60 text-sm">A trending meme token on X Layer.</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
