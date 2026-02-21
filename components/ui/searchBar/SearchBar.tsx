"use client";

import type { ChangeEvent, InputHTMLAttributes } from "react";
import SearchIcon from "@/assets/icons/search.svg";

interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  /** 검색어 변경 핸들러. InputHTMLAttributes의 optional onChange를 required로 재선언. */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ ...restProps }: SearchBarProps) => {
  return (
    <div className="inline-flex justify-center items-center gap-4 text-gray-400 bg-bg-white w-full py-3 px-7 rounded-full focus-within:ring-2 focus-within:ring-primary-base">
      <div aria-hidden="true">
        <SearchIcon className="w-5 h-5" />
      </div>
      <input type="search" aria-label="검색" className="flex-1 text-gray-900 focus-visible:outline-none text-body2" {...restProps} />
    </div>
  );
};

export default SearchBar;
