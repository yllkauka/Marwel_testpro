import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";

export const Question2 = () => {
  const { likeType, setLikeType } = useContext(MyContext);
  let navigate = useNavigate();
  const handleSubmit = () => {
    if (likeType === "comics" || "series" || "stories") {
      navigate("/result");
    } else {
      alert("Please Choose valid type For Example: comics, series, stories");
    }
  };

  const handleChange = (e) => {
    setLikeType(e.target.value);
  };

  return (
    <div className="question1-box">
      <div className="input-box">
        <div className="input-card">
          <h2 className="my-3">What do you like more:</h2>
          <input
            name="like"
            value={likeType}
            onChange={handleChange}
            placeholder="comics, series or stories?"
            className="input-ques-1 m-3"
            type="text"
          />
          <button
            onClick={handleSubmit}
            type="button"
            className="shadow m-3 btn-start"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
