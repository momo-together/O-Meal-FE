import { animate, type Transition, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface UseSwiperActionProps {
  length: number;
  sidePeekRatio?: number;
}

const useSwiperAction = ({ length, sidePeekRatio }: UseSwiperActionProps) => {
  const springPreset: Transition = {
    type: "spring",
    stiffness: 450,
    damping: 32,
    mass: 0.3,
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const elementWidthRef = useRef(0);
  const containerWidthRef = useRef(0);

  const startX = useRef(0);
  const startY = useRef(0);
  const threshold = useRef(0);
  const isDragging = useRef(false);
  const shouldPreventClick = useRef(false);

  const x = useMotionValue(0);
  const MIN_THRESHOLD = 5;
  const STANDARD = 5;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [styleGap, setStyleGap] = useState(0);
  const [slideWidth, setSlideWidth] = useState<number | null>(null);

  const calculateLocation = (index: number) => {
    const slice = sidePeekRatio ? elementWidthRef.current * sidePeekRatio : 0;
    const gap = (containerWidthRef.current - (elementWidthRef.current + slice * 2)) / 2;
    const start = gap + slice;

    setStyleGap(gap);

    const move = elementWidthRef.current + gap;

    return Math.floor(start - move * index);
  };

  const updateLocation = (index: number) => {
    animate(x, calculateLocation(index), springPreset);
  };

  const snapToIndex = (diffX: number) => {
    const ableToMoveLeft = diffX >= threshold.current;
    const ableToMoveRight = diffX <= -threshold.current;

    if (ableToMoveLeft && currentIndex < length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      animate(x, calculateLocation(nextIndex), springPreset);
      return;
    }
    if (ableToMoveRight && currentIndex > 0) {
      const nextIndex = currentIndex - 1;
      setCurrentIndex(nextIndex);
      animate(x, calculateLocation(nextIndex), springPreset);
      return;
    }
    animate(x, calculateLocation(currentIndex), springPreset);
  };

  const moveToRight = () => {
    const next = currentIndex + 1;
    if (next >= length) return;
    setCurrentIndex(next);
    updateLocation(next);
  };

  const moveToLeft = () => {
    const prev = currentIndex - 1;
    if (prev < 0) return;
    setCurrentIndex(prev);
    updateLocation(prev);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (length === 0) return;

    isDragging.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    if (length === 0) return;
    if (!trackRef.current) return;

    const diffX = startX.current - e.clientX;
    const diffY = startY.current - e.clientY;
    if (Math.abs(diffY) > Math.abs(diffX)) {
      isDragging.current = false;
      return;
    }
    if (Math.abs(diffX) > MIN_THRESHOLD) {
      shouldPreventClick.current = true;
    }
    x.set(calculateLocation(currentIndex) - diffX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (length === 0) return;

    isDragging.current = false;

    const diffX = startX.current - e.clientX;
    const diffY = startY.current - e.clientY;

    // 이동 거리가 MIN_THRESHOLD 이하라면 브라우저의 click 이벤트로 처리
    const isClickEvent = Math.abs(diffX) < MIN_THRESHOLD;
    if (isClickEvent) {
      shouldPreventClick.current = false;
      return;
    }
    if (Math.abs(diffY) > Math.abs(diffX)) {
      shouldPreventClick.current = false;
      return;
    }

    snapToIndex(diffX);
  };

  const handlePointerLeave = () => {
    isDragging.current = false;
    animate(x, calculateLocation(currentIndex), springPreset);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: 첫 마운트시에만 계산
  useEffect(() => {
    const updateLayout = () => {
      const root = getComputedStyle(document.documentElement);
      const padding = Number(root.getPropertyValue("--layout-padding-x").replace("px", ""));

      containerWidthRef.current = containerRef.current?.clientWidth ?? 0;

      const contentWidth = containerWidthRef.current - 2 * padding;
      const sw = sidePeekRatio ? contentWidth / (1 + 2 * sidePeekRatio) : contentWidth;
      elementWidthRef.current = sw;
      setSlideWidth(sw);

      threshold.current = Math.floor((containerWidthRef.current - 2 * padding) / STANDARD);
      x.set(calculateLocation(0));
    };
    updateLayout();

    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return {
    containerRef,
    trackRef,
    currentIndex,
    styleGap,
    slideWidth,
    x,
    shouldPreventClick,
    moveToLeft,
    moveToRight,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerLeave,
  };
};

export default useSwiperAction;
