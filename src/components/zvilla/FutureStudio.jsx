import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import MessageIcon from "@mui/icons-material/Message";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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

const card = ["Sub Code", "Year", "Requested Notes"];

export default function FutureStudio() {
  return (
    <>
      <div className="p-3 row d-flex justify-content-around col-12 px-2 m-0 mb-5 ">
        <Card
          elevation={4}
          className=" p-1"
          sx={{
            bgcolor: "#a11cf9",
            // height: 200,
          }}
        >
          <CardContent>
            <section id="profile" className="">
              <div className="row">
                <div className="d-flex justify-content-between col-12 "></div>
                <p className="p-2 text-white">No. of Goals created:</p>
                <p className="p-2 text-white">
                  No of goals successfully achieved:
                </p>
                <p className="p-2 text-white">No. Of tasks completed :</p>
                <p className="p-2 text-white">Pending tasks</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
