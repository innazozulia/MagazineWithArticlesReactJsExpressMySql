import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = React.useState({
    username: "",
    password: "",
    email: "",
  });
  const [err, setError] = React.useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (error) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          onChange={handleChange}></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          onChange={handleChange}></input>
        <input
          type="text"
          placeholder="email"
          name="email"
          required
          onChange={handleChange}></input>
        <button onClick={handleSubmit}>Register</button>
        <p> {err && <p>{err}</p>}</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
