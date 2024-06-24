import { ComboboxOptions } from "@/shared/ui/combobox-options";
import { type ILocation } from "@/shared/api/locations/types";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Spinner } from "@/shared/ui/spinner";
import { type IState } from "@/shared/queries/search/types";

interface IStateLocation {
  states?: ILocation[];
  handleStateSelection: (state: IState) => () => void;
}

export const StateLocation = ({
  states,
  handleStateSelection,
}: IStateLocation) => {
  const { t } = useTranslation("common");

  if (!states) {
    return <Spinner />;
  }

  return (
    <>
      <div className="px-4">
        <h3 className="text-black">{t("search.all-states")}</h3>
        <p className="text-gray-8 text-xs">{t("search.all-ads")}</p>
      </div>
      <p className="mt-2 px-4 text-xs text-black ">{t("search.select-area")}</p>
      {states.map((state) => (
        <ComboboxOptions key={state.id} value={state} disabled>
          <div
            className="hover:bg-dark-1 mr-2 flex items-center justify-between px-4 py-2"
            onClick={handleStateSelection(state)}
          >
            <p className="text-black">{state.name}</p>
            <Image
              src="/images/arrow-search.svg"
              alt="Arrow"
              width={8}
              height={4}
            />
          </div>
        </ComboboxOptions>
      ))}
    </>
  );
};
