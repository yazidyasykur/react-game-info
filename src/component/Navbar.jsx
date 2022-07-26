import Logo from "../asets/Epic.png";
import { MenuIcon, XIcon, UserIcon } from "@heroicons/react/solid";
import { useState } from "react";

const NavbarSM = () => {
  return (
    <div className="flex absolute justify-end w-full h-full overflow-x-auto  ">
      {/* Menu when display below 720px */}
      <div className="side-bar-dropdown bg-[#2a2a2a] min-w-[320px] p-2">
        <div>
          <ul className="flex flex-col text-[#ccc] gap-4 min-w-[320px] ">
            <li className="border-b-[1px]">Home</li>
            <li className="border-b-[1px]">Faq</li>
            <li className="border-b-[1px]">Help</li>
            <li className="border-b-[1px]">About us</li>
            <li className="border-b-[1px]">About us</li>
          </ul>
        </div>
        <div className="HeaderRight flex items-center">
          <ul className="flex text-red-500 p-2  ">
            <UserIcon className="h-8 w-8 text-grey-500  cursor-pointer" />
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    </div>
    // <div className="flex absolute items-center flex-col w-[50%]  r-0 md:hidden">
    //   {/* header kiri */}
    //   <div className="HeaderLeft flex ">
    //     <div className="MenuItem flex">
    //       <ul className="flex flex-col text-black gap-4  md:hidden">
    //         <li>Home</li>
    //         <li>Faq</li>
    //         <li>Help</li>
    //         <li>About us</li>
    //       </ul>
    //     </div>
    //   </div>
    //   {/* Header Kanan */}
    //   <div className="HeaderRight flex">
    //     <ul className="flex text-black p-2  ">
    //       <li>Sign In</li>
    //       <XIcon className="h-8 w-8 text-white md:hidden cursor-pointer" />
    //     </ul>
    //   </div>
    // </div>
  );
};

const Navbar = () => {
  const [dropSide, setDropSide] = useState(false);

  const toggle = (val) => {
    setDropSide(!val);
  };

  return (
    <div className="Header bg-[#2a2a2a] w-full min-w-[680px] flex justify-between h-[4rem] items-center p-4">
      {/* header kiri */}
      <div className="HeaderLeft flex ">
        <div className="MenuItem flex">
          <img src={Logo} alt="main-logo" className="w-8 h-12 self-center" />
          <ul className="flex text-[#ccc] gap-4 p-4 invisible md:visible">
            <li>Home</li>
            <li>Faq</li>
            <li>Help</li>
            <li>About us</li>
          </ul>
        </div>
      </div>
      {/* Header Kanan */}
      <div className="HeaderRight flex items-center">
        <ul className="flex text-white p-2 invisible md:visible ">
          <UserIcon className="h-8 w-8 text-white  cursor-pointer" />
          <li>Sign In</li>
        </ul>

        <MenuIcon
          className="h-8 w-8 text-white md:hidden cursor-pointer "
          onClick={() => toggle(dropSide)}
        />
        <XIcon className="h-8 w-8 text-white md:hidden cursor-pointer hidden" />
      </div>
      {dropSide && <NavbarSM />}
    </div>
  );
};

export default Navbar;
