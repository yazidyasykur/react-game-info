import { SearchIcon, ChevronDownIcon } from "@heroicons/react/solid";

const SearchAndDiscover = () => {
  return (
    <div className="nav-2 flex max-w-full justify-start h-16 items-center min-w-[360px] pl-10  md:pl-40 md:pr-40 gap-4 ">
      <div className="flex bg-[#2a2a2a] rounded-xl px-2 py-1 items-center gap-2 ">
        <SearchIcon className="w-5 h-5" />
        <input
          type="text"
          name=""
          id="searchhGame"
          placeholder="Search Game"
          className="w-36 bg-[#2a2a2a] rounded-xl focus:outline-none"
        />
      </div>
      <ul className="flex text-[#f5f5f5] items-center ">
        <li>Discover</li>
        <ChevronDownIcon className="w-6 h-6 md:invisible" />
        <div className="gap-6 flex hidden md:flex">
          <li>Browse</li>
          <li>News</li>
        </div>
      </ul>
    </div>
  );
};

export default SearchAndDiscover;
