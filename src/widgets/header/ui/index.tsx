import { Head } from "@/widgets/header/ui/head";
import { Menu } from "@/widgets/header/ui/menu";

export const Header = () => {
  return (
    <header id="header" className="border-b border-text-2">
      <Head />
      <Menu />
    </header>
  );
};
