import { TipComponent } from "@/pages/tip/ui/component";
import { Icons } from "@/shared/config";
import { cn } from "@/shared/lib/cn";
import { useState } from "react";

export const TipsInfo = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="mt-8 rounded-lg bg-white">
      <div
        className={cn("", {
          "max-h-[346px] overflow-hidden": isCollapsed,
        })}
      >
        <h3 className="inline-flex items-center gap-4 p-8 text-xl font-medium text-title">
          <Icons.ExclamationMark />
          Поради з безпеки від Animal Market
        </h3>
        <div className="border-t border-text-2">
          <TipComponent />
        </div>
      </div>
      <div className="pb-8 pr-[72px] text-right">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="border-b border-title text-center font-medium text-title"
        >
          {isCollapsed ? "детальніше" : "згорнути"}
        </button>
      </div>
    </div>
  );
};
