import { useNavigate } from "react-router-dom";

export const Home = () => {
let navigate = useNavigate();

    const handleStart = () => {
        navigate("/question-1")
    }
  return (
    <div className="home-box ">
      <button onClick={handleStart} type="button" className="shadow  btn-start">
        Start
      </button>
    </div>
  );
};
