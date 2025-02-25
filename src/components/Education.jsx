import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

const education = [
  { course: "Ánalise e Desenvolvimento de Sistemas", institution: "Instituto Federal de Rondônia - Campus Ji-Paraná" },
  { course: "Técnico em Manutenção de Computadores", institution: "Líder Informática" },
];

function Education() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Formação Acadêmica
      </Typography>
      <List>
        {education.map((edu, index) => (
          <ListItem key={index}>
            <ListItemText primary={edu.course} secondary={edu.institution} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Education;
