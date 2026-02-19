"use client";

import { useState } from "react";
import HashtagButton from "@/components/specific/hashtag/hashtagButton/HashtagButton";
import SearchBar from "@/components/ui/searchBar/SearchBar";

interface SearchSectionProps {
  /** 필터 해시태그 목록 (최대 10개) */
  hashtags: string[];
}

const SearchSection = ({ hashtags }: SearchSectionProps) => {
  const [searchValue, setSearchValue] = useState("");

  const displayedHashtags = hashtags.slice(0, 10);

  return (
    <div className="flex flex-col gap-4">
      <SearchBar value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="검색어를 입력하세요." />
      <ul className="flex gap-2 overflow-x-auto scrollbar-hide" aria-label="필터 해시태그">
        {displayedHashtags.map((tag, index) => (
          <li key={tag} className="shrink-0">
            <HashtagButton text={tag} isSelected={index === 0} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSection;
