import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { useTranslation } from "next-i18next";

export const WelcomeBanner = () => {
  const { t } = useTranslation("common");

  return (
    <div className="relative shrink grow basis-2/4 text-white">
      <div className="relative z-10 flex min-h-screen flex-col justify-between bg-register pb-32 pl-8 pt-14">
        <div>
          <h2 className="text-auth-title mb-4 font-bold leading-tight">
            {t("auth.welcome-banner")}
          </h2>
          <p className="w-full max-w-registerText text-xl font-medium leading-7">
            {t("auth.banner-text")}
          </p>
        </div>
        <div className="flex flex-col ">
          <div className=" flex flex-col ">
            <div className="mt-5 flex gap-3">
              <Image
                src={"/images/comment-image.svg"}
                alt="People"
                width={50}
                height={50}
              />
              <div>
                <p>Олексій</p>
                <Rating
                  SVGstyle={{ display: "inline" }}
                  iconsCount={5}
                  initialValue={5}
                  size={20}
                  readonly={true}
                  fillColor={"#2A907F"}
                />
              </div>
            </div>
            <p className="mt-7 w-full max-w-[519px] leading-7">
              {'"'} {t("auth.comment-text-one")}
              <br />
              {t("auth.comment-text-two")}
              {'"'}
            </p>
          </div>
        </div>
      </div>
      <Image
        className="z-0"
        src={"/images/image-register.png"}
        alt="Login"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};
