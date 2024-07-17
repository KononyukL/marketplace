import { Icons } from "@/shared/config";
import { useScrollToTop } from "@/shared/ui/buttons/ui/button-scroll/lib";

export const ButtonScroll = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <>
      {isVisible && (
        <div className="fixed -right-1 bottom-32 px-5">
          <button
            onClick={scrollToTop}
            className="rounded-lg bg-secondary p-2 shadow-button-scroll"
          >
            <Icons.ArrowUp className="text-white" />
          </button>
        </div>
      )}
    </>
  );
};
