import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ textAlign: "center", p: 3, backgroundColor: "#f5f5f5", mt: 5 }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Meu Portfólio - Todos os direitos reservados
      </Typography>
    </Box>
  );
}

export default Footer;
