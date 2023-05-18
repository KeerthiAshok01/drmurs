import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox({ results, setResults }) {
  const [searchValue, setSearchValue] = useState(null);
  return (
    <div
      className="bg-hash rounded-pill"
    //   onClick={()=>{searchValue!="" && setResults(true)}}
      style={{
        width: "26vw",
      }}
    >
      <Box
        className="px-2"
        sx={{
          display: "flex",
          alignItems: "flex-end",
          height: "3.7vh",
        }}
      >
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          className="col-11 px-2"
          placeHolder="Search friends, post, events.."
          variant="standard"
          color="secondary"
          onChange={(e) => {
            setResults(true);
            setSearchValue(e.target.value);
          }}
        />
      </Box>
      {results && searchValue != "" && (
        <div
          className="bg-search-box col-5 position-absolute p-3 mt-1"
          style={{
            width: "26vw",
            maxHeight: "95vh",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <div
            className="p-2 d-flex justify-content-between align-items-center bg-white my-2"
            style={{ borderRadius: 10, border: "2px solid #a11fc9" }}
          >
            <div className="d-flex justify-content-start align-items-center">
              <div className="p-3 rounded-circle bg-purple"></div>
              <div className="purple ms-2">Wilson Raj</div>
            </div>
            <div
              className="bg-purple px-2 me-2 col-3 text-center"
              style={{ borderRadius: 7 }}
            >
              Visit
            </div>
          </div>
          <div
            className="p-2 d-flex justify-content-between align-items-center bg-white my-2"
            style={{ borderRadius: 10, border: "2px solid #a11fc9" }}
          >
            <div className="d-flex justify-content-start align-items-center">
              <div className="p-3 rounded-circle bg-purple"></div>
              <div className="purple ms-2">Jaya surya</div>
            </div>
            <div
              className="bg-white px-2 me-2 col-3 text-center"
              style={{ borderRadius: 7, border: "2px solid #a11cf9" }}
            >
              Follow
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBox;
