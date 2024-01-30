import { type IFormLogin } from "@/shared/api/auth/types";
import { useSignIn } from "@/shared/queries/auth";
import { Button, ControlledInput, Form, Label } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { loginSchema } from "@/shared/lib/validation";
import { useTranslation } from "next-i18next";

export const LoginForm = () => {
  const [iconPassword, setIconPassword] = useState(true);
  const { t } = useTranslation("common");

  const form = useForm<IFormLogin>({
    mode: "all",
    resolver: zodResolver(loginSchema),
    defaultValues: { rememberMe: false, email: "", password: "" },
  });
  const {
    reset,
    formState: { errors },
  } = form;
  const handleSwitchIconPassword = () => setIconPassword(!iconPassword);

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
            text={t("auth.email")}
            className="flex flex-col gap-1.5 "
          >
            <ControlledInput
              name="email"
              placeholder={t("auth.email")}
              error={t(errors.email?.message as never)}
            />
          </Label>
          <Label
            isError={!!errors.password?.message}
            text={t("auth.password")}
            className="flex flex-col gap-1.5"
          >
            <ControlledInput
              name="password"
              placeholder={t("auth.password")}
              type={iconPassword ? "password" : "text"}
              error={t(errors.password?.message as never)}
              endAdornment={
                <Image
                  src={
                    !iconPassword ? "/images/eye.svg" : "/images/eye-off.svg"
                  }
                  alt="eye"
                  onClick={handleSwitchIconPassword}
                  width={28}
                  height={28}
                />
              }
            />
          </Label>
        </div>
        <div className="mt-4 flex justify-between">
          <Label
            className="flex flex-row-reverse items-center gap-1.5 focus-within:text-black hover:text-primary"
            text={t("auth.remember-me")}
          >
            <div>
              <ControlledInput name="rememberMe" type="checkbox" />
            </div>
          </Label>
          <Link
            className="text-black hover:text-primary"
            href="/reset-password"
          >
            {t("auth.forgot-password")}
          </Link>
        </div>
        <Button className="mt-10" type="submit" variant="primary">
          {t("auth.login")}
        </Button>
      </div>
    </Form>
  );
};
