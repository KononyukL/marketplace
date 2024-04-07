interface ISupport {
  title: string;
}
export const SupportPages = ({
  children,
  title,
}: React.PropsWithChildren<ISupport>) => {
  return (
    <div className="m-auto mb-bottom max-w-support bg-white">
      <div className="border-b border-text-2 px-support py-8">
        <h3 className="text-xl font-medium leading-relaxed">{title}</h3>
      </div>

      <div>{children}</div>
    </div>
  );
};
