import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

//Esta es una manera, pero si estoy seguro que el elemento existe, puedo usar un non-null assertion con el signo (!)
// const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
