import Image from "next/image";
import { Rating } from "react-simple-star-rating";

export const WelcomeBanner = () => {
  return (
    <div className="relative  shrink grow basis-2/4">
      <div className="relative z-10 flex  min-h-screen flex-col gap-y-60 bg-register pb-36 pl-12 pt-24">
        <h2 className="max-w-registerTitle text-6xl font-bold leading-tight">
          Вітаємо на нашому майданчику!
        </h2>
        <div className="flex flex-col gap-y-24">
          <p className="w-full max-w-registerText text-xl leading-7">
            У нас можна купити чи продати кота, знайти молочну корову,
            подарувати кошенят чи придбати песиків у перевіреного заводчика!
          </p>
          <div className=" flex flex-col ">
            <Rating
              SVGstyle={{ display: "inline" }}
              iconsCount={5}
              initialValue={5}
              size={20}
              readonly={true}
            />
            <p className="mt-7 w-full max-w-registerComment">
              We love Landingfolio! Our designers were using it for their
              projects, so we already knew what kind of design they want.
            </p>
            <div className="mt-5 flex gap-3">
              <Image
                src={"/images/comment-image.svg"}
                alt="People"
                width={40}
                height={40}
              />
              <div>
                <p>Devon Lane</p>
                <p className="text-xs text-tertiary-2">Co-Founder, Design.co</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/images/register-image.png"}
        alt="Login"
        className="z-0"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};
