import { motion } from "motion/react";
import { VisuallyHidden } from "../../../styles/VisuallyHidden";
import useSwiperAction from "./useSwiperAction";

interface SwiperActionProps {
  /** 슬라이드로 전달되는 요소 리스트 */
  swiperElement: React.ReactNode[];
  /** 슬라이드 양옆에 보이게 할 여유 공간 비율(요소 너비 대비) */
  sidePeekRatio?: number;
}

const SwiperAction = ({ swiperElement, sidePeekRatio }: SwiperActionProps) => {
  const {
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
  } = useSwiperAction({
    length: swiperElement.length,
    sidePeekRatio,
  });

  return (
    <div
      ref={containerRef}
      className="flex w-full overflow-hidden touch-none bg-bg-oatmeal"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {currentIndex !== 0 && <VisuallyHidden tabIndex={0} aria-label="이전으로 이동" aria-hidden={currentIndex === 0} onClick={moveToLeft} />}
      <motion.div ref={trackRef} className="flex items-center" style={{ x, gap: styleGap }}>
        {swiperElement.map((element, index) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: 현재로썬 index만 사용 가능함
            key={index}
            className="flex justify-center overflow-hidden shrink-0 select-none w-[calc(var(--container-layout)-var(--layout-padding-x)*2)]"
            style={slideWidth !== null ? { width: slideWidth } : undefined}
            onClickCapture={(e) => {
              if (shouldPreventClick.current) {
                e.stopPropagation();
                return;
              }
            }}
            aria-hidden={currentIndex !== index}
          >
            {element}
          </div>
        ))}
      </motion.div>
      {currentIndex !== swiperElement.length - 1 && (
        <VisuallyHidden tabIndex={0} aria-label="다음으로 이동" aria-hidden={currentIndex === swiperElement.length - 1} onClick={moveToRight} />
      )}
    </div>
  );
};

export default SwiperAction;
