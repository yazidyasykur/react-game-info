import {listGames, randomize } from "../services/GetData";
import { useState, useEffect} from "react";


function CategoryItems(props){
  return(
    <div>
      <img src={props.thumbnail} key={props.id} alt={props.id} className="max-h-28"/>
    </div>
  )
}

const ByCategoryList = (props) => {
  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
   listGames().then((items) => setListCategory(randomize(items.filter(item => item.genre.toLowerCase()==props.category.toLowerCase()),20)))
  }, []);

  console.log(listCategory)
  return (
    <div className="grid grid-cols-5 grid-flow-row my-6 mx-20 gap-3">
      {listCategory.map(items => <CategoryItems thumbnail={items.thumbnail} id={items.id}/>)}
    </div>
  );
};

export default ByCategoryList;
