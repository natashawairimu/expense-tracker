import React from "react";

function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Expenses"
      value={searchTerm}
      onChange={onSearch}
    />
  );
}

export default SearchBar;