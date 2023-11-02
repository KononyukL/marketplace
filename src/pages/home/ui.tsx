import AnimalShelter from "@/shared/ui/animalShelter/ui";
import Main from "@/shared/ui/main/ui";

const HomePage = () => {
  return (
    <div className="bg-primary  p-14 text-black ">
      Home
      <Main />
      <AnimalShelter />
    </div>
  );
};

export default HomePage;
