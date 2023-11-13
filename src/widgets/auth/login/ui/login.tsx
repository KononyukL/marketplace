import { LoginForm } from "@/widgets/auth/login/ui/login-form";
import { WelcomeBanner } from "@/widgets/auth/login/ui/welcome-banner";
import { FooterAuth } from "@/widgets/auth/footer";

export const Login = () => {
  return (
    <div className=" flex h-screen w-full bg-white">
      <WelcomeBanner />
      <div className="flex shrink grow basis-2/4 flex-col justify-center ">
        <div className="m-auto w-full max-w-auth">
          <h2 className="mb-10  text-4xl font-bold text-black">
            Увійти в акаунт
          </h2>
          <LoginForm />
          <FooterAuth
            title="Не маєте акаунт?"
            link="/registration"
            textLink="Зареєструватись"
          />
        </div>
      </div>
    </div>
  );
};
