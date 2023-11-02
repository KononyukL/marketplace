import Link from "next/link";

export const RegistrationFooter = () => {
  return (
    <div className="mb-5 mt-10 flex justify-center gap-2 text-sm">
      <p className="text-tertiary-2">Маєте акаунт?</p>
      <Link className="text-tertiary" href="/login">
        Увійти
      </Link>
    </div>
  );
};
