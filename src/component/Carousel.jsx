import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { listGames } from "../services/GetData";

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

function Card(props) {
    return (
        <div className="text-white m-3">
            <div className="flex flex-col items-center gap-2 mr-2 rounded-lg min-w-[300px] text-white border-2">
                <img
                    src={`https://www.freetogame.com/g/${props.id}/thumbnail.jpg`}
                    className="max-h-[300px] object-fill"
                />
                {/* <div>{props.title} </div> */}
            </div>
        </div>
    );
}

function CardCarousel() {

    const [data, setData] = useState([]);

    useEffect(() => {
        listGames().then((data) => setData(data.slice(0,20)));
    }, []);

    const list = data.map(game => <Card key={game.id} title={game.title} id={game.id}/>)

    return (
        <Carousel responsive={responsive}>
            {list}
        </Carousel>
    )
}

export default CardCarousel;
