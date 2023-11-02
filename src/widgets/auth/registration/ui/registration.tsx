import { RegistrationFooter } from "./footer";
import { RegistrationForm } from "./registration-form";
import { WelcomeBanner } from "./welcome-banner";

export const Registration = () => {
  return (
    <div className=" flex min-h-screen w-full">
      <WelcomeBanner />
      <div className="flex shrink grow basis-2/4 flex-col justify-center ">
        <div className="m-auto w-full max-w-auth">
          <h2 className="mb-10  text-4xl font-bold text-black">Реєстрація</h2>
          <RegistrationForm />
        </div>
        <RegistrationFooter />
      </div>
    </div>
  );
};
