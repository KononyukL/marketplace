import { useMutation, type UseMutationResult } from "react-query";
import type {
  IAuth,
  IFormLogin,
  IFormRegistration,
} from "@/shared/api/auth/types";
import { useAppDispatch } from "@/shared/store/hooks";
import { authApi } from "@/shared/api";
import { authActions } from "@/shared/store/auth";

export function useSignIn(): UseMutationResult<IAuth, unknown, IFormLogin> {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/unbound-method
  return useMutation(authApi.login, {
    onSuccess: (data) => {
      dispatch(authActions.addAuth(data));
    },
    onError: (error: Error) => {
      console.log(error.message);
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

  // eslint-disable-next-line @typescript-eslint/unbound-method
  return useMutation(authApi.registration, {
    onSuccess: (data) => {
      dispatch(authActions.addAuth(data));
      // navigate("/");
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });
}
