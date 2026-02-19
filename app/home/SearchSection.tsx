"use client";

import { type ChangeEvent, useState } from "react";
import SearchBar from "@/components/ui/searchBar/SearchBar";

const SearchSection = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <SearchBar placeholder="검색어를 입력하세요." value={value} onChange={handleChange} />;
};

export default SearchSection;
