import React from "react";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const data = [
  {
    avatar:
      "https://cdn.dribbble.com/users/1652973/screenshots/6508917/cartoon.k23.jpg",
    username: "User1",
    name: "Name1",
    follow: true,
  },
  {
    avatar:
      "https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png",
    username: "User2",
    name: "Name2",
    follow: false,
  },
  {
    avatar:
      "https://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png",
    username: "User3",
    name: "Name3",
    follow: false,
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7E8cyRL8MTpnZ-Tgb_7Ph2zhwYa9cTgLLWFgTBwp_3tBFNnOwa3cKeys1x8Y-lgBL-Y&usqp=CAU",
    username: "User4",
    name: "Name4",
    follow: false,
  },
  {
    avatar:
      "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
    username: "User5",
    name: "Name5",
    follow: true,
  },
  {
    avatar:
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/cf3851a824eee5981be13591f44bbd5f-1592046164/hitoridraws-prettyportrait-color/draw-your-dp-avatar-profile-pic-and-make-it-simple-and-cute.png",
    username: "User6",
    name: "Name6",
    follow: false,
  },
];

const sideBar = {
  maxWidth: "40vh",
  minHeight: "100vh",
};

function Sidebar() {
  return (
    <div className="bg-white p-3 rounded d-flex flex-column " style={sideBar}>
      {/* <TextField variant="outlined" placeholder="Search..">
        <SearchIcon />
      </TextField> */}

      <TextField
        // className="mx-1"
        className="mb-2"
        label="Search"
        variant="filled"
        color="secondary"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              {/* <IconButton> */}
              <SearchIcon color="secondary" />
              {/* </IconButton> */}
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="outlined"
        color="secondary"
        className="mt-2 col-5"
        sx={{
          border: "3px solid #a11cf9",
          color: "#a11cf9",
          borderRadius: "10px",
          fontWeight: "bold",
          textTransform: "initial",
          "&:hover": {
            border: "3px solid #a11cf9",
          },
        }}
      >
        Achievers
      </Button>
      <div className=" my-3 ">
        {data.map((profile) => {
          return (
            <div className="d-flex  justify-content-center py-2 align-items-center">
              <Avatar
                className="col-3 shadow border border-1 border-secondary"
                alt={profile.username}
                src={profile.avatar}
                sx={{ mr: 1 }}
              />
              <div className="col-6 ">
                <Typography nowrap variant="body1" sx={{ fontWeight: "bold" }}>
                  {profile.username}
                </Typography>
                <Typography nowrap variant="body2">
                  {profile.name}
                </Typography>
              </div>
              {profile.follow ? (
                // color="primary" variant="contained" size="small"
                <Button
                  // color="secondary"
                  variant="caption"
                  className=" col-3 fw-bold p-1 text-center "
                  sx={{
                    backgroundColor: "#e4baff",
                    textTransform: "initial",
                    fontSize: "11px",
                    color: "#4b0382",
                    borderRadius: "10px",
                  }}
                >
                  Following
                </Button>
              ) : (
                <Button
                  variant="caption"
                  className="p-1 col-3 text-center"
                  sx={{
                    border: "2px solid #a11cf9",
                    fontWeight: "bold",
                    color: "#4b0382",
                    textTransform: "initial",
                    fontSize: "11px",
                    borderRadius: "10px",
                  }}
                >
                  Follow
                </Button>
                // <Button color="secondary" variant="contained" size="small">
                // Follow
                // </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
