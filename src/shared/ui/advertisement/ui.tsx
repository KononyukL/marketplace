import Image from "next/image";

export const Advertisement = () => {
  return (
    <div className=" text-black">
      <div className="border-additional flex gap-6 rounded-lg border border-solid bg-white p-8">
        <div className="grid">
          <Image
            src="/images/animal-shelter-image.png"
            alt="foto"
            width={390}
            height={390}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div className="mb-5 flex items-center gap-1">
              <Image
                src="/images/clock.svg"
                alt="Clock"
                width={16}
                height={16}
              />
              <p className="text-text-3">годину тому </p>
            </div>
            <Image
              src="/images/heart-black.svg"
              alt="Heart"
              width={28}
              height={28}
            />
          </div>
          <div className="mb-2 flex gap-6 text-xl font-medium">
            <p>Цуценя Сибірські хаскі </p>
            <p>5000 грн</p>
          </div>
          <div className="mb-4 flex gap-4">
            <p className="text-text-3">
              Стать: <span className="text-black">чоловіча</span>
            </p>
            <p className="text-text-3">
              Вік: <span className="text-black">3 місяці</span>
            </p>
          </div>
          <p className="mb-4 w-full max-w-3xl ">
            Сибірські хаскі славляться своєю енергією, і це цуценя не виняток.
            Воно буде чудовим супутником для активних людей та сімей. Це
            маленьке цуценя - живий приклад вірної породи, з гарним характером
            та дружелюбністю. Хаскі будуть чудовими співмешканцями та друзями
            для вашої щасливої оселі...
          </p>
          <div className="text-additional mb-4 flex gap-2">
            <div className="bg-tags rounded-tags-2 px-2">вакцинований</div>
            <div className="bg-tags rounded-tags-2 px-2">знає команди</div>
            <div className="bg-tags rounded-tags-2 px-2">активний</div>
          </div>
          <div>
            <div className="flex items-center gap-4 ">
              <div className="bg-additional flex h-9 w-9 items-center justify-center rounded-full text-white">
                ВЛ
              </div>
              <div className="flex flex-col gap-1 ">
                <p className="text-text-3">Валерій B.</p>
                <div className="flex items-center">
                  <Image
                    src="/images/location-black.svg"
                    alt="Location"
                    width={16}
                    height={16}
                  />
                  Київ
                </div>
              </div>
              <div className="flex flex-col gap-1 ">
                <div className="flex ">
                  <Image
                    src="/images/private-announcement.svg"
                    alt="Location"
                    width={16}
                    height={16}
                  />
                  <p className="text-text-4">Приватне оголошення</p>
                </div>
                <p>56 відгуків</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
