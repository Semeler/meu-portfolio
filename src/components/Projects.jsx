import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const projects = [
  {
    title: "Comundos",
    image: "./assets/comundos.jfif",
    description: "Artigo Ong Comundos: Hidrelétricas e suas consequências.",
  },
  {
    title: "Proinfe",
    image: "./assets/proinfe.jfif",
    description: "Projeto de Informatização Escolar.",
  },
  {
    title: "Novo Tempo",
    image: "./assets/novotempo.jfif",
    description: "Programa Escola do Novo Tempo.",
  },
];

function Projects() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Projetos
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" height="140" image={project.image} />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
