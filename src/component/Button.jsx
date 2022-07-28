import { useEffect, useState } from "react";
import { gameDetails, listGames } from "../services/GetData";
import Card from "./Carousel";
import DataGames from "../data/data.json";

function AcquireData({}) {
  const [data, setData] = useState([]);
  // const [toggle, setToggle] = useState(false);

  useEffect(() => {
    listGames().then((data) => setData(data));
  }, []);

  // console.log(data.slice(2));

  return (
    <div className="overflow-x-auto">
      {data.map((games) => {
        return (
          <Card key={games.id} propsGames={games}>
            {games.title}
          </Card>
        );
      })}
      {/* <button
        // onClick={handleClick}
        className="bg-slate-200 p-2 border-slate-800 border-solid border active:bg-slate-900"
      ></button> */}
      {/* {data[0].title} */}
    </div>
  );
}

export default AcquireData;
