import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FormProvider } from "../utils/FormContext.jsx";

createRoot(document.getElementById("root")).render(
  <FormProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FormProvider>
);
