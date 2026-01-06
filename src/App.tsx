import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import "./Styles/Styles.css";
import "./Styles/Variables.css";

export default function App() {
  return <RouterProvider router={router} />;
}
