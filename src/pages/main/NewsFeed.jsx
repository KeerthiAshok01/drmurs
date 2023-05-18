import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
import { postComment } from "../../slices/newsfeedSlice";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { uploadFeed } from "../../slices/newsfeedSlice";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import hotsauce from "../../assets/images/hotsauce.svg";
import heart from "../../assets/images/heart.svg";
import hypno from "../../assets/images/hypno.svg";
import ice from "../../assets/images/ice.svg";
import cylinder from "../../assets/images/cylinder.svg";
import Tooltip from "@mui/material/Tooltip";
import angrygif from "../../assets/images/angry.gif";
import freezegif from "../../assets/images/freeze.gif";
import heartgif from "../../assets/images/heart.gif";
import laughgif from "../../assets/images/laugh.gif";
import mindblowngif from "../../assets/images/mindblown.gif";
import blankFace from "../../assets/images/blank-face.gif";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    left: 30,
    backgroundColor: "#fff",
    color: "#44b700",
    boxShadow: `0 0 0 5px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      content: '""',
    },
  },
}));
const StyledBadge1 = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 10,
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      right: 10,
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

export default function NewsFeed() {
  const [uploadGallery, setUploadGallery] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [shareOpen, setShareOpen] = useState(false);
  const [report, setReport] = useState(false);
  const [reportAlert, setReportAlert] = useState(false);
  const [reportIndex, setReportIndex] = useState(null);
  const [thoughts, setThoughts] = useState(null);
  const [more, setMore] = useState(null);
  const dispatch = useDispatch();

  const [data, setData] = useState([
    {
      dp: "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
      name: "Keerthi Ashok",
      post: "https://www.pixelstalk.net/wp-content/uploads/2016/09/Desktop-Free-Wallpaper-3D-Nature-widescreen.jpg",
      username: "jass",
      postDate: "Jun 1",
      caption:
        "An Amazing view of the famous mountain in a famous place!!!.",
      reactions: "105K",
      reaction: null,
      report: false,
      hide: false,
      comments: [
        {
          avatar:
            "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
          user: "Goku",
          comment: "This is a comment just to display it!",
        },
      ],
    },
    {
      dp: "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
      name: "Tanya",
      post: "https://cdn2.opendemocracy.net/media/images/Osbert_Lancaster.2e16d0ba.fill-1200x630.jpg",
      username: "Tien",
      postDate: "Aug 16",
      caption: "Hellooon! Look at this stunning view of amazing forest!!!.",
      reactions: "205K",
      reaction: null,
      report: false,
      hide: false,
      comments: [
        {
          avatar:
            "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
          user: "Goku",
          comment: "This is a comment just to display it!",
        },
        {
          avatar:
            "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
          user: "Vegeta",
          comment:
            "This is a comment just to display it! This is a comment just to display it! This is a comment just to display it! ",
        },
        {
          avatar:
            "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
          user: "Piccollo",
          comment:
            "This is a comment just to display it! This is a comment just to display it! ",
        },
        {
          avatar:
            "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
          user: "Picollo",
          comment: "This is a comment!",
        },
      ],
    },
    {
      dp: "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
      name: "Bhavithra",
      post: "https://previews.123rf.com/images/iko/iko1409/iko140900116/31694000-studio-portrait-of-a-handsome-young-man-astonished-with-something.jpg",
      username: "bhavi",
      postDate: "Nov 25",
      caption: "Aspiring person Mr. Yeelon Mask.",
      reactions: "305K",
      reaction: null,
      report: false,
      hide: false,
      comments: [
        {
          avatar:
            "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
          user: "Goku",
          comment: "This is a comment just to display it!",
        },
        {
          avatar:
            "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
          user: "Vegeta",
          comment:
            "This is a comment just to display it! This is a comment just to display it! This is a comment just to display it! ",
        },
        {
          avatar:
            "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
          user: "Gohan",
          comment:
            "This is a comment just to display it! This is a comment just to display it! ",
        },
      ],
    },
    {
      dp: "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
      name: "kavitha",
      post: null,
      username: "kavitha",
      postDate: "Mar 31",
      caption: "Thought for the day: Don't overthink, it helps.",
      reactions: "405K",
      reaction: null,
      report: false,
      hide: false,
      comments: [
        {
          avatar:
            "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
          user: "Goku",
          comment: "This is a comment just to display it!",
        },
        {
          avatar:
            "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
          user: "Vegeta",
          comment:
            "This is a comment just to display it! This is a comment just to display it! This is a comment just to display it! ",
        },
        {
          avatar:
            "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
          user: "Gohan",
          comment:
            "This is a comment just to display it! This is a comment just to display it! ",
        },
        {
          avatar:
            "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
          user: "Picollo",
          comment: "This is a comment!",
        },
        {
          avatar:
            "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
          user: "Goku",
          comment: "This is a comment just to display it!",
        },
        {
          avatar:
            "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
          user: "Vegeta",
          comment:
            "This is a comment just to display it! This is a comment just to display it! This is a comment just to display it! ",
        },
        {
          avatar:
            "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
          user: "Gohan",
          comment:
            "This is a comment just to display it! This is a comment just to display it! ",
        },
        {
          avatar:
            "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
          user: "Picollo",
          comment: "This is a comment!",
        },
      ],
    },
  ]);

  const [source, setSource] = useState([
    {
      name: "Laughing gas",
      src: cylinder,
      gif: laughgif,
      scale: 1.3,
      clicked: false,
    },
    {
      name: "Hot Sauce",
      src: hotsauce,
      gif: angrygif,
      scale: 1.9,
      clicked: false,
    },
    { name: "Heart", src: heart, gif: heartgif, scale: 2.4, clicked: false },
    {
      name: "Freeze Flake",
      src: ice,
      gif: freezegif,
      scale: 2.3,
      clicked: false,
    },
    {
      name: "Illusion glass",
      src: hypno,
      gif: mindblowngif,
      scale: 2,
      clicked: false,
    },
  ]);

  const [error, setError] = useState(false);
  const { postimg, userpostimg, usercaptions, poststatus } = useSelector(
    (state) => state.newsfeed
  );

  const { loggedIn, user, username, avatar } = useSelector(
    (state) => state.user
  );

  const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([
      {
        name: "Krillin",
        avatar:
          "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
        requested: false,
      },
      {
        name: "Roshi",
        avatar:
          "https://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png",
        requested: false,
      },
      {
        name: "Ginyu",
        avatar:
          "https://cdn.dribbble.com/users/1652973/screenshots/6508917/cartoon.k23.jpg",
        requested: false,
      },
      {
        name: "Cabba",
        avatar:
          "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
        requested: false,
      },
      {
        name: "Tien",
        avatar:
          "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
        requested: false,
      },
      {
        name: "kavitha",
        avatar:
          "https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png",
        requested: false,
      },
      {
        name: "Videl",
        avatar:
          "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
        requested: false,
      },
    ]);
    var [i, setI] = useState(1);
    const CarouselItem = ({ a }) => {
      return (
        <div
          className="col-6 col-lg-3 bg-purple px-2 py-3 m-2 shadow"
          style={{ borderRadius: 10 }}
        >
          <div className="d-flex justify-content-start align-items-center">
            <Avatar
              src={suggestions[a].avatar}
              alt={suggestions[a].name}
              className="rounded-circle mx-2 "
            ></Avatar>
            <div className="">{suggestions[a].name}</div>
          </div>
          <div className="d-flex mt-3 justify-content-around align-items-center">
            <div className="col-5 border border-white border-2 shadox px-1 text-center rounded">
              Cancel
            </div>
            {suggestions[a].requested ? (
              <div
                className="col-6 bg-purple text-white shadox text-center px-1 rounded shadow-lg rounded"
                onClick={() => {
                  let sugg = [...suggestions];
                  sugg[a].requested = false;
                  setSuggestions(sugg);
                }}
              >
                Requested
              </div>
            ) : (
              <div
                className="col-5 bg-white purple shadox border border-white border-2 text-center px-1 rounded shadow-lg rounded"
                onClick={() => {
                  let sugg = [...suggestions];
                  sugg[a].requested = true;
                  setSuggestions(sugg);
                }}
              >
                Follow
              </div>
            )}
          </div>
        </div>
      );
    };
    return (
      <div
        className="col-12 py-2 mb-4"
        style={{
          overflowX: "scroll",
          borderRadius: 10,
          border: "5px solid #a11cf9",
        }}
      >
        <div className="purple ms-3 h5 fw-bold">Friend's suggestion</div>
        <div className="col-12 d-flex align-items-center justify-content-evenly">
          <KeyboardArrowLeftIcon
            className={i - 2 >= 0 ? "purple" : "hash"}
            style={{ fontSize: 50 }}
            onClick={() => {
              if (i - 2 >= 0) {
                setI(i - 1);
                console.log(i);
              }
            }}
          />
          <div className="col-10 d-flex align-items-center justify-content-evenly">
            <CarouselItem a={i - 1} />
            <CarouselItem a={i} />
            <CarouselItem a={i + 1} />
          </div>
          <ChevronRightIcon
            style={{ fontSize: 50 }}
            className={i + 2 < suggestions.length ? "purple" : "hash"}
            onClick={() => {
              if (i + 2 < suggestions.length) {
                setI(i + 1);
                console.log(i);
              }
            }}
          />
        </div>
      </div>
    );
  };

  const Report = ({ i }) => {
    const reportUser = data[i];
    return (
      <Modal
        open={report}
        onClose={() => setReport(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="d-flex justify-content-center  py-sm-5 mx-2 mx-md-3 mx-lg-4 mx-lg-5"
      >
        <Box
          classname="bg-primary"
          sx={{
            backgroundColor: "#a11cf9 !important",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40vw",
            height: "30vh",
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
            <div className="text-white h3 ">Report!!</div>
          </div>
          <div className="text-white">
            Are you sure of reporting?{" "}
            <span className="text-white fw-bold"> {reportUser.username}</span>'s
            post?
          </div>
          <div className="d-flex col-12 col-lg-11 align-items-center justify-content-end mt-4 ">
            <Button
              variant="contained"
              onClick={() => {
                setReport(false);
              }}
              className="purple col-5 col-sm-4 col-md-3 col-lg-2 me-1 me-sm-2 bg-white shadow"
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              className=" col-5 col-sm-4 col-md-3 col-lg-2 me-1 me-sm-2 bg-purple border border-2 border-white shadow"
              onClick={() => {
                setReport(false);
                let sampleData = [...data];
                sampleData[i].hide = true;
                setData(sampleData);

                setTimeout(() => {
                  let sampleData = [...data];
                  sampleData[i].hide = false;
                  setData(sampleData);
                }, 3000);
              }}
            >
              Proceed
            </Button>
          </div>
        </Box>
      </Modal>
    );
  };

  const Comments = () => {
    const [alert, setAlert] = useState(false);
    const postOwner = data[selectedUser];
    const [dispatchData, setDispatchData] = useState({
      byUser: user,
      toUser: postOwner.username,
      comment: "",
    });

    const handlePostComments = (dispatchData) => {
      // e.preventDefault();
      dispatch(postComment(dispatchData));
      postOwner.comments.unshift({
        avatar: avatar
          ? avatar
          : "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
        user: user ? user : "userKnown",
        comment: dispatchData.comment,
      });
    };
    return (
      <div
        className="position-fixed bg-purple vh-100 d-none d-md-block overflow-auto"
        style={{ zIndex: 3, width: "25vw", height: "100vh", right: 0, top: 0 }}
      >
        <div className=" m-2 pt-2 px-3 border-bottom border-2 border-white d-flex align-items-center justify-content-between">
          <div className="h4">Comments</div>
          <CloseIcon className="mb-2" onClick={() => setCommentsOpen(false)} />
        </div>
        <div className="d-flex flex-column ">
          <div
            className="bg-white m-3 py-3 px-2 d-flex flex-column align-items-center justify-content-start overflow-auto"
            style={{ height: 500, borderRadius: 30 }}
          >
            <div className="col-12 border-bottom border-2 border-dark pb-2">
              <div className="d-flex ">
                <img
                  className="rounded-circle bg-purple shadow"
                  src={postOwner.dp}
                  width="30px"
                  height="30px"
                  alt={postOwner.user}
                />

                <div className="ms-2 fw-bold text-dark">
                  {postOwner.username}
                </div>
              </div>
              {postOwner.caption && (
                <div
                  className="bg-purple col-11 mx-3 px-4 py-2"
                  style={{ borderRadius: 30, fontSize: 12 }}
                >
                  {postOwner.caption}
                </div>
              )}
            </div>
            {postOwner.comments.map((comment, index) => (
              <div className="py-2 col-12 align-items-center justify-content-start px-2">
                <div className="d-flex ">
                  <img
                    className="rounded-circle bg-purple"
                    src={comment.avatar}
                    width="30px"
                    height="30px"
                    alt={comment.user}
                  />

                  <div className="ms-2 purple">{comment.user}</div>
                </div>
                <div
                  className="bg-hash col-11 mx-3 px-4 py-2 text-dark"
                  style={{ borderRadius: 30, fontSize: 12 }}
                >
                  {comment.comment}
                </div>
              </div>
            ))}
          </div>
          <div
            className="bg-white m-3 overflow-auto p-3"
            style={{ height: 130, borderRadius: 30 }}
          >
            <div className="d-flex my-1 col-12 align-items-start justify-content-start">
              <img
                className="rounded-circle bg-purple"
                src={
                  avatar
                    ? avatar
                    : "https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png"
                }
                width="30px"
                height="30px"
                alt={user}
              />
              <textarea
                rows="3"
                className="bg-hash col-10 px-3 py-1 border-0 ms-2"
                onChange={(e) =>
                  setDispatchData({ ...dispatchData, comment: e.target.value })
                }
                style={{ borderRadius: 20, fontSize: 12 }}
              />
            </div>
            {alert && (
              <div className="mt-1 col-12 text-center px-4">
                <Alert
                  className="mx-auto p-0 col-12 col-lg-10 "
                  severity="error"
                  style={{ fontSize: 10 }}
                >
                  Your Comment can't be empty!
                </Alert>
              </div>
            )}
            <div className="d-flex my-1 col-12 align-items-center justify-content-end px-3 ">
              <div
                className="rounded px-md-2 px-lg-4fw-bold text-center mx-3"
                style={{
                  border: "2px solid #a11cf9",
                  color: "#a11cf9",
                  fontSize: 12,
                }}
              >
                Cancel
              </div>
              <div
                className="bg-purple rounded fw-bold px-md-2 px-lg-4 text-center"
                style={{ border: "2px solid #a11cf9", fontSize: 12 }}
                onClick={() => {
                  dispatchData.comment != ""
                    ? handlePostComments(dispatchData)
                    : setAlert(true);
                }}
              >
                Post
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Share = () => {
    const [share, setShare] = useState([
      {
        avatar:
          "https://cdn.dribbble.com/users/1652973/screenshots/6508917/cartoon.k23.jpg",
        username: "User1",
        name: "Name1",
        follow: true,
        send: false,
      },
      {
        avatar:
          "https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png",
        username: "User2",
        name: "Name2",
        follow: false,
        send: false,
      },
      {
        avatar:
          "https://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png",
        username: "User3",
        name: "Name3",
        follow: false,
        send: false,
      },
      {
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7E8cyRL8MTpnZ-Tgb_7Ph2zhwYa9cTgLLWFgTBwp_3tBFNnOwa3cKeys1x8Y-lgBL-Y&usqp=CAU",
        username: "User4",
        name: "Name4",
        follow: false,
        send: false,
      },
      {
        avatar:
          "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
        username: "User5",
        name: "Name5",
        follow: true,
        send: false,
      },
      {
        avatar:
          "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
        username: "User6",
        name: "Name6",
        follow: false,
        send: false,
      },
    ]);
    const postOwner = data[selectedUser];
    const shareMedia = [
      {
        icon: "ContentCopyIcon",
        label: "Copy URL",
      },
      {
        icon: "WhatsAppIcon",
        label: "WhatsApp",
      },
      {
        icon: "InstagramIcon",
        label: "Instagram",
      },
      {
        icon: "FacebookIcon",
        label: "Facebook",
      },
    ];
    return (
      <div
        className="position-fixed bg-purple vh-100 d-none d-md-block overflow-auto"
        style={{ zIndex: 3, width: "25vw", height: "100vh", right: 0, top: 0 }}
      >
        <div className=" m-2 pt-2 px-3 border-bottom border-2 border-white d-flex align-items-center justify-content-between">
          <div className="h4">Share post</div>
          <CloseIcon className="mb-2" onClick={() => setShareOpen(false)} />
        </div>
        <div className="d-flex flex-column ">
          <div
            className="bg-white m-3 py-3 px-2 d-flex flex-column align-items-center justify-content-start overflow-auto"
            style={{ height: 500, borderRadius: 30 }}
          >
            <div className="col-12 border-bottom border-2 border-dark pb-2">
              <div className="d-flex ">
                <img
                  className="rounded-circle bg-purple shadow"
                  src={postOwner.dp}
                  width="30px"
                  height="30px"
                  alt={postOwner.user}
                />

                <div className="ms-2 fw-bold text-dark">
                  {postOwner.username}
                </div>
              </div>
              {postOwner.caption && (
                <div
                  className="bg-purple col-11 mx-3 px-4 py-2"
                  style={{ borderRadius: 30, fontSize: 12 }}
                >
                  {postOwner.caption}
                </div>
              )}
            </div>
            <div className="m-3">
              {share.map((profile, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex justify-content-center py-2 align-items-center"
                    onClick={() => {
                      // setChatOpen(true);
                      // setIValue(index);
                    }}
                  >
                    {profile.follow ? (
                      <StyledBadge1
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                      >
                        <Avatar
                          className="col-3 shadow border border-1 border-secondary"
                          alt={profile.username}
                          src={profile.avatar}
                          sx={{ mr: 1 }}
                        />
                      </StyledBadge1>
                    ) : (
                      <Avatar
                        className="col-3 shadow border border-1 border-secondary"
                        alt={profile.username}
                        src={profile.avatar}
                        sx={{ mr: 1 }}
                      />
                    )}
                    <div className="col-6 ">
                      <div
                        className="text-dark bg-white fw-bold"
                        style={{ fontSize: 12 }}
                      >
                        {profile.username}
                      </div>
                      <div
                        className="text-dark bg-white"
                        style={{ fontSize: 12 }}
                      >
                        {profile.name}
                      </div>
                    </div>
                    {share[index].send ? (
                      <Button
                        variant="caption"
                        className=" col-3 fw-bold p-1 text-center "
                        onClick={() => {
                          let shareCopy = [...share];
                          shareCopy[index].send = !shareCopy[index].send;
                          setShare(shareCopy);
                        }}
                        sx={{
                          backgroundColor: "#e4baff",
                          textTransform: "initial",
                          fontSize: "11px",
                          color: "#4b0382",
                          borderRadius: "10px",
                        }}
                      >
                        Sent
                      </Button>
                    ) : (
                      <Button
                        variant="caption"
                        className="p-1 col-3 text-center"
                        onClick={() => {
                          let shareCopy = [...share];
                          shareCopy[index].send = !shareCopy[index].send;
                          setShare(shareCopy);
                        }}
                        sx={{
                          border: "2px solid #a11cf9",
                          fontWeight: "bold",
                          color: "#4b0382",
                          textTransform: "initial",
                          fontSize: "11px",
                          borderRadius: "10px",
                        }}
                      >
                        <SendIcon
                          className="me-1"
                          style={{ fontSize: "15px" }}
                        />
                        Send
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div
            className="bg-white m-3 overflow-auto p-3"
            style={{ height: 130, borderRadius: 30 }}
          >
            <div className="col-12 row bg-warning">
              {shareMedia.map((media) => {
                const MediaIcon = media.icon;
                return (
                  <div className="col-4 d-flex flex-column align-justify-center">
                    <MediaIcon />
                    <div>{MediaIcon}</div>
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    );
  };

  function UploadFeed({ thoughts }) {
    const [gallery, setGallery] = useState(null);
    const [alert, setAlert] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [dispatchData, setDispatchData] = useState({
      ad: "",
      caption: thoughts ? thoughts : "",
    });

    const handleSubmit = () => {
      const myPost = {
        dp: avatar,
        name: user,
        post: dispatchData.ad,
        username: username ? username : "userKnown",
        postDate: "today's date",
        caption: dispatchData.caption ? dispatchData.caption : thoughts,
        reactions: "0",
        comments: [],
      };
      data.unshift(myPost);
      if (dispatchData.ad != "") {
        setPostSuccess(true);
        setUploadGallery(false);
        setThoughts("");
        dispatch(uploadFeed(dispatchData));
      } else {
        setAlert(true);
      }
    };
    const handleImageChange = (e) => {
      setError(false);
      const selected = e.target.files[0];
      const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
      if (selected && ALLOWED_TYPES.includes(selected.type)) {
        let reader = new FileReader();
        reader.onload = () => {
          setGallery(reader.result);
          setAlert(false);
          setDispatchData({ ...dispatchData, ad: reader.result });
        };
        reader.readAsDataURL(selected);
      } else {
        setError(true);
      }
    };
    return (
      <>
        <div className="mx-2 mx-lg-0 mb-5 mt-5 pt-3 d-flex flex-column align-justify-center">
          <div className="col-12 col-md-11 col-xl-9 ">
            <div
              className="col-12  d-flex flex-column justify-content-start bg-linear"
              style={{
                background: gallery
                  ? `url("${gallery}")no-repeat center/cover`
                  : "#e4e4e4",
                borderRadius: "25px",
                height: 325,
              }}
            >
              <div className="user-div px-2 px-sm-4 px-2 pe-2 d-flex align-items-end justify-content-between ">
                <div className="ps-1 mb-3 pb-1 mb-sm-0 pb-sm-0 d-flex align-items-center justify-content-start">
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar
                      className="bg-linear"
                      alt={user}
                      src={avatar}
                      style={{
                        boxShadow: "0px 5px 10px black",
                        transform: "scale(1.2)",
                      }}
                    />
                  </StyledBadge>
                  <div className="d-flex flex-column flex-sm-row justify-content-end align-items-start ms-3 pe-1 pe-sm-2 mb-sm-3 mt-0 ">
                    <div className="fw-bold pe-sm-2">{user}</div>
                    <div className="fw-bold grey">
                      @{username ? username : "username"}
                    </div>
                  </div>
                </div>
                <div>
                  {gallery && (
                    <label for="gallery">
                      <EditIcon
                        className="mb-3 mb-sm-2 purple pb-1 me-2"
                        style={{ fontSize: "25px", color: "#a11cf9" }}
                      />
                    </label>
                  )}
                  <DeleteIcon
                    className="mb-3 mb-sm-2 purple pb-1"
                    style={{ fontSize: "30px" }}
                    onClick={() => {
                      setUploadGallery(false);
                      setDispatchData({ ...dispatchData, ad: "", caption: "" });
                    }}
                  />
                </div>
              </div>
              <div className=" h-100 d-flex flex-column ">
                <input
                  id="gallery"
                  type="file"
                  className="d-none"
                  onChange={handleImageChange}
                />
                {!gallery && (
                  <div className="d-flex justify-content-center h-75">
                    <label for="gallery" className="grey mt-auto mb-5">
                      <AddIcon
                        className="grey"
                        style={{ fontSize: "80px", cursor: "pointer" }}
                      />
                    </label>
                  </div>
                )}

                {toggle ? (
                  <div className="d-flex flex-column justify-content-end  h-100">
                    <div
                      className="px-3 pb-3 text-white"
                      style={{
                        fontSize: "12px",
                        borderRadius: "25px",
                        backgroundColor: "#A9A9A9",
                        color: "white",
                      }}
                    >
                      <div className="text-center col-12 ">
                        <KeyboardArrowDownIcon
                          onClick={() => setToggle(false)}
                        />
                      </div>
                      <div>
                        <textarea
                          className="bg-transparent border-0 text-white rounded col-10  pt-1 px-2"
                          placeHolder="Type something..."
                          value={dispatchData.caption}
                          onChange={(e) => {
                            setDispatchData({
                              ...dispatchData,
                              caption: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className=" h-25 mt-auto mx-auto">
                    <KeyboardArrowUpIcon
                      style={{
                        color: "#A9A9A9",
                      }}
                      className=" mt-4"
                      onClick={() => setToggle(true)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="my-2 col-md-9">
            {alert && (
              <Alert severity="error">Your Post Image is not added!</Alert>
            )}
          </div>
          <div className="d-flex justify-content-end mt-2 w-md-75">
            <Button
              type="button"
              className="bg-purple mb-2"
              onClick={handleSubmit}
            >
              Post
            </Button>
          </div>
        </div>
      </>
    );
  }

  const OthersPost = () => (
    <>
      {data.map((feed, index) => (
        <div className="mx-2 mx-lg-0 mb-5 mt-5 pt-3 d-flex flex-column align-justify-center">
          {feed.hide && (
            <Alert className="col-9 mx-auto mt-3 mb-5" severity="error">
              The post is reported successfully!
            </Alert>
          )}
          <div className="col-12 col-xxl-9 d-flex flex-column justify-content-center">
            <div className="d-flex col-12 position-relative">
              {feed.post && feed.caption && (
                <Box
                  className={
                    feed.caption && feed.post
                      ? "col-11 d-flex mx-auto flex-column justify-content-between position-absolute"
                      : "col-11 d-flex mx-auto flex-column justify-content-between bg-white position-absolute"
                  }
                  style={
                    feed.caption && feed.post
                      ? {
                          borderRadius: "25px",
                          height: 325,
                          boxShadow: "0px 0px 15px grey",
                          background: feed.post
                            ? `url("${feed.post}")no-repeat center/cover`
                            : "",
                          top: 0,
                          left: 0,
                          opacity: 0.3,
                          // backdropFilter: "blur(0px)",
                          filter: "blur(2px)",
                          // transition: "0.5s ease",
                        }
                      : {
                          borderRadius: "25px",
                          boxShadow: "0px 0px 15px grey",
                          border: "3px solid #a11cf9",
                        }
                  }
                ></Box>
              )}
              <Box
                className={
                  feed.caption && feed.post
                    ? "col-11 d-flex mx-auto flex-column justify-content-between"
                    : "col-11 d-flex mx-auto flex-column justify-content-between bg-white"
                }
                style={
                  feed.caption && feed.post
                    ? {
                        borderRadius: "25px",
                        height: 325,
                        boxShadow: "0px 0px 15px grey",
                        background: feed.post
                          ? `url("${feed.post}")no-repeat center/contain`
                          : "",
                        zIndex: 0,
                      }
                    : {
                        borderRadius: "25px",
                        boxShadow: "0px 0px 15px grey",
                        border: "3px solid #a11cf9",
                      }
                }
              >
                <div
                  className=" px-sm-4 pe-2 d-flex align-items-end justify-content-between"
                  style={{ height: "11px" }}
                >
                  <div className="ps-1 d-flex align-items-start align-items-sm-center justify-content-start mb-3 mx-2 mb-sm-0 mx-sm-0 ">
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <Avatar
                        className="bg-linear"
                        alt={feed.name}
                        src={feed.dp}
                        // src={data.username}
                        style={{
                          boxShadow: "0px 5px 10px black",
                          // bottom:"25px",
                          transform: "scale(1.2)",
                        }}
                      />
                    </StyledBadge>
                    <div className="d-flex flex-column flex-sm-row justify-content-start align-items-start ms-3 pe-1 pe-sm-2 mb-sm-3 mt-0 ">
                      <div className="fw-bold pe-sm-2">{feed.name}</div>
                      <div className="fw-bold grey">@{feed.username}</div>
                    </div>
                    <div className="h6 grey pe-1 pe-sm-2 mt-1 mt-sm-0 mb-4 ms-2 ms-sm-0 mb-sm-3 ">
                      {feed.postDate}
                    </div>
                  </div>
                  <div className="d-flex">
                    <Button>
                      <MoreHorizIcon
                        className="mb-2 pb-1"
                        style={{ fontSize: "30px" }}
                        onClick={() => {
                          setReportIndex(index);
                          let sampleData = [...data];
                          sampleData[index].report = !sampleData[index].report;
                          setData(sampleData);
                        }}
                      />
                    </Button>
                    {feed.report && (
                      <div
                        className="bg-purple text-white position-absolute ms-5 mt-2 px-2 py-1 rounded"
                        style={{ boxShadow: "0px 0px 5px black" }}
                      >
                        <div
                          onClick={() => {
                            let sampleData = [...data];
                            sampleData[index].report = false;
                            setData(sampleData);
                            setReport(true);
                          }}
                        >
                          Report
                        </div>
                        {/* <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                      </div>
                    )}
                  </div>
                  {report && <Report i={reportIndex} />}
                </div>
                <div
                  className={
                    feed.caption && feed.post
                      ? "d-flex justify-content-between h-100 align-items-start p-2 h-100"
                      : "d-flex justify-content-center h-100 align-items-center p-2 h-100"
                  }
                >
                  <div
                    className={
                      feed.caption && feed.post
                        ? "px-4 ms-2 mt-auto text-white mb-3 col-7 py-2 rounded"
                        : "px-4 ms-2 mt-1 text-dark fw-bold mb-3 bg-hash col-11 py-2 rounded"
                    }
                    style={
                      feed.caption && feed.post
                        ? { fontSize: "12px", backgroundColor: "#4b4b4b9b" }
                        : { fontSize: "15px" }
                    }
                  >
                    {feed.caption}
                  </div>
                </div>
              </Box>
              <div className="d-flex flex-column jusitify-content-between my-auto align-items-center ps-2">
                <div
                  className={
                    feed.post && feed.caption
                      ? "mb-5 rounded bg-grey d-flex flex-column justify-content-center align-items-center"
                      : "rounded bg-grey d-flex flex-column justify-content-center align-items-center"
                  }
                >
                  <img
                    src={
                      feed.reaction != null
                        ? source[feed.reaction].gif
                        : blankFace
                    }
                    className="col-12 p-0"
                    style={{ width: "70px", height: "70px" }}
                  />
                  <div
                    className="m-0 purple fw-bold"
                    style={{ fontSize: "8px" }}
                  >
                    {feed.reactions}
                  </div>
                </div>
                <div
                  className={
                    feed.post && feed.caption
                      ? "px-1 py-2 mt-5 rounded bg-grey d-flex flex-column align-justify-center"
                      : "px-1 py-2 mt-2 rounded bg-grey d-flex flex-column align-justify-center"
                  }
                >
                  <CommentIcon
                    className=" rounded-circle purple"
                    onClick={() => {
                      setCommentsOpen(true);
                      setShareOpen(false);
                      setSelectedUser(index);
                    }}
                  />
                  <ShareIcon
                    className=" rounded-circle mt-2 purple"
                    onClick={() => {
                      setShareOpen(true);
                      setCommentsOpen(false);
                      setSelectedUser(index);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-11">
              <div
                className="col-10 col-md-9 mx-auto mt-2 mb-5 py-2 d-flex justify-content-evenly"
                key={index}
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#e5e5e5",
                  border: "3px solid #a11cf9",
                }}
              >
                {source.map((reactions, indexno) => (
                  <Tooltip title={reactions.name}>
                    <Box
                      className=" rounded-circle"
                      sx={{
                        height: "60px",
                        width: "60px",
                        "&:hover": {
                          transform: `scale(1.1)`,
                        },
                      }}
                    >
                      <img
                        src={reactions.src}
                        onClick={() => {
                          let dupData = [...data];
                          dupData[index].reaction = indexno;
                          setData(dupData);
                          console.log(dupData[index].reaction);
                        }}
                        style={{
                          height: "55px",
                          width: "55px",
                          filter: " drop-shadow(0px 0px 2px #000)",
                          transform: `scale(${reactions.scale})`,
                        }}
                      />
                    </Box>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
          {commentsOpen && <Comments />}
          {shareOpen && <Share />}
        </div>
      ))}
    </>
  );

  setTimeout(() => {
    setPostSuccess(false);
  }, 2000);

  return (
    <div className="p-2 w-100">
      <div className="d-flex justify-content-between align-items-start row my-2">
        <div className="w-100 d-flex flex-column align-items-center mb-2">
          <div className="col-12 col-lg-11 upload-div">
            <div
              className="col-12 col-lg-9 mx-auto text-center bg-purple p-3 shadow"
              style={{ borderRadius: 20 }}
            >
              <input
                type="text"
                className="bg-white col-11 py-1 px-3 rounded mx-auto"
                value={thoughts}
                placeHolder="Your thoughts.."
                onChange={(e) => setThoughts(e.target.value)}
              ></input>
              <div className="d-flex align-items-center justify-content-end my-2 me-3">
                <Button
                  variant="contained"
                  className="bg-white fw-bold purple mx-3 py-1 px-3 rounded"
                  sx={{ textTransform: "initial" }}
                  onClick={() => (
                    setUploadGallery(true), setPostSuccess(false)
                  )}
                >
                  Add Photo/Video
                </Button>
                {thoughts && (
                  <>
                    <Button
                      variant="contained"
                      className="bg-white fw-bold purple mx-3 py-1 px-3 rounded"
                      sx={{ textTransform: "initial" }}
                      onClick={() => setThoughts("")}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      className="bg-white fw-bold purple mx-3 py-1 px-3 rounded"
                      sx={{ textTransform: "initial" }}
                      onClick={() => {
                        const myPost = {
                          dp: avatar,
                          name: user,
                          post: null,
                          username: username ? username : "userKnown",
                          postDate: "today's date",
                          caption: thoughts,
                          reactions: "0",
                          comments: [],
                        };
                        data.unshift(myPost);
                        console.log(data);
                        setPostSuccess(true);
                        setUploadGallery(false);
                        dispatch(uploadFeed({ ad: null, caption: thoughts }));
                        setThoughts("");
                      }}
                    >
                      Post
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {uploadGallery && <UploadFeed thoughts={thoughts} />}
      {postSuccess && (
        <>
          <div className="d-flex align-justify-center ht-100 w-md-75 purple">
            <CheckIcon
              className="ms-2 p-2 rounded-circle text-white fw-bold"
              style={{
                backgroundImage: "linear-gradient(to right,#9c18f5,#7402cb)",
                fontSize: "80px",
              }}
            />
          </div>
          <div className="d-flex mt-2 align-justify-center ht-100 w-md-75 purple">
            Finished your process
          </div>
        </>
      )}

      <OthersPost />
      <Suggestions />
    </div>
  );
}
