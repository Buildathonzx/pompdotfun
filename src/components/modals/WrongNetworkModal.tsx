"use client";

import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useUI } from "../UIProvider";

export default function WrongNetworkModal() {
  const { wrongNetworkOpen, closeWrongNetwork } = useUI();

  return (
    <Dialog open={wrongNetworkOpen} onClose={closeWrongNetwork} fullWidth maxWidth="xs">
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <WarningAmberIcon color="warning" /> Wrong Network
      </DialogTitle>
      <DialogContent dividers>
        <Typography sx={{ color: 'text.secondary' }}>
          Your wallet is connected to an unsupported network. Please switch to the X Layer network to proceed.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={closeWrongNetwork}>Switch Network</Button>
        <Button onClick={closeWrongNetwork}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
