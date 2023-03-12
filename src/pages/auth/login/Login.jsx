import "../styles/auth.scss";
import "../styles/responsive-auth.scss";
import React from "react";
import AuthHeader from "../../../common/components/layouts/auth-layout/auth-header/AuthHeader";
import AuthLeft from "../../../common/components/layouts/auth-layout/auth-left/AuthLeft";
import AuthRight from "../../../common/components/layouts/auth-layout/auth-right/AuthRight";
import SignFormArea from "../components/sign-form-area/SignFormArea";
import LoginForm from "./components/login-form/LoginForm";

export default function Login() {
  return (
    <div className="auth">
      <AuthHeader
        preBtnString={"Hələ də hesabınız yoxdur?"}
        btnString={"Hesab yarat"}
        btnHref={"/auth/register"}
      />
      <div className="auth_wrapper">
        <AuthLeft leftSideBgImg={"url('/assets/img/others/bg-image-9.jpg')"} />
        <AuthRight>
          <SignFormArea title="eTicarət'ə daxil ol">
            <form>
              <LoginForm />
            </form>
          </SignFormArea>
        </AuthRight>
      </div>
    </div>
  );
}
