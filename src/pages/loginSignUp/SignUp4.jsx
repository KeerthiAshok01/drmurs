import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Avatar from "@mui/material/Avatar";
import avatarImg from "../../assets/images/no_profile.png";
import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { styled } from "@mui/material/styles";
import logo from "../../assets/images/logo.svg";
import IconButton from "@mui/material/IconButton";
import { signup4 } from "../../slices/userSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import bgVideo from "../../assets/images/bg.mp4";
import EditIcon from "@mui/icons-material/Edit";

const line = "Way to Drmur!";
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

const Input = styled("input")({
  display: "none",
});

export default function Sign_Up_4() {
  const fileRef = useRef(null);
  const [uploadFile, setUploadFile] = useState(null);
  const [error, setError] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  setTimeout(() => {
    setError(false);
  }, 3000);

  const handleSubmit = () => {
    if (uploadFile === null || uploadFile === "") {
      setError(true);
    } else {
      dispatch(
        signup4({
          avatar: uploadFile,
          loggenIn: true,
        })
      );
      history.push("/");
    }
  };

  return (
    <>
      <video className="w-md-100" id="video" autoPlay="autoplay" muted loop>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.section
        className="d-flex justify-content-center justify-content-lg-end align-items-center min-vh-100 mx-3 pe-lg-5"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 60, delay: 1 }}
      >
        <div className="white-box d-flex bg-body flex-column mr-3 justify-content-between p-5 rounded-4">
          <img className="d-md-none" src={logo} alt="logo" />
          {/* <div className="d-flex bg-primary flex-column justify-content-around h-75"> */}
          <motion.h2
            className="mb-5 bg-purple rounded-3 p-2 text-center"
            style={{ letterSpacing: "0.5 rem" }}
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {line.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h2>
          <motion.p
            className="purple text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, ease: "easeInOut" }}
          >
            STEP INTO YOUR DREAMS
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            className="d-flex flex-column justify-content-evenly align-items-center pb-5"
            animate={{ opacity: 1, x: 5 }}
            transition={{ delay: 3.3 }}
          >
            <div>
              <Avatar
                alt="uploaded"
                src={uploadFile ? uploadFile : avatarImg}
                sx={{ width: 75, height: 75, margin: "0 auto" }}
              />
              <motion.p
                className="text-center mt-3 purple"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, ease: "easeInOut" }}
              >
                CHOOSE YOUR AVATAR
              </motion.p>
            </div>
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={(e) =>
                  setUploadFile(URL.createObjectURL(e.target.files[0]))
                }
                ref={fileRef}
              />
              <Button
                variant="contained"
                component="span"
                endIcon={uploadFile ? <EditIcon /> : <CameraAltIcon />}
                style={{ backgroundColor: "#a11cf9" }}
              >
                {uploadFile ? "Change" : "Upload From Gallery"}
              </Button>
            </label>
          </motion.div>
          {/* </div> */}
          {error && (
            <p className="text-danger text-center">Please Upload Image</p>
          )}
          {/* <div className="text-center"> */}
          <motion.button
            className="btn mt-4 rounded-pill mx-auto bg-purple px-3"
            type="button"
            href=""
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 5 }}
            transition={{ delay: 4.5, ease: "circOut" }}
            variants={NextbuttonVariants}
            whileHover="hover"
            onClick={handleSubmit}
          >
            Finish
          </motion.button>
          {/* </div> */}
          <div className="justify-content-between d-flex">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 5 }}
              transition={{ delay: 4.6 }}
              variants={backarrow}
              whileHover="hover"
            >
              <IconButton
                aria-label="delete"
                onClick={() => history.push("/SignUp3")}
              >
                <ArrowBackIosNewIcon
                  style={{ color: "#A11CF9", fontSize: "20px" }}
                />
              </IconButton>
            </motion.div>
            <motion.a
              href="#"
              className="purple text-decoration-none p-2"
              style={{ fontSize: "15px" }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 5 }}
              transition={{ delay: 4.7 }}
            >
              STEP 4/4
            </motion.a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
