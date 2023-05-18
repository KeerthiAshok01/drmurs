import { useState } from "react";
import { motion } from "framer-motion";
import Link from "@mui/material/Link";
import logo from "../../assets/images/zd.jpg";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import InputBase from "@mui/material/InputBase";
import { useDispatch } from "react-redux";
import { signup1 } from "../../slices/userSlice";
import { useHistory } from "react-router-dom";
import bgVideo from "../../assets/images/bg.mp4";

export default function SignUp1() {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  });
  const NextbuttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 6px rgb(0,0,0)",
      transition: {
        yoyo: 1,
      },
    },
  };
  const backarrow = {
    hover: {
      scale: 1.2,
      transition: {
        yoyo: 10,
      },
    },
  };
  const [error, setError] = useState({
    emailError: "",
    usernameError: "",
    passwordError: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = () => {
    let noofErrors = 0;
    let errorMessage = { ...error };

    if (!/\S+@\S+\.\S+/.test(values.email)) {
      errorMessage.emailError = "Email address is invalid";
    }
    if (values.username === null || values.username === "") {
      errorMessage.usernameError = "Username cannot be empty";
    }

    if (values.password.length < 8) {
      errorMessage.passwordError = "Password needs to be 8 characters or more";
    } else if (values.password !== values.confirmPassword) {
      errorMessage.confirmPassword = "Password does not match";
    }

    setError(errorMessage);

    setTimeout(() => {
      setError({
        emailError: "",
        usernameError: "",
        passwordError: "",
        confirmPassword: "",
      });
    }, 3000);

    Object.values(errorMessage).map((val) => {
      if (val !== "") {
        noofErrors += 1;
      }
    });

    if (noofErrors === 0) {
      dispatch(
        signup1({
          username: values.username,
          password: values.password,
          email: values.email,
        })
      );
      history.push("/signup2");
    }
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const line1 = "Way to ZD!";
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
        yoyo: 10,
      },
    },
  };

  return (
    <>
      <video className="w-md-100" id="video" autoPlay="autoplay" muted loop>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="d-flex justify-content-center justify-content-lg-end align-items-center min-vh-100 mx-3 pe-lg-5">
        <motion.div
          className="white-box d-flex bg-body flex-column mr-3 overflow-auto justify-content-between p-5 rounded-4"
          // style={{ height: "90vh", width: "24rem" }}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 60, delay: 1.5 }}
        >
          <div className="text-center d-lg-none mb-1">
            <img width="85%" src={logo} />
          </div>
          <div className="text-center">
            <motion.h1
              className="mb-5 bg-purple rounded-3 w-100 py-2"
              style={{ fontSize: "30px" }}
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
            </motion.h1>
            <motion.p
              className="purple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, ease: "easeInOut" }}
            >
              JOIN OUR ZD FAMILY
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 5 }}
              transition={{ delay: 3.3 }}
            >
              <InputBase
                id="outlined-adornment"
                type={"text"}
                value={values.username}
                className="form-control mb-3 rounded-pill p-2"
                onChange={(e) =>
                  setValues((pre) => ({ ...pre, username: e.target.value }))
                }
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
                <p className="mb-md-4 ms-2 text-start text-danger">
                  {error.usernameError}
                </p>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 5 }}
              transition={{ delay: 3.4 }}
            >
              <InputBase
                id="outlined-adornment"
                type={"text"}
                value={values.email}
                className="form-control mb-3 rounded-pill p-2"
                onChange={(e) =>
                  setValues((pre) => ({ ...pre, email: e.target.value }))
                }
                placeholder="Mail Address"
                endAdornment={
                  <InputAdornment>
                    <EmailIcon
                      style={{
                        color: "C0C0C0",
                        fontSize: "1.5rem",
                      }}
                    />
                  </InputAdornment>
                }
              />
              {error.emailError !== "" && (
                <p className="mb-md-4 ms-2 text-start text-danger">
                  {error.emailError}
                </p>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 5 }}
              transition={{ delay: 3.5 }}
            >
              <InputBase
                id="outlined-adornment"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                className="form-control mb-3 rounded-pill"
                onChange={(e) =>
                  setValues((pre) => ({ ...pre, password: e.target.value }))
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
                <p className="mb-md-4 ms-2 text-start text-danger">
                  {error.passwordError}
                </p>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 5 }}
              transition={{ delay: 3.6 }}
            >
              <InputBase
                id="outlined-adornment"
                type={values.showPassword ? "text" : "password"}
                value={values.confirmPassword}
                className="form-control mb-3 rounded-pill p-2"
                onChange={(e) =>
                  setValues((pre) => ({
                    ...pre,
                    confirmPassword: e.target.value,
                  }))
                }
                placeholder="Confirm Password"
                endAdornment={
                  <InputAdornment>
                    <VisibilityIcon
                      style={{
                        color: "C0C0C0",
                        fontSize: "1.5rem",
                      }}
                    />
                  </InputAdornment>
                }
              />
            </motion.div>
            {error.confirmPassword !== "" && (
              <p className="mb-md-4 ms-2 text-start text-danger">
                {error.confirmPassword}
              </p>
            )}
            <motion.button
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 5 }}
              transition={{ delay: 4.5, ease: "circOut" }}
              className="btn rounded-pill bg-purple px-4 h6"
              type="button"
              variants={NextbuttonVariants}
              whileHover="hover"
              onClick={handleSubmit}
            >
              Next
            </motion.button>
          </div>
          <div className="col-12 d-flex justify-content-between mt-3">
            <motion.div
              className="back-button1"
              variants={backarrow}
              whileHover="hover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 5 }}
              transition={{ delay: 4.6 }}
            >
              <IconButton aria-label="delete" onClick={() => history.push("/")}>
                <ArrowBackIosNewIcon
                  style={{ color: "#A11CF9", fontSize: "20px" }}
                />
              </IconButton>
            </motion.div>
            <div className="SignUp2-input-login purple fw-bold ">
              <motion.a
                href="#"
                className="purple text-decoration-none"
                style={{ fontSize: "15px" }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 5 }}
                transition={{ delay: 4.7 }}
              >
                STEP 1/4
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
