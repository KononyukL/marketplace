import Image from "next/image";
import { dataAdvantages } from "@/pages/home/ui/advantages/data-advantages";

export const Advantages = () => {
  return (
    <div className="m-auto max-w-main p-14 text-black">
      <h2 className="mb-12 text-4xl font-medium">Наші переваги</h2>
      <div className=" flex  justify-between gap-2">
        {dataAdvantages.map((el, i) => (
          <div
            key={i}
            className="border-border-2 max-w-advantages flex w-full flex-col items-center justify-center gap-4 rounded-lg border border-solid bg-white p-8"
          >
            <Image src={el.image} alt={el.title} width={44} height={44} />
            <h3 className="text-xl font-medium">{el.title}</h3>
            <p className="max-w-advantages-text">{el.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
