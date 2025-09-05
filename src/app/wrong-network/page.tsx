import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GlassCard from "../../components/GlassCard";

export default function WrongNetworkPage() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
      <Box sx={{ width: '100%', maxWidth: 520 }}>
        <GlassCard>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 3 }}>
            <Box sx={{ mb: 2, width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid rgba(255,210,0,0.12)', bgcolor: 'rgba(255,210,0,0.08)', color: 'warning.main' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 28 }}>warning</span>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>Wrong Network</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>Your wallet is connected to an unsupported network. Please switch to the X Layer network to proceed.</Typography>
            <Button variant="contained" color="primary" sx={{ mt: 3 }}>
              <span className="material-symbols-outlined" style={{ marginRight: 8 }}>swap_horiz</span>
              Switch Network
            </Button>
          </Box>
        </GlassCard>
      </Box>
    </Box>
  );
}
