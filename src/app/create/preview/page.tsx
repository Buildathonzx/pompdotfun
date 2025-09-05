import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GlassCard from "@/components/GlassCard";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default function PreviewStep() {
  return (
    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', py: 6, px: 2 }}>
      <Box sx={{ width: '100%', maxWidth: 720 }}>
        <GlassCard>
          <Box sx={{ p: 3 }}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>Preview & Confirm</Typography>
              <Typography sx={{ color: 'text.secondary', mt: 1 }}>Carefully review your token details before the final launch.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ color: 'text.secondary' }}>Name</Typography>
                <Typography sx={{ fontWeight: 700 }}>MemeCoin</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ color: 'text.secondary' }}>Symbol</Typography>
                <Typography sx={{ fontWeight: 700 }}>MEME</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ color: 'text.secondary' }}>Curve Type</Typography>
                <Typography sx={{ fontWeight: 700 }}>Linear</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.06)', pt: 2 }}>
                <Typography sx={{ color: 'text.secondary' }}>Creation Fee</Typography>
                <Typography sx={{ fontWeight: 700 }}>0.001 ETH</Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <Button component={Link} href="/create/launch" variant="contained" color="primary" fullWidth startIcon={<RocketLaunchIcon />}>
                Confirm Launch
              </Button>
            </Box>
          </Box>
        </GlassCard>
      </Box>
    </Box>
  );
}
