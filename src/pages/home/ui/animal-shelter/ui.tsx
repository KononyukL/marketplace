import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/ui";

export const AnimalShelter = () => {
  return (
    <div className="m-auto max-w-main p-14 text-black">
      <div className="border-borederHome max-w-primary  flex justify-between rounded-lg border-2 border-solid bg-white pb-12 pl-14 pr-14 pt-12 text-black">
        <div className=" flex flex-col justify-center gap-10">
          <div>
            <h3 className=" mb-4 text-3xl font-bold">
              Маєте притулок для тварин?
            </h3>
            <p className="text-lg text-text">
              Реєструйтеся та прилаштуйте улюбленців в добрі руки!
            </p>
          </div>
          {/* TODO: Replace 'max-w-button' className with a new size option in the Button component's 'size' prop
            Implement additional size style within the Button component to maintain styling consistency 
            and remove direct style/class overrides in usage */}
          <Button className="max-w-button">
            <Link href="/registration"> Зареєструватись</Link>
          </Button>
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
    </div>
  );
};
