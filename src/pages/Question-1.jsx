import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";

export const Question1 = () => {
const { name, setName } = useContext(MyContext);  

  let navigate = useNavigate();
  
  const handleNext = () => {
    if(!name) return alert("Please Enter your name")
    navigate("/question-2");
  };

  const handleChange = (e) => {
    setName(e.target.value)
    console.log(name)
  }

  return (
    <div className="question1-box">
      <div className="input-box">
        <div className="input-card">
          <h2 className="my-3">Enter Your Name:</h2>

          <input
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="input-ques-1 m-3"
            type="text"
          />
          <button
            onClick={handleNext}
            type="button"
            className="shadow m-3 btn-start"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
