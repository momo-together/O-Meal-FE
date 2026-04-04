import type { SortOption } from "./SortDropdown";

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12L10 17L19 8" stroke="#FF7E36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface SortOptionListProps {
  /** 정렬 옵션 목록 */
  options: SortOption[];
  /** 현재 선택(pending) 상태의 옵션 */
  selected: SortOption;
  /** 옵션 선택 핸들러 */
  onSelect: (option: SortOption) => void;
}

/**
 * 정렬 바텀시트 내부의 옵션 리스트 컴포넌트.
 * @param options - 표시할 정렬 옵션 목록
 * @param selected - 현재 선택된 옵션
 * @param onSelect - 옵션 선택 시 호출되는 콜백
 */
const SortOptionList = ({ options, selected, onSelect }: SortOptionListProps) => {
  return (
    <ul aria-label="정렬 기준 선택">
      {options.map((option) => {
        const isSelected = selected === option;
        return (
          <li key={option}>
            <button type="button" className="flex w-full items-center justify-between py-2" onClick={() => onSelect(option)}>
              <span className={`typo-body1 ${isSelected ? "text-primary-point" : "text-gray-500"}`}>{option}</span>
              {isSelected && <CheckIcon />}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default SortOptionList;
