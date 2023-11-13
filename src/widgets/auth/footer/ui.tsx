import Link from "next/link";

interface IFooterAuth {
  title: string;
  link: string;
  textLink: string;
}
export const FooterAuth = ({ title, textLink, link }: IFooterAuth) => {
  return (
    <div className="mb-5 mt-10 flex justify-center gap-2 text-sm">
      <p className="text-tertiary-2">{title}</p>
      <Link className="text-tertiary" href={link}>
        {textLink}
      </Link>
    </div>
  );
};
