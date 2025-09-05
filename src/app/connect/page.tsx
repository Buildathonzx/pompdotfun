import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import GlassCard from "../../components/GlassCard";

const wallets = [
  { name: "OKX Wallet", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtnv0Br4uSE03pRWyxmpPObyCXGc_NOoaKd7X3lXDG6wBlTPLbcwYFaaSK5doNjCJjDgymZR_wOmZXgg6NwcszW5j1AEs4ETZqbHs-Dkdl5NOmDGGdX73FDlMHAI2EPeZ-hOucnYSN06Ksi9pCSUMjLxa0FX3AH8DeK62mICPtszcdFYQGCN0s5X2V0dMfu0XQm1HAD5z7p8d4fH0kIitNrXuMGiz6fatCbnWeURzwt4QnhzP75I-Umgj18gemucuPm4ddazfAeEA" },
  { name: "MetaMask", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWzD1233FuozMIvPyWsPBq6S_FF1ABE1bRVBbRwRk8wjS089jiuNGtSNA5NtG5wIM8fQRgFbxXNLs60dmK86UVmgp54Qob8X5FU2mRhN9NFJVZFZ6mipRWKMfIuNZUceElDjSEckvTWd3VAjmVKyMt01S5GDS_2pGktrTaXT2XYnVx3T5HDGpRaFogsT_tJJzTYS6GKy5ihC_Se6y_7dMrFR4aJqHEnX5VtMTbdLqgbL7KlB1bjDjI2GenzgDPMZkQLQbVEEfLTVY" },
  { name: "WalletConnect", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD46DpQ3bJnCujo_h6_Z54FSMr8Qnj4uiywM7vZ5SjvE9af6QT56BA8DQJYyGQXg3-EtVAHVtCP4mXbToDb4tICy76SjmBI4TlPuegAaRktQNhN1KiJi4Zp4DmamVKZkoG_mWOYkfkAsoevENtROYnDFJvRSiR2JUBBiSB88Esz4M8x7zHO1t1-0U2itLXsfRDE55mo4O5mcJZJn3_rnbX_yQ_ZKnB6UktMQcqGmYBGrLkqqh7DJKwwC9gYorlCSdetZ1jaKAifM7c" },
  { name: "Coinbase Wallet", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk_NpC4_YUeILI9Uv4DloG5G_dSBFej3aShi6dWSNBxnqq-A-6u9v2YOuAV-yYfwUcjVOZC2RjbgeAF8wdZ9tmbed_ipwscSSg55dPl7cf178JF1scZWx2c_zSk2EoCXEVCXZHeBW0ZzhBlSaukHQ-cFG8eed1KNUKTsn2roU8rnTbEUokGkttvxJ0MCmgTViRYWZptKXpXipxmgCc5GPuW-68Ep_Wag2z-10gJrEhJ1VWMWIkGJa3ET1cJmzE0EIBzIF7Y9rDu2M" },
];

export default function ConnectPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", p: 4 }}>
      <Box sx={{ width: "100%", maxWidth: 520 }}>
        <GlassCard>
          <Box sx={{ borderBottom: "1px solid rgba(255,255,255,0.06)", p: 3, textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>Connect Wallet</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>Choose your wallet from the options below</Typography>
          </Box>

          <Box sx={{ p: 3 }}>
            <Stack spacing={2}>
              {wallets.map((w) => (
                <Button key={w.name} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", textTransform: "none", bgcolor: "rgba(255,255,255,0.03)", '&:hover': { bgcolor: 'rgba(255,255,255,0.06)', transform: 'scale(1.01)' } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={w.img} alt={w.name} sx={{ width: 44, height: 44 }} />
                    <Typography sx={{ fontWeight: 600 }}>{w.name}</Typography>
                  </Box>
                  <span className="material-symbols-outlined" style={{ color: 'rgba(255,255,255,0.6)' }}>chevron_right</span>
                </Button>
              ))}
            </Stack>
          </Box>

          <Box sx={{ p: 3 }}>
            <Box sx={{ borderRadius: 2, overflow: 'hidden', minHeight: 180, position: 'relative', backgroundImage: 'linear-gradient(0deg, rgba(127, 19, 236, 0.3) 0%, rgba(20, 17, 24, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDj7ufm3fm40JlD5GwNMk01INYM8-tlF8mV2Vq0du-4lSoXBgcB0ICUloIKN2RGCdP2L_WaqcRLz1Y8X5ratdHpGvwNyNAEH2MH0jB8BDydoZ09WeTo6P_i8SQeIYV63rE4pZnC7T9i2SyhiAQxvjGJZHJOnx36v3stlJTU7K7jzccayb9FHzuLMRCO-rp-b4JmmJBHBi02v2kNfhPVFt6Wp5UDIqeexTuaQySdcfYQDf5OzxaLwWStlWysYLm5gKQdHM-9WNXz-n4")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0))' }} />
              <Box sx={{ position: 'relative', zIndex: 1, p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>You are not on X Layer</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, mb: 2 }}>Please switch your network to participate in the launch.</Typography>
                <Button variant="contained" color="primary" fullWidth>Switch to X Layer Network</Button>
              </Box>
            </Box>
          </Box>
        </GlassCard>
      </Box>
    </Box>
  );
}
