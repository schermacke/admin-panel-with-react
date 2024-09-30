import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import "./index.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

const Home = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [newText, setNewText] = useState("");
  const [newParagraph, setNewParagraph] = useState("");

  const handleClick = () => {
    window.location.href = "https://www.google.com.br"
  }
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
      })
      .catch((error) => {
        console.error("Erro ao buscar o texto:", error);
      });
  };

  const fetchSubString = () => {
    axios
      .get("http://localhost:3000/api/image")
      .then((response) => {
        setNewParagraph(response.data.textParagraph);
      })
      .catch((error) => {
        console.error("Erro ao buscar texto:", error);
      });
  };

  useEffect(() => {
    fetchImage();
    fetchString();
    fetchSubString();

    const imageInterval = setInterval(() => {
      fetchImage();
    }, 2000);

    const textInterval = setInterval(() => {
      fetchString();
    }, 2000);

    const SubTextInterval = setInterval(() => {
      fetchSubString();
    }, 2000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(textInterval);
      clearInterval(SubTextInterval);
    };
  }, []);

  return (
    <Grid container spacing={1} paddingTop={10}>
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
            <div className="h-[50%] flex items-center justify-center w-full lg:h-[80%]">
              <motion.img
                style={{ borderRadius: "40px" }}
                width={"40%"}
                src={imageUrl}
                alt=""
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="box"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </div>
          </Grid>
          <Grid item xs={12} paddingBottom={5} style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "cursive", fontSize: "20px" }}>
              {newParagraph}
            </p>
            <Button variant="contained" onClick={handleClick}>
              <DescriptionIcon
                style={{
                  marginRight: "10px",
                  textAlign: "center",
                  display: "flex",
                }}
              />
              Meu currículo
            </Button>
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

export default Home;
