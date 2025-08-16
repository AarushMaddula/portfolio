import Image from "next/image";

export default function PageThumbnail({ thumbnail }: { thumbnail: string }) {
  return (
    <div className='relative w-full aspect-5/3 object-cover mb-4 mask-linear-0 mask-linear-from-60% mask-linear-to-100%'>
      <Image src={thumbnail} alt="3D Printed Brick" fill className='rounded-b-xl'/>
    </div>
  );
}