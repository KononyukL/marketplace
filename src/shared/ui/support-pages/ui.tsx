import { type ReactNode } from "react";

interface ISupport {
  children: ReactNode;
  title: string;
}
export const SupportPages = ({ children, title }: ISupport) => {
  return (
    <div className="max-w-support mb-bottom m-auto bg-white">
      <div className="px-support border-b border-text-2 py-8">
        <h3 className="text-xl font-medium leading-relaxed">{title}</h3>
      </div>

      <div>{children}</div>
    </div>
  );
};
