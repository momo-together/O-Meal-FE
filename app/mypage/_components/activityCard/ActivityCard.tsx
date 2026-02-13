interface ActivityCardProps {
  /** 활동 유형 (예: "리뷰 작성") */
  type: string;
  /** 맛집 이름 */
  restaurantName: string;
  /** 활동 내용 */
  content: string;
  /** 활동 날짜 (예: "2024.03.12") */
  // TODO : 서버에서 오는 활동날짜 형식에 따라 포맷팅 필요
  date: string;
}

const ActivityCard = ({ type, restaurantName, content, date }: ActivityCardProps) => {
  return (
    <article className="rounded-2xl bg-bg-white px-5 py-4" aria-label={`${restaurantName} ${type}`}>
      <p className="typo-caption text-gray-400">{type}</p>
      <h3 className="typo-h2-sub mt-1 text-primary-text">{restaurantName}</h3>
      <p className="typo-body2 mt-3 text-gray-600 truncate">"{content}"</p>
      <time className="typo-caption mt-3 block text-gray-400" dateTime={date.replaceAll(".", "-")}>
        {date}
      </time>
    </article>
  );
};

export default ActivityCard;
