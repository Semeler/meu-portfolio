import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Contato
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <EmailIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Email" secondary="lucasemeler@gmail.com" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <PhoneIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Telefone" secondary="(69) 99380-1219" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <LinkedInIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="LinkedIn"
            secondary={
              <Link href="https://www.linkedin.com/in/semeler" target="_blank" rel="noopener">
                linkedin.com/in/semeler
              </Link>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <GitHubIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="GitHub"
            secondary={
              <Link href="https://github.com/semeler" target="_blank" rel="noopener">
                github.com/semeler
              </Link>
            }
          />
        </ListItem>
      </List>
    </Container>
  );
}

export default Contact;
