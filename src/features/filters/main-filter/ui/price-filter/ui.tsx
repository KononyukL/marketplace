import { useTranslation } from "next-i18next";
import { ControlledInput } from "@/shared/ui";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export interface IPriceFilter {
  min_price?: number;
  max_price?: number;
}

export const PriceFilter = ({ min_price, max_price }: IPriceFilter) => {
  const { t } = useTranslation("categories");

  const { setValue } = useFormContext();

  useEffect(() => {
    if (min_price) {
      setValue("minPrice", min_price);
    }

    if (max_price) {
      setValue("maxPrice", max_price);
    }
  }, [min_price, max_price, setValue]);

  return (
    <div className="w-full border-b border-b-border-2 ">
      <h3>{t("filters-categories.price")}</h3>
      <div className="flex py-6">
        <ControlledInput
          startAdornment={<div>{t("filters-categories.from")}</div>}
          className="[&>input]:border-input [&>input]:pl-10 [&>input]:focus-within:border-additional [&>input]:hover:border-additional"
          name="minPrice"
        />
        <ControlledInput
          startAdornment={<div>{t("filters-categories.to")}</div>}
          className="[&>input]:border-input [&>input]:pl-10 [&>input]:focus-within:border-additional [&>input]:hover:border-additional"
          name="maxPrice"
        />
      </div>
    </div>
  );
};
