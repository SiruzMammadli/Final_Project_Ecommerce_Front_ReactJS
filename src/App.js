import "./app.scss";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import { router } from "./setup/route-manager/routes";

function App() {
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
}

export default App;
