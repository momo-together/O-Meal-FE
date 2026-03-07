"use client";

import BounceScale from "@/components/animation/BounceScale";
import Button from "@/components/ui/button/button/Button";
import LikeIcon from "@/assets/icons/like.svg";
import clsx from "clsx";
import { useState } from "react";

interface LikeSectionProps {
  initialLiked: boolean;
}

const LikeSection = ({ initialLiked }: LikeSectionProps) => {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const toggleIsLiked = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <Button
      variant="tertiary"
      aria-label={isLiked ? "좋아요 취소" : "좋아요"}
      aria-pressed={isLiked}
      onClick={toggleIsLiked}
      className="shrink-0"
    >
      <BounceScale
        isActive={isLiked}
        className={clsx(
          "flex size-6 items-center justify-center",
          isLiked
            ? "text-status-error [&_path]:fill-status-error"
            : "text-gray-400"
        )}
      >
        <LikeIcon aria-hidden="true" />
      </BounceScale>
    </Button>
  );
};

export default LikeSection;
