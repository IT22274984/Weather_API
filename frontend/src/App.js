
import HomePage from "./pages/HomePage";
import './App.css';
import LoginButton from "./components/LoginButton";

import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { isLoading, error } = useAuth0();

  
  return (
    <main className="column">
      
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          
          <HomePage />
        </>
      )}
    </main>
  );
}

export default App;
