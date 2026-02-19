"use client";

import clsx from "clsx";
import { useState } from "react";
import LikeIcon from "@/assets/icons/like.svg";
import BounceScale from "@/components/animation/BounceScale";

interface LikeButtonProps {
  /** 좋아요 수 */
  likeCount: number;
}

const LikeButton = ({ likeCount }: LikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => setIsLiked((prev) => !prev);
  const displayedLikeCount = isLiked ? likeCount + 1 : likeCount;

  return (
    <button type="button" className="flex items-center gap-1" aria-label={`좋아요 ${displayedLikeCount}회`} aria-pressed={isLiked} onClick={toggleLike}>
      <span className="typo-caption text-gray-400" aria-live="polite">
        {displayedLikeCount}회
      </span>
      <BounceScale
        isActive={isLiked}
        className={clsx("flex justify-center items-center w-4 h-4", isLiked ? "text-status-error [&_path]:fill-status-error" : "text-gray-400")}
      >
        <LikeIcon />
      </BounceScale>
    </button>
  );
};

export default LikeButton;
