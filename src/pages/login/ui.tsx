import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type IFormLogin } from "@/shared/api/auth/types";
import { addValidationLoginSchema } from "@/shared/lib/validation/validation";
import { useSignIn } from "@/shared/queries/auth";
import { Form } from "@/shared/form/form";
import { ControlledInput } from "@/shared/form/input";
import Link from "next/link";
import Image from "next/image";
import Label from "@/shared/ui/label/ui";
import Button from "@/shared/ui/buttons/ui";

const Login = () => {
  const form = useForm<IFormLogin>({
    mode: "all",
    resolver: zodResolver(addValidationLoginSchema),
  });
  const {
    reset,
    formState: { errors },
  } = form;

  const { mutate } = useSignIn();
  const onSubmit = (data: IFormLogin) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <div className=" flex h-screen w-full">
      <div className="relative shrink grow basis-2/4">
        <Image
          src={"/images/login-image.png"}
          alt="Login"
          fill
          objectFit="cover"
        />
      </div>
      <div className="flex shrink grow basis-2/4 flex-col justify-center ">
        <div className="m-auto w-full max-w-auth">
          <h2 className="mb-10  text-4xl font-bold text-black">
            Увійти в акаунт
          </h2>
          <Form form={form} onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
              <Label
                isError={!!errors.email?.message}
                text="Електронна адреса"
                className="flex flex-col gap-1.5 "
              >
                <ControlledInput
                  id="email"
                  name="email"
                  placeholder="Електронна адреса"
                  error={errors.email?.message}
                />
              </Label>
              <Label
                isError={!!errors.password?.message}
                text="Пароль"
                className="flex flex-col gap-1.5"
              >
                <ControlledInput
                  name="password"
                  placeholder="password"
                  type="password"
                  error={errors.password?.message}
                />
              </Label>
              <div className="flex justify-between">
                <Label
                  className="flex flex-row-reverse items-center gap-1.5 focus-within:text-black"
                  text=" Запам’ятати мене"
                >
                  <div>
                    <ControlledInput name="reset" type="checkbox" />
                  </div>
                </Label>
                <Link className="text-strokeBlue" href="/resetPassword">
                  Забули пароль?
                </Link>
              </div>
              <Button
                className="mt-10 cursor-pointer rounded-md bg-buttonAuth p-4 font-medium text-white"
                type="submit"
              >
                Вхід
              </Button>
            </div>
          </Form>
          <div className=" mt-8 flex justify-center gap-2 text-sm">
            <p className="text-blueGray">Не маєте акаунт?</p>
            <Link className="text-strokeBlue" href={"/registration"}>
              Зареєструватись
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
