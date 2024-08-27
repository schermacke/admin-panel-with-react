import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Grid } from "@mui/material";

const Contato = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12}>

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

export default Contato;
