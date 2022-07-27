import logo from "./logo.svg";

import Navbar from "./component/Navbar";
import SearchAndDiscover from "./component/SearchAndDiscover";
import getData from "./services/GetData";
import AcquireData from "./component/Button";
import Footer from "./component/Footer"

const App = () => {
  return (
    <div className="">
      <Navbar />
      <SearchAndDiscover />
      {/* <NavbarSM /> */}
      {/* <AcquireData /> */}
      <Footer />
    </div>
  );
};

export default App;
