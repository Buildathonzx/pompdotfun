import Link from "next/link";
import GlassCard from "@/components/GlassCard";

export default function CreateIndex() {
  return (
    <div className="px-10 py-12 flex justify-center">
      <GlassCard className="max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-2">Create a Token</h1>
        <p className="text-white/70 mb-6">Start the wizard to launch your meme token.</p>
        <Link href="/create/metadata" className="inline-flex items-center justify-center rounded-lg bg-[var(--primary-color)] px-6 py-3 font-bold">
          Start Wizard
        </Link>
      </GlassCard>
    </div>
  );
}
