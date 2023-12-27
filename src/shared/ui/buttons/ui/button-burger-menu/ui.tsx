interface IButtonBurgerMenu {
  handleClick: () => void;
  isOpen: boolean;
}
export const ButtonBurgerMenu = ({
  handleClick,
  isOpen,
}: IButtonBurgerMenu) => {
  return (
    <button
      onClick={handleClick}
      type="button"
      className={`z-10 flex h-8 w-8 cursor-pointer flex-col flex-wrap justify-around`}
    >
      <div
        className={`block h-[0.25rem] w-8 origin-[1px] bg-black transition-all ${
          isOpen ? "h-[0.10rem] rotate-[46deg] " : "rotate-0"
        }`}
      />
      <div
        className={`block h-[0.25rem] w-8 origin-[1px]  bg-black transition-all ${
          isOpen ? "translate-x-full bg-transparent" : "translate-x-0"
        }`}
      />
      <div
        className={`block h-[0.25rem] w-8 origin-[1px]  bg-black transition-all ${
          isOpen ? " h-[0.10rem] rotate-[-46deg]" : "rotate-0"
        }`}
      />
    </button>
  );
};
