import React from "react";
import Image from "next/image";
import Link from "next/link";

const AnimalShelter = () => {
  return (
    <div className="border-borederHome max-w-primary m-auto flex justify-between rounded-lg border-2 border-solid bg-white pb-12 pl-14 pr-14 pt-12 text-black">
      <div className=" flex flex-col justify-center gap-10">
        <div>
          <h3 className="leading-titleAnimalShelter text-titleAnimalShelter mb-4 font-bold">
            Маєте притулок для тварин?
          </h3>
          <p className="text-textAnimalShelter text-lg">
            Реєструйтеся та прилаштуйте улюбленців в добрі руки!
          </p>
        </div>
        <button className="bg-button max-w-buttonAnimalShelter w-full cursor-pointer rounded-lg pb-4 pt-4 text-white">
          <Link href="/registration"> Зареєструватись</Link>
        </button>
      </div>
      <div>
        <Image
          src={"/images/animal-shelter-image.png"}
          alt="Animal"
          width={600}
          height={405}
        />
      </div>
    </div>
  );
};

export default AnimalShelter;
