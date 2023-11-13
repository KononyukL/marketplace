import { Head } from "@/widgets/header/ui/head";
import { Menu } from "@/widgets/header/ui/menu";
import { Categories } from "@/widgets/header/ui/categiries";

export const Header = () => {
  return (
    <header>
      <Head />
      <Menu />
      <Categories />
    </header>
  );
};
