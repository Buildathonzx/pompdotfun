export default function Footer() {
  return (
    <footer className="flex justify-center border-t border-solid border-b-[#29382f] mt-12">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-8 px-5 py-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <a className="text-white/70 hover:text-white transition-colors text-base" href="#">Terms of Service</a>
            <a className="text-white/70 hover:text-white transition-colors text-base" href="#">Privacy Policy</a>
            <a className="text-white/70 hover:text-white transition-colors text-base" href="#">Contact Us</a>
          </div>
          <p className="text-white/50 text-base">@2024 XLayer Meme Token Launchpad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
