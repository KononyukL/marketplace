import { Accordion } from "@/shared/ui/accordion";
import { useTranslation } from "next-i18next";

const genderArray = [
  { id: 1, name: "Чоловіча" },
  { id: 2, name: "Жіноча" },
  { id: 3, name: "Всі" },
];

export const Gender = () => {
  const { t } = useTranslation("categories");

  return (
    <Accordion title={t("filters-categories.gender")}>
      {genderArray.map((gender) => (
        <div className="flex items-center" key={gender.id}>
          <div className="relative flex cursor-pointer items-center rounded-full py-3">
            <input
              name="type"
              type="radio"
              className="before:content[''] hover:before:opacity-1 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-border-2 text-additional transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-additional checked:before:bg-additional"
              id={`${gender.id}`}
            />
            <span className="pointer-events-none absolute left-[10px] top-2/4 -translate-x-2/4 -translate-y-2/4 text-additional opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
              </svg>
            </span>
            <label
              className="ml-2 mt-px cursor-pointer select-none font-light text-gray-700 peer-checked:font-medium"
              htmlFor={`${gender.id}`}
            >
              {gender.name}
            </label>
          </div>
        </div>
      ))}
    </Accordion>
  );
};
