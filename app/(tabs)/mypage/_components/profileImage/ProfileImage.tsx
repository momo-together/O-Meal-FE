import SafeImage from "@/components/ui/safeImage/SafeImage";
import { FALLBACK_IMAGE } from "@/constants/image";

interface ProfileImageProps {
  /** 프로필 이미지 URL */
  src?: string;
}

const ProfileImage = ({ src }: ProfileImageProps) => {
  return (
    <div className="inline-block size-[80px]" role="img" aria-label="프로필 이미지">
      <div className="relative size-full rounded-full border-4 border-bg-white overflow-hidden bg-gray-100 text-gray-200 shadow-md">
        <SafeImage fallback={FALLBACK_IMAGE} fill src={src ?? FALLBACK_IMAGE} alt="프로필 이미지" className="object-cover" />
      </div>
    </div>
  );
};

export default ProfileImage;
