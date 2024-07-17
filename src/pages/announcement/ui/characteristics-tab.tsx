import { type IAttribute } from "@/shared/api/advertisement-favorite/types";

export const CharacteristicsTab = ({
  favoriteAttributes,
  attributes,
}: {
  favoriteAttributes: IAttribute[];
  attributes: IAttribute[];
}) => {
  return (
    <table className="w-full">
      <tbody>
        {[...attributes, ...favoriteAttributes].map((el, index) => (
          <tr key={index}>
            <td className="text-gray-8">{el.group_title}</td>
            <td className="text-primary">{el.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
