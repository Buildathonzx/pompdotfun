import Header from "@/components/Header";
import Box from "@mui/material/Box";

export default function CreateLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>{children}</Box>
    </Box>
  );
}
