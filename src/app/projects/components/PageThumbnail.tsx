import Image from "next/image";

export default function PageThumbnail({ thumbnail }: { thumbnail: string }) {
  return (
    <div className='relative w-full aspect-5/3 object-cover mask-linear-0 mask-linear-from-50% mask-linear-to-100%'>
      <Image src={thumbnail} alt="" fill className='rounded-b-xl object-cover'/>
    </div>
  );
}