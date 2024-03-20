import { type ReactNode } from "react";

interface ISupport {
  children: ReactNode;
  title: string;
}
export const SupportPages = ({ children, title }: ISupport) => {
  return (
    <div className="m-auto mb-[248px] w-[874px] bg-white">
      <div className="border-b border-text-2 px-[72px] py-8">
        <h3 className="text-xl font-medium leading-relaxed">{title}</h3>
      </div>

      <div>{children}</div>
    </div>
  );
};
