import { byCategory } from "../services/GetData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ByCategoryList = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    byCategory().then((data) => setData(data));
    setCategory(
      data
        .map((item) => ({ category: item.genre }))
        .find((item) => item.id === parseInt(id))
    );
    console.log(id);
  }, []);

  return (
    <div className="text-white">
      <h1>Helloworld</h1>
      <h1></h1>
    </div>
  );
};

export default ByCategoryList;
