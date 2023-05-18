import logo from "../../assets/images/zd.jpg";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup2 } from "../../slices/userSlice";
import { useHistory } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import bgVideo from "../../assets/images/bg.mp4";

const line1 = "Way to ZD !";
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

const next = {
  backgroundColor: "#a11cf9",
  color: "white",
  borderRadius: "10px",
  justifyContent: "center",
  border: "none",
};

const names = [
  "Arts",
  "Science",
  "Music",
  "Business and Management",
  "Computer Science and Information Technology",
  "Education",
  "Environmental, Agricultural, and Physical Sciences",
  "Government and Law",
  "Library and Information Science",
  "Media and Communications",
  "Medical, Healthcare, and Life Sciences",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
  root: {
    "& .MuiTextField-root": {
      //   marginTop: theme.spacing(1),
      //   marginBottom: theme.spacing(2),
      width: "100%",
      color: "#a11cf9",
    },
  },
}));

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

function getStyles(name, interests, theme) {
  const theme1 = createTheme({
    palette: {
      primary: {
        main: "#A11CF9",
      },
      white: {
        main: "#ffffff",
      },
      black: {
        main: "#000000",
      },
    },
  });
  return {
    fontWeight:
      interests.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightBold,
    backgroundColor:
      interests.indexOf(name) === -1
        ? theme.palette.white
        : theme1.palette.primary.main,
    color:
      interests.indexOf(name) === -1
        ? theme1.palette.black.main
        : theme1.palette.white.main,
  };
}

export default function SignUp2() {
  const theme = useTheme();
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const [values, setValues] = useState({
    gender: "",
    phone: "",
    hobby: "",
  });

  const [error, setError] = useState({
    genderError: "",
    phoneError: "",
    hobbyError: "",
  });

  const handleSubmit = () => {
    let noofErrors = 0;
    let errorMessage = { ...error };

    if (values.gender === null || values.gender === "") {
      errorMessage.genderError = "Select your gender";
      noofErrors += 1;
    }

    if (values.phone === "" || values.phone.length !== 10) {
      errorMessage.phoneError = "Phone Number is invalid";
      noofErrors += 1;
    }

    if (values.hobby === "" || values.hobby === "") {
      errorMessage.hobbyError = "Fill your hobbies";
      noofErrors += 1;
    }

    setError(errorMessage);

    setTimeout(() => {
      setError({
        genderError: "",
        phoneError: "",
        hobbyError: "",
      });
    }, 2000);

    if (noofErrors === 0) {
      dispatch(
        signup2({
          gender: values.gender,
          phone: parseInt(values.phone),
          hobby: values.hobby,
        })
      );
      history.push("/signup3");
    }
  };

  return (
    <>
      <video className="w-md-100" id="video" autoPlay="autoplay" muted loop>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="d-flex justify-content-center justify-content-lg-end align-items-center min-vh-100 mx-3 pe-lg-5">
        <motion.div
          className="white-box d-flex bg-body flex-column mr-3 justify-content-between align-items-center p-5 rounded-4"
          // style={{ height: "90vh", width: "24rem" }}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 60, delay: 1.5 }}
        >
          <div className="text-center d-lg-none mb-1">
            <img width="85%" src={logo} />
          </div>
          <motion.h3
            className="w-100 p-1"
            style={{ letterSpacing: "0.5 rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <motion.p
              className="py-2 text-center bg-purple rounded-3 w-100"
              variants={sentence}
              style={{ fontSize: "30px" }}
              initial="hidden"
              animate="visible"
            >
              {line1.split("").map((char, index) => {
                return (
                  <motion.span
                    key={char + "-" + index}
                    variants={letter}
                    className="py-4"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </motion.p>
          </motion.h3>
          <div
            className="input w-100
          d-flex flex-column justify-content-between align-items-left
          text-left"
          >
            <motion.h6
              className="py-sm-1 purple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8, ease: "easeInOut" }}
            >
              EGG'S GENDER
            </motion.h6>
            <motion.div
              className=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, ease: "easeInOut" }}
            >
              <div className="gender">
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={values.gender ? values.gender : ""}
                  className="d-flex flex-row"
                  onChange={(e) =>
                    setValues((pre) => ({ ...pre, gender: e.target.value }))
                  }
                  size="small"
                >
                  <div className="col-12 col-sm-6">
                    <FormControlLabel
                      id="radio-button"
                      className="purple col-12 col-sm-6"
                      value="male"
                      control={<Radio style={{ color: "#a11cf9" }} />}
                      label="Male"
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <FormControlLabel
                      id="f-radio-button"
                      className="purple col-12 col-sm-6"
                      value="female"
                      control={<Radio style={{ color: "#a11cf9" }} />}
                      label="Female"
                    />
                  </div>
                </RadioGroup>
                {error.genderError !== "" && (
                  <p className=" ms-2 mb-0 text-start text-danger">
                    {error.genderError}
                  </p>
                )}
              </div>
            </motion.div>

            <div className="email-phone py-2 d-flex flex-column">
              <motion.h6
                className="purple mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.8, ease: "easeInOut" }}
              >
                PHONE NUMBER
              </motion.h6>
              <form
                className={classes.root}
                autoComplete="off"
                style={{ color: "#a11cf9" }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4, ease: "easeInOut" }}
                >
                  <TextField
                    color="secondary"
                    variant="standard"
                    type="number"
                    value={values.phone ? values.phone : ""}
                    onChange={(e) =>
                      setValues((pre) => ({ ...pre, phone: e.target.value }))
                    }
                  />
                  {error.phoneError !== "" && (
                    <p className="ms-2 mt-1 mb-0 text-start text-danger">
                      {error.phoneError}
                    </p>
                  )}
                </motion.div>
              </form>
            </div>
            <div className="email-phone py-2 d-flex flex-column">
              <motion.h6
                className="purple mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.8, ease: "easeInOut" }}
              >
                HOBBIES
              </motion.h6>
              <form
                className={classes.root}
                autoComplete="off"
                style={{ color: "#a11cf9" }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4, ease: "easeInOut" }}
                >
                  <TextField
                    color="secondary"
                    variant="standard"
                    type="text"
                    value={values.hobby ? values.hobby : ""}
                    onChange={(e) =>
                      setValues((pre) => ({ ...pre, hobby: e.target.value }))
                    }
                  />
                  {error.hobbyError !== "" && (
                    <p className="ms-2 mt-1 mb-0 text-start text-danger">
                      {error.hobbyError}
                    </p>
                  )}
                </motion.div>
              </form>
            </div>
          </div>

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

          <div className="col-12 d-flex justify-content-between mt-3">
            <motion.div
              className="back-button1"
              variants={backarrow}
              whileHover="hover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 5 }}
              transition={{ delay: 4.6 }}
            >
              <IconButton
                aria-label="delete"
                onClick={() => history.push("/SignUp1")}
              >
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
                STEP 2/4
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
