import React from "react";
import Box from "@mui/material/Box";
import { useHistory } from "react-router";

const style = {
  active: {
    backgroundColor: "white",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  },
  inactive: {
    backgroundColor: "transparent",
  },
  divTop: {
    borderBottomRightRadius: "20% 100%",
    backgroundImage: "linear-gradient(to right,#9c18f5,#7402cb)",
    width: "100%",
    height: "5px",
  },
  divBottom: {
    borderTopRightRadius: "20% 100%",
    backgroundImage: "linear-gradient(to right,#9c18f5,#7402cb)",
    width: "100%",
    height: "5px",
  },
};

const data = [
  // {
  //   path: "/profile",
  //   src1: "https://i.pinimg.com/736x/cc/e1/db/cce1db594930d2217fc4f484434742d9.jpg",
  //   src2: "https://i.pinimg.com/736x/cc/e1/db/cce1db594930d2217fc4f484434742d9.jpg",
  //   name: "profile",
  //   height: "40vw",
  //   className: "rounded-circle",
  // },
  {
    path: "/profile",
    src1: "https://i.pinimg.com/736x/cc/e1/db/cce1db594930d2217fc4f484434742d9.jpg",
    src2: "https://i.pinimg.com/736x/cc/e1/db/cce1db594930d2217fc4f484434742d9.jpg",
    name: "profile",
    height: "45vw",
    className: "ms-1 rounded-circle",
  },
  {
    path: "/news-feed",
    src1: require("../../assets/images/homepurp.svg").default,
    src2: require("../../assets/images/home.svg").default,
    name: "profile",
    height: "50vw",
    className: "",
  },
  {
    path: "/future-studio",
    src1: require("../../assets/images/future studio purp.svg").default,
    src2: require("../../assets/images/future studio white.svg").default,
    name: "profile",
    height: "50vw",
    className: "",
  },
  {
    path: "/dream-community",
    src1: require("../../assets/images/dream community purp.svg").default,
    src2: require("../../assets/images/dream community.svg").default,
    name: "profile",
    height: "42vw",
    className: "ms-1",
  },
  {
    path: "/zillion-villa",
    src1: require("../../assets/images/villapurp.svg").default,
    src2: require("../../assets/images/villa white.svg").default,
    name: "profile",
    height: "50vw",
    className: "",
  },
  {
    path: "/settings",
    src1: require("../../assets/images/settingspurp.svg").default,
    src2: require("../../assets/images/settings.svg").default,
    name: "profile",
    height: "50vw",
    className: "",
  },
];

function Sidebar({ active }) {
  const history = useHistory();
  return (
    <>
      <div
        className="py-5 d-flex flex-column text-center justify-content-evenly align-items-center position-fixed"
        style={{
          height: "100vh",
          backgroundImage: "linear-gradient(to right,#9c18f5,#7402cb)",
          width: "5.5vw",
        }}
      >
        {/* <img
          height="45vw"
          className="rounded-circle my-2"
          src="https://i.pinimg.com/736x/cc/e1/db/cce1db594930d2217fc4f484434742d9.jpg"
        /> */}
        {data.map((data, index) => (
          <div
            key={index}
            className="d-flex flex-column justify-content-start"
            style={{ width: "100%" }}
          >
            {active == index ? (
              <div className="bg-white">
                <Box className="py-2" style={style.divTop}></Box>
              </div>
            ) : (
              <div className="">
                <Box className="py-2"></Box>
              </div>
            )}
            <div
              className="py-3 pe-4 ps-lg-2 ps-xl-3 ps-md-1 ms-lg-2 ms-1"
              style={active == index ? style.active : style.inactive}
              onClick={() => history.push(data.path)}
            >
              <img
                height={data.height}
                className={data.className}
                src={active == index ? data.src1 : data.src2}
                alt={data.name}
              />
            </div>
            {active == index ? (
              <div className="bg-white">
                <Box className="py-2" style={style.divBottom}></Box>
              </div>
            ) : (
              <div className="">
                <Box className="py-2"></Box>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
