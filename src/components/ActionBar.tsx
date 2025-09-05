"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import TuneIcon from "@mui/icons-material/Tune";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useUI } from "./UIProvider";

export default function ActionBar() {
  const { openConnect, openSign, openWrongNetwork } = useUI();

  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 9, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, p: 2, borderBottom: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)', bgcolor: 'rgba(20,17,24,0.65)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Chip label="X Layer" color="primary" variant="outlined" size="small" />
        <Chip label="OKB" variant="outlined" size="small" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button startIcon={<TuneIcon />} variant="outlined" size="small">Filters</Button>
        <Button onClick={openConnect} variant="contained" size="small">Connect</Button>
        <Button onClick={openSign} variant="outlined" size="small">Sign</Button>
        <Button onClick={openWrongNetwork} variant="outlined" size="small">Wrong Net</Button>
        <Button startIcon={<RocketLaunchIcon />} variant="contained" color="primary" size="small">Launch</Button>
      </Box>
    </Box>
  );
}
