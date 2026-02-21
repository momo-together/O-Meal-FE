import { useRef } from "react";

const useSlide = <T extends HTMLElement>() => {
  const listRef = useRef<T | null>(null);
  const startScrollLeft = useRef(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!listRef.current) return;

    startX.current = e.clientX;
    startScrollLeft.current = listRef.current.scrollLeft;
    isDragging.current = true;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    if (!listRef.current) return;

    listRef.current.scrollLeft = startScrollLeft.current + (startX.current - e.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerLeave = () => {
    isDragging.current = false;
  };

  return { listRef, handlePointerDown, handlePointerMove, handlePointerUp, handlePointerLeave };
};

export default useSlide;
