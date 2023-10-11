import React from "react";
import { FormProvider } from "react-hook-form";
import type {
  EventType,
  FieldPath,
  UseFormReturn,
  SubmitHandler,
  FieldValues,
  DeepPartial,
} from "react-hook-form";

type ChildrenFunc<TFormValues extends FieldValues> = (
  methods: UseFormReturn<TFormValues>,
) => React.ReactNode;

type FormProps<TFormValues extends FieldValues> = {
  id?: string;
  form: UseFormReturn<TFormValues>;
  onSubmit?: SubmitHandler<TFormValues>;
  onChange?: (
    values: DeepPartial<TFormValues>,
    info?: {
      name?: FieldPath<FieldValues>;
      type?: EventType;
      value?: unknown;
    },
  ) => void;
  children: React.ReactNode | ChildrenFunc<TFormValues>;
};
export const Form = <TFormValues extends Record<string, any>>({
  id,
  form: methods,
  onSubmit,
  children,
  onChange,
}: FormProps<TFormValues>) => {
  React.useEffect(() => {
    if (!onChange) return;
    const subscription = methods.watch((value, info) => {
      if (!info.type) return;
      typeof onChange === "function" && onChange(value, info);
    });
    return () => subscription.unsubscribe();
  }, [methods, onChange]);
  return (
    <form id={id} onSubmit={onSubmit && methods.handleSubmit(onSubmit)}>
      <FormProvider {...methods}>
        {typeof children === "function" ? children(methods) : children}
      </FormProvider>
    </form>
  );
};
