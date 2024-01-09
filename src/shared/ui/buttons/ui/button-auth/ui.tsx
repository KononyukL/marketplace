import { Button } from "@/shared/ui";
import Image from "next/image";

interface IButtonAuth {
  src: string;
  text: string;
  alt: string;
}
export const ButtonAuth = ({ src, alt, text }: IButtonAuth) => {
  return (
    <Button variant="outline">
      <Image src={src} height={24} width={24} alt={alt} className="mr-3" />
      {text}
    </Button>
  );
};
