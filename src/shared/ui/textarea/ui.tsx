import { type ChangeEvent } from "react";

export interface ITextareaProps {
  id: string;
  title: string;
  form: string;
  placeholder: string;
  name: string;
  value?: string;
  className?: string;
  defaultValue?: string;
  required: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Textarea = ({
  children,
  id,
  className,
  form,
  placeholder,
  name,
  defaultValue,
  required,
}: React.PropsWithChildren<ITextareaProps>) => {

  return (
    <textarea
      className={className}
      id={id}
      form={form}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      required={required}
    >
      {children}
    </textarea>
  );
};
