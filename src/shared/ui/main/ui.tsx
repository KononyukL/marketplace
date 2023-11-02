import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import Button from "@/shared/ui/buttons/ui";

const openSans = Open_Sans({ subsets: ["latin"] });
const Main = () => {
  return (
    <div className="  max-w-primary  m-auto flex justify-between border-solid pb-12 text-black">
      <div className=" flex flex-col justify-center gap-10">
        <div className={openSans.className}>
          <h2 className=" max-w-mainText text-textMain leading-textMain mb-4 w-full font-semibold">
            Перший український маркетплейс, де можна знайти
            <span className="text-primaryColor"> майже </span>
            <br />
            всі види тварин
          </h2>
        </div>
        <div className="flex gap-7">
          <Button className="bg-button max-w-buttonMain w-full rounded-lg pb-4 pt-4  text-white">
            <Link className="flex justify-center gap-2" href="/registration">
              <Image
                src={"/images/plus.svg"}
                alt="Animal"
                width={24}
                height={24}
              />
              Додати оголошення
            </Link>
          </Button>
          <Button className="bg-button max-w-buttonAnimalShelter w-full rounded-lg pb-4 pt-4 text-white">
            <Link href="/registration">Зареєструватись</Link>
          </Button>
        </div>
      </div>
      <div>
        <Image
          src={"/images/goat-image.svg"}
          alt="Animal"
          width={600}
          height={405}
        />
      </div>
    </div>
  );
};

export default Main;
