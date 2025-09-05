import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import GlassCard from "@/components/GlassCard";

export default function CurveStep() {
  return (
    <Box sx={{ flex: 1, px: { xs: 2, md: 6 }, py: 4 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 420px' }, gap: 4, maxWidth: '1200px', mx: 'auto' }}>
        <Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, mb: 2 }}>
            <Link href="/create"><Typography sx={{ color: 'text.secondary', fontSize: 13 }}>Create Token</Typography></Link>
            <Typography sx={{ color: 'text.secondary', fontSize: 13 }}>/</Typography>
            <Typography sx={{ color: 'text.primary', fontSize: 13 }}>Bonding Curve</Typography>
          </Box>

          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Bonding Curve</Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>Define your token&apos;s economic model. This curve determines the price of your token based on its supply.</Typography>

          <Box sx={{ maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControl>
              <InputLabel id="curve-type-label">Curve Type</InputLabel>
              <Select labelId="curve-type-label" id="curve-type" defaultValue="linear" label="Curve Type" sx={{ bgcolor: 'transparent' }}>
                <MenuItem value="linear">Linear</MenuItem>
                <MenuItem value="exponential">Exponential</MenuItem>
              </Select>
            </FormControl>

            <TextField id="initial-price" label="Initial Price (OKB)" placeholder="e.g., 0.05" variant="outlined" fullWidth />
            <TextField id="slope-factor" label="Slope / Factor" placeholder="e.g., 0.001" variant="outlined" fullWidth />

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Button component={Link} href="/create/metadata" variant="outlined">Back</Button>
              <Button component={Link} href="/create/fees" variant="contained" color="primary">Next</Button>
            </Box>
          </Box>
        </Box>

        <GlassCard>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
                <Typography sx={{ color: 'text.secondary' }}>Price vs. Supply</Typography>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>$123.45</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ color: '#0bda73' }}>+12%</Typography>
                <Typography sx={{ color: 'text.secondary' }}>vs Last 30 Days</Typography>
              </Box>
            </Box>

            <Box sx={{ flex: 1 }}>
              <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" fill="none" style={{ width: '100%', height: 'auto' }}>
                <defs>
                  <linearGradient id="paint0" x1="250" x2="250" y1="0" y2="300" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--primary-color)" stopOpacity="0.3" />
                    <stop offset="1" stopColor="var(--primary-color)" stopOpacity="0" />
                  </linearGradient>
                  <filter id="glow" width="200%" height="200%" x="-50%" y="-50%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path d="M0 250 C 83 250, 166 100, 250 100 C 333 100, 416 50, 500 50" filter="url(#glow)" stroke="var(--primary-color)" strokeWidth="3" strokeLinecap="round" />
                <path d="M0 250 C 83 250, 166 100, 250 100 C 333 100, 416 50, 500 50 L 500 300 L 0 300 Z" fill="url(#paint0)" />
              </svg>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ color: 'text.secondary', fontSize: 12 }}>0</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: 12 }}>Token Supply</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: 12 }}>Max</Typography>
            </Box>
          </Box>
        </GlassCard>
      </Box>
    </Box>
  );
}
