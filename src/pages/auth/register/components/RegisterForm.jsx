import React from "react";
import { useNavigate } from "react-router-dom";
import useQuery from "../../../../__test__/hooks/useQuery";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const ChangeHandler = (e) => {
    setRegisterData((states) => ({
      ...states,
      [e.target.name]: e.target.value,
    }));
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const response = useQuery(
      "https://localhost:5000/api/auth/register",
      "post",
      registerData
    );
    if (response.status === 200) {
      navigate("/auth/login", { replace: true });
    }
  };

  return (
    <React.Fragment>
      <div className="input_group">
        <label htmlFor="firstName">Ad</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          onChange={ChangeHandler}
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
          onChange={ChangeHandler}
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
          onChange={ChangeHandler}
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
          onChange={ChangeHandler}
          className="input_control"
          placeholder="••••••••"
        />
      </div>
      <div className="input_group actions">
        <button className="submit_btn" onClick={SubmitHandler}>
          Daxil ol
        </button>
      </div>
    </React.Fragment>
  );
}
