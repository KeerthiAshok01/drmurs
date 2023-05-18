import { useState, useRef } from "react";
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  IconButton,
  Button,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";

import { addMilestones } from "../../slices/futureStudioSlice";
import { useDispatch } from "react-redux";

export default function Goal() {
  const submitButtonRef = useRef(null);
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    goal: "",
    goaldescription: "",
  });

  const [error, setError] = useState({
    goal: "",
    goaldescription: "",
  });

  const [mileValue, setMileValue] = useState(0);
  const [textBox, setTextBox] = useState([
    [
      {
        date: null,
        time: null,
        tasks: [""],
      },
    ],
    [
      {
        date: null,
        time: null,
        tasks: [""],
      },
    ],
    [
      {
        date: null,
        time: null,
        tasks: [""],
      },
    ],
  ]);

  function handleSelectChange(e) {
    const datata = [
      {
        date: null,
        time: null,
        tasks: [""],
      },
    ];
    let initialBoxes = [...textBox];

    if (e.target.value === 3) {
      if (initialBoxes.length === 4) {
        initialBoxes.splice(initialBoxes.length - 1, 1);
      } else if (initialBoxes.length === 5) {
        initialBoxes.splice(initialBoxes.length - 1, 2);
      }
    } else if (e.target.value === 4) {
      if (initialBoxes.length === 3) {
        initialBoxes.push(datata);
      } else if (initialBoxes.length === 5) {
        initialBoxes.splice(initialBoxes.length - 1, 1);
      }
    } else if (e.target.value === 5) {
      if (initialBoxes.length === 3) {
        initialBoxes.push(datata, datata);
      } else if (initialBoxes.length === 4) {
        initialBoxes.push(datata);
      }
    }
    setTextBox(initialBoxes);
    setMileValue(0);
  }

  const handleSubmit = () => {
    let noofErrors = 0;
    let errorMessage = { ...error };
    submitButtonRef.current.style.disabled = true;
    submitButtonRef.current.innerHTML =
      '<div class="spinner-border p-2 spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></div>';

    if (values.goal === null || values.goal === "") {
      errorMessage.goal = "Goal cannot be empty";
      noofErrors += 1;
    }

    if (values.goaldescription === null || values.goaldescription === "") {
      errorMessage.goaldescription = "Goal Description cannot be empty";
      noofErrors += 1;
    }

    setError(errorMessage);

    setTimeout(() => {
      setError({
        goal: "",
        goaldescription: "",
      });
      submitButtonRef.current.disabled = false;
      submitButtonRef.current.innerHTML = "Submit";
    }, 3000);

    let milestoneArray = [];
    textBox.forEach((item) => {
      item.forEach((datetask) => {
        milestoneArray.push(datetask);
      });
    });

    if (noofErrors === 0) {
      dispatch(
        addMilestones({
          goal: values.goal,
          goaldescription: values.goaldescription,
          milestones: milestoneArray,
        })
      );
    }
  };

  console.log(textBox[0]);
  return (
    <>
      <div className="purple mx-2">
        <div className="d-md-flex justify-content-between align-items-start my-5">
          <div className="w-100">
            <p className="mb-1">Your Goal</p>
            <div className="w-md-100">
              <input
                type="text"
                className="form-control form-control-lg py-3"
                value={values.goal}
                onChange={(e) =>
                  setValues((pre) => ({
                    ...pre,
                    goal: e.target.value,
                  }))
                }
              />
              {error.goal !== "" && <p className="text-danger">{error.goal}</p>}
            </div>
          </div>
          <div className="w-100 mx-md-3 my-3 my-md-0">
            <p className="mb-1">Goal Description</p>
            <div className="w-md-100">
              <textarea
                rows="2"
                className="form-control "
                value={values.goaldescription}
                onChange={(e) =>
                  setValues((pre) => ({
                    ...pre,
                    goaldescription: e.target.value,
                  }))
                }
              ></textarea>
              {error.goaldescription !== "" && (
                <p className="text-danger">{error.goaldescription}</p>
              )}
            </div>
          </div>
          <div className="w-100">
            <p className="mb-1">No. of Milestones</p>
            <FormControl variant="filled" className="w-100 purple">
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={textBox.length}
                className=""
                onChange={(e) => {
                  handleSelectChange(e);
                }}
              >
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <p>Activity Box</p>
        <div className="rounded-4 bg-purple p-3 min-vh-50">
          {textBox[mileValue].map((val, index) => (
            <div key={index} style={{ maxHeight: "50vh", overflowY: "auto" }}>
              <div className="d-md-flex justify-content-between align-items-center w-100 py-3">
                <h5 className="fw-bold ms-3 mb-4 mb-md-0 ms-md-4">
                  Milestone {mileValue + 1}
                </h5>
                <div className="ms-3 ms-md-0">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Deadline Date"
                      value={val.date}
                      onChange={(e) => {
                        let initialBoxes = [...textBox];
                        initialBoxes[mileValue][0].date = e;
                        setTextBox(initialBoxes);
                      }}
                      renderInput={(params) => (
                        <TextField
                          variant="filled"
                          sx={{ bgcolor: "#ffffff" }}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="Reminder Alarm"
                    value={val.time}
                    onChange={(newValue) => {
                      let initialBoxes = [...textBox];
                      initialBoxes[mileValue][0].time = newValue;
                      setTextBox(initialBoxes);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="filled"
                        sx={{
                          bgcolor: "#ffffff",
                          mr: { md: "20px" },
                          ml: { xs: "16px", md: "0px" },
                          mt: { xs: "16px", md: "0px" },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>

              {val.tasks.map((task, keyy) => (
                <div
                  className="d-flex flex-column justify-content-between align-items-center mx-3"
                  key={keyy}
                >
                  <div className="d-flex align-items-center w-100">
                    <div className="form-floating my-3 w-100">
                      <input
                        type="text"
                        value={task}
                        className="form-control curve"
                        id="floatingInput"
                        onChange={(e) => {
                          let theB = [...textBox];
                          theB[mileValue][0].tasks[keyy] = e.target.value;
                          setTextBox(theB);
                        }}
                      />
                      <label className="text-dark" htmlFor="floatingInput">
                        Task {keyy + 1}
                      </label>
                    </div>
                    {keyy === 0 ? (
                      <IconButton
                        sx={{ color: "white" }}
                        aria-label="add textbox"
                        component="span"
                        onClick={() => {
                          if (textBox[mileValue][0].tasks.length < 10) {
                            const newBox = [...textBox];
                            newBox[mileValue][0].tasks.push("");
                            setTextBox(newBox);
                          }
                        }}
                      >
                        <AddCircleIcon />
                      </IconButton>
                    ) : (
                      <IconButton
                        sx={{ color: "#ff7070" }}
                        aria-label="add textbox"
                        component="span"
                        onClick={() => {
                          const newBox = [...textBox];
                          newBox[mileValue][0].tasks.splice(keyy, 1);
                          setTextBox(newBox);
                        }}
                      >
                        <CancelIcon />
                      </IconButton>
                    )}
                  </div>
                </div>
              ))}
              <div>
                <div
                  className="d-flex justify-content-end mt-md-3"
                  style={{ "&:hover": { transform: " scale(1.5) " } }}
                >
                  {mileValue !== 0 && (
                    <Button
                      className="bg-white purple mx-2 mb-3"
                      variant="contained"
                      onClick={() => {
                        if (mileValue !== 0) {
                          setMileValue((pre) => pre - 1);
                        }
                      }}
                    >
                      Back
                    </Button>
                  )}
                  {mileValue < textBox.length - 1 && (
                    <Button
                      className="bg-white purple mx-3 mb-3"
                      variant="contained"
                      onClick={() => {
                        setMileValue((pre) => pre + 1);
                      }}
                    >
                      Next
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
          {mileValue === textBox.length - 1 && (
            <div className="d-flex pt-4 justify-content-end">
              <Button
                ref={submitButtonRef}
                variant="contained"
                className="bg-white purple"
                onClick={handleSubmit}
              >
                SUBMIT
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
