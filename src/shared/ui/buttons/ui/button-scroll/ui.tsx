import Image from "next/image";

export const ButtonScroll = () => {
  const scrollToHash = (element_id: string) => {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <div className="m-auto flex max-w-main  justify-end  px-14 pb-20 pt-10">
      <button
        onClick={() => scrollToHash("header")}
        className="shadow-button-scroll rounded-lg bg-white p-2"
      >
        <Image
          src="/images/arrow-up.svg"
          alt="Arrow up"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};
