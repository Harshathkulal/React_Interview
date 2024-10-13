import React, { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      // Call your API with the debounced value
      console.log(`Searching for: ${debouncedQuery}`);
    }
  }, [debouncedQuery]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <p>Searching for: {debouncedQuery}</p>
    </div>
  );
};

export default SearchComponent;
