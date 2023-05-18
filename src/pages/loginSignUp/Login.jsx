import { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Img from "../../assets/images/zd.jpg";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { login } from "../../slices/userSlice";
import { useDispatch } from "react-redux";

import Loader from "../../components/main/Loader";
import bg from "../../assets/images/bg.mp4";
// import bg from "../../assets/images/zd-round.gif";
import zd__round from "../../assets/images/zd__round.jpg";

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [forgotError, setForgotError] = useState("");
  const [forgotMail, setForgotMail] = useState({
    mailId: "",
    isMailSet: false,
  });

  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const [error, setError] = useState({
    usernameError: "",
    passwordError: "",
  });

  const handleSubmit = () => {
    let noofErrors = 0;
    let errorMessage = { ...error };

    if (values.username === null || values.username === "") {
      errorMessage.usernameError = "Username cannot be empty";
    }

    if (values.password === null || values.password === "") {
      errorMessage.passwordError = "Password cannot be empty";
    }

    setError(errorMessage);

    setTimeout(() => {
      setError({
        usernameError: "",
        passwordError: "",
      });
    }, 3000);

    Object.values(errorMessage).map((val) => {
      if (val !== "") {
        noofErrors += 1;
      }
    });

    if (noofErrors === 0) {
      dispatch(
        login({
          user: values.username,
          password: values.password,
          loggedIn: true,
        })
      );
      history.push("/news-feed");
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const line1 = "Hello Drmur!";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        yoyo: 20,
      },
    },
  };

  const LoginbuttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 6px rgb(0,0,0)",
      transition: {
        yoyo: 1,
      },
    },
  };
  setTimeout(() => {
    setLoading(false);
  }, 3750);

  function handleForgotSubmit() {
    if (forgotMail.mailId.includes("@")) {
      setForgotMail({ ...forgotMail, isMailSet: true });
    } else {
      setForgotError("Invalid Email");
    }
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <video className="w-md-100" id="video" autoPlay="autoplay" muted loop>
            <source src={bg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            <img
              src={zd__round}
              width="20%"
              className="position-absolute"
              style={{ left: 150,top:80, borderRadius:"50%"}}
            />
          {/* <video className="w-md-50 " id="video" autoPlay="autoplay" muted>
            <source src={zd__round} type="video/gif" />
            Your browser does not support the video tag.
          </video> */}
          <div className="d-flex justify-content-center justify-content-lg-end align-items-center min-vh-100 mx-3 pe-lg-5">
            <motion.div
              className="white-box d-flex bg-body flex-column mr-3 justify-content-between p-5 rounded-4"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 60, delay: 2 }}
            >
              {/* <div
                className="d-flex flex-column justify-content-between bg-body px-5 me-lg-4 pt-5 rounded-4 h-md-25 w-100 w-md-50 w-lg-25"
                style={{ height: "36rem", width: "21rem" }}
              > */}
              <img src={Img} className="d-md-none" alt="Logo" />
              <motion.h4
                className="mb-5 mt-1 bg-purple rounded-3 p-2 text-center"
                variants={sentence}
                initial="hidden"
                animate="visible"
              >
                {line1.split("").map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h4>
              <motion.p
                className="purple text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, ease: "easeInOut" }}
              >
                STEP INTO YOUR DREAMS
              </motion.p>
              <div className="d-flex flex-column justify-content-evenly h-50">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 5 }}
                  transition={{ delay: 3.3 }}
                >
                  <InputBase
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 5 }}
                    transition={{ delay: 3.3 }}
                    id="outlined-adornment"
                    type={"text"}
                    style={{ borderColor: "#b442ff" }}
                    value={values.username}
                    onChange={(e) =>
                      setValues((pre) => ({
                        ...pre,
                        username: e.target.value,
                      }))
                    }
                    className="form-control mb-3 rounded-pill p-2"
                    placeholder="Username"
                    endAdornment={
                      <InputAdornment>
                        <PersonIcon
                          style={{
                            color: "C0C0C0",
                            fontSize: "1.5rem",
                          }}
                        />
                      </InputAdornment>
                    }
                  />
                  {error.usernameError !== "" && (
                    <p className="text-danger">{error.usernameError}</p>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 5 }}
                  transition={{ delay: 3.6 }}
                >
                  <InputBase
                    id="outlined-adornment"
                    type={values.showPassword ? "text" : "password"}
                    className="form-control mb-3 rounded-pill p-2"
                    style={{ borderColor: "#b442ff" }}
                    value={values.password}
                    onChange={(e) =>
                      setValues((pre) => ({
                        ...pre,
                        password: e.target.value,
                      }))
                    }
                    placeholder="Password"
                    endAdornment={
                      <InputAdornment>
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityIcon
                              style={{ color: "C0C0C0", fontSize: "1.5rem" }}
                            />
                          ) : (
                            <VisibilityOffIcon
                              style={{ color: "C0C0C0", fontSize: "1.5rem" }}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {error.passwordError !== "" && (
                    <p className="text-danger">{error.passwordError}</p>
                  )}
                </motion.div>
                <motion.button
                  initial={{ opacity: 0, y: 300 }}
                  animate={{ opacity: 1, y: 5 }}
                  transition={{ delay: 3, ease: "circOut" }}
                  variants={LoginbuttonVariants}
                  whileHover="hover"
                  type="button"
                  className="btn mb-3 w-50 rounded-pill bg-purple mx-auto mb-lg-3"
                  onClick={handleSubmit}
                >
                  Login
                </motion.button>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  onClick={() => setOpen(true)}
                  className="purple text-center"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Forgot Password?
                </motion.p>
              </div>
              {/* </div> */}
              <motion.button
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 5 }}
                transition={{ delay: 3, ease: "circOut" }}
                variants={LoginbuttonVariants}
                className="btn mb-5 purple-boder rounded-4"
                onClick={() => history.push("/SignUp1")}
              >
                Create Account
              </motion.button>
            </motion.div>
          </div>
        </>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {forgotMail.isMailSet ? (
            <h4 className="purple">Verification mail is sent to your Email</h4>
          ) : (
            <>
              <TextField
                id="outlined-basic"
                label="Enter your Email"
                variant="outlined"
                sx={{ width: "100%", mb: "20px" }}
                onChange={(e) =>
                  setForgotMail({ ...forgotMail, mailId: e.target.value })
                }
              />
              {forgotError !== "" && (
                <p className="text-danger">{forgotError}</p>
              )}
              <Button
                variant="contained"
                className="bg-purple white"
                onClick={handleForgotSubmit}
              >
                Submit
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
