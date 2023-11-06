import { type IFormLogin } from "@/shared/api/auth/types";

import { useSignIn } from "@/shared/queries/auth";
import { Button, ControlledInput, Form, Label } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { addValidationLoginSchema } from "@/shared/lib/validation";

export const LoginForm = () => {
  const [iconPassword, setIconPassword] = useState(false);

  const handleSwitchIconPassword = () => setIconPassword(!iconPassword);
  const form = useForm<IFormLogin>({
    mode: "all",
    resolver: zodResolver(addValidationLoginSchema),
    defaultValues: { rememberMe: false, email: "", password: "" },
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
    <Form form={form} onSubmit={onSubmit}>
      <div className="flex flex-col">
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
            text="Пароль"
            className="flex flex-col gap-1.5"
          >
            <ControlledInput
              name="password"
              placeholder="Пароль"
              type={iconPassword ? "password" : "text"}
              error={errors.password?.message}
              endAdornment={
                <Image
                  src={iconPassword ? "/images/eye.svg" : "/images/eye-off.svg"}
                  alt="eye"
                  onClick={handleSwitchIconPassword}
                  width={28}
                  height={28}
                />
              }
            />
          </Label>
          <div className="flex justify-between">
            <Label
              className="flex flex-row-reverse items-center gap-1.5 focus-within:text-black"
              text=" Запам’ятати мене"
            >
              <div>
                <ControlledInput name="rememberMe" type="checkbox" />
              </div>
            </Label>
            <Link className="text-tertiary" href="/resetPassword">
              Забули пароль?
            </Link>
          </div>
        </div>
        <Button className="mt-10" type="submit" variant="secondary">
          Вхід
        </Button>
      </div>
    </Form>
  );
};
