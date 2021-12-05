// Build searchbar in video
// use API files instead of the JSON in the video
// the API files have all of the axios for 'GET'-ting data
import React from "react";
import Users from "../APIs/user";
import { useState } from "react";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Searching..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {/*
      {this.state.data.filter(val) => {
            if (searchTerm == '' {
              return val;
            } else if (val.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            } */}
    </div>
  );
};

export default Searchbar;
