import {
  HAMBURGER_ICON,
  USER_ICON,
  YOUTUBE_ICON,
  SEARCH_ICON,
} from "../utils/constants";

const Head = () => {
  return (
    <div className="flex items-center justify-between p-2 shadow-lg bg-white">
      <div className="flex items-center space-x-4">
        <img
          src={HAMBURGER_ICON}
          alt="menu-icon"
          className="h-6 cursor-pointer -mt-1"
        />
        <img
          src={YOUTUBE_ICON}
          alt="youtube-icon"
          className="h-14 cursor-pointer"
        />
      </div>
      <div className="flex items-center w-1/2">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search"
        />
        <button className="p-[10px] bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
          <img src={SEARCH_ICON} alt="search-icon" className="h-5" />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <img
          src={USER_ICON}
          alt="user-icon"
          className="h-8 cursor-pointer mr-1"
        />
      </div>
    </div>
  );
};

export default Head;
