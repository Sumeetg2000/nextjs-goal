import Modal from "@/app/components/Modal";
import Photo from "@/app/components/Photo";
import photos from "@/public/photos/photos";
import Link from "next/link";

const PhotoModal = ({ params: { id } }: { params: { id: string } }) => {
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
              home page.
            </Link>
          </p>
        </div>
      </div>
    );
  }
  return (
    <Modal>
      <Photo photo={photo} />
    </Modal>
  );
};

export default PhotoModal;
