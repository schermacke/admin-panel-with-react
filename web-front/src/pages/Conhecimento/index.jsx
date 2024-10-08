import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import cardData from "./arrayImage";

const Sobre = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid paddingTop={12} display={"flex"} justifyContent={"center"}>
          <h2
            style={{
              fontFamily: "cursive",
              fontSize: "30px",
            }}
          >
            Conhecimento
          </h2>
        </Grid>
        <Grid
          container
          spacing={2}
          padding={2}
          paddingTop={1}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          sx={{
            maxHeight: "150vh",
          }}
        >
          {cardData.map((card) => (
            <Grid item xs={6} sm={4} md={3} key={card.id}>
              <Card variant="elevation">
                <CardContent>
                  <img
                    src={card.image}
                    srcSet={`${card.image}?dpr=2 2x`}
                    loading="lazy"
                    alt={card.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography level="title-md">{card.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid paddingTop={5}>
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* variavel para armazenar no banco */}
          </h3>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sobre;
