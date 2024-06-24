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
      <ul className="border-gray-2 flex gap-8 border-b font-medium">
        {(children as ReactElement[]).map((item: ReactElement, index) => (
          <li
            key={index}
            className={cn("px-2 pb-1 font-medium text-primary", {
              "border-b-[3px] border-secondary text-secondary":
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
