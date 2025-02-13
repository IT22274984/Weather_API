import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
    
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[900px] h-[500px] flex rounded-lg shadow-lg">
        <div className="flex-2 flex flex-col items-center justify-center bg-white rounded-l-lg p-6">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-bold mb-4">Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="outline-none border-none w-[370px] p-4 rounded-lg bg-gray-200 mb-2 text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="outline-none border-none w-[370px] p-4 rounded-lg bg-gray-200 mb-2 text-sm"
            />
            {error && <div className="w-[370px] p-4 bg-red-500 text-white rounded-md text-center mb-2">{error}</div>}
            <button type="submit" className="w-[180px] p-3 bg-green-500 text-white rounded-full font-bold text-sm mt-2">
              Sign In
            </button>
          </form>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center bg-green-500 rounded-r-lg text-white p-6">
          <h1 className="text-4xl font-bold mb-4">New Here?</h1>
          <Link to="/signup">
            <button className="w-[180px] p-3 bg-white text-green-500 rounded-full font-bold text-sm">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Login;
