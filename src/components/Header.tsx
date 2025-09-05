"use client";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useUI } from "./UIProvider";

export default function Header() {
  const { openConnect, openSign, openWrongNetwork } = useUI();
  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: "blur(6px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ color: "primary.main", width: 36, height: 36 }}>
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"/>
            </svg>
          </Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
            pompdafun
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box component="nav" sx={{ display: 'none', gap: 3 }}>
            <Link href="/">Home</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/create">Create</Link>
            <Link href="/tokens/pepe">Tokens</Link>
          </Box>

          <Button onClick={openConnect} variant="contained" color="primary" sx={{ minWidth: 84, borderRadius: 2, px: 3, fontWeight: 700 }}>
            Connect
          </Button>
          <Button onClick={openSign} variant="outlined" sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
            Sign
          </Button>
          <Button onClick={openWrongNetwork} variant="outlined" sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
            Wrong Net
          </Button>

          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "2px solid",
              borderColor: "primary.main",
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCowhhfzONtDXEnoGRRWkOhNbsTDcuPs0m_-JM6F-5FlrKl_HgkCnsqBcPVd7LXUFNE7UVtyZvGVhl_ia39dlh3XlIZPoYvcAgJsfeByPXlhCToJjCBkfkdKuXW1Br2cn-jUey62YOUfhClWffrcZlP9gV0qXFjMPcyU3rb7IRolALqMtE2H769dJxqyRSz_ZXARDB2RtX8_ToePRwqCLasazBoOLhryafVUmVPQpZV07eh3luGpXCv1QdkHjV1Q-LabHWXTs0B904")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
