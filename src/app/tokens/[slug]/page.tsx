import GlassCard from "@/components/GlassCard";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function TokenDetailPage({ params }: { params: { slug: string } }) {
  const name = params.slug.toUpperCase();
  const rows = [
    { t: "10:30 AM", p: "$0.005", a: "+1000", u: "User A", c: 'success' },
    { t: "10:25 AM", p: "$0.004", a: "-500", u: "User B", c: 'error' },
    { t: "10:20 AM", p: "$0.003", a: "+2000", u: "User C", c: 'success' },
    { t: "10:15 AM", p: "$0.002", a: "-1500", u: "User D", c: 'error' },
    { t: "10:10 AM", p: "$0.001", a: "+1000", u: "User E", c: 'success' },
  ];

  return (
    <Box sx={{ px: 3, py: 4 }}>
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <GlassCard>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar src={`https://picsum.photos/seed/${name}/128`} sx={{ width: 64, height: 64 }} />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>{name}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Symbol: {name.slice(0, 4)}</Typography>
                </Box>
              </Box>
            </GlassCard>

            <GlassCard>
              <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', mb: 1 }}>
                <Box>
                  <Typography sx={{ color: 'text.secondary' }}>Bonding Curve</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800 }}>$12,345</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ color: '#0bda73' }}>+5.2%</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Last 7 Days</Typography>
                </Box>
              </Box>

              <Box sx={{ height: 250 }}>
                <svg viewBox="0 0 475 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" fill="none" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <linearGradient id="paint0" x1="236" x2="236" y1="1.66" y2="248.33" gradientUnits="userSpaceOnUse">
                      <stop stopColor="var(--primary-color)" stopOpacity="0.3" />
                      <stop offset="1" stopColor="var(--primary-color)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 181.667C18.1538 181.667 18.1538 35 36.3077 35C54.4615 35 54.4615 68.3333 72.6154 68.3333C90.7692 68.3333 90.7692 155 108.923 155C127.077 155 127.077 55 145.231 55C163.385 55 163.385 168.333 181.538 168.333C199.692 168.333 199.692 101.667 217.846 101.667C236 101.667 236 75 254.154 75C272.308 75 272.308 201.667 290.462 201.667C308.615 201.667 308.615 248.333 326.769 248.333C344.923 248.333 344.923 1.66667 363.077 1.66667C381.231 1.66667 381.231 135 399.385 135C417.538 135 417.538 215 435.692 215C453.846 215 453.846 41.6667 472 41.6667V248.333H0V181.667Z" fill="url(#paint0)" />
                  <path d="M0 181.667C18.1538 181.667 18.1538 35 36.3077 35C54.4615 35 54.4615 68.3333 72.6154 68.3333C90.7692 68.3333 90.7692 155 108.923 155C127.077 155 127.077 55 145.231 55C163.385 55 163.385 168.333 181.538 168.333C199.692 168.333 199.692 101.667 217.846 101.667C236 101.667 236 75 254.154 75C272.308 75 272.308 201.667 290.462 201.667C308.615 201.667 308.615 248.333 326.769 248.333C344.923 248.333 344.923 1.66667 363.077 1.66667C381.231 1.66667 381.231 135 399.385 135C417.538 135 417.538 215 435.692 215C453.846 215 453.846 41.6667 472 41.6667" stroke="var(--primary-color)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </Box>
            </GlassCard>

            <GlassCard>
              <Box sx={{ borderBottom: '1px solid rgba(71,59,84,0.2)' }}>
                <Box sx={{ display: 'flex', gap: 1, px: 1 }}>
                  <Button sx={{ borderBottom: '2px solid var(--primary-color)', px: 2, py: 1, fontWeight: 700 }}>Trades</Button>
                  <Button sx={{ px: 2, py: 1, color: 'rgba(255,255,255,0.6)' }}>Liquidity</Button>
                  <Button sx={{ px: 2, py: 1, color: 'rgba(255,255,255,0.6)' }}>About</Button>
                </Box>
              </Box>

              <Box sx={{ p: 1, overflowX: 'auto' }}>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>User</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((r) => (
                        <TableRow key={r.t}>
                          <TableCell>{r.t}</TableCell>
                          <TableCell>{r.p}</TableCell>
                          <TableCell sx={{ color: r.c === 'success' ? '#0bda73' : '#ff4d4d' }}>{r.a}</TableCell>
                          <TableCell>{r.u}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </GlassCard>
          </Box>
        </Grid>

        <Grid xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <GlassCard>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>OKB Pool</Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1 }}>Progress: 75%</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                <span>0 OKB</span>
                <span>100,000 OKB</span>
              </Box>
              <Box sx={{ width: '100%', height: 8, bgcolor: '#473b54', borderRadius: 1, mt: 1 }}>
                <Box sx={{ width: '75%', height: '100%', bgcolor: 'primary.main', borderRadius: 1 }} />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>75,000 OKB</Box>
            </GlassCard>

            <GlassCard>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button variant="contained" color="primary">Buy</Button>
                <Button variant="outlined">Sell</Button>
              </Box>
            </GlassCard>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
