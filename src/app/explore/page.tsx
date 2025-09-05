import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

export default function ExplorePage() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main>
        <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
          <Box sx={{ maxWidth: '1200px', mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, p: 1 }}>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>Explore Tokens</Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button sx={{ height: 40, px: 2, bgcolor: '#29382f', color: '#fff' }}>
                  <Typography sx={{ fontSize: 13, fontWeight: 600 }}>Time: All</Typography>
                </Button>
                <Button sx={{ height: 40, px: 2, bgcolor: '#29382f', color: '#fff' }}>
                  <Typography sx={{ fontSize: 13, fontWeight: 600 }}>DEX: All</Typography>
                </Button>
              </Box>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2, p: 1 }}>
              {Array.from({ length: 9 }).map((_, i) => (
                <GlassCard key={i}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar src={`https://picsum.photos/seed/${i}/200`} sx={{ width: 48, height: 48 }} />
                      <Box>
                        <Typography sx={{ fontWeight: 700 }}>Token {String.fromCharCode(65 + (i % 26))}</Typography>
                        <Typography sx={{ color: 'text.secondary', fontSize: 13 }}>$TK{String.fromCharCode(65 + (i % 26))}</Typography>
                      </Box>
                    </Box>
                    {i % 2 === 0 && (
                      <Box sx={{ borderRadius: '999px', bgcolor: 'rgba(128,19,236,0.12)', px: 1.5, py: 0.5, color: 'primary.main', fontWeight: 700, fontSize: 12 }}>Trending</Box>
                    )}
                  </Box>

                  <svg viewBox="0 0 244 60" xmlns="http://www.w3.org/2000/svg" fill="none" style={{ width: '100%' }}>
                    <path d="M1 59L31.5 40L49 48L74 23.5L95.5 32L121.5 1L147 15L171 8L193.5 23.5L217.5 15L243 28.5" stroke="#38E07B" strokeWidth="2" />
                  </svg>
                </GlassCard>
              ))}
            </Box>
          </Box>
        </Box>
      </main>
      <Footer />
    </Box>
  );
}

