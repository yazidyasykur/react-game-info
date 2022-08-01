import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CardCarousel from "../component/Carousel";
import SearchAndDiscover from "../component/SearchAndDiscover";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchAndDiscover />
      <CardCarousel />
      <Footer />;
    </div>
  );
};

export default Home;
