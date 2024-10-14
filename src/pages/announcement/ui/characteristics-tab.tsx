import { type IAttribute } from "@/shared/api/advertisement-favorite/types";

export const CharacteristicsTab = ({
  favoriteAttributes,
  attributes,
}: {
  favoriteAttributes: IAttribute[];
  attributes: IAttribute[];
}) => {
  return (
   <>
    {[...attributes, ...favoriteAttributes].map((el, index) => (
      <div key={index} className="grid grid-cols-6 pb-3 last:pb-0">
        <span className="text-text-3">{el.group_title}</span>
        <span className="text-title">{el.title}</span>
      </div>
    ))}
  </>
  );
};
