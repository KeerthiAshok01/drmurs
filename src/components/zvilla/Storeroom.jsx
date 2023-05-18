import { useState } from "react";
import gif from "../../assets/images/test.gif";
import { Button } from "@mui/material";
import "../../assets/css/zvilla.css";
import FutureStudio from "./FutureStudio";
import Brainstorming from "./Brainstorming";
import Zillionevents from "./Zillionevents";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a11cf9",
    },
  },
});

export default function Storeroom() {
  const [task, setTask] = useState(false);
  const [activity, setActivity] = useState(false);
  return (
    <>
      <section className="bg-body justify-content-center align-items-center rounded-2 m-5">
        <h1 className="purple p-2">Family Name</h1>
        <p className="purple p-4"> Stardom Dreamer</p>
        <h1 className="purple p-2">Family Badge</h1>
        <img src={gif} width="30%" alt="loading..." />
        <h1 className="purple p-3">Zillion Records</h1>
        <ThemeProvider theme={theme}>
          <div className="container my-4">
            <div className="d-flex justify-content-start justify-content-md-between">
              <div>
                <Button
                  className="btn me-4 mb-4"
                  variant="outlined"
                  onClick={() => {
                    setActivity(false);
                    setTask(false);
                  }}
                >
                  Brainstorming Family
                </Button>
                <Button
                  className="btn me-4 mb-4"
                  variant="outlined"
                  onClick={() => {
                    setActivity(true);
                    setTask(false);
                  }}
                >
                  Zillion Events
                </Button>
                <Button
                  className="btn mb-4 justify-content-end"
                  variant="outlined"
                  onClick={() => {
                    setActivity(false);
                    setTask(true);
                  }}
                >
                  Future Studio
                </Button>
              </div>
            </div>
            {activity ? (
              <Zillionevents />
            ) : task ? (
              <FutureStudio />
            ) : (
              <Brainstorming />
            )}
          </div>
        </ThemeProvider>
      </section>
    </>
  );
}
