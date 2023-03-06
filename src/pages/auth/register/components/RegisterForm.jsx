import React from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setRegisterData((states) => ({
      ...states,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <React.Fragment>
      <div className="input_group">
        <label htmlFor="firstName">Ad</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          onChange={changeHandler}
          className="input_control"
          placeholder="Filankəs"
        />
      </div>
      <div className="input_group">
        <label htmlFor="lastName">Soyad</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          onChange={changeHandler}
          className="input_control"
          placeholder="Filankəsli"
        />
      </div>
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
        <button className="submit_btn">Daxil ol</button>
        <a href="/" className="forget_link">
          Şifrəni unutmusunuz?
        </a>
      </div>
    </React.Fragment>
  );
}
