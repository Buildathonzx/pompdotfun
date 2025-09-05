"use client";

import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useUI } from "../UIProvider";

const wallets = [
  { name: "OKX Wallet", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtnv0Br4uSE03pRWyxmpPObyCXGc_NOoaKd7X3lXDG6wBlTPLbcwYFaaSK5doNjCJjDgymZR_wOmZXgg6NwcszW5j1AEs4ETZqbHs-Dkdl5NOmDGGdX73FDlMHAI2EPeZ-hOucnYSN06Ksi9pCSUMjLxa0FX3AH8DeK62mICPtszcdFYQGCN0s5X2V0dMfu0XQm1HAD5z7p8d4fH0kIitNrXuMGiz6fatCbnWeURzwt4QnhzP75I-Umgj18gemucuPm4ddazfAeEA" },
  { name: "MetaMask", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWzD1233FuozMIvPyWsPBq6S_FF1ABE1bRVBbRwRk8wjS089jiuNGtSNA5NtG5wIM8fQRgFbxXNLs60dmK86UVmgp54Qob8X5FU2mRhN9NFJVZFZ6mipRWKMfIuNZUceElDjSEckvTWd3VAjmVKyMt01S5GDS_2pGktrTaXT2XYnVx3T5HDGpRaFogsT_tJJzTYS6GKy5ihC_Se6y_7dMrFR4aJqHEnX5VtMTbdLqgbL7KlB1bjDjI2GenzgDPMZkQLQbVEEfLTVY" },
  { name: "WalletConnect", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD46DpQ3bJnCujo_h6_Z54FSMr8Qnj4uiywM7vZ5SjvE9af6QT56BA8DQJYyGQXg3-EtVAHVtCP4mXbToDb4tICy76SjmBI4TlPuegAaRktQNhN1KiJi4Zp4DmamVKZkoG_mWOYkfkAsoevENtROYnDFJvRSiR2JUBBiSB88Esz4M8x7zHO1t1-0U2itLXsfRDE55mo4O5mcJZJn3_rnbX_yQ_ZKnB6UktMQcqGmYBGrLkqqh7DJKwwC9gYorlCSdetZ1jaKAifM7c" },
  { name: "Coinbase Wallet", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk_NpC4_YUeILI9Uv4DloG5G_dSBFej3aShi6dWSNBxnqq-A-6u9v2YOuAV-yYfwUcjVOZC2RjbgeAF8wdZ9tmbed_ipwscSSg55dPl7cf178JF1scZWx2c_zSk2EoCXEVCXZHeBW0ZzhBlSaukHQ-cFG8eed1KNUKTsn2roU8rnTbEUokGkttvxJ0MCmgTViRYWZptKXpXipxmgCc5GPuW-68Ep_Wag2z-10gJrEhJ1VWMWIkGJa3ET1cJmzE0EIBzIF7Y9rDu2M" },
];

export default function ConnectModal() {
  const { connectOpen, closeConnect } = useUI();

  return (
    <Dialog open={connectOpen} onClose={closeConnect} fullWidth maxWidth="sm">
      <DialogTitle>Connect Wallet</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={2} sx={{ mt: 1 }}>
          {wallets.map((w) => (
            <Button key={w.name} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", textTransform: "none", bgcolor: "rgba(255,255,255,0.03)", '&:hover': { bgcolor: 'rgba(255,255,255,0.06)', transform: 'scale(1.01)' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar src={w.img} alt={w.name} sx={{ width: 44, height: 44 }} />
                <Typography sx={{ fontWeight: 600 }}>{w.name}</Typography>
              </Box>
            </Button>
          ))}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeConnect}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
