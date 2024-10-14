import photos from "@/public/photos/photos";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-4xl font-bold m-10'>Feed</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10'>
        {photos?.map(({ id, imageSrc }) => (
          <Link key={id} href={`/photos/${id}`}>
            <Image
              alt={imageSrc}
              src={imageSrc}
              height={500}
              width={500}
              className='w-full object-cover aspect-square'
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
