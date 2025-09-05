import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CreateIndex() {
  return (
    <Box sx={{ px: 4, py: 6, display: 'flex', justifyContent: 'center' }}>
      <GlassCard>
        <Box sx={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Create a Token</Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>Start the wizard to launch your meme token.</Typography>
          <Button component={Link} href="/create/metadata" variant="contained" color="primary">Start Wizard</Button>
        </Box>
      </GlassCard>
    </Box>
  );
}
