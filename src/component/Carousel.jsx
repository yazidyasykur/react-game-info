import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useNavigate } from "react-router-dom";

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

function Card({ propsGames }) {
  const navigate = useNavigate();

  const openDetail = (obj) => {
    navigate(`/detailgame/${propsGames.id}`);
  };

  return (
    <div className="text-white m-3">
      <div className="flex flex-col items-center gap-2 mr-2 rounded-lg min-w-[300px] text-white">
        <img
          src={`https://www.freetogame.com/g/${propsGames.id}/thumbnail.jpg`}
          className="max-h-[300px] object-fill p-2 rounded-lg cursor-pointer"
          onClick={() => {
            openDetail(propsGames);
          }}
        />
      </div>
      <div className="p-2">{propsGames.title} </div>
    </div>
  );
}

function CardCarousel(props) {

  const data = props.data.slice(0,30)
  const list = data.map((game) => (
    <div key={game.id}>
      <Card title={game.title} id={game.id} propsGames={game} />
    </div>
  ));

  return (
    <div className="pl-20 pr-20 text-white">
      <Carousel responsive={responsive}>{list}</Carousel>
    </div>
  );
}

export default CardCarousel;
