import { Main } from "@/pages/home/ui/main";
import { AnimalShelter } from "@/pages/home/ui/animal-shelter";
import { HowItWork } from "@/pages/home/ui/how-it-work";
import { Advantages } from "@/pages/home/ui/advantages";
import { TopAnnouncement } from "@/pages/home/ui/top-announcement";

export const HomePage = () => {
  return (
    <>
      <Main />
      <TopAnnouncement />
      <Advantages />
      <HowItWork />
      <AnimalShelter />
    </>
  );
};
