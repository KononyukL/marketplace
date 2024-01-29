import Image from "next/image";

export const Location = ({
  children,
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <div className="flex items-center">
      <Image
        src="/images/location-black.svg"
        alt="Location"
        width={16}
        height={16}
      />
      {children}
    </div>
  );
};
