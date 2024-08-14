import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* Provider component makes Redux store available for the entire application, any component inside the Provider can access the store. */}
    <PersistGate persistor={persistor} loading={null}>
      {/* PersistGate delays the rendering of the app until the redux store has be rehydrated 
      persistor={persistor} -> loads persisted state to the store */}
      <App />
    </PersistGate>
  </Provider>
);
