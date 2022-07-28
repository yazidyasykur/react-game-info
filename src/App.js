import logo from "./logo.svg";

import Navbar from "./component/Navbar";
import SearchAndDiscover from "./component/SearchAndDiscover";
import getData from "./services/GetData";
import AcquireData from "./component/Button";
import Footer from "./component/Footer";
import CardList from "./component/Carousel";
import ListGamesShow from "./component/ListGames";
import data from "./data/data.json";

const App = () => {
  return (
    <div className="App min-w-[360px]">
      <Navbar />
      {/* <SearchAndDiscover /> */}

      {/* <CardList /> */}
      {/* <NavbarSM /> */}
      {/* <ListGamesShow /> */}
      <AcquireData />
      <Footer />
    </div>
  );
};

export default App;
