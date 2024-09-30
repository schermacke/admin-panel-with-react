import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Grid } from "@mui/material";

const Nota = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        xs={12}
        md={12}
        display={"flex"}
        justifyContent={"center"}
        paddingTop={12}
      >
        <h2
          style={{
            fontFamily: "cursive",
            fontSize: "30px",
          }}
        >
          Sobre o Website
        </h2>
      </Grid>
      <Grid item xs={10} md={10}>
        <Grid
          display={"flex"}
          alignItems={"center"}
          textAlign={"center"}
          direction={"column"}
          paddingBottom={15}
        >
          <h3 style={{ fontFamily: "cursive", fontSize: "20px" }}>
            Este website foi desenvolvido para oferecer uma experiência dinâmica
            e totalmente responsiva, adaptando-se perfeitamente a qualquer
            dispositivo, seja desktop, tablet ou smartphone. Desde o layout até
            o conteúdo, tudo foi projetado com foco na facilidade de uso e na
            flexibilidade, proporcionando aos usuários uma navegação fluida e
            intuitiva.
          </h3>
          <h3 style={{ fontFamily: "cursive", fontSize: "20px" }}>
            O site conta com um painel administrativo independente, que oferece
            controle total sobre todas as áreas de conteúdo. Isso inclui a
            gestão de textos, imagens e até ajustes no layout. Esse painel foi
            desenvolvido com o objetivo de tornar a administração simples e
            prática, permitindo que qualquer atualização seja feita em tempo
            real, sem complicações. O painel garante que o proprietário tenha
            total autonomia para personalizar o site conforme as necessidades
            evoluem.
          </h3>
          <h3 style={{ fontFamily: "cursive", fontSize: "20px" }}>
            A estrutura do site foi construída utilizando tecnologias de ponta,
            como React, que assegura um front-end moderno e reativo, e React
            DOM, responsável pelo roteamento eficiente entre as páginas. No
            back-end, utilizamos Express, um framework leve e robusto que
            garante rapidez e segurança nas transações. A integração com o banco
            de dados é feita por meio de Prisma e MongoDB, oferecendo uma
            solução de armazenamento escalável e eficiente, enquanto Axios é
            utilizado para gerenciar todas as requisições HTTP, garantindo a
            comunicação rápida e estável entre o front-end e o back-end.
          </h3>
          <h3 style={{ fontFamily: "cursive", fontSize: "20px" }}>
            Além disso, o website conta com um sistema de alternância de temas,
            permitindo que os usuários escolham entre o modo dark ou light com
            apenas um clique. Essa funcionalidade não apenas melhora a
            experiência de navegação, mas também atende às preferências visuais
            de cada visitante.
          </h3>
          <h3 style={{ fontFamily: "cursive", fontSize: "20px" }}>
            Se você está em busca de um website moderno, dinâmico e facilmente
            gerenciável, esta solução é ideal. Construído com tecnologias
            avançadas e uma interface amigável, ele oferece toda a flexibilidade
            necessária para crescer junto com o seu projeto.
          </h3>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} className="iconsBottom">
        <WhatsAppIcon
          onClick={() => {
            window.location.href = "https://wa.me/5555996764737";
          }}
          fontSize="large"
          color="primary"
          className="iconWhatsapp"
        />
        <TelegramIcon
          onClick={() => {
            window.location.href = "https://t.me/Schermacke";
          }}
          fontSize="large"
          color="primary"
          className="iconTelegram"
        />
        <LinkedInIcon
          onClick={() => {
            window.location.href =
              "https://br.linkedin.com/in/eduardo-schermack";
          }}
          fontSize="large"
          color="primary"
          className="iconLinkedin"
        />
        <GitHubIcon
          onClick={() => {
            window.location.href = "https://github.com/schermacke";
          }}
          fontSize="large"
          color="primary"
          className="iconGithub"
        />
        <AlternateEmailIcon
          onClick={() => {
            window.location.href = "mailto:schermack007@outlook.com";
          }}
          fontSize="large"
          color="primary"
          className="iconEmail"
        />
      </Grid>
    </Grid>
  );
};

export default Nota;
