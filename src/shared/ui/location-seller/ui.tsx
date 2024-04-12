import { Icons } from "@/shared/config";

interface ILocationSellerProps {
  children: React.ReactNode;
  width?: number;
}

export const LocationSeller = ({ children, width }: ILocationSellerProps) => {
  return (
    <div className="flex items-center gap-1 leading-5">
      <Icons.Location width={width ?? 16} viewBox="0 0 16 19" />
      {children}
    </div>
  );
};
