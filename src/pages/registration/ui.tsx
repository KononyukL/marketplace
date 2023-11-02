import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { IFormRegistration } from "@/shared/api/auth/types";
import { addValidationRegistrationSchema } from "@/shared/lib/validation/validation";
import { useSignUp } from "@/shared/queries/auth";
import { Form } from "@/shared/form/form";
import { ControlledInput } from "@/shared/form/input";
import Link from "next/link";
import Button from "@/shared/ui/buttons/ui";
import { useState } from "react";
import Image from "next/image";
import Label from "@/shared/ui/label/ui";
import { Rating } from "react-simple-star-rating";

const Registration = () => {
  const [iconPassword, setIconPassword] = useState(false);
  const handleSwitchIconPassword = () => setIconPassword(!iconPassword);

  const form = useForm<IFormRegistration>({
    mode: "all",
    resolver: zodResolver(addValidationRegistrationSchema),
  });
  const {
    reset,
    formState: { errors },
  } = form;

  const { mutate } = useSignUp();
  const onSubmit = (data: IFormRegistration) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <div className=" flex min-h-screen w-full">
      <div className="relative  shrink grow basis-2/4">
        <div className="relative z-10 flex  min-h-screen flex-col gap-y-60 bg-register pb-36 pl-12 pt-24">
          <h2 className=" max-w-registerTitle  text-6xl font-bold leading-titleAuth">
            Вітаємо на нашому майданчику!
          </h2>
          <div className="flex flex-col gap-y-24">
            <p className="w-full max-w-registerText text-xl leading-7">
              У нас можна купити чи продати кота, знайти молочну корову,
              подарувати кошенят чи придбати песиків у перевіреного заводчика!
            </p>
            <div className=" flex flex-col ">
              <Rating
                SVGstyle={{ display: "inline" }}
                iconsCount={5}
                initialValue={5}
                size={20}
                readonly={true}
              />
              <p className="mt-7 w-full max-w-registerComment">
                We love Landingfolio! Our designers were using it for their
                projects, so we already knew what kind of design they want.
              </p>
              <div className="mt-5 flex gap-3">
                <Image
                  src={"/images/comment-image.svg"}
                  alt="People"
                  width={40}
                  height={40}
                />
                <div>
                  <p>Devon Lane</p>
                  <p className="text-xs text-blueGrayComment">
                    Co-Founder, Design.co
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={"/images/register-image.png"}
          alt="Login"
          className="z-0"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="flex shrink grow basis-2/4 flex-col justify-center ">
        <div className="m-auto w-full max-w-auth">
          <h2 className="mb-10  text-4xl font-bold text-black">Реєстрація</h2>
          <Form form={form} onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
              <Label
                isError={!!errors.email?.message}
                text="Електронна адреса"
                className="flex flex-col gap-1.5 "
              >
                <ControlledInput
                  name="email"
                  placeholder="Електронна адреса"
                  error={errors.email?.message}
                />
              </Label>
              <Label
                isError={!!errors.password?.message}
                text="Придумайте пароль"
                className="flex flex-col gap-1.5"
              >
                <ControlledInput
                  name="password"
                  placeholder="Пароль"
                  type={iconPassword ? "password" : "text"}
                  error={errors.password?.message}
                  endAdornment={
                    <Image
                      src={
                        iconPassword ? "/images/eye.svg" : "/images/eye-off.svg"
                      }
                      alt="eye"
                      onClick={handleSwitchIconPassword}
                      width={28}
                      height={28}
                    />
                  }
                />
              </Label>
              <Button
                className="mt-10 cursor-pointer rounded-md bg-buttonAuth p-4 font-medium text-white"
                type="submit"
              >
                Зареєструватись
              </Button>
            </div>
          </Form>
          <div className=" mt-8 flex justify-center gap-2 text-sm">
            <p className="text-blueGray">Маєте акаунт?</p>
            <Link className="text-strokeBlue" href="/login">
              Увійти
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
