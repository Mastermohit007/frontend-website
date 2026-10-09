import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./context/DataContext.jsx";
import { CartProvider } from "./components/CartContext.jsx";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
        <App />
        <ScrollToTop
          smooth
          color="white"
          style={{
            background: "#ef4765",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </CartProvider>
    </DataProvider>
  </StrictMode>,
);
