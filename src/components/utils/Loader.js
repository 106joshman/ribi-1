import { Grid, Stack } from "@mui/material";
import React from "react";
import Logo from "../../assets/logo.png";

const Loader = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        height="80vh"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#f9fafc"
      >
        <Stack spacing={2}>
          <div className="borders w-20 h-20 border grid place-items-center rounded-full shadow-lg animate-spin">
            <img src={Logo} alt="Ribi logo" className="w-[35px]" />
          </div>
        </Stack>
      </Grid>
    </>
  );
};

export default Loader;
