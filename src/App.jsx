import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorRoute from "./pages/errorRoute";
import ForgotPasswordPage from "./pages/forgotPw";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <div>Halaman Utama</div>,
	  errorElement: <ErrorRoute />,
    },
	{
		path: "/login",
		element: <SignInPage />,
	},
	{
		path: "/register",
		element: <SignUpPage />,
	},
	{
		path: "/forgot-password",
		element: <ForgotPasswordPage />,
	},
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
