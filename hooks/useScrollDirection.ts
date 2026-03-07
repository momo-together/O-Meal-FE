"use client";

import { useEffect, useState } from "react";

interface UseScrollDirectionOptions {
  /** 스크롤 방향 감지를 위한 최소 이동 거리 (px). 미세한 스크롤을 무시한다. @default 5 */
  threshold?: number;
}

interface UseScrollDirectionResult {
  /** 헤더가 표시되어야 하는 상태. 최상단이거나 위로 스크롤 시 true, 아래로 스크롤 시 false */
  isVisible: boolean;
}

/**
 * 스크롤 방향에 따라 요소의 표시 여부를 관리하는 훅
 * - 아래로 스크롤 시 isVisible: false
 * - 위로 스크롤 시 isVisible: true
 * - 최상단(scrollY === 0)일 경우 항상 isVisible: true
 * @param options - threshold: 스크롤 방향 감지 최소 이동 거리 (기본값: 5px)
 */
const useScrollDirection = ({ threshold = 5 }: UseScrollDirectionOptions = {}): UseScrollDirectionResult => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;

      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (Math.abs(diff) >= threshold) {
        setIsVisible(diff < 0);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isVisible };
};

export default useScrollDirection;
