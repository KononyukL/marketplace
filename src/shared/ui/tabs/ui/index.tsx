import { cn } from "@/shared/lib/cn";
import { type ReactElement, useState } from "react";

interface ITabsProps {
  activeTab?: number;
}

export const Tabs = ({
  children,
  activeTab,
}: React.PropsWithChildren<ITabsProps>) => {
  const [selectedTab, setSelectedTab] = useState(activeTab ?? 0);
  return (
    <div>
      <ul className="flex gap-8 border-b border-text-2 font-medium">
        {(children as ReactElement[]).map((item: ReactElement, index) => (
          <li
            key={index}
            className={cn("px-2 pb-1 font-medium text-title", {
              "border-b-[3px] border-primary text-primary":
                index === selectedTab,
            })}
          >
            <button onClick={() => setSelectedTab(index)}>
              {item.props.title}
            </button>
          </li>
        ))}
      </ul>
      {(children as ReactElement[])[selectedTab]}
    </div>
  );
};
