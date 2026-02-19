import clsx from "clsx";
import Image from "next/image";
import { LAYOUT_MAX_WIDTH } from "@/constants/layout";
import LikeButton from "./LikeButton";

interface RestaurantCardProps {
  /** 식당 이름 */
  name: string;
  /** 식당 이미지 URL */
  imageUrl?: string;
  /** 거리 (미터 단위) */
  distance: number;
  /** 해시태그 목록 */
  hashtags: string[];
  /** 위치 설명 */
  location: string;
  /** 좋아요 수 */
  likeCount: number;
  /** 영업 여부 */
  isOpen: boolean;
}

const RestaurantCard = ({ name, imageUrl, distance, hashtags, location, likeCount, isOpen }: RestaurantCardProps) => {
  return (
    <article className="bg-bg-white rounded-2xl overflow-hidden flex flex-col">
      {/* 이미지 영역 */}
      <div className="relative w-full aspect-343/160 bg-gray-100">
        {imageUrl && <Image src={imageUrl} alt={`${name} 대표 이미지`} fill sizes={`${LAYOUT_MAX_WIDTH}`} className="object-cover" />}
        <span
          className={clsx(
            "absolute bottom-3 left-3 typo-caption px-3 py-1 rounded-lg",
            isOpen ? "bg-primary-point text-bg-white" : "bg-gray-200 text-gray-600",
          )}
        >
          {isOpen ? "영업 중" : "영업 종료"}
        </span>
      </div>

      {/* 정보 영역 */}
      <div className="flex flex-col gap-2 px-4 pt-3 pb-4">
        {/* 이름 + 거리 */}
        <div className="flex items-start justify-between">
          <h2 className="typo-h2-sub text-primary-text">{name}</h2>
          <span className="typo-caption text-gray-400 mt-0.5">{distance}m</span>
        </div>

        {/* 해시태그 */}
        <div className="flex-1 flex flex-wrap gap-1">
          {hashtags.map((hashtag) => (
            <span key={hashtag} className="typo-body2 text-gray-400 whitespace-nowrap">
              #{hashtag}
            </span>
          ))}
        </div>

        {/* 위치 + 좋아요 */}
        <div className="flex items-center justify-between mt-1">
          <span className="typo-caption text-gray-600">📍 {location}</span>
          <LikeButton likeCount={likeCount} />
        </div>
      </div>
    </article>
  );
};

export default RestaurantCard;
