import { Button } from "@/shared/ui/button/ui";
import { Rating } from "react-simple-star-rating";

export const SellerReviews = () => {
  return (
    <div className="mt-20 rounded-lg bg-white p-12">
      <h2 className="mb-8 text-[28px] font-medium leading-9 text-title">
        Відгуки про продавця
      </h2>
      <div className="flex gap-8">
        <div className="max-w-[604px] text-text-secondary">
          <p>Зворотній звязок важливий для нас!</p>
          <p>
            Залишити відгук можна ось тут, напишіть ваші враження від
            спілкування з продавцем. Ваші відгуки допоможуть іншим покупцям
            здійснити вибір!
          </p>
          <p>Всі відгуки проходять перевірку на дійсність.</p>
          <Button variant="primary" size="md" className="mt-10">
            Залишити відгук
          </Button>
        </div>
        <div className="flex w-rating-box justify-evenly rounded-lg border border-text-2 px-6 py-[28.5px]">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[26px] leading-8 text-title">
              <span className="text-[58px] leading-[68px]">4</span>/5
            </p>
            <Rating
              SVGstyle={{ display: "inline" }}
              iconsCount={5}
              initialValue={4}
              size={20}
              readonly={true}
              fillColor={"#2A907F"}
              SVGstrokeColor={"#2A907F"}
              SVGstorkeWidth={1.5}
              emptyColor={"#FFFFFF"}
              allowFraction={true}
            />
            <p className="text-text-3">Відгуків за весь час: 1</p>
          </div>
          <div className="flex items-center gap-2 align-middle">
            <span className="text-text-3">5</span>
            <Rating
              iconsCount={1}
              size={16}
              readonly={true}
              emptyColor={"#2A907F"}
              SVGstrokeColor={"#2A907F"}
              SVGstorkeWidth={1.5}
            />
            <hr className="w-[96px] border-[1.5px] border-text-2" />
            <span className="text-title">0</span>
          </div>
        </div>
      </div>
      <div className="mt-16 max-w-[344px] rounded-lg border border-text-2 p-8">
        <div className="flex justify-between">
          <div>
            <h4 className="font-medium leading-6 text-title">Олег</h4>
            <p className="text-text-3">22.02.2024</p>
          </div>
          <Rating
            SVGstyle={{ display: "inline" }}
            iconsCount={5}
            initialValue={4}
            size={20}
            readonly={true}
            fillColor={"#2A907F"}
            SVGstrokeColor={"#2A907F"}
            SVGstorkeWidth={1.5}
            emptyColor={"#FFFFFF"}
            allowFraction={true}
          />
        </div>
        <p className="text-text-secondary">
          Я задоволений покупкою, цуценя чарівне, продавець допоміг з
          адаптацією, розповів про всі особливості, дякую за нового друга!
        </p>
      </div>
    </div>
  );
};
