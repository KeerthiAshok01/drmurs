import { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";
import { purple } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { Alert } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const PurpleTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    color: "#a11cf9",
    backgroundColor: "#ffffff",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export default function YourActivities() {
  const { goal, goaldescription, milestones } = useSelector(
    (state) => state.futureStudio
  );
  const handleSubmit = () => {
    setPostSuccess(true);
    setAlert(true);
  };
  const [postSuccess, setPostSuccess] = useState(false);
  const [alert, setAlert] = useState(false);

  const { loggedIn } = useSelector((state) => state.user);

  return (
    <>
      <div className="rounded-4 bg-purple vh-75 position-relative pt-1">
        <div>
          <div className="justify-content-between m-4 align-items-center">
            <h4>Activity Box</h4>
            <div className="divide"></div>
            {!loggedIn ? (
              <p className="grey">404</p>
            ) : (
              <div className="d-flex flex-column justify-content-evenly p-4 vh-75 w-100">
                <div>
                  <div className="column bg-white my-4 rounded-pill p-2">
                    <h4 className="purple">{goal}</h4>
                  </div>
                  <div className="column bg-white my-4 rounded-pill p-2">
                    <h4 className="purple">{goaldescription}</h4>
                  </div>
                  <div className="column bg-white my-4 p-2">
                    <div className="d-flex justify-content-between col-12 ">
                      {milestones.map((slide, index) => (
                        <div className="purple column">
                          <h6>
                            {slide.tasks.map((task, index) => (
                              <p className="purple">{task}</p>
                            ))}
                          </h6>
                          <p>{JSON.stringify(slide.date)}</p>
                        </div>
                      ))}
                    </div>
                    <div className="d-flex justify-content-end align-items-end">
                      <Checkbox
                        {...label}
                        onClick={handleSubmit}
                        sx={{
                          color: purple[500],
                          "&.Mui-checked": {
                            color: purple[500],
                          },
                        }}
                      />
                    </div>
                    <div className="my-2 col-md-9">
                      {alert && (
                        <Alert severity="success">
                          Your milestone completed sucessfully!
                        </Alert>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
