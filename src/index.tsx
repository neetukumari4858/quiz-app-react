import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Hooks/Context/authContext";
import {QuizProvider} from "./Hooks/Context/quizContext"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <QuizProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QuizProvider>
    </BrowserRouter>
  </React.StrictMode>
);

