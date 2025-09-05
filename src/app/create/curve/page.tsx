import Link from "next/link";

export default function CurveStep() {
  return (
    <div className="flex-1 px-10 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
        <div className="flex flex-col pt-2">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Link className="text-[#ab9db9] text-sm font-medium hover:text-white" href="/create">Create Token</Link>
            <span className="text-[#ab9db9] text-sm font-medium">/</span>
            <span className="text-white text-sm font-medium">Bonding Curve</span>
          </div>
          <h1 className="text-white text-4xl font-bold tracking-tight mb-3">Bonding Curve</h1>
          <p className="text-[#ab9db9] text-base leading-relaxed mb-10">Define your token's economic model. This curve determines the price of your token based on its supply.</p>
          <div className="space-y-6 max-w-md">
            <div className="relative">
              <label className="absolute -top-2 left-3 px-1 bg-[#141118] text-xs text-[#ab9db9]" htmlFor="curve-type">Curve Type</label>
              <select id="curve-type" className="form-select w-full rounded-lg text-white bg-transparent border border-[#302839] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] h-14 p-4">
                <option value="linear">Linear</option>
                <option value="exponential">Exponential</option>
              </select>
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 px-1 bg-[#141118] text-xs text-[#ab9db9]" htmlFor="initial-price">Initial Price (OKB)</label>
              <input id="initial-price" className="form-input" placeholder="e.g., 0.05" />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 px-1 bg-[#141118] text-xs text-[#ab9db9]" htmlFor="slope-factor">Slope / Factor</label>
              <input id="slope-factor" className="form-input" placeholder="e.g., 0.001" />
            </div>
          </div>
          <div className="flex gap-4 mt-12">
            <Link href="/create/metadata" className="flex min-w-[120px] items-center justify-center rounded-lg h-12 px-6 bg-[#302839] hover:bg-[#4a4552] text-white font-bold">Back</Link>
            <Link href="/create/fees" className="flex min-w-[120px] items-center justify-center rounded-lg h-12 px-6 bg-[var(--primary-color)] hover:bg-violet-600 text-white font-bold">Next</Link>
          </div>
        </div>
        <div className="flex flex-col rounded-2xl bg-black/20 border border-[#302839] backdrop-blur-xl p-8 shadow-2xl shadow-violet-900/10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[#ab9db9] text-base font-medium">Price vs. Supply</p>
              <p className="text-white text-3xl font-bold leading-tight truncate">$123.45</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-[#0bda73]">+12%</span>
              <span className="text-[#ab9db9]">vs Last 30 Days</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <svg className="w-full h-auto" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" fill="none">
              <defs>
                <linearGradient id="paint0" x1="250" x2="250" y1="0" y2="300" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--primary-color)" stopOpacity="0.3" />
                  <stop offset="1" stopColor="var(--primary-color)" stopOpacity="0" />
                </linearGradient>
                <filter id="glow" width="200%" height="200%" x="-50%" y="-50%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path d="M0 250 C 83 250, 166 100, 250 100 C 333 100, 416 50, 500 50" filter="url(#glow)" stroke="var(--primary-color)" strokeWidth="3" strokeLinecap="round" />
              <path d="M0 250 C 83 250, 166 100, 250 100 C 333 100, 416 50, 500 50 L 500 300 L 0 300 Z" fill="url(#paint0)" />
            </svg>
          </div>
          <div className="flex justify-between mt-4">
            <span className="text-[#ab9db9] text-xs font-medium">0</span>
            <span className="text-[#ab9db9] text-xs font-medium">Token Supply</span>
            <span className="text-[#ab9db9] text-xs font-medium">Max</span>
          </div>
        </div>
      </div>
    </div>
  );
}
