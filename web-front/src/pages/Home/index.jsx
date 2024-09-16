import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import "./index.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";


const Home = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [newText, setNewText] = useState("");
  const [newParagraph, setNewParagraph] = useState("");

  const fetchImage = () => {
    axios
      .get("http://localhost:3000/api/image")
      .then((response) => {
        setImageUrl(response.data.url);
      })
      .catch((error) => {
        console.error("Erro ao buscar a imagem:", error);
      });
  };

  const fetchString = () => {
    axios
      .get("http://localhost:3000/api/image")
      .then((response) => {
        setNewText(response.data.texth2);
        setNewParagraph(response.data.textParagraph);
      })
      .catch((error) => {
        console.error("Erro ao buscar o texto:", error);
      });
  };

  useEffect(() => {
    fetchImage();
    fetchString();

    const imageInterval = setInterval(() => {
      fetchImage();
    }, 2000);

    const textInterval = setInterval(() => {
      fetchString();
    }, 2000);

    // Limpar intervalos quando o componente for desmontado
    return () => {
      clearInterval(imageInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <Grid container spacing={1} paddingTop={10}            >
      <Grid item xs={12} md={12}>
        <Grid
        display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
          className="gridImagePerfil"
        >
          <Grid item xs={12} paddingTop={5}>
            <h2
              style={{
                display: "flex",
                textAlign: "center",
                fontFamily: "cursive",
                fontSize: "30px",
              }}
            >
              {newText}
            </h2>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              className="imagePerfilStyle"
              src={imageUrl}
              alt="Eduardo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} paddingBottom={5} style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "cursive", fontSize: "20px" }}>
             Sou desenvolvedor Front-End!<br />
             {newParagraph}
            </p>
          </Grid>
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
            window.location.href = "https://br.linkedin.com/in/eduardo-schermack";
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

export default Home;
