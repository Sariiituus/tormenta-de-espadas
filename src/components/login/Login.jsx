import React, { useState } from "react";
import "./Login.scss"

const Login = () => {
  const INITIAL_STATE = {
    email: "",
    password: ""
  };

  const [form, setForm] = useState(INITIAL_STATE);

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setForm({...form, [name]: value});
  }

  const onSubmit = (ev) => {
    ev.preventDefault();
    localStorage.setItem("token", true);
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <div>
        <form onSubmit={onSubmit}>
          <div className="controls">
            <label>Email:</label>
            <input type="text" onChange={handleInput} name="email" value={form.email}/>
          </div>
          <div className="controls" >
            <label>Password:</label>
            <input type="password" onChange={handleInput} name="password" value={form.password} />
          </div>
          <div className="btn-container">
            <input type="submit" value="Login" class="controls"/>
            <input type="submit" value="Has olvidado tu contraseña" className="controls"/>
          </div>
          <div>
            <input type="submit" value="¿No tienes cuenta? Registrate" className="controls"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;