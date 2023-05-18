import React, { useState } from "react";
import Navbar from "../components/main/Navbar";
import Mainheader from "../components/main/Mainheader";
import Chatbar from "../components/main/Chatbar";
import ClickAwayListener from "@mui/material/ClickAwayListener";

export default function LayoutRoute(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState(false);
  function handleClickAway() {
    // if (isOpen) setIsOpen(false);
    if (results) setResults(false);
  }
  const Component = props.component;
  return (
    <div
      className="d-flex justify-content-between"
      onClick={handleClickAway}
      style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}
    >
      <div className="d-none d-md-block">
        <Navbar active={props.active} />
      </div>
      <div className="route col-12 h-100 bg-white">
        <Mainheader isOpen={isOpen} setIsOpen={setIsOpen} results={results} setResults={setResults} />
        <div className="pt-5">
          <Component />
        </div>
      </div>
      <Chatbar />
    </div>
  );
}
