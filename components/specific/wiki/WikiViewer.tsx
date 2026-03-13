"use client";

import clsx from "clsx";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg";
import EditIcon from "@/assets/icons/edit.svg";

interface WikiSection {
  /** 섹션 제목 */
  title: string;
  /** 마크다운 형식의 섹션 내용 */
  content: string;
}

interface WikiViewerProps {
  /** 위키 섹션 목록 */
  sections: WikiSection[];
}

/**
 * 마크다운 기반 위키 뷰어 컴포넌트
 * @param sections - 제목과 마크다운 내용으로 구성된 섹션 배열
 */
const WikiViewer = ({ sections }: WikiViewerProps) => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    () => new Set(sections.map((_, i) => i)),
  );

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="flex flex-col">
      {sections.map((section, index) => {
        const isOpen = openIndexes.has(index);
        return (
          <div key={section.title}>
            <div className="flex items-center justify-between px-5 py-4">
              <button
                type="button"
                className="flex flex-1 items-center gap-2"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`wiki-section-${index}`}
              >
                <ChevronRightIcon
                  className={clsx(
                    "h-5 w-5 text-primary-point transition-transform duration-200",
                    isOpen ? "rotate-90" : "rotate-0",
                  )}
                  aria-hidden="true"
                />
                <span className="typo-h2-sub text-primary-text">{section.title}</span>
              </button>
              {/* 편집 아이콘 영역 - 추후 편집 기능 구현 시 활성화 */}
              <div aria-hidden="true">
                <EditIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="mx-5 h-px bg-gray-200" />

            {isOpen && (
              <div
                id={`wiki-section-${index}`}
                className="typo-body2 px-5 py-4 text-primary-text"
              >
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc space-y-1 pl-5">{children}</ul>,
                    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                  }}
                >
                  {section.content}
                </ReactMarkdown>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WikiViewer;
