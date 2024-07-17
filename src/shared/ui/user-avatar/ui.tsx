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
        "bg-teal-0 flex flex-shrink-0 items-center justify-center rounded-full text-white " +
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
      ) : author !== null ? (
        author[0].toLocaleUpperCase()
      ) : (
        ""
      )}
    </div>
  );
};
