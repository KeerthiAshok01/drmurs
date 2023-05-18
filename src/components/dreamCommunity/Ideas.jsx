import { useState } from "react";
import { useDispatch } from "react-redux";
import { addIdea } from "../../slices/queryMaker";

export default function Ideas({ data, publicQueryId }) {
  const dispatch = useDispatch();
  const [userIdea, setUserIdea] = useState("");
  const selectedQuery = data.find((val) => val.id === publicQueryId);
  function handleSubmit() {
    dispatch(
      addIdea({
        idea: userIdea,
        id: publicQueryId,
      })
    );
    setUserIdea("");
  }
  return (
    <>
      <div className="d-flex align-justify-center">
        <div>
          <h2 className="purple">{selectedQuery.query}</h2>
          {selectedQuery.sug.map((val) => (
            <h4 className="ms-md-1">{val}</h4>
          ))}
          <input
            value={userIdea}
            type="text"
            className="form-control mt-5"
            id="exampleFormControlInput1"
            placeholder="Enter your Idea"
            onChange={(e) => setUserIdea(e.target.value)}
          />
          <button className="btn bg-purple mt-3" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
