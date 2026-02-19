"use client";

import { motion } from "motion/react";
import { HOT_FOLDERS } from "@/constants/message";

const AnimateSection = () => {
  return (
    <motion.ul
      className="flex gap-2 w-max pl-5"
      aria-label="인기 폴더 태그 목록"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 30, ease: "linear", repeat: Infinity }}
    >
      {[...HOT_FOLDERS, ...HOT_FOLDERS].map((tag, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: 무한 루프 중복 배열이므로 index key 사용
        <li key={i} className="bg-bg-white rounded-full px-4 py-2 shadow-[0px_0px_5px_0px_rgba(32,32,32,0.05)] shrink-0 list-none">
          <span className="typo-body2 text-gray-900">{tag}</span>
        </li>
      ))}
    </motion.ul>
  );
};

export default AnimateSection;
