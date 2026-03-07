import LikeSection from "../LikeSection";
import HashtagView from "@/components/specific/hashtag/hashtagView/HashtagView";
import Button from "@/components/ui/button/button/Button";
import EditIcon from "@/assets/icons/edit.svg";
import SwiperAction from "@/components/ui/swiperAction/SwiperAction";
import Image from "next/image";

interface RestaurantData {
  /** 식당 이름 */
  name: string;
  /** 식당 미리보기 이미지 URL 목록 */
  images: string[];
  /** 해시태그 목록 (예: ["#가성비", "#혼밥"]) */
  hashtags: string[];
  /** 식당 주소 */
  address: string;
  /** 영업시간 문자열 (예: "영업시간 10:00~22:00") */
  businessHours: string;
  /** 좋아요 여부 초기값 */
  isLiked: boolean;
}

interface RestaurantInfoSectionProps {
  /** 식당 정보 */
  restaurant: RestaurantData;
}

const RestaurantInfoSection = ({ restaurant }: RestaurantInfoSectionProps) => {
  const {
    name,
    images,
    hashtags,
    address,
    businessHours,
    isLiked: initialLiked,
  } = restaurant;

  return (
    <section
      className="flex flex-col gap-4 py-4"
      aria-label={`${name} 식당 정보`}
    >
      <div className="-mx-4 overflow-x-auto scrollbar-hide">
        <div className="overflow-hidden">
          <SwiperAction
            sidePeekRatio={0.1}
            swiperElement={images.map((src, i) => (
              /* fill 속성을 사용하므로 부모에 relative와 크기(h, w)가 필수입니다 */
              <div
                key={`${src}`}
                className="relative w-[100%] aspect-[4/2] rounded-xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`${name} 사진 ${i + 1}`}
                  fill // 2. 부모의 80% 너비에 꽉 차게 만듭니다.
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 240px"
                  draggable={false}
                />
              </div>
            ))}
          />
        </div>
      </div>

      {/* 식당 기본 정보 */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h2 className="typo-h2-sub flex-1 truncate text-primary-text">
            {name}
          </h2>
          <LikeSection initialLiked={initialLiked} />
        </div>

        <div className="flex items-center gap-2">
          {hashtags.map((tag) => (
            <HashtagView key={tag} text={tag} />
          ))}
          {/**TODO : 타입 안정성 - 다른 variant 추가 시 */}
          <Button variant="circle">
            <EditIcon />
          </Button>
        </div>

        <div className="typo-caption text-gray-600">
          <p>{address}</p>
          <p>{businessHours}</p>
        </div>
      </div>
    </section>
  );
};

export default RestaurantInfoSection;
