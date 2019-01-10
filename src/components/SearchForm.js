import React from "react";
import Hog from "./Hog";

const SearchForm = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="search piggy by name"
        // value={props.value}
        onChange={props.changeHandler}
      />
    </div>
  );
};

export default SearchForm;
