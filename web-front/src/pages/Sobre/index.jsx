import Grid from "@mui/material/Grid";

const Sobre = () => {
  return (
    <Grid container spacing={1}>
      <Grid
        item
        xs={12}
        direction="column"
        justifyContent="center"
        alignItems="center"
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
            Sobre mim
          </h2>
        </Grid>
      </Grid>
      
      <Grid item xs={12} md={12}>
        vvvvvvvvv
      </Grid>
    </Grid>
  );
};

export default Sobre;
