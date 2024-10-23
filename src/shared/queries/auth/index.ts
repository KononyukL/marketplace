import { useMutation, type UseMutationResult } from "react-query";
import type { IAuth, IFormLogin, ILogin } from "@/shared/api/auth/types";
import { useAppDispatch } from "@/shared/store/hooks";

import { authActions } from "@/shared/store/auth";
import { useRouter } from "next/router";
import AuthService from "@/shared/api/auth";

export function useSignIn(): UseMutationResult<IAuth, unknown, IFormLogin> {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return useMutation(AuthService.login.bind(AuthService), {
    onSuccess: (data) => {
      dispatch(authActions.addAuth(data));
      router.push("/");
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });
}

export function useSignUp(): UseMutationResult<IAuth, unknown, ILogin> {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return useMutation(AuthService.signup.bind(AuthService), {
    onSuccess: (data) => {
      dispatch(authActions.addAuth(data));
      router.push("/");
    },
    onError: (error: Error) => {
      // TODO: replace console.log with a user-friendly notification using notistack
      console.log(error.message);
    },
  });
}

export function useRefresh(): UseMutationResult<
  IAuth,
  unknown,
  Record<string, unknown>
> {
  const dispatch = useAppDispatch();

  return useMutation(AuthService.refreshToken.bind(AuthService), {
    onSuccess: (data) => {
      dispatch(authActions.addAuth(data));
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });
}
