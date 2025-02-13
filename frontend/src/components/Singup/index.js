import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
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
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[900px] h-[500px] flex rounded-lg shadow-lg">
        <div className="flex-1 flex flex-col items-center justify-center bg-green-500 rounded-l-lg p-6 text-white">
          <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>
          <Link to="/login">
            <button className="w-[180px] p-3 bg-white text-green-500 rounded-full font-bold text-sm">Sign in</button>
          </Link>
        </div>
        <div className="flex-2 flex flex-col items-center justify-center bg-white rounded-r-lg p-6">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-bold mb-4">Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className="outline-none border-none w-[370px] p-4 rounded-lg bg-gray-200 mb-2 text-sm"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className="outline-none border-none w-[370px] p-4 rounded-lg bg-gray-200 mb-2 text-sm"
            />
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
