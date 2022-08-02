import Navbar from "./Navbar";
import Footer from "./Footer";
import CardCarousel from "./Carousel";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { byCategory, gameDetails } from "../services/GetData";

const DetailGameCard = () => {
  const [game, setGames] = useState({});

  let {id} = useParams();

  console.log(id);

  useEffect(() => {
    gameDetails(id).then((data) => setGames(data));
  }, []);


  console.log(game)
  return (
    <div className="text-white">
      <div className="card-container ml-20 mr-20 text-white m-3 flex border-2 p-4 gap-4 justify-between">
        <div className="detail-image w-50 ">
          <img
            src={`https://www.freetogame.com/g/${game.id}/thumbnail.jpg`}
            alt=""
            className="object-fill min-w-full "
          />
        </div>
        <div className="description">
          <ul className="flex flex-col gap-2">
            <h1 className="uppercase mb-6"></h1>
            <li>Platform: {game.title}</li>
            <li>Release Date: {game.release_date}</li>
            <li>Publisher: {game.publisher}</li>
            <li>Developer: {game.developer}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// export function GetGames(gamesId) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     listGames().then((data) => setData(data.slice(0, 20)));
//   }, []);
//   return data.find((game) => game.id === gamesId);
// }

const DetailGame = () => {
  return (
    <div>
      <Navbar />;<DetailGameCard />
      <CardCarousel />
      <Footer />
    </div>
  );
};

export default DetailGame;
