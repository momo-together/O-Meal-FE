"use client";

import clsx from "clsx";
import { useState } from "react";
import ScrapIcon from "@/assets/icons/scrap.svg";
import Button from "@/components/ui/button/button/Button";

interface ScrapButtonProps {
  /** 조회 수 */
  viewCount: number;
}

const ScrapButton = ({ viewCount }: ScrapButtonProps) => {
  const [isScrapped, setIsScrapped] = useState(false);
  const changeCount = () => {
    setIsScrapped((prev) => !prev);
  };
  const displayedCount = isScrapped ? viewCount + 1 : viewCount;

  return (
    <div className="inline-flex items-center gap-1">
      <span className="typo-caption text-gray-400 whitespace-nowrap">{displayedCount}회</span>
      <Button variant="tertiary" aria-label="스크랩" onClick={changeCount}>
        <div className={clsx("flex justify-center items-center w-4 h-4", isScrapped ? "text-primary-point [&_path]:fill-primary-point" : "text-gray-400")}>
          <ScrapIcon />
        </div>
      </Button>
    </div>
  );
};

export default ScrapButton;
