import { useState } from "react";
import Button from "@mui/material/Button";
import YourActivities from "./YourActivities";
import TaskManager from "./TaskManager";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a11cf9",
    },
  },
});

export default function ActivityStudio() {
  const [task, setTask] = useState(false);
  const [activity, setActivity] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="purple"> Milestone Timeline</div>
        <section className="bg-white d-flex justify-items-center">
          <div className="container my-4">
            <div className="d-flex justify-content-start justify-content-md-between">
              <div>
                <Button
                  className="btn me-4 mb-4"
                  variant="outlined"
                  onClick={() => {
                    setTask(false);
                  }}
                >
                  Your Activities
                </Button>
                <Button
                  className="btn mb-4 justify-content-end"
                  variant="outlined"
                  onClick={() => {
                    setTask(true);
                  }}
                >
                  Task Manager
                </Button>
              </div>
            </div>
            {task ? <TaskManager /> : <YourActivities />}
          </div>
        </section>
      </ThemeProvider>
    </>
  );
}
