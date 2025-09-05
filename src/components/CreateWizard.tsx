"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import GlassCard from "./GlassCard";

const steps = ["Metadata", "Curve", "Fees", "Preview"] as const;

export default function CreateWizard() {
  const [activeStep, setActiveStep] = useState(0);

  const next = () => setActiveStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setActiveStep((s) => Math.max(s - 1, 0));

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 4, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 1000, display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ flex: 1 }}>
          <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <GlassCard>
            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
              {activeStep === 0 && (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>Create Token Metadata</Typography>
                  <TextField label="Name" placeholder="e.g. Pepe Coin" fullWidth />
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                    <TextField label="Symbol" placeholder="PEPE" fullWidth />
                    <TextField label="Decimals" type="number" placeholder="18" fullWidth />
                  </Box>
                  <TextField label="Image URL" placeholder="https://..." fullWidth />
                  <TextField label="Description" fullWidth multiline minRows={4} />
                </>
              )}

              {activeStep === 1 && (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>Bonding Curve</Typography>
                  <FormControl>
                    <InputLabel id="curve-type-label">Curve Type</InputLabel>
                    <Select labelId="curve-type-label" defaultValue="linear" label="Curve Type">
                      <MenuItem value="linear">Linear</MenuItem>
                      <MenuItem value="exponential">Exponential</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField label="Initial Price (OKB)" placeholder="0.05" />
                  <TextField label="Slope / Factor" placeholder="0.001" />
                </>
              )}

              {activeStep === 2 && (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>Fees & Splits</Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                    <TextField label="Creation Fee (OKB)" type="number" />
                    <TextField label="Platform %" type="number" />
                    <TextField label="Creator %" type="number" />
                    <TextField label="Referrer %" type="number" />
                  </Box>
                </>
              )}

              {activeStep === 3 && (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>Preview & Confirm</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Carefully review your token details before launch.</Typography>
                </>
              )}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2 }}>
                <Button disabled={activeStep === 0} onClick={back} variant="outlined">Back</Button>
                {activeStep < steps.length - 1 ? (
                  <Button onClick={next} variant="contained">Next</Button>
                ) : (
                  <Button variant="contained" color="primary">Launch</Button>
                )}
              </Box>
            </Box>
          </GlassCard>
        </Box>

        <Box sx={{ width: { xs: '100%', md: 360 } }}>
          <GlassCard>
            <Box sx={{ p: 2 }}>
              <Typography sx={{ color: 'text.secondary' }}>Wizard Tips</Typography>
              <Typography sx={{ mt: 1, fontSize: 14 }}>
                Use the wizard to quickly iterate through setup without leaving the page.
              </Typography>
            </Box>
          </GlassCard>
        </Box>
      </Box>
    </Box>
  );
}
