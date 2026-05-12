import { SearchIcon } from "lucide-react";
import React, { useState } from "react";

export default function Search({ query, setQuery, placeholder }) {
  return (
    <div className="relative w-full">
      <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5" />
      <input
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-400 rounded-lg bg-white shadow-md w-full h-10 focus:outline-none pl-10"
      />
    </div>
  );
}
