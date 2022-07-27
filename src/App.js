import logo from "./logo.svg";

import Navbar from "./component/Navbar";
import SearchAndDiscover from "./component/SearchAndDiscover";
import getData from "./services/GetData";
import AcquireData from "./component/Button";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <SearchAndDiscover />
      {/* <NavbarSM /> */}
      {/* <AcquireData /> */}
    </div>
  );
};

export default App;
