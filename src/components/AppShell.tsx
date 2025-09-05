"use client";

import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import TokenRoundedIcon from "@mui/icons-material/TokenRounded";
import Header from "./Header";
import ModalsHost from "./ModalsHost";
import ActionBar from "./ActionBar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "260px 1fr" }, minHeight: "100vh" }}>
      <ModalsHost />
      <Box component="aside" sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", borderRight: "1px solid rgba(255,255,255,0.06)", position: "sticky", top: 0, height: "100vh", p: 2, gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 1, py: 0.5 }}>
          <Box sx={{ color: "primary.main", width: 28, height: 28 }}>
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"/>
            </svg>
          </Box>
          <Typography sx={{ fontWeight: 800 }}>pompdafun</Typography>
        </Box>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.06)" }} />
        <Box component="nav" sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <NavItem href="/" label="Home" icon={<HomeRoundedIcon />} />
          <NavItem href="/explore" label="Explore" icon={<TravelExploreRoundedIcon />} />
          <NavItem href="/create" label="Create" icon={<AddCircleRoundedIcon />} />
          <NavItem href="/tokens/pepe" label="Tokens" icon={<TokenRoundedIcon />} />
        </Box>
        <Box sx={{ flex: 1 }} />
        <Box sx={{ p: 1 }}>
          <Typography sx={{ color: "text.secondary", fontSize: 12 }}>© 2024 pompdafun</Typography>
        </Box>
      </Box>

      <Box component="section" sx={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
        <Header />
        <ModalsHost />
        <ActionBar />
        <ActionBar />
        <Box component="main" sx={{ flex: 1, minWidth: 0 }}>{children}</Box>

        <Box component="nav" sx={{ position: "sticky", bottom: 0, zIndex: 10, display: { xs: "flex", md: "none" }, justifyContent: "space-around", alignItems: "center", height: 64, borderTop: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(8px)", bgcolor: "rgba(20,17,24,0.75)" }}>
          <BottomItem href="/" label="Home" icon={<HomeRoundedIcon />} />
          <BottomItem href="/explore" label="Explore" icon={<TravelExploreRoundedIcon />} />
          <BottomItem href="/create" label="Create" icon={<AddCircleRoundedIcon />} />
          <BottomItem href="/tokens/pepe" label="Tokens" icon={<TokenRoundedIcon />} />
        </Box>
      </Box>
    </Box>
  );
}

function NavItem({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <Tooltip title={label} placement="right" enterDelay={500}>
      <Box component={Link} href={href} sx={{ display: "flex", alignItems: "center", gap: 1.5, px: 1, py: 1, borderRadius: 1, color: "inherit", textDecoration: "none", '&:hover': { bgcolor: "rgba(255,255,255,0.06)" } }}>
        <Box sx={{ display: "grid", placeItems: "center", width: 28, height: 28, color: "text.secondary" }}>{icon}</Box>
        <Typography sx={{ fontWeight: 600 }}>{label}</Typography>
      </Box>
    </Tooltip>
  );
}

function BottomItem({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <Box component={Link} href={href} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0.5, color: "inherit", textDecoration: "none" }}>
      <IconButton color="inherit">{icon}</IconButton>
      <Typography sx={{ fontSize: 11, color: "text.secondary" }}>{label}</Typography>
    </Box>
  );
}
