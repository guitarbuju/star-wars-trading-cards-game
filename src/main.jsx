import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AlbumProvider } from "../Context.jsx";
import { MoneyProvider } from "../Context.jsx"; 
// import { ExchangeProvider } from "../Context.jsx"; 


ReactDOM.createRoot(document.getElementById("root")).render(
  <AlbumProvider>
    <MoneyProvider> 
    {/* <ExchangeProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </ExchangeProvider> */}
    </MoneyProvider>
  </AlbumProvider>
);
