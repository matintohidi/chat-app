import { createRoot } from "react-dom/client";
// react router
import { BrowserRouter } from "react-router-dom";
// redux configs
import { Provider } from "react-redux";
import { store } from "./store";
// components
import App from './App';
// styles
import "./assets/css/index.css";
import "./assets/css/style.css"

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);