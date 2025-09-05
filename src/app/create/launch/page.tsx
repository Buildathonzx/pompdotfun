export default function LaunchStep() {
  return (
    <div className="flex flex-1 items-center justify-center py-16">
      <div className="w-full max-w-md rounded-2xl bg-[#1c1723] border border-[#302839] p-8 shadow-2xl shadow-[var(--primary-color)]/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Launch Your Token</h2>
          <p className="text-gray-400 mt-2">Step 3 of 3</p>
        </div>
        <div className="mt-8">
          <div className="w-full bg-[#302839] rounded-full h-2.5">
            <div className="bg-[var(--primary-color)] h-2.5 rounded-full" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center space-y-6">
          <button className="group relative flex w-full items-center justify-center rounded-lg bg-[var(--primary-color)] px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-opacity-90">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--primary-color)] to-[#a855f7] opacity-0 group-hover:opacity-30 transition-opacity"></div>
            <span className="truncate">Launch Token</span>
          </button>
          <p className="text-center text-sm text-gray-400">You will be prompted to sign one or more transactions.</p>
        </div>
      </div>
    </div>
  );
}
