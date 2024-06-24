import Image from "next/image";
import { useTranslation } from "next-i18next";
import { cn } from "@/shared/lib/cn";
import { type IAttribute } from "@/shared/api/advertisement-favorite/types";
import { type SyntheticEvent } from "react";

interface IDivTags
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  top?: boolean;
  date: string;
  title: string;
  prise: number;
  text: string;
  favoriteAttributes: IAttribute[];
  attributes: IAttribute[];
  size?: "sm" | "lg";
}

export const TemplateCard = ({
  top,
  date,
  size,
  title,
  favoriteAttributes,
  attributes,
  prise,
  text,
  className,
}: React.PropsWithChildren<IDivTags>) => {
  const { t } = useTranslation("home");

  const stopPropagation = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  return (
    <div className="mb-4">
      <div
        className={cn("flex items-center justify-between", className, {
          "mb-2": size === "sm",
          "mb-4": size === "lg",
        })}
      >
        <div className="flex items-start justify-between gap-4">
          {top && (
            <p className="rounded bg-secondary px-2 py-1 text-xs text-white">
              {t("advertisement.top")}
            </p>
          )}
          <div className="flex items-center gap-1">
            <Image src="/images/clock.svg" alt="Clock" width={16} height={16} />
            <p className="text-gray-8">{date}</p>
          </div>
        </div>
        <Image
          src="/images/heart-black.svg"
          alt="Heart"
          width={28}
          height={28}
        />
      </div>
      <div className={cn(className, { "pr-6": size === "lg" })}>
        <div className="mb-4 flex flex-col gap-1 text-xl font-medium text-primary">
          <p
            className={cn("flex-shrink truncate", className, {
              "text-base": size === "sm",
            })}
          >
            {title}
          </p>
          <p className="flex-none font-semibold">
            {prise ? `${prise} ${t("advertisement.uah")}` : ""}
          </p>
        </div>
        <div
          className={cn("flex gap-4 text-base", className, {
            "mb-2": size === "sm",
            "mb-4": size === "lg",
          })}
        >
          {favoriteAttributes?.map((el) => (
            <p key={el.attribute_id} className="text-gray-8">
              {el.group_title}:
              <span className="text-primary"> {el.title} </span>
            </p>
          ))}
        </div>
        <p
          onClick={stopPropagation}
          className={cn("text-gray-8 text-base", className, {
            "mb-3 line-clamp-2": size === "sm",
            "mb-4 line-clamp-3": size === "lg",
          })}
        >
          {text}
        </p>
        <div className="text-teal-0 flex gap-2">
          {attributes.map((el) => (
            <p key={el.attribute_id} className="bg-teal-4 rounded-tags-2 px-2">
              {el.title.toLowerCase()}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
