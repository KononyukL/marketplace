import { cn } from "@/shared/lib/cn";
import { useState } from "react";

interface IAccordion {
  size?: "xsm" | "sm";
  className?: string;
  title: string;
}

export const Accordion = ({
  children,
  size = "xsm",
  className,
  title,
}: React.PropsWithChildren<IAccordion>) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div
      className={cn("w-full bg-white py-2 ", className, {
        "max-w-filter": size === "xsm",
      })}
    >
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex w-full items-center justify-between"
      >
        <span>{title}</span>
        <svg
          className={`h-4 w-4 transition-transform ${
            accordionOpen ? " transform" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={accordionOpen ? "M19 14l-7-7-7 7" : "M5 6l7 7 7-7"}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden border-b border-b-text-2 py-3 text-sm text-slate-600 transition-all  duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden"> {children}</div>
      </div>
    </div>
  );
};
