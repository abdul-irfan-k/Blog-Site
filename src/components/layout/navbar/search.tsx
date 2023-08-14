"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div>
      <div className="font-medium text-2xl">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
};

export default Search;
