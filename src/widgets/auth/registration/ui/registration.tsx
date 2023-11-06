import { RegistrationForm } from "./registration-form";
import { WelcomeBanner } from "./welcome-banner";
import { FooterAuth } from "@/widgets/auth/footer";

export const Registration = () => {
  return (
    <div className=" flex min-h-screen w-full bg-white">
      <WelcomeBanner />
      <div className="flex shrink grow basis-2/4 flex-col justify-center ">
        <div className="m-auto w-full max-w-auth">
          <h2 className="mb-10  text-4xl font-bold text-black">Реєстрація</h2>
          <RegistrationForm />
        </div>
        <FooterAuth link="/login" title="Маєте акаунт?" textLink="Увійти" />
      </div>
    </div>
  );
};
