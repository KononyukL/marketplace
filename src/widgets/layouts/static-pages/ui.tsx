import { type PropsWithChildren } from "react";

export const StaticPages = ({ children }: PropsWithChildren) => {
  return (
    <>
      <section>{children}</section>
    </>
  );
};
