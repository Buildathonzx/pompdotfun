import Link from "next/link";

export default function MetadataStep() {
  return (
    <div className="px-40 flex flex-1 justify-center py-10">
      <div className="flex flex-col w-[560px] max-w-[560px] py-5 flex-1">
        <div className="flex flex-wrap gap-2 p-4 items-center">
          <Link className="text-[#ab9db9] hover:text-white transition-colors text-sm font-medium" href="/create">Create Token</Link>
          <span className="text-[#ab9db9] text-sm font-medium">/</span>
          <span className="text-white text-sm font-medium">Metadata</span>
        </div>
        <div className="bg-[#1c1822] rounded-2xl p-8 border border-solid border-[#302839]/80 shadow-2xl shadow-[#8013ec]/10">
          <h2 className="text-white tracking-tight text-[32px] font-bold pb-2">Create Token Metadata</h2>
          <p className="text-[#ab9db9] text-base mb-8">Fill in the details for your new meme token.</p>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white text-base font-medium" htmlFor="token-name">Name</label>
              <input className="form-input" id="token-name" placeholder="e.g. Pepe Coin" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-medium" htmlFor="token-symbol">Symbol</label>
                <input className="form-input" id="token-symbol" placeholder="e.g. PEPE" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-medium" htmlFor="token-decimals">Decimals</label>
                <input className="form-input" id="token-decimals" placeholder="e.g. 18" type="number" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-base font-medium" htmlFor="token-image-url">Image URL</label>
              <input className="form-input" id="token-image-url" placeholder="https://example.com/image.png" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-base font-medium" htmlFor="token-description">Description</label>
              <textarea className="form-input min-h-36" id="token-description" placeholder="A brief description of your token..." />
            </div>
            <div className="flex pt-4 justify-end">
              <Link href="/create/curve" className="flex min-w-[120px] items-center justify-center rounded-lg h-12 px-6 bg-[var(--primary-color)] hover:bg-opacity-90 transition-all text-white font-bold gap-2 group">
                <span>Next Step</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
