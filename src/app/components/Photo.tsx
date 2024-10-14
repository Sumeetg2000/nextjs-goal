import Image from "next/image";
import React from "react";

interface PhotoProps {
  id: string;
  name: string;
  href: string;
  username: string;
  imageSrc: string;
}

const Photo = ({ photo }: { photo?: PhotoProps }) => {
  if (photo)
    return (
      <>
        <Image
          alt={photo?.id}
          src={photo?.imageSrc}
          height={600}
          width={600}
          className='w-full object-cover aspect-square col-span-2'
        />
        <div className='bg-white p-4 px-6 text-black'>
          <h3>{photo?.name}</h3>
          <p>{photo?.username}</p>
        </div>
      </>
    );
};

export default Photo;
