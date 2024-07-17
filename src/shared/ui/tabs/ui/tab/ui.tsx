export interface ITabProps {
  title: string;
  className?: string;
}

export const Tab = ({ children }: React.PropsWithChildren<ITabProps>) => {
  return <div className="text-gray-12 mt-6">{children}</div>;
};
