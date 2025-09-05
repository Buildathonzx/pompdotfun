"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#302839] px-10 py-4 sticky top-0 z-50 bg-[#141118]/80 backdrop-blur-sm">
      <div className="flex items-center gap-4 text-white">
        <div className="size-6 text-[var(--primary-color)]">
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"/>
          </svg>
        </div>
        <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
          XLayer Meme Token Launchpad
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-6 items-center">
        <nav className="flex items-center gap-8">
          <Link className="text-white/80 hover:text-white transition-colors text-base font-medium leading-normal" href="/">Home</Link>
          <Link className="text-white/80 hover:text-white transition-colors text-base font-medium leading-normal" href="/explore">Explore</Link>
          <Link className="text-white/80 hover:text-white transition-colors text-base font-medium leading-normal" href="/create">Create</Link>
          <Link className="text-white/80 hover:text-white transition-colors text-base font-medium leading-normal" href="/tokens/pepe">Tokens</Link>
        </nav>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all">
          <span className="truncate">Connect Wallet</span>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[var(--primary-color)]"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCowhhfzONtDXEnoGRRWkOhNbsTDcuPs0m_-JM6F-5FlrKl_HgkCnsqBcPVd7LXUFNE7UVtyZvGVhl_ia39dlh3XlIZPoYvcAgJsfeByPXlhCToJjCBkfkdKuXW1Br2cn-jUey62YOUfhClWffrcZlP9gV0qXFjMPcyU3rb7IRolALqMtE2H769dJxqyRSz_ZXARDB2RtX8_ToePRwqCLasazBoOLhryafVUmVPQpZV07eh3luGpXCv1QdkHjV1Q-LabHWXTs0B904")',
          }}
        />
      </div>
    </header>
  );
}
