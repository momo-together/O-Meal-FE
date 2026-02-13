import Link from "next/link";
import SafeImage from "@/components/ui/safeImage/SafeImage";
import { FALLBACK_IMAGE } from "@/constants/image";

interface RestaurantCardProps {
  /** 맛집 이름 */
  name: string;
  /** 맛집 이미지 URL */
  imageUrl: string;
  /** 클릭 시 이동할 경로 */
  href: string;
}

const RestaurantCard = ({ name, imageUrl, href }: RestaurantCardProps) => {
  return (
    <Link href={href} className="block overflow-hidden rounded-2xl bg-bg-white p-3 pb-4" aria-label={`맛집 ${name}`}>
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
        <SafeImage src={imageUrl} alt={`${name} 사진`} fill className="object-cover" sizes="(max-width: 375px) 100vw, 375px" fallback={FALLBACK_IMAGE} />
      </div>
      <h3 className="typo-body2 mt-3 truncate text-primary-text">{name}</h3>
    </Link>
  );
};

export default RestaurantCard;
