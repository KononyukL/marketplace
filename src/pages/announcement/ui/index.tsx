export const Announcement = () => {
  return (
    <div className="m-auto max-w-main px-14">
      Breadcrumbs
      <div className="mt-8 flex justify-between gap-8">
        <div className="w-2/3">
          <div className="mb-8 bg-slate-200 p-12 text-center">
            Here comes slider
          </div>
          <div className="rounded-lg bg-white p-8">Announcement main info</div>
          <div className="mt-8 rounded-lg bg-white p-8">Tips component</div>
        </div>
        <div className="w-1/3">
          <div className="mb-8 rounded-lg bg-white p-8">
            Announcement header
          </div>
          <div className="rounded-lg bg-white p-8">About seller info</div>
        </div>
      </div>
      <div className="mt-20 bg-white p-12 text-center">Seller reviews</div>
    </div>
  );
};
