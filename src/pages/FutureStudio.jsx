import { useState } from "react";
import Button from "@mui/material/Button";
import Goal from "../components/futureStudio/Goal";
import ActivityStudio from "../components/futureStudio/ActivityStudio";
import Diary from "../components/futureStudio/Diary";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a11cf9",
    },
  },
});

export default function FutureStudio() {
  const [activity, setActivity] = useState(false);
  const [diary, setDiary] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <section className="bg-white d-flex justify-items-center min-vh-100">
          <div className="container my-4">
            <Button
              className="bg-purple mb-2 px-2"
              onClick={() => {
                setActivity(false);
                setDiary(false);
              }}
            >
              Create Goal
            </Button>
            <Button
              className="bg-purple mx-4 mb-2 px-2"
              onClick={() => {
                setActivity(true);
                setDiary(false);
              }}
            >
              Activity Studio
            </Button>
            <Button
              className="bg-purple mb-2 px-2"
              onClick={() => {
                setActivity(false);
                setDiary(true);
              }}
            >
              ZD Diary
            </Button>
            {activity ? <ActivityStudio /> : diary ? <Diary /> : <Goal />}
          </div>
        </section>
      </ThemeProvider>
    </>
  );
}
