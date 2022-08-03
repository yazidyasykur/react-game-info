import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { gameDetails } from "../services/GetData";
import ByCategoryList from "./ByCategory";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DetailGame = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    gameDetails(id).then((data) => setData(data));
  }, []);

  return (
    <div>
      <Navbar />

      <div className="text-white">
        <div className="card-container ml-20 mr-20 text-white m-3 flex border-2 p-4 gap-4 ">
          <div className="detail-image w-50 ">
            <img
              src={`https://www.freetogame.com/g/${data.id}/thumbnail.jpg`}
              alt=""
              className="object-contain md:object-scale-down min-w-full min-h-full hover:brightness-75"
            />
          </div>
          <div className="description">
            <ul className="flex flex-col gap-2">
              <h1 className="uppercase mb-6">{data.title}</h1>
              <li>Platform: {data.platform}</li>
              <li>Genre: {data.genre}</li>
              <li>Release Date: {data.release_date}</li>
              <li>Publisher: {data.publisher} </li>
              <li>Developer: {data.developer} </li>
            </ul>
          </div>
        </div>
        <h1 className="ml-20 mr-20">You Might like</h1>
        <ByCategoryList category={data.genre} propsData={data} />
      </div>
      <Footer />
    </div>
  );
};

export default DetailGame;
