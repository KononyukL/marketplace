import { Main } from "@/pages/home/ui/main";

import { HowItWork } from "@/pages/home/ui/how-it-work";
import { Advantages } from "@/pages/home/ui/advantages";
import { TopAnnouncement } from "@/pages/home/ui/top-announcement";
import { SelectionArticles } from "@/pages/home/ui/selection-articles";
import { AnimalShelter } from "@/shared/ui";

export const HomePage = () => {
  return (
    <>
      <Main />
      <TopAnnouncement />
      <Advantages />
      <HowItWork />
      <SelectionArticles />
      <AnimalShelter />
    </>
  );
};
