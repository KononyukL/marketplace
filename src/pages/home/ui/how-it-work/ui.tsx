import { dataWork } from "@/pages/home/ui/how-it-work/data-work";

export const HowItWork = () => {
  return (
    <div className="m-auto max-w-main p-14 text-black">
      <h2 className="mb-12 text-4xl font-medium">Як це працює?</h2>
      <div className=" flex justify-between gap-2">
        {dataWork.map((el, i) => (
          <div
            key={i}
            className="border-border-2 flex w-full max-w-[315px] flex-col rounded-lg border border-solid bg-white px-6 py-8"
          >
            <div className="bg-additional mb-4 flex max-w-[30px] justify-center rounded px-4 py-1 text-white">
              {el.id}
            </div>
            <h3 className="mb-2 text-xl font-medium">{el.title}</h3>
            <p className=" max-w-[263px]">{el.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
