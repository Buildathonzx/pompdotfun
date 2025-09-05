import GlassCard from "@/components/GlassCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Home() {
  return (
    <Box>
      <Box sx={{ px: { xs: 2, md: 6 }, py: 6, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ maxWidth: 960, flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Box sx={{ borderRadius: 2, minHeight: 520, display: 'flex', flexDirection: 'column', gap: 2, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', px: 3, pb: 3 }} style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3) 0%, rgba(17,23,20,0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9nSeIzmsJ-K3K7dukOU89I5sIU9plmPmkxA6DXxX3R5H-9vhTRusuQs2e_nVuNq-TQ6CHNkFdFXEChCGvCZiWpt2sKgGUoajwiMiNxBm6G2tiCBL5RtIH-v4nYFMa3P7d5z_aR53xA8fRjmkXp6BJNLVX30Jg1bnqzRprL1ToqPfxrEtts9PMdXM_-917owVgmDxh19aKiacQpeenYvw84yCLXTSVJgHyq066l6x-Edx_KFJ8I9F7jCclwm9wLphRO8VF45T_lIU")' }}>
            <Box sx={{ maxWidth: 520 }}>
              <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2rem', md: '3.5rem' } }}>Launch and Trade Meme Tokens on X Layer</Typography>
              <Typography sx={{ color: 'text.secondary', mt: 1 }}>Discover, create, and trade the hottest meme tokens on the X Layer network.</Typography>
            </Box>
            <Box>
              <Button component={Link} href="/create" variant="contained" color="primary" sx={{ borderRadius: 2, height: 48, mt: 2 }}>Get Started</Button>
            </Box>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
            {["Total Value Locked", "Tokens Launched", "Active Users"].map((label, i) => (
              <GlassCard key={label}>
                <Typography sx={{ color: 'text.secondary' }}>{label}</Typography>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>{i === 0 ? "$12.5M" : i === 1 ? "250+" : "15,000+"}</Typography>
                <Typography sx={{ color: '#38e07b', fontWeight: 700 }}>{i === 0 ? "+15%" : i === 1 ? "+20%" : "+10%"}</Typography>
              </GlassCard>
            ))}
          </Box>

          <Box>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>Trending Tokens</Typography>
            <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, py: 1 }}>
              {['DogeX','MeowX','FrogX'].map((name, idx) => (
                <GlassCard key={name} sx={{ minWidth: 210 }}>
                  <Box sx={{ width: '100%', aspectRatio: '1/1', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 2 }} style={{ backgroundImage: `url(${[
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDJT7fqLnFnqIDeW9FCLHt9lxaYlmOSR3UW43ixOreV0DuaTK6HYiEeElQOnjW7D5fWoFSIuEfJZtG6VD-aLOfWTIz4XYjoiFfCWn9VZ6VRUAJiCR1gqAiAAH36jaUOrrkZKdCiC0GeY_bY1yZYUHJdYaOAPHJ2Azfro6p0dxe0TMt_bsXi_HWqnQ_cOaKw0p3M_T0phNIjMKWUffy4tAYOQ52hJmmbZB3LxYgMEfuFUHS9476pAnwl0lsm1HeZS2F0C6pavmWEu68",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAyjDMoqG4S3hnEq_rNBzwWgR40v8D9GJD2Z-j29qAXyVYYJ79AAwwvqwYDYaNdogOT-EMtoZSTKZev_6zyI9QELkA8a3PoQybvfrHyYTl8M9ks4J4vaTCbSu6paQDuTShLpsr_JMQhzqZ3JeNUXVWUsvtSR2Tv1bT-KsKkqv90DOGApXRuyiO-Ru7RWW48aTLxdfV8Lg8xp3fXk987rUFsPYw6L9AqtRDshXz66Px1sDYc5VjaUzNzaEG3QzT1-p7tlj_LAz4Z_AM",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDPU-0e58yKjkZiuyW4VirKEYiozFfdrw597sQyxkdEyHl7Hi3wx5FgeGaSJJJM2-RLJkBQ9rM-sNa8GGVN2nYVRottZpWRQiAQc0wQ5qTVzLqy-JWgOcmyTj6wKVET_dXGbz3TkTizo6-hA0t_drBK2K09435MAgcY7yb6ESBFsxjWlSKLHWUONIMEx8b4PMzJH44ZsWtlc5y3raHt9lr0MNv9Yehzc_CKVCVD02le5nPAFGkApRLYsGdA6_dz8Uez-FYP1mfIxB0",
                  ][idx]})` }} />
                  <Box sx={{ mt: 1 }}>
                    <Typography sx={{ fontWeight: 700 }}>{name}</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: 13 }}>A trending meme token on X Layer.</Typography>
                  </Box>
                </GlassCard>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
