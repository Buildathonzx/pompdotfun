import Box from "@mui/material/Box";
import Link from "next/link";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid rgba(41,56,47,0.08)', mt: 6, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ maxWidth: 960, width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, px: 2, py: 6, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
            <Link href="#"><Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>Terms of Service</Typography></Link>
            <Link href="#"><Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>Privacy Policy</Typography></Link>
            <Link href="#"><Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>Contact Us</Typography></Link>
          </Box>
          <Typography sx={{ color: 'rgba(255,255,255,0.5)' }}>@2024 pompdafun. All rights reserved.</Typography>
        </Box>
      </Box>
    </Box>
  );
}
