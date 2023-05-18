import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { editprofile, login } from "../../slices/userSlice";
import angrygif from "../../assets/images/angry.gif";
import freezegif from "../../assets/images/freeze.gif";
import heartgif from "../../assets/images/heart.gif";
import laughgif from "../../assets/images/laugh.gif";
import mindblowngif from "../../assets/images/mindblown.gif";
import blankFace from "../../assets/images/blank-face.gif";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const useStyles = makeStyles({
  root: {
    color: "white",
    margin: 0,
    padding: 0,
    padding: 0,
    "&:hover": {
      margin: 0,
      padding: 0,
      backgroundColor: "transparent",
    },
  },
  root1: {
    color: "#a11cf9",
    margin: 0,
    padding: 0,
    padding: 0,
    "&:hover": {
      margin: 0,
      color: "#a11cf9",
      padding: 0,
      backgroundColor: "transparent",
    },
  },
});

const style = {
  count: {
    fontSize: "1.4rem",
    color: "#671ca0",
    fontWeight: "bolder",
  },
  follow: {
    fontSize: "1rem",
    color: "#671ca0",
    fontWeight: "800",
  },
  count1: {
    fontSize: "1rem",
    color: "#671ca0",
    fontWeight: "bolder",
  },
  follow1: {
    fontSize: "0.8rem",
    color: "#671ca0",
    fontWeight: "800",
  },
  box: {
    border: " 1px solid #000000",
    height: "25vh",
    bordeRradius: "10px",
    backgroundColor: "#7a05cf",
  },
  grey: {
    color: "#7e7e7e",
    fontSize: "17px",
  },
  clr: {
    color: "#b7c4c3",
  },
  box: {
    width: "100%",
    height: 225,
    borderRadius: "10px",
    color: "white",
    backgroundColor: "#a11cf9",
    "&:hover": {
      backgroundColor: "#7402cb",
      opacity: [0.9, 0.8, 0.7],
    },
  },
};

