import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "../asets/Epic.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Card({ propsGames }) {
  return (
    <Carousel responsive={responsive}>
      <div className="text-white m-3">
        <h1>Latest Released Games</h1>
        <div className="flex flex-col items-center gap-2 mr-2 rounded-lg min-w-[100px] text-white border-2">
          <img
            src={`https://www.freetogame.com/g/${propsGames.id}/thumbnail.jpg`}
            className="max-h-[100px]"
          />
          <div>{propsGames.title} </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Card;