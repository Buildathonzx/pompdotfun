import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import GlassCard from "@/components/GlassCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function FeesStep() {
  return (
    <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', py: 8, px: 2 }}>
      <Box sx={{ width: '100%', maxWidth: 920 }}>
        <GlassCard>
          <Box sx={{ p: 3 }}>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>Step 2 of 3</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 700 }}>66%</Typography>
              </Box>
              <Box sx={{ width: '100%', bgcolor: '#302839', borderRadius: 1, height: 8 }}>
                <Box sx={{ width: '66%', height: '100%', bgcolor: 'primary.main', borderRadius: 1 }} />
              </Box>
            </Box>

            <Typography variant="h4" sx={{ fontWeight: 800, textAlign: 'center', mb: 3 }}>Fees &amp; Splits</Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
              <TextField id="creation-fee" label="Creation Fee (OKB)" type="number" placeholder="e.g. 0.5" variant="outlined" fullWidth />
              <TextField id="platform-fee" label="Platform %" type="number" placeholder="e.g. 5" variant="outlined" fullWidth />
              <TextField id="creator-split" label="Creator %" type="number" placeholder="e.g. 90" variant="outlined" fullWidth />
              <TextField id="referrer-split" label="Referrer %" type="number" placeholder="e.g. 5" variant="outlined" fullWidth />
            </Box>

            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>Total Split</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 700 }}>100%</Typography>
              </Box>
              <Box sx={{ width: '100%', bgcolor: '#302839', borderRadius: 1, height: 8 }}>
                <Box sx={{ width: '100%', height: '100%', bgcolor: 'success.main', borderRadius: 1 }} />
              </Box>
              <Typography sx={{ fontSize: 12, color: 'text.secondary', mt: 1, textAlign: 'center' }}>The sum of Platform, Creator, and Referrer percentages must equal 100%.</Typography>
            </Box>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button component={Link} href="/create/curve" variant="outlined" startIcon={<ArrowBackIcon />}>Back</Button>
              <Button component={Link} href="/create/preview" variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>Next</Button>
            </Box>
          </Box>
        </GlassCard>
      </Box>
    </Box>
  );
}
