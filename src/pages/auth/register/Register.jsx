import "../styles/auth.scss";
import "../styles/responsive-auth.scss";
import React from "react";
import AuthHeader from "../../../common/components/layouts/auth-layout/auth-header/AuthHeader";
import AuthLeft from "../../../common/components/layouts/auth-layout/auth-left/AuthLeft";
import AuthRight from "../../../common/components/layouts/auth-layout/auth-right/AuthRight";
import SignFormArea from "../components/sign-form-area/SignFormArea";
import RegisterForm from "./components/RegisterForm";

export default function Register() {
  return (
    <div className="auth">
      <AuthHeader
        preBtnString={"Bir hesabınız var?"}
        btnString={"Hesaba daxil ol"}
        btnHref={"/auth/login"}
      />
      <div className="auth_wrapper">
        <AuthLeft leftSideBgImg={"url('/assets/img/others/bg-image-10.jpg')"} />
        <AuthRight>
          <SignFormArea title="eTicarət'də yeniyəm">
            <form>
              <RegisterForm />
            </form>
          </SignFormArea>
        </AuthRight>
      </div>
    </div>
  );
}
