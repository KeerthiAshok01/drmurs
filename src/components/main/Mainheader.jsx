import React, { useState } from "react";
import zdlogo from "../../assets/images/zdlogo.png";
import { logout } from "../../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import LogoutIcon from "@mui/icons-material/Logout";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Story from "./FeedStory";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Notifications from "./Notifications";
import SearchBox from "../../components/main/SearchBox";

export default function Mainheader({ setIsOpen, isOpen, results, setResults }) {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const { loggedIn, user, password, avatar, gender, email } = useSelector(
    (state) => state.user
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("logout");
    dispatch(logout());
    history.push("/");
  };
  return (
    <div
      className="route1 p-1 px-3 px-md-5 col-12 d-flex justify-content-between align-items-center position-fixed"
      style={{
        backgroundColor: "#f0f1f6",
        boxShadow: "0px 5px 5px #aba9a9",
        zIndex: 10,
        height: "4.5vh",
      }}
    >
      <img src={zdlogo} width="30px"></img>
      <SearchBox results={results} setResults={setResults} />
      <div className="d-flex">
        <Story isOpen={isOpen} setIsOpen={setIsOpen} />

        {notificationOpen && (
          <Notifications
            notificationOpen={notificationOpen}
            setNotificationOpen={setNotificationOpen}
          />
        )}
        {/* <Badge color="warning" variant="dot"> */}
        <NotificationsIcon
          className="purple ms-3"
          style={{ fontSize: 30 }}
          onClick={() => setNotificationOpen(!notificationOpen)}
        />
        {/* </Badge> */}
        <div className="btn purple p-0 fw-bold ms-3" onClick={handleLogout}>
          <PowerSettingsNewIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}
