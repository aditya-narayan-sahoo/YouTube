import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  HAMBURGER_ICON,
  USER_ICON,
  YOUTUBE_ICON,
  SEARCH_API,
} from "../utils/constants";
import { useEffect, useState } from "react";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const getSearchSuggestions = async () => {
    //console.log("API CALL - " + searchQuery);
    const data = await fetch(SEARCH_API + searchQuery);
    const response = await data.json();
    //console.log(response[1]);
    setSuggestions(response[1]);
    dispatch(cacheResult({ [searchQuery]: response[1] }));
  };
  useEffect(() => {
    /*make an api call after every key press but if the difference between 2 api calls is less
    than 200ms then decline the api call.This is done so as not to make too many API Calls.
     This is also called debouncing. */
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);

    // at every re render, a new setTimeout will be created, so it is necessary to clear this timeout.
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          src={HAMBURGER_ICON}
          alt="menu-icon"
          className="h-6 cursor-pointer mt-4"
        />
        <img
          src={YOUTUBE_ICON}
          alt="youtube-icon"
          className="h-14 cursor-pointer"
        />
      </div>
      <div className="col-span-10 px-10">
        <div className="">
          <input
            type="text"
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white ml-4 py-2 pr-4 w-[32.8rem] border border-gray-100 rounded-md">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 shadow-sm hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
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
