export default function SignPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#141118] p-4 text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(127,19,236,0.8),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-[-10%] right-[-20%] top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(127,19,236,0.8),rgba(255,255,255,0))]"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md">
        <div className="glass-effect rounded-2xl border border-white/10 shadow-2xl shadow-purple-500/20 w-full">
          <div className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-purple-500/20 p-4 border border-purple-500/30">
                <span className="material-symbols-outlined text-purple-400 text-4xl">wallet</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-3">Authenticate Your Wallet</h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Please sign the message to securely connect your wallet to the pompdafun.
            </p>
            <div className="flex flex-col items-center">
              <button className="w-full h-12 px-6 bg-[var(--primary-color)] rounded-lg text-white text-base font-bold tracking-wider hover:bg-purple-600 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">draw</span>
                Sign &amp; Continue
              </button>
              <p className="text-xs text-gray-500 mt-4">This does not cost any gas fees.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
