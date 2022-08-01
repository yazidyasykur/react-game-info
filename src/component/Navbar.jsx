import Logo from "../asets/Epic.png";
import { MenuIcon, XIcon, UserIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOutFromApps, auth } from "../auth/firebase";
import { onAuthStateChanged } from "firebase/auth";

// import NavbarSM from "./SideBarDropDown";

const NavbarSM = () => {
  return (
    <div className="flex absolute justify-end w-full h-auto md:hidden mt-16 top-0 border-t-[1px] overflow-y-hidden z-10 ">
      {/* Menu when display below 720px */}
      <div className=" flex flex-col side-bar-dropdown bg-[#2a2a2a] justify-between min-w-[240px]">
        <div>
          <ul className="flex flex-col text-[#E7E7E7] justify-items-center">
            <li className="border-b-[1px] p-3 border-gray-500 transition delay-75 hover:bg-[#1d1d1d]">
              Home
            </li>
            <li className="border-b-[1px] p-3 border-gray-500 transition delay-75 hover:bg-[#1d1d1d]">
              Faq
            </li>
            <li className="border-b-[1px] p-3 border-gray-500 transition delay-75 hover:bg-[#1d1d1d]">
              Help
            </li>
            <li className="border-b-[1px] p-3 border-gray-500 transition delay-75 hover:bg-[#1d1d1d]">
              About us
            </li>
          </ul>
        </div>
        <div className="HeaderRight flex items-center m-3 ">
          <div className="flex text-red-500 p-2 gap-1 border-2 border-gray-500 text-sm transition delay-75 hover:bg-[#1d1d1d]">
            <UserIcon className="h-4 w-4 text-grey-500 cursor-pointer" />
            <Link to={"/login"}>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
    return unsubscribe;
  }, []);

  const [isLogin, setIsLogin] = useState();
  // const user = auth.currentUser.email;

  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async () => {
    await signOutFromApps();

    navigate("/login");
  };

  const [isOpen, setIsOpen] = useState(true);

  const toggle = (val) => {
    setIsOpen(!val);
  };

  return (
    <div className="Header bg-[#2a2a2a] pr-3 max-w-full min-w-[360px] flex justify-between h-16 items-center overflow-x-auto">
      {/* header kiri */}
      <div className="HeaderLeft flex pl-4 ">
        <div className="MenuItem flex">
          <Link to={"/"}>
            <img src={Logo} alt="main-logo" className="w-8 h-12 self-center" />
          </Link>
          <ul className="flex text-[#E7E7E7] gap-4 p-4 invisible md:visible">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/"}>
              <li>Faq</li>
            </Link>
            <Link to={"/"}>
              <li>Help</li>
            </Link>
            <Link to={"/"}>
              <li>About us</li>
            </Link>
          </ul>
        </div>
      </div>
      {/* Header Kanan */}
      <div className="HeaderRight flex items-center justify-flex-end ">
        <ul className="flex text-white p-4 invisible md:visible ">
          <li>{user.email}</li>
          <li>
            <UserIcon className="h-6 w-6 text-white cursor-pointer" />
          </li>
          {/* <button onClick={() => setIsLogin(!isLogin)}></button> */}

          <button onClick={buttonLogoutOnClickHandler}>Logout</button>
        </ul>

        <MenuIcon
          className="h-8 w-8 text-white md:hidden cursor-pointer relative "
          onClick={() => toggle(isOpen)}
        />
        <XIcon className="h-8 w-8 text-white md:hidden cursor-pointer hidden" />
      </div>
      {isOpen && <NavbarSM />}
    </div>
  );
};

export default Navbar;
