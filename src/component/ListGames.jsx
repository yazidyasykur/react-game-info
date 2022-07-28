import { listGames } from "../services/GetData";
import { useEffect, useState } from "react";
import CardList from "./Carousel";

const ListGamesShow = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    listGames().then((data) => setData(data));
  }, []);

  return <div></div>;
};

export default ListGamesShow;
