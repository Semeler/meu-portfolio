import { Container, Typography, Avatar, Box } from "@mui/material";

function AboutMe() {
  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Avatar
        src="./assets/perfil.jfif"
        sx={{ width: 100, height: 100, margin: "auto" }}
      />
      <Typography variant="h4" sx={{ mt: 2 }}>
        Lucas Freire Sêmeler
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
      Participar de atividades e desafios sempre me motivou por ganhar novos conhecimentos como consequência, no ensino médio se destaca a minha participação como líder de sala, além de ter sido participante no programa escolar do novo tempo, mas a publicação de um artigo na Ong Comundos, sobre os impactos das hidrelétricas no meu estado (RO) e os 17 objetivos que a ONU busca alcançar, é o que mais diz sobre mim.
Atualmente sou estudante de Análise e Desenvolvimento de Sistemas no Instituto Federal de Rôndonia - Campus Ji-Paraná, uma área de estudo que desde garoto me cativou. Atuo como pesquisador na área de programação paralela e sou QA e UX Jr no projeto PROINFE
      </Typography>
    </Container>
  );
}

export default AboutMe;
