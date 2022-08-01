import Navbar from "./Navbar";
import Footer from "./Footer";
import CardCarousel from "./Carousel";
import epic from "../asets/Epic.png";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { listGames } from "../services/GetData";

const DetailGameCard = () => {
  return (
    <div className="text-white">
      <div className="card-container ml-20 mr-20 text-white m-3 flex border-2 p-4 gap-4 justify-between">
        <div className="detail-image w-50 ">
          <img
            src={`https://www.freetogame.com/g//thumbnail.jpg`}
            alt=""
            className="object-fill min-w-full "
          />
        </div>
        <div className="description">
          <ul className="flex flex-col gap-2">
            <h1 className="uppercase mb-6"></h1>
            <li>Platform: </li>
            <li>Release Date: </li>
            <li>Publisher: </li>
            <li>Developer: </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const DetailGame = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    listGames().then((data) => setData(data.slice(0, 20)));
  }, []);

  console.log(data[0].title);

  function getGames(gamesId) {
    return data.find((game) => game.id === gamesId);
  }

  const [game, setGames] = useState([]);

  let params = useParams();

  console.log(params);

  useEffect(() => {
    const chosenGame = getGames(params.gamesId);
    setGames(chosenGame);
  }, []);

  console.log(game?.title);

  return (
    <div>
      <div></div>
      <Navbar />;
      <DetailGameCard />
      <CardCarousel />
      <Footer />
    </div>
  );
};

export default DetailGame;
