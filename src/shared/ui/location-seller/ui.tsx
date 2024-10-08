import { Icons } from "@/shared/config";

interface ILocationSeller {
  width?: number;
}

export const LocationSeller = ({
  children,
  width = 16,
}: React.PropsWithChildren<ILocationSeller>) => {
  return (
    <div className="flex items-center gap-1 leading-5 text-text-3">
      <Icons.Location width={width} viewBox="0 0 16 19" />
      {children}
    </div>
  );
};
