import { Main } from "@/pages/home/ui/main";
import { AnimalShelter } from "@/pages/home/ui/animal-shelter";
import { HowItWork } from "@/pages/home/ui/how-it-work";
import { TopAnnouncement } from "@/pages/home/ui/top- announcement";
import { Advantages } from "@/pages/home/ui/advantages";

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
