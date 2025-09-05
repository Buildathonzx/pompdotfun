import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GlassCard from "@/components/GlassCard";

export default function MetadataStep() {
  return (
    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', py: 6, px: 2 }}>
      <Box sx={{ width: '100%', maxWidth: 720 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, mb: 2 }}>
          <Typography component={Link} href="/create" sx={{ color: 'text.secondary', fontSize: 13 }}>Create Token</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: 13 }}>/</Typography>
          <Typography sx={{ color: 'text.primary', fontSize: 13 }}>Metadata</Typography>
        </Box>

        <GlassCard>
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>Create Token Metadata</Typography>
            <Typography sx={{ color: 'text.secondary', mb: 3 }}>Fill in the details for your new meme token.</Typography>

            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField id="token-name" label="Name" placeholder="e.g. Pepe Coin" fullWidth />

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                <TextField id="token-symbol" label="Symbol" placeholder="e.g. PEPE" fullWidth />
                <TextField id="token-decimals" type="number" label="Decimals" placeholder="e.g. 18" fullWidth />
              </Box>

              <TextField id="token-image-url" label="Image URL" placeholder="https://example.com/image.png" fullWidth />
              <TextField id="token-description" label="Description" placeholder="A brief description of your token..." fullWidth multiline minRows={4} />

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 2 }}>
                <Button component={Link} href="/create/curve" variant="contained" color="primary">Next Step</Button>
              </Box>
            </Box>
          </Box>
        </GlassCard>
      </Box>
    </Box>
  );
}
