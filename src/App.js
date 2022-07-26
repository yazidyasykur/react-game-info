import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import NavbarSM from "./component/SideBarDropDown";

const App = () => {
  return (
    <div>
      <NavbarSM />
      <Navbar />
    </div>
  );
};

export default App;