export default function Profile() {
  const classes = useStyles();
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [follow, setFollow] = useState(false);
  const [imgPreview1, setImgPreview1] = useState(null);
  const [error1, setError1] = useState(false);

  const {
    loggedIn,
    user,
    updatedUser,
    username,
    password,
    avatar,
    gender,
    email,
    about,
    phone,
    interest,
  } = useSelector((state) => state.user);
  const [alert, setAlert] = useState(false);
  const [data, setData] = useState([
    {
      img: [angrygif, freezegif, laughgif, heartgif, mindblowngif],
      emojiOpen: false,
      max: false,
      reaction: "105K",
    },
    {
      img: [angrygif, freezegif, laughgif, heartgif, mindblowngif],
      emojiOpen: false,
      max: false,
      reaction: "15K",
    },
    {
      img: [angrygif, freezegif, laughgif, heartgif, mindblowngif],
      emojiOpen: false,
      max: false,
      reaction: "5K",
    },
    {
      img: [angrygif, freezegif, laughgif, heartgif, mindblowngif],
      emojiOpen: false,
      max: false,
      reaction: "5K",
    },
    {
      img: [angrygif, freezegif, laughgif, heartgif, mindblowngif],
      emojiOpen: false,
      max: false,
      max: false,
      reaction: "135K",
    },
    {
      img: [angrygif, freezegif, laughgif, heartgif, mindblowngif],
      emojiOpen: false,
      max: false,
      reaction: "165K",
    },
    {
      img: [angrygif, freezegif, laughgif, heartgif, mindblowngif],
      emojiOpen: false,
      max: false,
      reaction: "10K",
    },
    {
      img: [angrygif, freezegif, laughgif, heartgif, mindblowngif],
      emojiOpen: false,
      max: false,
      reaction: "80K",
    },
    {
      img: [angrygif, freezegif, laughgif, heartgif, mindblowngif],
      emojiOpen: false,
      max: false,
      reaction: "605K",
    },
    {
      img: [angrygif, freezegif, laughgif, heartgif, mindblowngif],
      emojiOpen: false,
      max: false,
      reaction: "45K",
    },
  ]);

  const dispatch = useDispatch();

  const ModalBody = () => {
    const [editedUser, setEditedUser] = useState(null);
    const [editedAbout, setEditedAbout] = useState(null);
    // const classes= styles;
    return (
      <Modal
        // className={classes.modalStyle1}
        // sx={{ overflow: "scroll" }}
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="d-flex justify-content-center  py-sm-5 mx-2 mx-md-3 mx-lg-4 mx-lg-5"
      >
        <Box
          classname="bg-primary"
          sx={{
            backgroundColor: "#e5e5e5 !important",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40vw",
            height: "60vh",
            overflowY: "scroll",
            border: "3px solid #a11cf9",
            boxShadow: 24,
            px: 4,
            py: 2,
          }}
        >
          <div
            className="d-flex align-items-center justify-content-start p-sm-2  mb-sm-2 "
            style={{ borderBottom: "2px solid #a11cf9" }}
          >
            <div className="purple h3 ">Edit Profile:</div>
          </div>
          <div></div>
          <div className="text-white my-1 my-sm-3">
            <input
              placeHolder={updatedUser ? updatedUser : user}
              className="col-12 p-2 text-dark my-2"
              style={{ borderRadius: 10, border: "2px solid #a11cf9" }}
              type="text"
              onChange={(e) => setEditedUser(e.target.value)}
            />
            <textarea
              rows="5"
              placeHolder={about ? about : "About"}
              // value=""
              className="col-12 p-2 text-dark my-2"
              style={{ borderRadius: 10, border: "2px solid #a11cf9" }}
              type="text"
              onChange={(e) => setEditedAbout(e.target.value)}
            />
          </div>
          <div className="d-flex col-12 align-items-center justify-content-end mt-4 ">
            <Button
              variant="contained"
              onClick={() => {
                setModal(false);
              }}
              className=" col-5 col-sm-4 col-md-3 col-lg-2 me-1 me-sm-2 bg-white purple"
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              className=" col-5 col-sm-4 col-md-3 col-lg-2   me-1 me-sm-2 bg-purple "
              onClick={() => {
                console.log(editedUser, editedAbout);
                setModal(false);
                dispatch(editprofile({ user: editedUser, about: editedAbout }));
              }}
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    );
  };

  const PostInfo = () => (
    <div className=" p-1 d-flex align-items-center justify-content-start">
      <ThumbUpIcon className={classes.root} sx={{ color: "#a11cf9" }} />
      <Typography className="purple mx-1" variant="caption">
        100k
      </Typography>
      <ThumbDownIcon className={classes.root} sx={{ color: "#7a7a7a" }} />
      <Typography className=" purple mx-1 " variant="caption">
        100k
      </Typography>
      <PlayArrowIcon className={classes.root} sx={{ color: "#a11cf9" }} />
      <Typography className=" purplemx-1" variant="caption">
        100k
      </Typography>
    </div>
  );
  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onload = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };

  const handleImageChange1 = (e) => {
    setError1(false);
    const selected1 = e.target.files[0];
    const ALLOWED_TYPES1 = ["image/png", "image/jpeg", "image/jpg"];
    if (selected1 && ALLOWED_TYPES1.includes(selected1.type)) {
      let reader1 = new FileReader();
      reader1.onload = () => {
        setImgPreview1(reader1.result);
      };
      reader1.readAsDataURL(selected1);
    } else {
      setError1(true);
    }
  };

  return (
    <>
      <div className="my-3 px-4 position-relative ">
        {modal && <ModalBody />}
        <div className="col-12 px-4">
          <div
            className="mb-5 col-12 mx-auto position-relative"
            style={{
              height: "370px",
              // backgroundImage: " linear-gradient(to right,#7a05cf,#7a05cf)",
              borderRadius: "15px",
              boxShadow: "0px 0px 10px grey",
              zIndex: 0,
            }}
          >
            <div
              className="mb-5 position-absolute d-flex justify-content-between align-items-end col-12 mx-lg-auto"
              style={{
                height: "370px",
                // backgroundImage: " linear-gradient(to right,#7a05cf,#7a05cf)",
                borderRadius: "15px",
                background: imgPreview
                  ? `url("${imgPreview}")no-repeat center/cover`
                  : "linear-gradient(to bottom,#7402cb,#9c18f5)",
                top: 0,
                left: 0,
                opacity: 0.3,
                filter: "blur(2px)",
                zIndex: -1,
              }}
            ></div>
            <div
              className="mb-5 d-flex justify-content-between align-items-end mx-lg-auto"
              style={{
                height: "370px",
                // backgroundImage: " linear-gradient(to right,#7a05cf,#7a05cf)",
                borderRadius: "15px",
                background: imgPreview
                  ? `url("${imgPreview}")no-repeat center/contain`
                  : "linear-gradient(to bottom,#7402cb,#9c18f5)",
                zIndex: 3,
              }}
            >
              <div
                className="col-11 col-md-10 px-md-4 d-flex justify-content-start align-items-end position-relative"
                style={{ top: "85px" }}
              >
                {/* <div className="bg-secondary"> */}
                <div className=" px-4 pb-3 ">
                  <div
                    className="shadow d-flex align-items-end col-12 p-0 overflow-hidden"
                    style={{
                      border: "1px solid #f8f8f8",
                      // backgroundColor: "#860cdd",
                      //   top:"80px",
                      height: " 140px",
                      width: " 140px",
                      //   marginTop: "15vh",
                      //   marginLeft: "25px",
                      borderRadius: "50%",
                      background: imgPreview1
                        ? `url("${imgPreview1}")no-repeat center/cover`
                        : avatar
                        ? `url("${avatar}")no-repeat center/cover`
                        : "#860cdd",
                    }}
                  >
                    {error1 && <p className="errormsg">File not found</p>}
                    <div
                      className=" col-12 px-4 pb-2 m-0"
                      style={{ backgroundColor: "#e4b7fc" }}
                    >
                      <input
                        className="d-none"
                        type="file"
                        id="profile"
                        onChange={handleImageChange1}
                      />
                      <label
                        className=" col-12 d-flex align-items-center justify-content-center pb-1"
                        style={{ fontSize: "12px" }}
                        for="profile"
                      >
                        <EditIcon
                          className={classes.root}
                          style={{ fontSize: "15px" }}
                        />
                        <div className="mx-1 pt-1 text-white">Profile pic</div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-3 col-md-2 d-flex flex-column align-items-start justify-content-start mb-3 py-3 ps-md-3">
                  <div className="d-none d-md-block">
                    <h3 className="my-0" style={style.count}>
                      17K
                    </h3>
                    <h1 className="my-0" style={style.follow}>
                      Followers
                    </h1>
                  </div>
                  <div className="d-block d-md-none">
                    <h3 className="my-0" style={style.count1}>
                      17K
                    </h3>
                    <h1 className="my-0" style={style.follow1}>
                      Followers
                    </h1>
                  </div>
                </div>
                <div className="col-3 col-md-2 d-flex flex-column align-items-start justify-content-start mb-3 py-3 ps-md-4 ">
                  <div className="d-none d-md-block mx-3">
                    <h3 className="my-0" style={style.count}>
                      350
                    </h3>
                    <h1 className="my-0" style={style.follow}>
                      Following
                    </h1>
                  </div>
                  <div className="d-block d-md-none">
                    <h3 className="my-0" style={style.count1}>
                      350
                    </h3>
                    <h1 className="my-0" style={style.follow1}>
                      Following
                    </h1>
                  </div>
                </div>
              </div>
              {error && <p className="errormsg">File not found</p>}
              <div
                className="col-1 col-md-2 m-0 py-1 px-1"
                style={{
                  backgroundColor: "#e4b7fc",
                  borderBottomRightRadius: "15px",
                  borderTopLeftRadius: "15px",
                }}
              >
                <label
                  className=" col-12 d-flex align-items-center justify-content-center m-0 py-0 px-0 "
                  style={{ fontSize: "12px" }}
                  for="coverpic"
                >
                  <EditIcon
                    className={classes.root}
                    style={{ fontSize: "18px" }}
                  />
                  <div className="mx-1 d-none d-md-block text-white">
                    Cover pic
                  </div>
                </label>
                {/* <div className="d-flex ">
              <EditIcon className="m-0 " />
              <Typography className="d-none d-md-block" variant="body2">
                Cover photo
              </Typography>
            </div> */}
                <input
                  className=" d-none "
                  type="file"
                  id="coverpic"
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-5 px-5 bg-danger">&nbsp;</div> */}
        <br />
        <div className="mt-3 p-1 rounded">
          <div className="col-12 d-flex align-items-center justify-content-between pe-4">
            <div className="col-10 d-flex align-items-center justify-content-start">
              <h4 className="me-3 ">
                {loggedIn ? (updatedUser ? updatedUser : user) : "Username"}
              </h4>
              {!follow ? (
                <Button
                  className=" bg-purple rounded shadow curser-pointer mb-2 p-0 "
                  variant="contained"
                  onClick={() => setFollow(true)}
                  style={{ textTransform: "initial" }}
                >
                  Follow
                </Button>
              ) : (
                <div
                  className="purple col-4 col-lg-3 mb-1"
                  style={{ cursor: "pointer" }}
                >
                  Following
                </div>
              )}
            </div>
            <EditIcon
              className="purple"
              style={{ fontSize: 20 }}
              onClick={() => setModal(true)}
            />
          </div>
          <p className="font-weight-bold" style={style.grey}>
            @username
          </p>
          <p className="grey">
            {about
              ? about
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            <br />
            <br />
          </p>
          <div className="mb-2">
            <div>
              <a href="" className="font-weight-bold col-6 m-0 p-0">
                <LocationOnIcon
                  // sx={{ color: "#a11cf9 !important" }}
                  className={classes.root1}
                />
                City Name Country
              </a>
            </div>
            <div>
              <a href="" className="font-weight-bold col-6 p-0">
                <LocationOnIcon
                  className={classes.root1}
                  // sx={{ color: "#a11cf9" }}
                />
                Join feb 21
              </a>
            </div>
          </div>
          <div className="text-light" style={{ color: "#b7c4c3" }}>
            <p className="d-flex align-items-center text-dark">
              <AvatarGroup max={3} className="my-0 mx-2 bg-succcess">
                <Avatar alt="Remy Sharp" src="A" color="secondary" />
                <Avatar alt="Travis Howard" src="A" />
                <Avatar alt="Cindy Baker" src="A" />
                <Avatar alt="Agnes Walker" src="A" />
                <Avatar alt="Trevor Henderson" src="A" />
              </AvatarGroup>
              Followed by User1,user2 and 3 more
            </p>
          </div>
        </div>
        <p className="purple fw-bold mt-3 mb-0">ZD WALL</p>
        <div className=" px-2">
          <div className=" py-3 d-flex align-items-between justify-content-around row">
            {data.map((abc, index) => (
              <div
                className={
                  abc.max
                    ? "col-12 col-lg-10 d-flex align-items-start jusitify-content-center py-1 my-4"
                    : "col-12 col-lg-5 d-flex align-items-start jusitify-content-center py-1 px-0 my-2"
                }
              >
                <Box
                  className={
                    abc.max ? "ms-5 col-10 bg-hash" : " col-10 bg-hash ms-2"
                  }
                  sx={{
                    height: abc.max ? 400 : 225,
                    borderRadius: "10px",
                    color: "white",
                    backgroundColor: "#a11cf9",
                    "&:hover": {
                      backgroundColor: "#7402cb",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  onClick={() => {
                    let dup = [...data];
                    dup[index].max = !dup[index].max;
                    setData(dup);
                  }}
                ></Box>
                <div
                  className={
                    "mb-5 ms-4 me-0 mt-2 rounded bg-grey d-flex flex-column justify-content-center align-items-center"
                    // : "rounded bg-grey d-flex flex-column justify-content-center align-items-center"
                  }
                >
                  <div
                    className={
                      abc.max && abc.emojiOpen
                        ? "mt-2 mb-0 d-flex flex-column align-items-center"
                        : "d-flex flex-column align-items-center"
                      // : "rounded bg-grey d-flex flex-column justify-content-center align-items-center"
                    }
                    style={{
                      height: abc.emojiOpen ? (abc.max ? 280 : 160) : 50,
                      overflowY: "scroll",
                    }}
                  >
                    <img
                      src={abc.img[0]}
                      className="col-12 p-0"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div
                      className="m-0 purple fw-bold"
                      style={{ fontSize: "8px" }}
                    >
                      {abc.reaction}
                    </div>
                    {abc.emojiOpen &&
                      abc.img.map((abcimage, ind) => (
                        <>
                          {ind != 0 && (
                            <>
                              <img
                                src={abcimage}
                                className="col-12 p-0"
                                style={{ width: "40px", height: "40px" }}
                              />
                              <div
                                className="m-0 purple fw-bold"
                                style={{ fontSize: "8px" }}
                              >
                                {abc.reaction}
                              </div>
                            </>
                          )}
                        </>
                      ))}
                  </div>
                  {!abc.emojiOpen ? (
                    <KeyboardArrowDownIcon
                      className="purple"
                      onClick={() => {
                        let dup = [...data];
                        dup[index].emojiOpen = true;
                        setData(dup);
                      }}
                      style={{ fontSize: 20 }}
                    />
                  ) : (
                    <KeyboardArrowUpIcon
                      className="purple"
                      onClick={() => {
                        let dup = [...data];
                        dup[index].emojiOpen = false;
                        setData(dup);
                      }}
                      style={{ fontSize: 20 }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
