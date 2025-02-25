import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Meu Portfólio
        </Typography>
        <Button color="inherit">Sobre</Button>
        <Button color="inherit">Habilidades</Button>
        <Button color="inherit">Projetos</Button>
        <Button color="inherit">Contato</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
