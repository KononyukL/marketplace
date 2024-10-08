import { TipComponent } from "@/pages/tip/ui/component";
import { Icons } from "@/shared/config";
import { cn } from "@/shared/lib/cn";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import "./tips-info.css";

export const TipsInfo = () => {
  const { t } = useTranslation("announcement");

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="mt-8 rounded-lg bg-white">
      <h3 className="inline-flex items-center gap-4 p-8 text-xl font-medium text-title">
        <Icons.ExclamationMark />
        {t("tips-info.header")}
      </h3>
      <div
        className={cn(
          "overflow-hidden border-t border-text-2 px-footer-pages py-8 text-text-secondary",
          {
            ellipsis: isCollapsed,
          },
        )}
      >
        <TipComponent />
      </div>
      <div className="pb-8 pr-footer-pages text-right">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="border-b border-title text-center font-medium text-title"
        >
          {isCollapsed ? t("tips-info.show-more") : t("tips-info.show-less")}
        </button>
      </div>
    </div>
  );
};
