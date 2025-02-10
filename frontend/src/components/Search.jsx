import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white w-[90%] h-[50px] mt-10 gap-2">
      <FaSearch className="text-gray-500 mr-2 text-2xl" />
      <input
        type="text"
        placeholder="Search Bar"
        className='outline-none bg-transparent w-full text-[17px] text-black placeholder-gray-400'
      />
    </div>
  );
};

export default SearchBar;
