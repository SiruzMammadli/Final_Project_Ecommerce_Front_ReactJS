import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setLoginData((states) => ({
      ...states,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      new Request("https://localhost:5000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
    ).then((res) => res.json());
    if (response.status === 200) {
      localStorage.setItem("access_token", JSON.stringify(response.message));
      navigate("/", { replace: true });
    }
  };

  return (
    <React.Fragment>
      <div className="input_group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={changeHandler}
          className="input_control"
          placeholder="numune@mail.com"
        />
      </div>
      <div className="input_group">
        <label htmlFor="password">Şifrə</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={changeHandler}
          className="input_control"
          placeholder="••••••••"
        />
      </div>
      <div className="input_group actions">
        <button className="submit_btn" onClick={submitHandler}>Daxil ol</button>
        <a href="/" className="forget_link">
          Şifrəni unutmusunuz?
        </a>
      </div>
    </React.Fragment>
  );
}
