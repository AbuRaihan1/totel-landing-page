const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
