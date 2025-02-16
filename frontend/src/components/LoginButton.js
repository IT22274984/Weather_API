import { useAuth0 } from "@auth0/auth0-react";
import image from "../assets/images/weather.jpg";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <section
        className="relative bg-cover bg-center h-screen text-white flex flex-col justify-center items-center px-6"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${image})`,
        }}
      >
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight animate-fade-in">
            Stay Ahead with Real-Time Weather Updates
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            Get the latest weather forecasts, temperature trends, and severe weather alerts at your fingertips.
          </p>
          <button
            onClick={() => loginWithRedirect()}
            className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Login to Access Weather Data
          </button>
        </div>
      </section>
    )
  );
};

export default LoginButton;
