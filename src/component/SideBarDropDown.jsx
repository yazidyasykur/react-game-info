import { UserIcon } from "@heroicons/react/solid";

const NavbarSM = () => {
  return (
    <div className="flex absolute justify-end w-screen right-0 h-[100%]  ">
      {/* Menu when display below 720px */}
      <div className=" flex flex-col side-bar-dropdown bg-[#2a2a2a] justify-between min-w-[320px] p-2">
        <div>
          <ul className="flex flex-col text-[#ccc] gap-4 min-w-[320px] ">
            <li className="border-b-[1px] border-gray-500">Home</li>
            <li className="border-b-[1px] border-gray-500">Faq</li>
            <li className="border-b-[1px] border-gray-500">Help</li>
            <li className="border-b-[1px] border-gray-500">About us</li>
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

export default NavbarSM;
