import Grid from "@mui/material/Grid";

const Sobre = () => {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={12} direction="column">
        <Grid
          xs={12}
          paddingTop={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <h2
            style={{
              fontFamily: "cursive",
              fontSize: "30px",
            }}
          >
            Sobre mim
          </h2>
        </Grid>
      </Grid>

      <Grid item xs={8} md={8} textAlign={"center"} paddingBottom={10}>
        <h3 style={{ fontFamily: "cursive", fontSize: "20px" }}>
          Eu como desenvolvedor, sempre em busca de criar soluções eficientes e
          inovadoras que atendam às necessidades reais dos usuários. Ao longo da
          minha trajetória, trabalhei com ferramentas e frameworks como React,
          Vue.js, Electron.js, e muitos outros, combinando minha paixão por
          desenvolvimento web e desktop com um compromisso constante de entregar
          resultados de alta qualidade.
        </h3>
        <h3 style={{ fontFamily: "cursive", fontSize: "20px" }}>
          Minha experiência prática em linguagens como JavaScript, C# e Python
          me permite trabalhar de forma flexível em diferentes projetos e
          plataformas. Seja no front-end ou no back-end, estou sempre aprendendo
          e evoluindo minhas habilidades, acompanhando as tendências da
          tecnologia e me adaptando às demandas do mercado.
        </h3>
        <h3 style={{ fontFamily: "cursive", fontSize: "20px" }}>
          O foco do meu trabalho está no desenvolvimento de aplicações web e
          móveis que ofereçam uma experiência de usuário fluida, intuitiva e
          funcional. Acredito que cada projeto é uma oportunidade para inovar e
          trazer algo único, e estou sempre comprometido com a criação de
          produtos que realmente façam a diferença para as pessoas.
        </h3>
        <h3 style={{ fontFamily: "cursive", fontSize: "20px" }}>
          Além disso, valorizo muito a colaboração e o aprendizado contínuo.
          Estou sempre em busca de novos desafios que me permitam explorar novas
          tecnologias, melhorar minhas habilidades e contribuir para o sucesso
          de cada projeto em que trabalho. Meu objetivo é não apenas desenvolver
          soluções tecnológicas, mas também ajudar a criar experiências digitais
          que sejam impactantes e transformadoras.
        </h3>
      </Grid>
    </Grid>
  );
};

export default Sobre;
