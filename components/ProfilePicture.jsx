import Image from 'next/image';

function ProfilePicture(url) {
  return (
    <div className="relative aspect-square w-20 overflow-hidden rounded-full border-2 border-black">
      <Image src={url} layout="fill" alt="profile pic" />
    </div>
  );
}

export default ProfilePicture;
