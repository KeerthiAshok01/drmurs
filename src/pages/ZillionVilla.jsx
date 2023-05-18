import { useState } from "react";
import Button from "@mui/material/Button";
import Chest from "../components/zvilla/Chest";
import Storeroom from "../components/zvilla/Storeroom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a11cf9",
    },
  },
});

export default function ZillionVilla() {
  const [chest, setChest] = useState(true);

  return (
    <>
      {" "}
      <ThemeProvider theme={theme}>
        <section className="bg-white d-flex justify-items-center min-vh-100">
          <div className="container my-4">
            <Button
              className="bg-purple mx-4 mb-2 px-2"
              onClick={() => {
                setChest(true);
              }}
            >
              Chest
            </Button>
            <Button
              className="bg-purple mb-2 px-2"
              onClick={() => {
                setChest(false);
              }}
            >
              Storeroom
            </Button>
            {chest ? <Chest /> : <Storeroom />}
          </div>
        </section>
      </ThemeProvider>
    </>
  );
}
