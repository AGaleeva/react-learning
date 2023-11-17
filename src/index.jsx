import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App_fromConsult"; // import App, {animal} from "./App_fromLess"; // import {App} from "./App_fromLess";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
