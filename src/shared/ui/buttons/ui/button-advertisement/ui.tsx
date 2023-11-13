import Link from "next/link";
import Image from "next/image";
import { Button } from "@/shared/ui";

export const ButtonAdvertisement = () => {
  return (
    <Button className="max-w-button-2 " variant="primary">
      <Link className="flex justify-center gap-2" href="#">
        <Image src={"/images/plus.svg"} alt="Animal" width={24} height={24} />
        Додати оголошення
      </Link>
    </Button>
  );
};
