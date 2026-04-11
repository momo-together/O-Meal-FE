export type RestaurantCategory = "한식" | "일식" | "양식" | "중식" | "기타";

interface AddRestaurantCardProps {
  /** 식당 이름 */
  title: string;
  /** 식당 위치 */
  location: string;
  /** 식당 카테고리 */
  category: RestaurantCategory;
  /** 추가 버튼 클릭 핸들러 */
  onClick: () => void;
}

const AddRestaurantCard = ({ title, location, category, onClick }: AddRestaurantCardProps) => {
  return (
    <div className="flex w-full items-center justify-between rounded-2xl border border-gray-100 bg-bg-white p-4">
      <div className="flex min-w-0 flex-col gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="typo-body1 truncate text-primary-text">{title}</span>
          <span className="typo-caption shrink-0 rounded-lg bg-bg-oatmeal px-2 py-1 text-gray-400">{category}</span>
        </div>
        <span className="typo-caption truncate text-gray-400">{location}</span>
      </div>
      <button
        type="button"
        onClick={onClick}
        aria-label={`${title} 식당 추가`}
        className="typo-button-sm shrink-0 rounded-full bg-primary-point px-4 py-2 text-bg-white shadow-[0px_4px_12px_0px_var(--color-shadow)]"
      >
        추가
      </button>
    </div>
  );
};

export default AddRestaurantCard;
