export interface ITabProps {
  title: string;
  className?: string;
}

export const Tab = ({ children }: React.PropsWithChildren<ITabProps>) => {
  return <div className="mt-6 text-[#444444]">{children}</div>;
};
