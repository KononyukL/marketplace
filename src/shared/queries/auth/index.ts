import { useMutation, UseMutationResult } from "react-query";
import { IAuth, IFormLogin, IFormRegistration } from "@/shared/api/auth/types";
import { useAppDispatch } from "@/shared/store/hooks";
import { authApi } from "@/shared/api";
import { authActions } from "@/shared/store/auth";

export function useSignIn(): UseMutationResult<IAuth, unknown, IFormLogin> {
  const dispatch = useAppDispatch();

  return useMutation(authApi.login, {
    onSuccess: (data) => {
      dispatch(authActions.addAuth(data));
    },
    onError: (error) => {
      console.log("Ops.. Error on sign in. Try again!");
    },
  });
}

export function useSignUp(): UseMutationResult<
  IAuth,
  unknown,
  IFormRegistration
> {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return useMutation(authApi.registration, {
    onSuccess: (data) => {
      dispatch(authActions.addAuth(data));
      // navigate("/");
    },
    onError: (error) => {
      console.log("Ops.. Error on sign in. Try again!");
    },
  });
}
