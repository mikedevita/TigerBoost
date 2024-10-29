import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";
import { HomePage } from "./pages/HomePage";
import { Container } from "react-bootstrap";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
]);
function App() {
  return (
    <div id="App" className="text-white">
      <Container>
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
