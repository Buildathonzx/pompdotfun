import Link from "next/link";

export default function FeesStep() {
  return (
    <div className="flex flex-1 justify-center items-center py-16 px-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="glass-effect rounded-2xl p-8 shadow-2xl shadow-black/20 border border-white/10">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-gray-400">Step 2 of 3</p>
              <p className="text-sm font-bold text-white">66%</p>
            </div>
            <div className="w-full bg-[#302839] rounded-full h-2.5">
              <div className="bg-[var(--primary-color)] h-2.5 rounded-full" style={{ width: "66%" }} />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-center mb-8 tracking-tighter">Fees &amp; Splits</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="creation-fee">Creation Fee (OKB)</label>
                <input id="creation-fee" type="number" className="form-input w-full rounded-lg text-white bg-[#1c1822] border-2 border-[#302839] focus:border-[var(--primary-color)] focus:ring-0 h-12 px-4 placeholder:text-gray-500" placeholder="e.g. 0.5" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="platform-fee">Platform %</label>
                <input id="platform-fee" type="number" className="form-input w-full rounded-lg text-white bg-[#1c1822] border-2 border-[#302839] focus:border-[var(--primary-color)] focus:ring-0 h-12 px-4 placeholder:text-gray-500" placeholder="e.g. 5" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="creator-split">Creator %</label>
                <input id="creator-split" type="number" className="form-input w-full rounded-lg text-white bg-[#1c1822] border-2 border-[#302839] focus:border-[var(--primary-color)] focus:ring-0 h-12 px-4 placeholder:text-gray-500" placeholder="e.g. 90" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="referrer-split">Referrer %</label>
                <input id="referrer-split" type="number" className="form-input w-full rounded-lg text-white bg-[#1c1822] border-2 border-[#302839] focus:border-[var(--primary-color)] focus:ring-0 h-12 px-4 placeholder:text-gray-500" placeholder="e.g. 5" />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-gray-300">Total Split</p>
              <p className="text-sm font-bold text-white">100%</p>
            </div>
            <div className="w-full bg-[#302839] rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "100%" }} />
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">The sum of Platform, Creator, and Referrer percentages must equal 100%.</p>
          </div>
          <div className="mt-10 flex justify-between items-center">
            <Link href="/create/curve" className="flex items-center justify-center rounded-lg h-12 px-6 bg-[#302839] text-white text-sm font-bold hover:bg-[#473b54]">
              <span className="material-symbols-outlined mr-2">arrow_back</span>
              Back
            </Link>
            <Link href="/create/preview" className="flex items-center justify-center rounded-lg h-12 px-6 bg-[var(--primary-color)] text-white text-sm font-bold hover:bg-[#6a0fcc]">
              Next
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
