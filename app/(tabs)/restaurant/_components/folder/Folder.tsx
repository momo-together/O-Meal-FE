import ScrapIcon from "@/assets/icons/scrap.svg";
import Button from "@/components/ui/button/button/Button";

interface FolderProps {
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

const Folder = ({ emoji, title, description, savedCount, viewCount }: FolderProps) => {
  return (
    <article className="bg-bg-white rounded-2xl p-4 flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h2 className="typo-h2-sub text-primary-text">
          {emoji} {title}
        </h2>
        <p className="typo-body2 text-gray-600 line-clamp-2">{description}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="typo-caption text-gray-400">{savedCount}곳 저장됨</span>
        <div className="inline-flex items-center gap-1">
          <span className="typo-caption text-gray-400 whitespace-nowrap">{viewCount}회</span>
          <Button variant="tertiary" aria-label="스크랩">
            <div className="flex justify-center items-center w-4 h-4">
              <ScrapIcon />
            </div>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Folder;
