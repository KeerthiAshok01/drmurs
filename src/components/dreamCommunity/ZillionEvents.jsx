import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import DescriptionIcon from "@mui/icons-material/Description";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";

const data = [
  {
    poster:
      "https://cdn.dribbble.com/users/4661/screenshots/17039435/media/da44cd59a518b8974d8b466dffe73d66.jpg?compress=1&resize=1200x900",
    name: "Special Event - Pattarai",
    description:
      "A star is an astronomical object consisting of a luminous spheroid of plasma held together by its own gravity. The nearest star to Earth is the Sun. Many other stars are visible to the naked eye at night, but due to their immense distance from Earth they appear as fixed points of light in the sky.",
    rules: "blah blah",
    conductorname: "Santhosh",
    email: "santhosh@gmail.com",
    phone: "9888888888",
  },
  {
    poster:
      "https://cdn.dribbble.com/users/191949/screenshots/17039060/media/5128a05ec465cfb5757bbf356969a0c4.jpg?compress=1&resize=1200x900",
    name: "Time Management",
    description: "lalala",
    rules: "blah blah",
    conductorname: "Raksha",
    email: "raksha@gmail.com",
    phone: "9888338888",
  },
  {
    poster:
      "https://cdn.dribbble.com/users/235464/screenshots/17039751/media/429b3e23f1e29f02b2dd8c8777cf9d7c.gif",
    name: "Maths Event",
    description:
      "Set display to inline-block to make the div width fit to its content. Use position: relative and left: 50% to position its left edge to 50% of its containing element.",
    rules: "blah blah",
    conductorname: "Surya",
    email: "surya@gmail.com",
    phone: "9889088888",
  },
  {
    poster:
      "https://cdn.dribbble.com/users/4661/screenshots/16229511/media/75682ae5da937db54ff5ce88cbb8e473.jpg?compress=1&resize=1200x900",
    name: "Physics Event",
    description:
      "The initial width of a block level element like div or p is auto. Use width:auto to undo explicitly specified widths. if you specify width:100%, the element's total width will be 100% of its containing block plus any horizontal margin, padding and border.",
    rules: "blah blah",
    conductorname: "harsha",
    email: "harsha@gmail.com",
    phone: "9888098888",
  },
];

export default function ZillionEvents() {
  const [open, setOpen] = useState(false);
  const [iValue, setIValue] = useState(null);
  const handleClose = () => setOpen(false);

  const EventDetails = ({ iValue }) => {
    const details = data[iValue];
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{details.name}</DialogTitle>
        <DialogContent>
          <div className="d-flex col-12 position-relative vw-40">
            {details.poster && (
              <Box
                className={
                  details.poster
                    ? "col-11 d-flex mx-auto flex-column justify-content-between position-absolute"
                    : "col-11 d-flex mx-auto flex-column justify-content-between bg-white position-absolute"
                }
                style={
                  details.poster
                    ? {
                        height: 250,
                        width: "100%",
                        boxShadow: "0px 0px 5px grey",
                        background: details.poster
                          ? `url("${details.poster}")no-repeat center/cover`
                          : "",
                        top: 0,
                        left: 0,
                        opacity: 0.3,
                        // backdropFilter: "blur(0px)",
                        filter: "blur(2px)",
                        // transition: "0.5s ease",
                      }
                    : {
                        boxShadow: "0px 0px 5px grey",
                        border: "3px solid #a11cf9",
                      }
                }
              ></Box>
            )}
            <Box
              className={
                details.poster
                  ? "col-11 d-flex mx-auto flex-column justify-content-between "
                  : "col-11 d-flex mx-auto flex-column justify-content-between bg-white"
              }
              style={
                details.poster
                  ? {
                      height: 250,
                      width: "100%",
                      background: details.poster
                        ? `url("${details.poster}")no-repeat center/contain`
                        : "",
                      zIndex: 2,
                    }
                  : {
                      border: "3px solid #a11cf9",
                    }
              }
            ></Box>
          </div>
          <DialogContentText className="fw-bold mt-1 mb-2">
            {details.description}
          </DialogContentText>
          <DialogContentText>Rules: {details.rules}</DialogContentText>
          <DialogContentText className="fw-bold mt-1 mb-2">
            Contact Details
          </DialogContentText>
          <DialogContentText>
            Conductor Name: {details.conductorname}
          </DialogContentText>
          <DialogContentText>Email: {details.email}</DialogContentText>
          <DialogContentText>Contact Number: {details.phone}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button className="bg-purple m-2" onClick={handleClose}>
            Register Now
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  const { data1 } = useSelector((state) => state.event);

  return (
    <>
      <section className="justify-content-center align-items-center m-4">
        <div className="row">
          {data.map((event, index) => {
            return (
              <div key={index} className="col-12 col-md-4 mb-4">
                <Card elevation={2}>
                  <CardMedia
                    component="img"
                    alt="spl event"
                    image={event.poster}
                  />
                  <CardContent className="m-0">
                    <Typography variant="h6" component="div">
                      {event.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      type="button"
                      onClick={() => {
                        setOpen(true);
                        setIValue(index);
                      }}
                      size="small"
                      className="purple mt-0"
                    >
                      Explore More
                    </Button>
                    {open && <EventDetails iValue={iValue} />}
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
