import ScrapButton from "./ScrapButton";

interface FolderCardProps {
  /** 폴더 이모지 */
  emoji: string;
  /** 폴더 제목 */
  title: string;
  /** 폴더 설명 */
  description: string;
  /** 저장된 식당 수 */
  savedCount: number;
  /** 조회 수 */
  viewCount: number;
}

const FolderCard = ({ emoji, title, description, savedCount, viewCount }: FolderCardProps) => {
  return (
    <article className="bg-bg-white rounded-2xl p-4 flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h2 className="typo-body1 text-primary-text">
          {emoji} {title}
        </h2>
        <p className="typo-body2 text-gray-600 line-clamp-2">{description}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="typo-caption text-gray-400">{savedCount}곳 저장됨</span>
        <ScrapButton viewCount={viewCount} />
      </div>
    </article>
  );
};

export default FolderCard;
