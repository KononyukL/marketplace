import { Main } from "@/pages/home/ui/main";
import { AnimalShelter } from "@/pages/home/ui/animalShelter";

export const HomePage = () => {
  return (
    <div className=" m-auto max-w-main p-14 text-black">
      <Main />
      <AnimalShelter />
    </div>
  );
};
