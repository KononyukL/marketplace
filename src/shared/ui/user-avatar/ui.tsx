import Image from "next/image";

interface IUserAvatar {
  userAvatarUrl: string;
  author: string;
}
export const UserAvatar = ({ userAvatarUrl, author }: IUserAvatar) => {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-additional text-white">
      {userAvatarUrl ? (
        <Image
          src={userAvatarUrl}
          className="rounded-[50px]"
          alt="Avatar"
          width={38}
          height={38}
        />
      ) : (
        author[0].toLocaleUpperCase()
      )}
    </div>
  );
};
