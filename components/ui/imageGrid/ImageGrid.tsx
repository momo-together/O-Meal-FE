import Image from "next/image";

interface ImageInfoType {
  src: string;
  alt: string;
}

interface ImageGridProps {
  imageInfos: ImageInfoType[];
}

const ImageGrid = ({ imageInfos }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-2 px-4">
      {imageInfos.map(({ src, alt }, index) => (
        //biome-ignore lint/suspicious/noArrayIndexKey: src와 index의 조합을 사용
        <div key={`${src}-${index}`} className="relative aspect-square overflow-hidden rounded-xl">
          <Image fill sizes="110px" src={src} alt={alt} className="object-cover" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
