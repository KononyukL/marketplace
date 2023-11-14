import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/ui";

export const Main = () => {
  return (
    <div className="  max-w-primary  m-auto flex justify-between border-solid pb-12 text-black">
      <div className=" flex flex-col justify-center gap-10">
        <h2 className=" mb-4 w-full  max-w-title text-5xl font-medium leading-snug text-title">
          Перший український маркетплейс, де можна знайти
          <span className="text-primary"> майже </span>
          <br />
          всі види тварин
        </h2>
        <div className="flex gap-7">
          {/* TODO: Replace 'max-w-button-2' className with a new size option in the Button component's 'size' prop
            Implement additional size style within the Button component to maintain styling consistency 
            and remove direct style/class overrides in usage */}
          <Button className="max-w-button-2 " variant="primary">
            <Link className="flex justify-center gap-2" href="#">
              <Image
                src={"/images/plus.svg"}
                alt="Animal"
                width={24}
                height={24}
              />
              Додати оголошення
            </Link>
          </Button>
          {/* TODO: Replace 'max-w-button' className with a new size option in the Button component's 'size' prop
            Implement additional size style within the Button component to maintain styling consistency 
          and remove direct style/class overrides in usage */}
          <Button className="max-w-button " variant="outline">
            <Link href="/registration">Зареєструватись</Link>
          </Button>
        </div>
      </div>
      <div>
        <Image src={"/images/goat.png"} alt="Animal" width={600} height={405} />
      </div>
    </div>
  );
};
