import ImageGrid from "@/components/ui/imageGrid/ImageGrid";
import PhotoRegisterButton from "./PhotoRegisterButton";

// TODO: API 연동 시 params.id로 식당 사진 목록 조회로 교체
const MOCK_PHOTOS = Array.from({ length: 21 }, (_, i) => ({
  src: `https://picsum.photos/seed/photo${i + 1}/200/200`,
  alt: `식당 사진 ${i + 1}`,
}));

const PhotoPage = () => {
  return (
    <section className="py-6" aria-label="식당 사진 목록">
      <ImageGrid imageInfos={MOCK_PHOTOS} />
      <PhotoRegisterButton />
    </section>
  );
};

export default PhotoPage;
