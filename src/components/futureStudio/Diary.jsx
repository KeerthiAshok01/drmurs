import { useState } from "react";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { addDiaryContent } from "../../slices/futureStudioSlice";

export default function Diary() {
  const [values, setValues] = useState({
    title: "",
    date: "",
    description: "",
  });
  const data = useSelector((state) => state.futureStudio);
  const [addDiary, setAddDiary] = useState(false);
  const [viewDiary, setViewDiary] = useState(false);
  const [diaryIndex, setDiaryIndex] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setAddDiary(false);
    dispatch(
      addDiaryContent({
        title: values.title,
        date: values.date,
        description: values.diary,
      })
    );
  };

  const ViewStory = ({ i }) => {
    const story = data[i];
    return (
      <div
        className="col-9 mx-auto my-3 bg-purple rounded-3 p-4"
        style={{ boxShadow: "0px 0px 5px grey" }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="fw-bold text-white h5">
            {story.title ? story.title : "Untitled"}
          </div>
          <CloseIcon
            className="ms-auto"
            style={{ fontSize: 20 }}
            onClick={() => setViewDiary(false)}
          />
        </div>
        <div className="">{story.date}</div>
        <div className="col-12 rounded-3">{story.description}</div>
      </div>
    );
  };

  const AddDiary = () => {
    return (
      <div
        className="col-12 mx-auto rounded-3 my-5 bg-purple p-5"
        style={{ boxShadow: "0px 0px 5px grey" }}
      >
        <div className="col-12 d-flex align-items-center justify-content-between">
          <div className="fw-bold text-white h6">Title</div>
          <CloseIcon
            className="mb-3"
            style={{ fontSize: 20 }}
            onClick={() => setAddDiary(false)}
          />
        </div>
        <div className="col-12 d-flex align-items-center justify-content-between">
          <input
            type="text"
            placeHolder="Add a title to this story"
            className="w-100 bg-white rounded-3 p-2"
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          ></input>
        </div>
        <div className="fw-bold text-white h6 mt-3">Story</div>
        <textarea
          rows={12}
          type="text"
          placeHolder="Write something..."
          className="col-12 bg-white rounded-3 p-2"
          value={values.description}
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
        ></textarea>
        <div className="col-12 d-flex flex-column justify-content-end align-items-end">
          <Button
            className="col-2 bg-white purple text-center rounded-3 fw-bold shadow p-2 me-2"
            onClick={handleSubmit}
            type="button"
          >
            Add
          </Button>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="container my-4">
        {!addDiary && (
          <>
            <div className="d-flex justify-content-start justify-content-md-between">
              <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Calendar"
                    value={values.date === "" ? null : values.date}
                    onChange={(e) => setValues({ ...values, date: e })}
                    renderInput={(params) => (
                      <TextField
                        variant="filled"
                        className="p-1"
                        sx={{ bgcolor: "#ffffff" }}
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
              <div>
                <button
                  type="button"
                  className="btn bg-purple p-2 ms-5 mt-md-2"
                  onClick={() => {
                    setAddDiary(true);
                    setViewDiary(false);
                  }}
                >
                  Add Diary
                </button>
              </div>
            </div>
            <p className="mt-4 purple fw-bold h4">Recent Entries</p>
            {data &&
              data[1].map((val, index) => (
                <div
                  className="d-flex flex-column justify-content-between mb-3 align-items-center"
                  key={index}
                >
                  {viewDiary && diaryIndex === index ? (
                    <ViewStory i={diaryIndex} />
                  ) : (
                    <div
                      className="bg-linear1 p-3 rounded-3 px-5 w-100"
                      style={{ boxShadow: "0px 0px 5px grey" }}
                      onClick={() => {
                        setViewDiary(true);
                        setAddDiary(false);
                        setDiaryIndex(index);
                      }}
                    >
                      <p
                        className="text-white overflow-hidden mb-0 px-3 py-1"
                        style={{ maxHeight: 70 }}
                      >
                        {val.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </>
        )}
        {addDiary && !viewDiary && <AddDiary />}
        {/* {viewDiary && <ViewStory i={diaryIndex} />} */}
      </div>
    </>
  );
}
