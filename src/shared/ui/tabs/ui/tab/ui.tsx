export interface ITabProps {
  title: string;
  className?: string;
}

export const Tab = ({ children }: React.PropsWithChildren<ITabProps>) => {
  return <div className="text-text-5 mt-6">{children}</div>;
};
