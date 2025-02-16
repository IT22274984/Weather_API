import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const callbackUrl = process.env.REACT_APP_AUTH0_CALLBACK_URL || window.location.origin;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE; // Include if using an API

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: callbackUrl,
          audience: audience, // Needed if using an API
        }}
        cacheLocation="localstorage" // Ensures tokens persist across refreshes
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// Measure performance
reportWebVitals();
