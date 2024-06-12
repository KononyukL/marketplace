import { Icons } from "@/shared/config";
import { useScrollToTop } from "@/shared/ui/buttons/ui/button-scroll/lib";

export const ButtonScroll = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <>
      {isVisible && (
        <div className="px-button-scroll fixed bottom-32 right-32">
          <button
            onClick={scrollToTop}
            className="rounded-lg bg-primary p-2 shadow-button-scroll"
          >
            <Icons.ArrowUp className="text-white" />
          </button>
        </div>
      )}
    </>
  );
};
