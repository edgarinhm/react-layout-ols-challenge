import { RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import { router } from "./Router";

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
