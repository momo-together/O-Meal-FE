"use client";

import clsx from "clsx";
import { useState } from "react";
import ScrapIcon from "@/assets/icons/scrap.svg";
import BounceScale from "@/components/animation/BounceScale";
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
    <div className="inline-flex items-end gap-1">
      <span className="typo-caption text-gray-400 whitespace-nowrap">{displayedCount}회</span>
      <Button variant="tertiary" aria-label="스크랩" onClick={changeCount}>
        <BounceScale
          isActive={isScrapped}
          className={clsx("flex justify-center items-center w-5 h-5", isScrapped ? "text-status-review [&_path]:fill-status-review" : "text-gray-400")}
        >
          <ScrapIcon />
        </BounceScale>
      </Button>
    </div>
  );
};

export default ScrapButton;
