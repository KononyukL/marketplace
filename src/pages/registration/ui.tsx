import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { IFormRegistration } from "@/shared/api/auth/types";
import { addValidationRegistrationSchema } from "@/shared/lib/validation/validation";
import { useSignUp } from "@/shared/queries/auth";
import { Form } from "@/shared/form/form";
import { ControlledInput } from "@/shared/form/input";
import Link from "next/link";
import { Button } from "@/shared/ui";

type TRegistrationForm = IFormRegistration & {
  confirmPassword: string;
};

const Registration = () => {
  const form = useForm<TRegistrationForm>({
    mode: "all",
    resolver: zodResolver(addValidationRegistrationSchema),
  });
  const {
    reset,
    formState: { errors },
  } = form;

  const { mutate } = useSignUp();
  const onSubmit = (data: TRegistrationForm) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword: _, ...restData } = data;

    mutate(restData, {
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
            error={errors.email?.message}
          />
          <ControlledInput
            name="password"
            placeholder="password"
            inputStyles={errors.password && "border-red-600"}
            type="password"
            error={errors.password?.message}
          />
          <ControlledInput
            name="confirmPassword"
            placeholder="confirm password"
            type="password"
            inputStyles={errors.confirmPassword && "border-red-600"}
            error={errors.confirmPassword?.message}
          />
          <Button type="submit">Submit</Button>
        </div>
      </Form>
      <Link href={"/login"}>Sign In</Link>
    </div>
  );
};

export default Registration;
