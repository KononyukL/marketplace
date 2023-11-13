import Image from "next/image";

export const WelcomeBanner = () => {
  return (
    <div className="relative shrink grow basis-2/4">
      <Image
        src={"/images/login-image.png"}
        alt="Login"
        fill
        objectFit="cover"
      />
    </div>
  );
};
