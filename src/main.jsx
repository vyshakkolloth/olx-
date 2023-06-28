import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { FirebaseContext } from "./store/Context.jsx";
import { firebase, db } from "./firebase/config";
import Context from "./store/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase, db }}>
      <Context>
        <Router>
          <App />
        </Router>
      </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
