import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find the user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1682685796186-1bb4a5655653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="userChatInfo">
          <span>Mine</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
