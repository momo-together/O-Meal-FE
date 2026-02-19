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
  const [selectedHashtags, setSelectedHashTags] = useState<Record<string, boolean>>(() => Object.fromEntries(hashtags.map((tag) => [tag, false])));

  const toggleSelectedHashtags = (selectedItem: string) => {
    setSelectedHashTags((prev) => ({
      ...prev,
      [selectedItem]: !prev[selectedItem],
    }));
  };

  const displayedHashtags = hashtags.slice(0, 10);

  return (
    <div className="flex flex-col gap-4">
      <SearchBar value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="검색어를 입력하세요." />
      <ul className="flex flex-wrap gap-2 overflow-hidden" aria-label="필터 해시태그">
        {displayedHashtags.map((tag) => (
          <li key={tag}>
            <HashtagButton text={tag} isSelected={selectedHashtags[tag]} onClick={() => toggleSelectedHashtags(tag)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSection;
