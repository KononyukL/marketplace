import Link from "next/link";

export interface ILinkData {
  title: string;
  link: string;
}

interface INav {
  title: string;
  data: ILinkData[];
}
export const Nav = ({ title, data }: INav) => {
  return (
    <div className="w-full ">
      <h3 className="mb-6 text-xl font-semibold">{title}</h3>
      <div className="flex flex-col gap-2">
        {data.map((el, i) => (
          <Link
            key={i}
            className="text-text-2 hover:text-primary "
            href={el.link}
          >
            {el.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
