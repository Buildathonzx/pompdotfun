"use client";

import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DrawIcon from "@mui/icons-material/Draw";
import { useUI } from "../UIProvider";

export default function SignModal() {
  const { signOpen, closeSign } = useUI();

  return (
    <Dialog open={signOpen} onClose={closeSign} fullWidth maxWidth="sm">
      <DialogTitle>Authenticate Your Wallet</DialogTitle>
      <DialogContent dividers>
        <Typography sx={{ color: 'text.secondary', mb: 2 }}>
          Please sign the message to securely connect your wallet to pompdafun. This does not cost any gas fees.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" sx={{ py: 1.2, px: 3, fontWeight: 700 }} onClick={closeSign}>
            <DrawIcon sx={{ mr: 1 }} /> Sign & Continue
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeSign}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
