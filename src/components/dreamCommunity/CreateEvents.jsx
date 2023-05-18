import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { createEvent } from "../../slices/eventSlice";
import { Alert } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

export default function CreateEvents({ setSuccess, setEvents }) {
  const dispatch = useDispatch();
  const [poster, setPoster] = useState(null);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [data, setData] = useState({
    name: "",
    mail: "",
    contact: "",
    description: "",
    rules: "",
    ad: "",
  });

  const handleSubmit = (e) => {
    console.log(data);
    if (data.ad != "") {
      e.preventDefault();
      setSuccess(true);
      setEvents(false);
      dispatch(createEvent(data));
    } else {
      e.preventDefault();
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
        setPoster(reader.result);
        setAlert(false);
        setData({ ...data, ad: reader.result });
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };

  return (
    <div className="py-3 px-0 px-sm-1 px-md-2 px-lg-3 m-0 row">
      <form onSubmit={handleSubmit}>
        <div className="col-12 py-3 px-0 px-sm-1 px-md-2 px-lg-3">
          <Box
            id="ePoster"
            className={
              poster
                ? "col-lg-10 col-xl-9 col-12 my-2 mx-auto d-flex flex-column justify-content-end align-items-end "
                : "col-lg-10 col-xl-9 col-12 my-2 mx-auto d-flex flex-column justify-content-center align-items-center"
            }
            style={{
              height: 300,
              borderRadius: "20px",
              background: poster
                ? `url("${poster}")no-repeat center/cover`
                : "#a11cf9",
              boxShadow: "0px 0px 5px black",
            }}
          >
            <input
              id="poster"
              type="file"
              className="d-none"
              onChange={handleImageChange}
            />
            {poster ? (
              <label
                for="poster"
                className=" col-1 bg-white fw-bold py-2 text-center"
                style={{
                  borderRadius: "25px",
                  border: "4px solid black",
                }}
              >
                <EditIcon style={{ fontSize: "18px", color: "#a11cf9" }} />
              </label>
            ) : (
              <label
                for="poster"
                className="col-7 col-sm-5 col-md-4 col-lg-3 bg-white fw-bold py-2 text-center"
                style={{
                  boxShadow: "1px 5px 3px black",
                  borderRadius: "10px",
                }}
              >
                <AddIcon className="pb-1 fw-bold" />
                Poster/Ad
              </label>
            )}
          </Box>
        </div>
        <div className="col-12 py-3 px-0 px-sm-1 px-md-2 px-lg-3">
          <Box
            className="col-12 px-4 py-3"
            style={{
              borderRadius: "20px",
              backgroundColor: "#a11cf9",
              boxShadow: "0px 0px 5px black",
            }}
          >
            <div className="col-12 p-1 p-sm-3">
              <div className="d-flex row align-items-center col-12 my-4">
                <div className="col-10 col-md-4 col-lg-4 col-xl-3 fw-bold text-white">
                  <span
                    style={{ textShadow: "0px 0px 2px black " }}
                    className="fw-bold"
                  >
                    *{" "}
                  </span>
                  Event Conductor:
                </div>
                <input
                  type="text"
                  className="col-12 col-md-8  px-3 bg-white rounded mx-3 mx-md-0 mt-1 mt-0"
                  style={{ border: "2px solid #fff", height: "50px" }}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  required
                />
              </div>
              <div className="d-flex row align-items-center col-12 my-4">
                <div className="col-10 col-md-4 col-lg-4 col-xl-3 fw-bold text-white">
                  *Event Mail ID:
                </div>
                <input
                  type="text"
                  className="col-12 col-md-8 px-3 bg-white rounded mx-3 mx-md-0 mt-1 mt-0"
                  style={{ border: "2px solid white", height: "50px" }}
                  onChange={(e) => setData({ ...data, mail: e.target.value })}
                  required
                />
              </div>
              <div className="d-flex row align-items-center col-12 my-4">
                <div className="col-10 col-md-4 col-lg-4 col-xl-3 fw-bold text-white">
                  *Contact number:
                </div>
                <input
                  type="number"
                  className="col-12 col-md-8 px-3 bg-white rounded mx-3 mx-md-0 mt-1 mt-0"
                  style={{ border: "2px solid white", height: "50px" }}
                  onChange={(e) =>
                    setData({ ...data, contact: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-12 fw-bold text-white">
                *Event Description:
              </div>
              <textarea
                className="col-12 col-lg-10 my-2 bg-white rounded p-2"
                rows="3"
                style={{ border: "2px solid white" }}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                required
              />
              <div className="col-12 mt-2 fw-bold text-white">
                Event Rules (if any):
              </div>
              <textarea
                className="col-12 col-lg-10 my-2 bg-white rounded p-2"
                rows="3"
                style={{ border: "2px solid white" }}
                onChange={(e) => setData({ ...data, rules: e.target.value })}
              />
              <div className="my-2 mx-auto">
                {alert && (
                  <Alert severity="error">Event poster is not added!</Alert>
                )}
              </div>
              <div className="d-flex col-12 col-lg-11 align-items-center justify-content-end mt-4">
                <Button
                  variant="contained"
                  className=" col-5 col-sm-4 col-md-3 col-lg-2 me-1 me-sm-2 purple bg-white"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                  className=" col-7 col-sm-5 col-md-5 col-lg-4 col-xl-3 ms-1 ms-sm-2 border border-3 border-white bg-purple"
                >
                  Create Event
                </Button>
              </div>
            </div>
          </Box>
        </div>
      </form>
    </div>
  );
}
