import { useEffect, useState } from "react";
import { gameDetails, listGames } from "../services/GetData";

function AcquireData() {
  const [data, setData] = useState({});
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    listGames().then((data) => setData(data));
  }, [toggle]);

  function handleClick() {
    setToggle(!toggle);
    console.log(data);
  }

  return (
    <div className="flex flex-col gap-5">
      <button
        onClick={handleClick}
        className="bg-slate-200 p-2 border-slate-800 border-solid border active:bg-slate-900"
      >
        {data.id}
      </button>
    </div>
  );
}

export default AcquireData;
