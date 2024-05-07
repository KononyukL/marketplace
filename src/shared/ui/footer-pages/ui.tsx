interface IFooter {
  title: string;
}
export const FooterPages = ({
  children,
  title,
}: React.PropsWithChildren<IFooter>) => {
  return (
    <div className="max-w-footer-pages m-auto mb-bottom bg-white">
      <div className="px-footer-pages border-b border-text-2 py-8">
        <h3 className="text-xl font-medium leading-6 text-title">{title}</h3>
      </div>

      <div className="text-text-5 px-footer-pages py-8 text-justify leading-relaxed">
        {children}
      </div>
    </div>
  );
};
