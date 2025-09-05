import Link from "next/link";

export default function PreviewStep() {
  return (
    <div className="flex-1 flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-lg">
        <div className="glass-effect rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight">Preview &amp; Confirm</h1>
            <p className="text-gray-400 mt-2">Carefully review your token details before the final launch.</p>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-[#ab9db9] text-sm font-medium">Name</p>
              <p className="text-white text-sm font-semibold">MemeCoin</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#ab9db9] text-sm font-medium">Symbol</p>
              <p className="text-white text-sm font-semibold">MEME</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#ab9db9] text-sm font-medium">Curve Type</p>
              <p className="text-white text-sm font-semibold">Linear</p>
            </div>
            <div className="flex justify-between items-center border-t border-white/10 pt-6">
              <p className="text-[#ab9db9] text-sm font-medium">Creation Fee</p>
              <p className="text-white text-sm font-semibold">0.001 ETH</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <Link href="/create/launch" className="w-full h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold rounded-lg hover:bg-purple-700 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">rocket_launch</span>
              <span>Confirm Launch</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
