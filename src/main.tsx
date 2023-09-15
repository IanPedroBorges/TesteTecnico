import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ApiProvider from "./context/apicontext/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApiProvider>
    <App />
  </ApiProvider>
);
