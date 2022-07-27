import Logo from "../asets/Epic.png";
import { MenuIcon, XIcon, UserIcon } from "@heroicons/react/solid";
import { useState } from "react";
// import NavbarSM from "./SideBarDropDown";

const NavbarSM = () => {
  return (
    <div className="flex absolute justify-end w-screen min-w-[360px] h-screen md:hidden mt-16 top-0 border-t-[1px] overflow-y-hidden">
      {/* Menu when display below 720px */}
      <div className=" flex flex-col side-bar-dropdown bg-[#2a2a2a] justify-between min-w-[320px] p-2">
        <div>
          <ul className="flex flex-col text-[#E7E7E7] gap-4 ">
            <li className="border-b-[1px] border-gray-500">Home</li>
            <li className="border-b-[1px] border-gray-500">Faq</li>
            <li className="border-b-[1px] border-gray-500">Help</li>
            <li className="border-b-[1px] border-gray-500">About us</li>
          </ul>
        </div>
        <div className="HeaderRight flex items-center">
          <ul className="flex text-red-500 p-2 border-2 border-gray-500 align  ">
            <UserIcon className="h-8 w-8 text-grey-500  cursor-pointer" />
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [dropSide, setDropSide] = useState(false);

  const toggle = (val) => {
    setDropSide(!val);
  };

  return (
    <div className="Header bg-[#2a2a2a] max-w-full min-w-[360px] flex justify-between h-16 items-center overflow-x-auto">
      {/* header kiri */}
      <div className="HeaderLeft flex pl-4 ">
        <div className="MenuItem flex">
          <img src={Logo} alt="main-logo" className="w-8 h-12 self-center" />
          <ul className="flex text-[#E7E7E7] gap-4 p-4 invisible md:visible">
            <li>Home</li>
            <li>Faq</li>
            <li>Help</li>
            <li>About us</li>
          </ul>
        </div>
      </div>
      {/* Header Kanan */}
      <div className="HeaderRight flex items-center justify-flex-end ">
        <ul className="flex text-white p-4 invisible md:visible ">
          <li>
            <UserIcon className="h-6 w-6 text-white  cursor-pointer" />
          </li>
          <li>Sign In</li>
        </ul>

        <MenuIcon
          className="h-8 w-8 text-white md:hidden cursor-pointer relative "
          onClick={() => toggle(dropSide)}
        />
        <XIcon className="h-8 w-8 text-white md:hidden cursor-pointer hidden" />
      </div>
      {dropSide && <NavbarSM />}
    </div>
  );
};

export default Navbar;
