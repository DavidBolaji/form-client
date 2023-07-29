import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Download from "./pages/Download";
// import Upload from "./pages/Upload";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/download",
    element: <Download />,
  },
  // {
  //   path: "/upload",
  //   element: <Upload />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
