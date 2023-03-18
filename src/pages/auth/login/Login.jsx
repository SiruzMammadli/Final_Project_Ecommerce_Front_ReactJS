import "../styles/auth.scss";
import "../styles/responsive-auth.scss";
import React from "react";
import AuthHeader from "../../../common/components/layouts/auth-layout/auth-header/AuthHeader";
import AuthLeft from "../../../common/components/layouts/auth-layout/auth-left/AuthLeft";
import AuthRight from "../../../common/components/layouts/auth-layout/auth-right/AuthRight";
import SignFormArea from "../components/sign-form-area/SignFormArea";
import LoginForm from "./components/login-form/LoginForm";
import LoadingSpinner from "../../../__test__/components/loading/LoadingSpinner";

export default function Login() {
  const [loading, setLoading] = React.useState(false);

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
            {loading && <LoadingSpinner circleWidth={4} />}
            <form>
              <LoginForm setLoading={setLoading} />
            </form>
          </SignFormArea>
        </AuthRight>
      </div>
    </div>
  );
}
