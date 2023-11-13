import { type IFormRegistration } from "@/shared/api/auth/types";

import { useSignUp } from "@/shared/queries/auth";
import { Button, ControlledInput, Form, Label } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registrationSchema } from "@/shared/lib/validation";

export const RegistrationForm = () => {
  const [iconPassword, setIconPassword] = useState(false);
  const handleSwitchIconPassword = () => setIconPassword(!iconPassword);

  const form = useForm<IFormRegistration>({
    mode: "all",
    resolver: zodResolver(registrationSchema),
  });
  const {
    reset,
    formState: { errors },
  } = form;

  const { mutate: signUp } = useSignUp();

  const onSubmit = (data: IFormRegistration) => {
    signUp(data, {
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
            text="Придумайте пароль"
            className="flex flex-col gap-1.5"
          >
            <ControlledInput
              name="password"
              placeholder="Пароль"
              type={iconPassword ? "password" : "text"}
              error={errors.password?.message}
              endAdornment={
                // todo: create separate icon component for that purposes, you can use @svgr/webpack or @neodx/svg whatever you prefer
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
        </div>
        <Button className="mt-10" type="submit" variant="secondary">
          Зареєструватись
        </Button>
      </div>
    </Form>
  );
};
