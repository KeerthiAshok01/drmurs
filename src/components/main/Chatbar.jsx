import {
  Avatar,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { useDispatch } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { sendText } from "../../slices/newsfeedSlice";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import ChatIcon from "@mui/icons-material/Chat";
import BarChartIcon from "@mui/icons-material/BarChart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useSelector } from "react-redux";
import InputBase from "@mui/material/InputBase";
import { makeStyles } from "@mui/styles";

const data = [
  {
    avatar:
      "https://cdn.dribbble.com/users/1652973/screenshots/6508917/cartoon.k23.jpg",
    username: "User1",
    name: "Name1",
    lastSeen: null,
    active: true,
  },
  {
    avatar:
      "https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png",
    username: "User2",
    name: "Name2",
    lastSeen: "10m",
    active: false,
  },
  {
    avatar:
      "https://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png",
    username: "User3",
    name: "Name3",
    lastSeen: "2h",
    active: false,
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7E8cyRL8MTpnZ-Tgb_7Ph2zhwYa9cTgLLWFgTBwp_3tBFNnOwa3cKeys1x8Y-lgBL-Y&usqp=CAU",
    username: "User4",
    name: "Name4",
    lastSeen: "5d",
    active: false,
  },
  {
    avatar:
      "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
    username: "User5",
    name: "Name5",
    lastSeen: null,
    active: true,
  },
  {
    avatar:
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
    username: "User6",
    name: "Name6",
    lastSeen: "1w",
    active: false,
  },
  {
    avatar:
      "https://cdn.dribbble.com/users/1652973/screenshots/6508917/cartoon.k23.jpg",
    username: "User7",
    name: "Name1",
    lastSeen: null,
    active: true,
  },
  {
    avatar:
      "https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png",
    username: "User8",
    name: "Name2",
    lastSeen: "10m",
    active: false,
  },
  {
    avatar:
      "https://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png",
    username: "User9",
    name: "Name3",
    lastSeen: "2h",
    active: false,
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7E8cyRL8MTpnZ-Tgb_7Ph2zhwYa9cTgLLWFgTBwp_3tBFNnOwa3cKeys1x8Y-lgBL-Y&usqp=CAU",
    username: "User10",
    name: "Name4",
    lastSeen: "5d",
    active: false,
  },
  {
    avatar:
      "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
    username: "User11",
    name: "Name5",
    lastSeen: null,
    active: true,
  },
  {
    avatar:
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
    username: "User12",
    name: "Name6",
    lastSeen: "1w",
    active: false,
  },
];

// const useStyles = makeStyles((theme) => ({
//   textfield: {
//     border: "3px solid white",
//   },
// }));

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

export default function Chatbar() {
  // const classes = useStyles();
  var [iValue, setIValue] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [miniBox, setMiniBox] = useState(false);
  const [trending, setTrending] = useState(false);
  const [chatBar, setChatBar] = useState(true);
  const dispatch = useDispatch();
  const array = [
    1345, 2345, 34545, 453, 534, 34536, 3451, 4532, 345, 4453, 5453, 4536, 341,
    4532, 345, 4534, 5434, 6534,
  ];

  const [chatData, setChatData] = useState([
    {
      isOpen: false,
      isMin: false,
      userData: null,
      chatUsername: null,
    },
    {
      isOpen: false,
      isMin: false,
      userData: null,
      chatUsername: null,
    },
    {
      isOpen: false,
      isMin: false,
      userData: null,
      chatUsername: null,
    },
    {
      isOpen: false,
      isMin: false,
      userData: null,
      chatUsername: null,
    },
  ]);
  var [j, setJ] = useState(0);

  const { texted, textToUser } = useSelector((state) => state.newsfeed);

  const Chatbox = ({ iValue, number }) => {
    const [text, setText] = useState("");
    const user = data[iValue];
    return (
      <div
        className="position-fixed d-flex overflow-hidden flex-column justify-content-between"
        style={
          chatData[number].isMin
            ? {
                boxShadow: "0px 0px 10px black",
                borderRadius: 10,
                right: number * 310 + number * 10 + 10,
                bottom: 0,
                height: 60,
                width: 300,
                zIndex: 2,
                borderRadius: 10,
              }
            : {
                boxShadow: "0px 0px 10px black",
                borderRadius: 10,
                right: number * 310 + number * 10 + 20,
                bottom: 0,
                height: 500,
                width: 300,
                zIndex: 2,
              }
        }
      >
        <div className="d-flex justify-content-between align-items-end bg-white">
          <div
            className="bg-purple h-100 w-100"
            style={
              !chatData[number].isMin
                ? { borderBottomRightRadius: " 30px 15px " }
                : {}
            }
          >
            <div className="d-flex align-items-center mx-1 mt-3 ps-1">
              {user.active ? (
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    className="shadow me-1"
                    alt={user.username}
                    src={user.avatar}
                    style={{ width: 30, height: 30 }}
                  />
                </StyledBadge>
              ) : (
                <Avatar
                  className="shadow me-1"
                  alt={user.username}
                  src={user.avatar}
                  style={{ width: 30, height: 30 }}
                />
              )}
              <div style={{ fontSize: 14 }}>{user.username}</div>
            </div>
          </div>
          <div className="h-100 d-flex flex-column justify-content-end bg-white">
            <div className="h-100 d-flex align-items-center justify-content-center bg-purple py-2 ps-3 pe-1">
              {/* <MoreHorizIcon style={{ fontSize: 18 }} /> */}
              {/* <VideocamIcon className="ms-1" style={{ fontSize: 18 }} /> */}
              {!chatData[number].isMin ? (
                <CloseFullscreenIcon
                  className="ms-2"
                  style={{ fontSize: 18 }}
                  onClick={() => {
                    let dup = [...chatData];
                    dup[number].isMin = true;
                    setChatData(dup);
                  }}
                />
              ) : (
                <OpenInFullIcon
                  className="ms-2"
                  style={{ fontSize: 18 }}
                  onClick={() => {
                    let dup = [...chatData];
                    dup[number].isMin = false;
                    setChatData(dup);
                  }}
                />
              )}
              <CloseIcon
                className="ms-2 me-1"
                style={{ fontSize: 18 }}
                onClick={() => {
                  let dup = [...chatData];
                  dup[number].isMin = false;
                  dup[number].isOpen = false;
                  setChatData(dup);
                }}
              />
            </div>
            <div className="bg-purple">
              <div
                className={
                  !chatData[number].isMin ? "bg-white p-3" : "bg-purple p-3"
                }
                style={{ borderTopLeftRadius: " 30px 20px " }}
              ></div>
            </div>
          </div>
        </div>
        {!chatData[number].isMin && (
          <>
            <div className=" bg-white p-1 d-flex flex-column justify-content-center h-100 ">
              <div className="py-1 d-flex align-items-center justify-content-start">
                <Avatar style={{ width: 20, height: 20 }} className="mt-1" />{" "}
                <div
                  className="col-6 bg-hash ms-1 py-3"
                  style={{ borderRadius: 25 }}
                ></div>
              </div>
              <div className="py-1 d-flex aling-items-center justify-content-end">
                <div
                  className="col-6 bg-purple py-4 mt-1"
                  style={{ borderRadius: 15 }}
                ></div>
              </div>
              <div className="py-1 d-flex aling-items-center justify-content-start">
                <Avatar style={{ width: 20, height: 20 }} className="mt-2" />
                <div
                  className="col-6 py-5 bg-hash ms-1 mt-1"
                  style={{ borderRadius: 25 }}
                ></div>
              </div>
              <div className="py-1 d-flex aling-items-center justify-content-end">
                {user.username == textToUser && (
                  <div
                    className="p-2 bg-purple mt-1 text-left"
                    style={{
                      borderRadius: 25,
                      overflow: "auto",
                      // minWidth: "60%",
                      // minHeight: "5vh",
                    }}
                  >
                    {texted}
                  </div>
                )}
              </div>
            </div>
            <div className=" p-2 py-2 d-flex justify-content-between align-items-center bg-purple py-1">
              {/* <StarIcon style={{ fontSize: 14 }} /> */}
              {/* <form
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(sendText({ user: user.username, text: text }));
                }}
              > */}
                <InputBase
                  multiline
                  maxRows={2}
                  size="small"
                  onChange={(e) => setText(e.target.value)}
                  placeHolder="Message"
                  // className={classes.textfield}
                  sx={{
                    borderRadius: 10,
                    width: 220,
                    border: "2px solid white",
                    mx: 1,
                    px: 1,
                    color:"white"
                  }}
                />
                <SendIcon
                  // type="submit"
                  style={{ fontSize: 20 }}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(sendText({ user: user.username, text: text }));
                  }}
                />
              {/* </form> */}
              <AddCircleOutlineIcon style={{ fontSize: 20 }} />
            </div>
          </>
        )}
      </div>
    );
  };
  return (
    <div>
      <div
        className="d-none d-md-block vh-100 overflow-hidden bg-purple position-fixed"
        style={{
          right: 0,
          width: "25vw",
        }}
      >
        {chatData.map((chat, indexx) => {
          if (chat.isOpen)
            return <Chatbox iValue={chat.userData} number={indexx} />;
        })}
        <div
          className="bg-purple p-3 d-flex flex-column align-items-center justify-content-between"
          // style={{ height: "300px" }}
        >
          <div
            className={
              trending
                ? "col-12 d-flex align-items-center py-1 purple bg-white text-center fw-bold px-3 rounded"
                : "col-12 d-flex align-items-center text-white text-center bg-purple py-1 fw-bold rounded px-3 rounded"
            }
            style={
              trending
                ? { boxShadow: "0px 0px 7px white" }
                : { boxShadow: "0px 0px 7px black" }
            }
          >
            <div
              className="col-11"
              onClick={() => {
                setTrending(!trending);
                !trending ? setChatBar(false) : setChatBar(true);
              }}
            >
              <Badge color="warning" variant="dot">
                <BarChartIcon className="mb-1" /> Trending
              </Badge>
            </div>
            {/* {!trending ? (
              <ExpandMoreIcon
                className="col-1"
                onClick={() => {
                  setTrending(true);
                  setChatBar(false);
                }}
              />
            ) : (
              <KeyboardArrowUpIcon
                className="col-1"
                onClick={() => {
                  setTrending(false);
                  setChatBar(true);
                }}
              />
            )} */}
          </div>
          {trending && (
            <Box
              className="col-12 mx-2 mt-2 py-1"
              style={{ borderRadius: "12px", height: "80vh" }}
            >
              <div className=" overflow-auto" style={{ height: "77vh" }}>
                {array.map((value) => (
                  <div
                    className="col-12 px-3 pt-1 pb-3 mb-1 bg-white d-flex align-items-center justify-content-between"
                    style={{ borderRadius: 8 }}
                  >
                    <div className="purple" style={{ fontSize: "16px" }}>
                      #Trending
                    </div>
                    <div
                      className=" ps-2 text-dark col-3 purple"
                      style={{ fontSize: "12px" }}
                    >
                      <VisibilityIcon
                        className="purple"
                        style={{ fontSize: 20 }}
                      />
                      &nbsp;
                      {value}K
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="col-12 px-4 pt-1 text-white "
                style={{ color: "#858585", fontSize: 10 }}
              >
                <u>Show more</u>
              </div>
            </Box>
          )}
        </div>
        <div
          className="bg-purple px-3 text-white fw-bold d-flex align-justify-center"
          // style={{ height: "6vh" }}
        >
          <div
            className={
              chatBar
                ? "col-12 d-flex align-items-center py-1 purple bg-white text-center fw-bold px-3 rounded"
                : "col-12 d-flex align-items-center text-white text-center bg-purple py-1 fw-bold rounded px-3 rounded"
            }
            style={
              chatBar
                ? { boxShadow: "0px 0px 7px white" }
                : { boxShadow: "0px 0px 7px black" }
            }
          >
            <div
              className="col-11"
              onClick={() => {
                setChatBar(!chatBar);
                chatBar ? setTrending(true) : setTrending(false);
              }}
            >
              <Badge badgeContent={4} color="warning">
                <div className="px-2">
                  <ChatIcon className="me-1" />
                  Chat
                </div>
              </Badge>
            </div>
            {/* {!chatBar ? (
              <ExpandMoreIcon
                className="col-1"
                onClick={() => {
                  setChatBar(true);
                  setTrending(false);
                }}
              />
            ) : (
              <KeyboardArrowUpIcon
                className="col-1"
                onClick={() => {
                  setTrending(true);
                  setChatBar(false);
                }}
              />
            )} */}
          </div>
        </div>
        {chatBar && (
          <div
            className="p-2 bg-purple fw-bold overflow-auto"
            style={{ height: "80vh" }}
          >
            <div className="mb-3">
              {data.map((profile, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex justify-content-between py-1 m-2 bg-white align-items-center "
                    style={{ borderRadius: 10 }}
                    onClick={() => {
                      // console.log("clicked");
                      // chatData.unshift({
                      //   isOpen: true,
                      //   isMin: false,
                      //   userData: index,
                      // });
                      let dup = [...chatData];
                      var i = 0;
                      // setIValue(++iValue);
                      // console.log(iValue);
                      for (i = 0; i < dup.length; i++) {
                        if (
                          dup[0].isOpen &&
                          dup[1].isOpen &&
                          dup[2].isOpen &&
                          dup[3].isOpen
                        ) {
                          console.log("4 plus condition");
                          // console.log(j);
                          while (j >= 0) {
                            // if (!dup[i].isOpen) {
                            var k = j % 4;
                            var flag = 0;
                            dup.map((abcd) => {
                              if (abcd.userData == index) {
                                flag = 1;
                                // console.log("aaiii pulikesiii!!");
                              }
                            });
                            if (flag == 0) {
                              dup[k].isOpen = true;
                              dup[k].isMin = false;
                              dup[k].userData = index;
                              // console.log(j % 4);
                              // console.log(j);
                              setJ(++j);
                            }
                            break;
                            // }
                          }
                          break;
                        } else {
                          if (!dup[i].isOpen) {
                            var flag = 0;
                            dup.map((abcd) => {
                              if (abcd.userData == index) {
                                flag = 1;
                                // console.log("aaiii pulikesiii!!");
                              }
                            });
                            if (flag == 0) {
                              dup[i].isOpen = true;
                              dup[i].userData = index;
                              // if (j > 4) {
                              //   setJ(++j);
                              //   console.log("thalli poda");
                              // }
                            }
                            break;
                          }
                        }
                      }
                      setChatData(dup);
                      // chatData.length > 4 && (chatData.length = 4);
                      // console.log(chatData);
                    }}
                  >
                    <div className="d-flex justify-content-between mx-2 align-items-center ">
                      {profile.active ? (
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar
                            className="col-3 shadow border border-1 border-secondary shadow-lg"
                            alt={profile.username}
                            src={profile.avatar}
                            sx={{ mr: 1 }}
                          />
                        </StyledBadge>
                      ) : (
                        <Avatar
                          className="col-3 shadow border border-1 border-secondary shadow-lg"
                          alt={profile.username}
                          src={profile.avatar}
                          sx={{ mr: 1 }}
                        />
                      )}
                      <div className="col-6 ">
                        <Typography
                          className="purple"
                          nowrap
                          variant="body1"
                          sx={{ fontWeight: "bold" }}
                        >
                          {profile.username}
                        </Typography>
                        <Typography nowrap variant="body2" className="purple">
                          {profile.name}
                        </Typography>
                      </div>
                    </div>
                    {profile.active ? (
                      // color="primary" variant="contained" size="small"
                      <div
                        className="col-2 text-center text-success me-4"
                        style={{ fontSize: 12 }}
                      >
                        <em>active</em>
                      </div>
                    ) : (
                      <div
                        className="col-2 text-center  grey me-4"
                        style={{ fontSize: 12 }}
                      >
                        {profile.lastSeen} ago
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
