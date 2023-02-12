import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CreateStore } from "./services/globalContext";

const Provider = CreateStore({
    transactions: [],
    income: 0,
    expense: 0,
    currentSelected: null
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider>
        <App />
    </Provider>
);
