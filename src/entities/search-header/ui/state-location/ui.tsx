import { ComboboxOptions } from "@/shared/ui/combobox-options";
import { type ILocation } from "@/shared/api/locations/types";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { type IState } from "@/entities/search-header/ui/search-location";
import { Spinner } from "@/shared/ui/spinner";

interface IStateLocation {
  states?: ILocation[];
  onClickState: (state: IState) => () => void;
}

export const StateLocation = ({ states, onClickState }: IStateLocation) => {
  const { t } = useTranslation("common");

  return (
    <>
      {states ? (
        <>
          <div className="px-4">
            <h3 className="text-black">{t("search.all-states")}</h3>
            <p className="text-xs text-text-3">{t("search.all-ads")}</p>
          </div>
          <p className="mt-2 px-4 text-xs text-black ">
            {t("search.select-area")}
          </p>
          {states.map((state) => (
            <ComboboxOptions key={state.id} value={state} disabled>
              <div
                className="mr-2 flex items-center justify-between px-4 py-2 hover:bg-hover"
                onClick={onClickState(state)}
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
      ) : (
        <Spinner />
      )}
    </>
  );
};
