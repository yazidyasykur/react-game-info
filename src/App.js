import logo from "./logo.svg";

import Navbar from "./component/Navbar";
import SearchAndDiscover from "./component/SearchAndDiscover";
import getData from "./services/GetData";
import AcquireData from "./component/Button";
import Footer from "./component/Footer"
import CardList from "./component/Carousel"

const App = () => {
  return (
    <div className="">
      <Navbar />
      <SearchAndDiscover />
      <CardList />
      {/* <NavbarSM /> */}
<<<<<<< HEAD
      <AcquireData />
=======
      {/* <AcquireData /> */}
      <Footer />
>>>>>>> e778accda5764c3bc55a14e5d03e1cf2aa1fdfa4
    </div>
  );
};

export default App;
