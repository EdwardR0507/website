import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
}

export const ImageCard = ({ src, alt }: ImageCardProps) => {
  return (
    <div className="p-4 mt-8 mb-16 border-l-2 border-t-2 border-blue-400 rounded-2xl w-fit">
      <Image
        src={src}
        alt={alt}
        className="rounded-2xl"
        priority
        width={390}
        height={390}
      />
    </div>
  );
};
