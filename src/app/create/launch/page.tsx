import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GlassCard from "@/components/GlassCard";

export default function LaunchStep() {
  return (
    <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', py: 8 }}>
      <Box sx={{ width: '100%', maxWidth: 480 }}>
        <GlassCard>
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 800 }}>Launch Your Token</Typography>
            <Typography sx={{ color: 'text.secondary', mt: 1 }}>Step 3 of 3</Typography>

            <Box sx={{ mt: 2 }}>
              <Box sx={{ width: '100%', bgcolor: '#302839', borderRadius: 1, height: 8 }}>
                <Box sx={{ width: '100%', height: '100%', bgcolor: 'primary.main', borderRadius: 1 }} />
              </Box>
            </Box>

            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button variant="contained" color="primary" sx={{ py: 1.5, fontWeight: 800 }}>Launch Token</Button>
              <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>You will be prompted to sign one or more transactions.</Typography>
            </Box>
          </Box>
        </GlassCard>
      </Box>
    </Box>
  );
}
