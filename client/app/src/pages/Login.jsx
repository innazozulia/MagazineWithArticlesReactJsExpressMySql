import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = React.useState({
    username: "",
    password: "",
  });
  const [err, setErr] = React.useState(null);

  const navigate = useNavigate();

  const { login } = React.useContext(AuthContext);

  const handleChanges = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          onChange={handleChanges}></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          onChange={handleChanges}></input>
        <button onClick={handleLogin}>Login</button>
        {err && <p>{err.response.data}</p>}
        <span>
          Don`t you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
