import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IFormLogin } from "@/shared/api/auth/types";
import { addValidationLoginSchema } from "@/shared/lib/validation/validation";
import { useSignIn } from "@/shared/queries/auth";
import { Form } from "@/shared/form/form";
import { ControlledInput } from "@/shared/form/input";
import Link from "next/link";
import { Button } from "@/shared/ui";

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
    <div className="m-auto w-full max-w-sm p-4">
      <Form form={form} onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
          <ControlledInput
            name="email"
            placeholder="email"
            inputStyles={errors.email && "border-red-600"}
          />
          {errors.email?.message && <p>{errors.email?.message as string}</p>}
          <ControlledInput
            name="password"
            placeholder="password"
            inputStyles={errors.password && "border-red-600"}
            type="password"
          />
          {errors.password?.message && (
            <p>{errors.password?.message as string}</p>
          )}
          <Button type="submit">Submit</Button>
          <Link href={"/registration"}>Sign In</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
