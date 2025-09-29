import { GoogleLogin } from "@react-oauth/google";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { setUser } from "@/features/auth/model/authSlice";
import { useTranslation } from "react-i18next";

export const LoginWrapper = memo(() => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center min-h-[60vh] bg-gray-50 dark:bg-slate-900">
      <div className="container flex flex-col items-center gap-6 p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-md max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {t("login.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
          {t("login.desc")}
        </p>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const payload = jwtDecode(credentialResponse.credential as string);
            dispatch(setUser(payload));
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
});
