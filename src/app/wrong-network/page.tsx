export default function WrongNetworkPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#141118] text-white p-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-lg">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
            <span className="material-symbols-outlined text-4xl">warning</span>
          </div>
          <h2 className="text-2xl font-bold">Wrong Network</h2>
          <p className="mt-2 text-base text-gray-400">Your wallet is connected to an unsupported network. Please switch to the X Layer network to proceed.</p>
          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary-color)] py-3 px-4 text-sm font-semibold text-white hover:bg-opacity-80 active:scale-95">
            <span className="material-symbols-outlined">swap_horiz</span>
            Switch Network
          </button>
        </div>
      </div>
    </div>
  );
}
