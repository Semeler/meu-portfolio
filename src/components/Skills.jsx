import { Container, Typography, Grid, Chip } from "@mui/material";

const skills = ["React", "JavaScript", "Material UI", "Node.js", "Git", "CSS"];

function Skills() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Habilidades
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip label={skill} color="primary" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Skills;
