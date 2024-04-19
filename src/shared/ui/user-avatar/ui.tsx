import Image from "next/image";

interface IUserAvatar {
  userAvatarUrl: string;
  author: string;
  className?: string;
}
export const UserAvatar = ({
  userAvatarUrl,
  author,
  className,
}: IUserAvatar) => {
  return (
    <div
      className={
        "flex flex-shrink-0 items-center justify-center rounded-full bg-additional text-white " +
        className
      }
    >
      {userAvatarUrl ? (
        <Image
          src={userAvatarUrl}
          className="rounded-full"
          alt="Avatar"
          width={64}
          height={64}
        />
      ) : (
        author[0].toLocaleUpperCase()
      )}
    </div>
  );
};
