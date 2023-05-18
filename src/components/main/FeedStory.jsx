import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Avatar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";

const data = [
  {
    avatar:
      "https://cdn.dribbble.com/users/1652973/screenshots/6508917/cartoon.k23.jpg",
    username: "User1",
    online: true,
    story: true,
    status: [
      {
        type: "img",
        src: "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
      },
      {
        type: "img",
        src: "https://media.springernature.com/full/springer-cms/rest/v1/img/18893370/v1/height/320",
      },
      {
        type: "video",
        src: require("../../assets/images/video.mp4").default,
      },
    ],
  },
  {
    avatar:
      "https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png",
    username: "User2",
    story: true,
    online: false,
    status: [
      {
        type: "img",
        src: "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
      },
      {
        type: "img",
        src: "https://media.springernature.com/full/springer-cms/rest/v1/img/18893370/v1/height/320",
      },
      {
        type: "video",
        src: require("../../assets/images/video.mp4").default,
      },
    ],
  },
  {
    avatar:
      "https://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png",
    username: "User3",
    story: true,
    online: false,
    status: [
      {
        type: "img",
        src: "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
      },
      {
        type: "img",
        src: "https://media.springernature.com/full/springer-cms/rest/v1/img/18893370/v1/height/320",
      },
      {
        type: "video",
        src: require("../../assets/images/video.mp4").default,
      },
    ],
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7E8cyRL8MTpnZ-Tgb_7Ph2zhwYa9cTgLLWFgTBwp_3tBFNnOwa3cKeys1x8Y-lgBL-Y&usqp=CAU",
    username: "User4",
    online: false,
    story: false,
    status: [
      {
        type: "img",
        src: "https://images.unsplash.com/photo-1560761716-ec8eb63ea39c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fDklM0ExNnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },
      {
        type: "img",
        src: "https://media.springernature.com/full/springer-cms/rest/v1/img/18893370/v1/height/320",
      },
      {
        type: "video",
        src: require("../../assets/images/video.mp4").default,
      },
    ],
  },
  {
    avatar:
      "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
    username: "User5",
    online: true,
    story: false,
    status: [
      {
        type: "video",
        src: require("../../assets/images/video.mp4").default,
      },
      {
        type: "img",
        src: "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
      },
      {
        type: "img",
        src: "https://images.unsplash.com/photo-1560761716-ec8eb63ea39c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fDklM0ExNnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },
    ],
  },
  {
    avatar:
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
    username: "User6",
    online: false,
    story: false,
    status: [
      {
        type: "img",
        src: "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
      },
      {
        type: "img",
        src: "https://images.unsplash.com/photo-1560761716-ec8eb63ea39c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fDklM0ExNnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },
      {
        type: "video",
        src: require("../../assets/images/video.mp4").default,
      },
    ],
  },
  {
    avatar:
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
    username: "User6",
    online: false,
    story: false,
    status: [
      {
        type: "img",
        src: "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
      },
      {
        type: "img",
        src: "https://images.unsplash.com/photo-1560761716-ec8eb63ea39c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fDklM0ExNnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },
      {
        type: "video",
        src: require("../../assets/images/video.mp4").default,
      },
    ],
  },
  {
    avatar:
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
    username: "User6",
    online: false,
    story: false,
    status: [
      {
        type: "img",
        src: "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
      },
      {
        type: "img",
        src: "https://images.unsplash.com/photo-1560761716-ec8eb63ea39c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fDklM0ExNnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },
      {
        type: "video",
        src: require("../../assets/images/video.mp4").default,
      },
    ],
  },
  {
    avatar:
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
    username: "User6",
    online: false,
    story: false,
    status: [
      {
        type: "img",
        src: "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
      },
      {
        type: "img",
        src: "https://images.unsplash.com/photo-1560761716-ec8eb63ea39c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fDklM0ExNnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },
      {
        type: "video",
        src: require("../../assets/images/video.mp4").default,
      },
    ],
  },
  {
    avatar:
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
    username: "User6",
    online: false,
    story: false,
    status: [
      {
        type: "img",
        src: "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
      },
      {
        type: "img",
        src: "https://images.unsplash.com/photo-1560761716-ec8eb63ea39c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fDklM0ExNnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },
      {
        type: "video",
        src: require("../../assets/images/video.mp4").default,
      },
    ],
  },
];

const style = {
  watched: {
    border: "3px solid #a11cf9",
    boxShadow: "0px 0px 6px white",
  },
  unWatched: {
    border: "3px solid #a11cf9",
    // boxShadow: "0px 0px 6px black",
  },
};

const StyledPlusBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#a11cf9",
    color: "#ffffff",
    fontSize: "15px",
    fontweight: "bold",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const imgSlider = {
  slider: {
    height: "85vh",
    // backgroundColor: "#a11cf9",
  },

  rightArrow: {
    fontSize: "4rem",
    color: "#ffffff",
    cursor: "pointer",
    userSelect: "none",
  },

  leftArrow: {
    fontSize: "4rem",
    color: "#ffffff",
    cursor: "pointer",
    userSelect: "none",
  },
};

export default function Story({ setIsOpen, isOpen }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [indexValue, setIndexValue] = useState(null);
  const handleOpen = () => {
    setModalOpen(true);
    console.log(modalOpen);
  };
  const handleClose = () => {
    setModalOpen(false);
    setIndexValue(null);
  };

  const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
    console.log(current);
    console.log(slides);
    return (
      <section
        className="slider d-flex align-items-center justify-content-center overflow-hidden"
        style={imgSlider.slider}
        onClick={() => setIsOpen(true)}
      >
        <KeyboardArrowLeft
          className="p-1"
          style={imgSlider.rightArrow}
          onClick={prevSlide}
        />
        {slides.map((slide, index) => {
          // console.log(slide);
          return (
            <div
              className="text-center overflow-hidden rounded-3"
              style={
                index === current ? imgSlider.slideActive : imgSlider.slider
              }
              key={index}
            >
              {index === current && slide.type == "video" && (
                <video
                  autoplay="true"
                  loop
                  height="80%"
                  width="100%"
                  src={slide.src}
                />
              )}
              {index === current && slide.type == "img" && (
                <img
                  src={slide.src}
                  alt="travel image"
                  className="rounded-3 bg-danger img-fluid"
                />
              )}
            </div>
          );
        })}
        <KeyboardArrowRight
          className="p-1"
          style={imgSlider.leftArrow}
          onClick={nextSlide}
        />
      </section>
    );
  };
  const ModalBody = (props) => {
    console.log(props.index);
    const user = data[props.index];
    console.log(user);
    return (
      <Modal
        onClick={() => setIsOpen(true)}
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="d-flex justify-content-center"
        // sx={{ backgroundColor: "#a11cf9 !important" }}
      >
        <Box
          classname="bg-primary"
          sx={{
            backgroundColor: "#a11cf9 !important",
            position: "absolute",
            // top: "50%",
            // left: "50%",
            // transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "100vh",
            // bgcolor: "background.paper",
            border: "3px solid #ffffff",
            boxShadow: 24,
            px: 4,
            py: 2,
          }}
        >
          <div
            className="d-flex align-items-center justify-content-between p-2  mb-2"
            style={{ borderBottom: "2px solid white" }}
          >
            <div className="d-flex align-items-center">
              <Avatar
                alt={user.username}
                src={user.avatar}
                sx={{
                  width: "50px",
                  height: "50px",
                  border: "3px solid white",
                  boxShadow: "0px 0px 10px black",
                }}
              />{" "}
              &nbsp;&nbsp;
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="text-white"
              >
                {user.username}
              </Typography>
            </div>
            <CloseIcon
              onClick={handleClose}
              className="text-white"
              style={{ fontSize: "2rem" }}
            />
          </div>

          <ImageSlider slides={user.status} />
        </Box>
      </Modal>
    );
  };
  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        // style={{ height: "90vh", marginTop: "2vh" }}
      >
        {isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="d-flex justify-content-center position-absolute pt-3 pb-4 scrollbar"
            style={{
              top: "4.6vh",
              zIndex: 5,
              maxHeight: "90vh",
              backgroundColor: "#a11cf9",
              overflowY: "scroll",
              boxShadow: "0px 5px 15px black",
              // borderRadius: "60% 10% 10% 60% ",
              borderBottomRightRadius: 25,
              borderBottomLeftRadius: 25,
              // clipPath: "polygon(0 6%, 100% 0, 100% 100%, 0 95%)",
              transition: "0.1s ease-in-out",
            }}
          >
            <div className="d-flex flex-column justify-content-start align-items-center mx-1 mt-2 px-2">
              <div className="d-flex flex-column align-items-center">
                <div classname="d-flex flex-row align-items-center">
                  {/* <StyledPlusBadge>
                    <Badge overlap="circular" badgeContent={"+"}>
                      <Avatar
                        alt="Current_User"
                        src="https://i.pinimg.com/736x/cc/e1/db/cce1db594930d2217fc4f484434742d9.jpg"
                        sx={{ width: "50px", height: "50px" }}
                      />
                    </Badge>
                  </StyledPlusBadge> */}
                  <div className="bg-purple p-1 mx-auto rounded-circle border border-3">
                    <AddIcon style={{ fontSize: "28px" }} />
                  </div>
                </div>
                <Typography
                  variant="caption"
                  color="primary"
                  className="fw-bold text-white"
                >
                  Add Story
                </Typography>
              </div>

              {data.map((data, index) => {
                return (
                  <div
                    className="d-flex flex-column align-items-center mt-2"
                    key={index}
                  >
                    <div classname="d-flex flex-row align-items-center ">
                      {data.online ? (
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar
                            src={data.avatar}
                            alt={data.username}
                            onClick={() => {
                              setIndexValue(index);
                              console.log(index);
                              handleOpen();
                            }}
                            sx={{ width: "50px", height: "50px" }}
                            style={data.story ? style.watched : style.unWatched}
                          />
                        </StyledBadge>
                      ) : (
                        <>
                          <Avatar
                            src={data.avatar}
                            alt={data.username}
                            onClick={() => {
                              setIndexValue(index);
                              console.log(index);
                              handleOpen();
                            }}
                            sx={{ width: "50px", height: "50px" }}
                            style={data.story ? style.watched : style.unWatched}
                          />
                        </>
                      )}
                    </div>
                    {modalOpen && <ModalBody index={indexValue} />}
                    <Typography
                      variant="caption"
                      color="primary"
                      className="fw-bold text-white"
                    >
                      {data.username}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="purple rounded-circle p-0">
          <HistoryToggleOffIcon
            // alt="Current_User"
            // src="https://i.pinimg.com/736x/cc/e1/db/cce1db594930d2217fc4f484434742d9.jpg"
            sx={{ fontSize: 30 }}
            onClick={() => setIsOpen(!isOpen)}
          />
          {/* {!isOpen ? (
            <ExpandMoreIcon
              style={{ fontSize: 30 }}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <KeyboardArrowUpIcon
              style={{ fontSize: 30 }}
              onClick={() => setIsOpen(!isOpen)}
            />
          )} */}
        </div>
      </div>
    </>
  );
}
