import axios from "axios";
import { useContext, useEffect } from "react";
import { MyContext } from "../App";
import { Loader } from "../components/Loader";
import logo from '../assets/marvel.jpg'

export const Result = () => {
  const { apiData, name, setApiData, likeType } = useContext(MyContext);

  const handleCardClick = (link) => {
    console.log(link)
    window.location.href = link[0].url
  }

  const fetchApi = async () => {
    await axios
      .get(
        `http://gateway.marvel.com/v1/public/${likeType ? likeType : "comics"}?ts=1&apikey=${
          import.meta.env.VITE_MARWEL_PUBLIC_API_KEY
        }&hash=${import.meta.env.VITE_MARWEL_HASH}`
      )
      .then(function (response) {
        // handle success
        const fetchData = response.data.data.results;
        console.log(fetchData);
        setApiData(fetchData);
        console.log(apiData);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const MarwelCard = ({ title, type, thumbnail, urls }) => {
    const ImageUrl = thumbnail ? thumbnail.path + `/standard_fantastic.${thumbnail.extension}` : null;
    return (
      <div
        onClick={() => handleCardClick(urls)}
        className="mx-4 my-4 marwel-card shadow rounded"
        style={{ width: "18rem" }}
      >
        <img src={ImageUrl || logo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="py-2 card-title fw-bolder">{title}</h5>
          <span className="badge bg-light text-dark">{likeType ? likeType : "comics"}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="result-body">
      <h2 className="fw-bolder text-center mt-5">Hello {name ? name : "User"}</h2>
      <div className="m-0 p-5 d-flex flex-wrap justify-content-around">
        {!apiData ? (
          <Loader/>
        ) : (
          apiData.map((item, i) => <MarwelCard key={i} {...item} />)
          
        )}
      </div>
    </div>
  );
};
