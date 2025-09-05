export default function ConnectPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-4 bg-[#141118] text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#141118]/50 shadow-2xl shadow-[var(--primary-color)]/10 backdrop-blur-xl">
        <div className="border-b border-white/10 p-6 text-center">
          <h1 className="text-2xl font-bold tracking-tight">Connect Wallet</h1>
          <p className="text-sm text-gray-400 mt-1">Choose your wallet from the options below</p>
        </div>
        <div className="p-6 space-y-4">
          {[
            { name: "OKX Wallet", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtnv0Br4uSE03pRWyxmpPObyCXGc_NOoaKd7X3lXDG6wBlTPLbcwYFaaSK5doNjCJjDgymZR_wOmZXgg6NwcszW5j1AEs4ETZqbHs-Dkdl5NOmDGGdX73FDlMHAI2EPeZ-hOucnYSN06Ksi9pCSUMjLxa0FX3AH8DeK62mICPtszcdFYQGCN0s5X2V0dMfu0XQm1HAD5z7p8d4fH0kIitNrXuMGiz6fatCbnWeURzwt4QnhzP75I-Umgj18gemucuPm4ddazfAeEA" },
            { name: "MetaMask", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWzD1233FuozMIvPyWsPBq6S_FF1ABE1bRVBbRwRk8wjS089jiuNGtSNA5NtG5wIM8fQRgFbxXNLs60dmK86UVmgp54Qob8X5FU2mRhN9NFJVZFZ6mipRWKMfIuNZUceElDjSEckvTWd3VAjmVKyMt01S5GDS_2pGktrTaXT2XYnVx3T5HDGpRaFogsT_tJJzTYS6GKy5ihC_Se6y_7dMrFR4aJqHEnX5VtMTbdLqgbL7KlB1bjDjI2GenzgDPMZkQLQbVEEfLTVY" },
            { name: "WalletConnect", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD46DpQ3bJnCujo_h6_Z54FSMr8Qnj4uiywM7vZ5SjvE9af6QT56BA8DQJYyGQXg3-EtVAHVtCP4mXbToDb4tICy76SjmBI4TlPuegAaRktQNhN1KiJi4Zp4DmamVKZkoG_mWOYkfkAsoevENtROYnDFJvRSiR2JUBBiSB88Esz4M8x7zHO1t1-0U2itLXsfRDE55mo4O5mcJZJn3_rnbX_yQ_ZKnB6UktMQcqGmYBGrLkqqh7DJKwwC9gYorlCSdetZ1jaKAifM7c" },
            { name: "Coinbase Wallet", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk_NpC4_YUeILI9Uv4DloG5G_dSBFej3aShi6dWSNBxnqq-A-6u9v2YOuAV-yYfwUcjVOZC2RjbgeAF8wdZ9tmbed_ipwscSSg55dPl7cf178JF1scZWx2c_zSk2EoCXEVCXZHeBW0ZzhBlSaukHQ-cFG8eed1KNUKTsn2roU8rnTbEUokGkttvxJ0MCmgTViRYWZptKXpXipxmgCc5GPuW-68Ep_Wag2z-10gJrEhJ1VWMWIkGJa3ET1cJmzE0EIBzIF7Y9rDu2M" },
          ].map((w) => (
            <button key={w.name} className="flex items-center w-full gap-4 rounded-lg bg-white/5 p-4 text-left transition-all hover:bg-white/10 hover:scale-105">
              <img src={w.img} alt={w.name} className="size-10 rounded-full" />
              <span className="flex-1 text-lg font-semibold">{w.name}</span>
              <span className="material-symbols-outlined text-2xl text-gray-400">chevron_right</span>
            </button>
          ))}
        </div>
        <div className="p-6">
          <div className="glass-effect relative flex flex-col items-start justify-end overflow-hidden rounded-xl p-6 min-h-[180px] bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(0deg, rgba(127, 19, 236, 0.3) 0%, rgba(20, 17, 24, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDj7ufm3fm40JlD5GwNMk01INYM8-tlF8mV2Vq0du-4lSoXBgcB0ICUloIKN2RGCdP2L_WaqcRLz1Y8X5ratdHpGvwNyNAEH2MH0jB8BDydoZ09WeTo6P_i8SQeIYV63rE4pZnC7T9i2SyhiAQxvjGJZHJOnx36v3stlJTU7K7jzccayb9FHzuLMRCO-rp-b4JmmJBHBi02v2kNfhPVFt6Wp5UDIqeexTuaQySdcfYQDf5OzxaLwWStlWysYLm5gKQdHM-9WNXz-n4")' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="relative z-10 w-full">
              <h3 className="text-xl font-bold">You are not on X Layer</h3>
              <p className="text-sm text-gray-300 mt-1 mb-4">Please switch your network to participate in the launch.</p>
              <button className="w-full rounded-lg bg-[var(--primary-color)] py-3 text-sm font-bold tracking-wider text-white hover:bg-opacity-80">
                Switch to X Layer Network
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
