import { useAuth0 } from '@auth0/auth0-react';
import image from "../assets/images/weather.jpg";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        
        !isAuthenticated && (
            <>
            <section
      className="relative bg-cover bg-center h-screen text-white flex flex-col justify-between"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${image})`,
      }}
    >
      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center h-3/5 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
          Find the World in Climate
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-xl sm:max-w-3xl">
          Embark on a journey like never before. Enjoy exclusive deals and
          unparalleled comfort.
        </p>
        <button onClick={() => loginWithRedirect()}>
                Login
            </button>
      </div>
      
      
    </section>
            
            </>
        )
    )
}
        

export default LoginButton
