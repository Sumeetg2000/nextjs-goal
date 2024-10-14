import Photo from "@/app/components/Photo";
import photos from "@/public/photos/photos";
import Link from "next/link";

export const dynamicParams = false;

export function generateStaticParams() {
  let slugs = ["1", "2", "3", "4", "5", "6"];
  return slugs.map((slug) => ({ id: slug }));
}

const Photopage = ({ params: { id } }: { params: { id: string } }) => {
  const photo = photos.find((p) => p.id === id);

  if (!photo) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-red-600'>Photo Not Found</h2>
          <p className='mt-4 text-gray-600'>
            {`We couldn't find the photo you're looking for.`}
          </p>
          <p className='mt-2 text-sm text-gray-500'>
            Please check the URL or go back to the{" "}
            <Link href='/' className='underline text-gray-700'>
              home page
            </Link>
            .
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className='container mx-auto my-10'>
      <div className='w-1/2 mx-auto border border-gray-700'>
        <Photo photo={photo} />
      </div>
    </div>
  );
};

export default Photopage;
