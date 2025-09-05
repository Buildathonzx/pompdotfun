import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GlassCard from "../../components/GlassCard";

export default function SignPage() {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Box sx={{ position: 'absolute', bottom: 0, left: '-20%', right: 0, top: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle_farthest-side, rgba(127,19,236,0.8), rgba(255,255,255,0))' }} />
        <Box sx={{ position: 'absolute', bottom: '-10%', right: '-20%', top: 0, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle_farthest-side, rgba(127,19,236,0.8), rgba(255,255,255,0))' }} />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 520 }}>
        <GlassCard>
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <Box sx={{ borderRadius: '50%', bgcolor: 'rgba(167,77,255,0.12)', p: 1.5, border: '1px solid rgba(167,77,255,0.12)' }}>
                <span className="material-symbols-outlined" style={{ color: 'rgba(167,77,255,0.8)', fontSize: 32 }}>wallet</span>
              </Box>
            </Box>

            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>Authenticate Your Wallet</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              Please sign the message to securely connect your wallet to the pompdafun.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button variant="contained" color="primary" sx={{ py: 1.5, fontWeight: 700 }}>
                <span className="material-symbols-outlined" style={{ marginRight: 8 }}>draw</span>
                Sign &amp; Continue
              </Button>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>This does not cost any gas fees.</Typography>
            </Box>
          </Box>
        </GlassCard>
      </Box>
    </Box>
  );
}
