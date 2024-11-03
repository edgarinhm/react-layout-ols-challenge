import { createBrowserRouter } from "react-router-dom";
import ProccessMonitor from "./pages/ProcessMonitor";

export const router = createBrowserRouter(
  [
    {
      path: "*",
      element: <ProccessMonitor />,
    },
  ],
  { basename: "/react-layout-ols-challenge" }
);
