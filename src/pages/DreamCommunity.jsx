import React, { useState, useHistory } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ZillionEvents from "../components/dreamCommunity/ZillionEvents";
import CreateEvents from "../components/dreamCommunity/CreateEvents";
import BrainstormingFamily from "../components/dreamCommunity/BrainstormingFamily";
import Modal from "@mui/material/Modal";
import { Checkbox } from "@mui/material";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a11cf9",
    },
  },
});

export default function DreamCommunity() {
  const [events, setEvents] = useState(false);
  const [brainstroming, setBrainstroming] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const {
    loggedIn,
    user,
    username,
    password,
    avatar,
    gender,
    email,
    phone,
    interest,
  } = useSelector((state) => state.user);

  const {
    eConductorName,
    eConductorMail,
    eConductorContact,
    ePoster,
    eDescription,
    eRules,
  } = useSelector((state) => state.event);

  console.log(
    eConductorName,
    eConductorMail,
    eConductorContact,
    ePoster,
    eDescription,
    eRules
  );
  // const styles = theme => ({
  //   modalStyle1:{
  //     overflow:'scroll',
  //   }
  // });

  const ModalBody = () => {
    // const classes= styles;
    const [check, setCheck] = useState(false);
    return (
      <Modal
        // className={classes.modalStyle1}
        // sx={{ overflow: "scroll" }}
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="d-flex justify-content-center  py-sm-5 mx-2 mx-md-3 mx-lg-4 mx-lg-5"
      >
        <Box
          classname="bg-primary"
          sx={{
            backgroundColor: "#a11cf9 !important",
            // position: "absolute",
            // top: "50%",
            // left: "50%",
            // transform: "translate(-50%, -50%)",
            minWidth: "60vw",
            maxHeight: "100vh",
            overflowY: "scroll",
            border: "3px solid #ffffff",
            boxShadow: 24,
            px: 4,
            py: 2,
          }}
        >
          <div
            className="d-flex align-items-center justify-content-start p-sm-2  mb-sm-2 "
            style={{ borderBottom: "2px solid white" }}
          >
            <div className="text-white h3 ">Community Conditions:</div>
          </div>
          <div>
            <ol className="text-white mt-2 my-sm-3 overflow-auto">
              <li>
                The poster/Ad of the event should be added only in HD Quality
                and with the resolution of 1080 x 520 pixels
              </li>
              <li>
                The poster/Ad should contain event name, event participation
                amount(if any), cash prize(if any), timing, event start date to
                end date, venue and contact details.
              </li>
              <li>
                The event's description mentioned should be clear and relevant
                to the event.
              </li>
              <li>
                The event's rules, which is optional. If mentioned it must be
                clear and contain every rules regarding the event.
              </li>
              <li>
                Once the event is completed, the event conductors should post
                the following details in the post events section without fail.
                <ol>
                  <li>
                    Event Winners (who joined throught zillion dreamz app, by
                    mentioning them as #zillion-<em>eventname</em>-
                    <em>username</em> )
                  </li>
                  <li>Event cash prize/certificates(if any).</li>
                  <li>
                    Event participants (who joined using zillion dreamz app) and
                    their certificates/cash prize(if any).
                  </li>
                  <li>
                    Next event update by mentioning #zillionevents, #
                    <em>eventname</em> (if applicable).
                  </li>
                </ol>
              </li>
              <li>
                The event's rules, which is optional. If mentioned it must be
                clear and contain every rules regarding the event.
              </li>
              <li>
                After uploading your events, our team will confirm your given
                details with the above said criterias. If any data regarding the
                event found missing/irrelevant, we will reject your event and
                initimate you through your given mail id.
              </li>
            </ol>
          </div>
          <div className="d-flex align-items-center text-white my-1 my-sm-3">
            <Checkbox
              classname="me-sm-2"
              style={{ color: "white" }}
              onChange={() => setCheck(!check)}
            />
            <div>
              Check here to accept and agree all the terms and conditions
              mentioned above
            </div>
          </div>
          <div className="d-flex col-12 col-lg-11 align-items-center justify-content-end mt-4 ">
            <Button
              variant="contained"
              onClick={() => {
                setModalOpen(false);
                setEvents(false);
              }}
              className=" col-5 col-sm-4 col-md-3 col-lg-2 me-1 me-sm-2 purple bg-white"
            >
              Cancel
            </Button>
            {check ? (
              <Button
                variant="contained"
                color="success"
                className=" col-5 col-sm-4 col-md-3 col-lg-2 me-1 me-sm-2 bg-purple text-white shadow border border-2 border-white"
                onClick={() => {
                  setModalOpen(false);
                  setEvents(true);
                }}
              >
                Proceed
              </Button>
            ) : (
              <Button
                variant="contained"
                style={{ opacity: 0.2 }}
                className=" col-5 col-sm-4 col-md-3 col-lg-2 me-1 me-sm-2 bg-purple text-white shadow border border-2 border-white"
              >
                Proceed
              </Button>
            )}
          </div>
        </Box>
      </Modal>
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <section className="bg-white d-flex justify-items-center min-vh-100">
          <div className="container my-4">
            <div className="d-flex ms-2 justify-content-center justify-content-md-start">
              <Button
                className="bg-purple mb-2 px-2"
                onClick={() => {
                  setEvents(false);
                  setBrainstroming(false);
                }}
              >
                Zillion Events
              </Button>
              <Button
                className="bg-purple mx-4 mb-2 px-2"
                onClick={() => handleOpen()}
              >
                Create Events
              </Button>
              <Button
                className="bg-purple mb-2 px-2"
                onClick={() => {
                  setEvents(false);
                  setBrainstroming(true);
                }}
              >
                Brain Storming
              </Button>
            </div>
            <div className="mx-auto col-12 my-2">
              <Box>
                <Collapse in={success}>
                  <Alert
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setSuccess(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{ mb: 2, backgroundColor: "#9effe2" }}
                  >
                    Susscessfully Created your Event!
                  </Alert>
                </Collapse>
              </Box>
            </div>
            {events ? (
              <CreateEvents setEvents={setEvents} setSuccess={setSuccess} />
            ) : brainstroming ? (
              <BrainstormingFamily />
            ) : (
              <ZillionEvents />
            )}
          </div>
          <ModalBody />
        </section>
      </ThemeProvider>
    </>
  );
}
