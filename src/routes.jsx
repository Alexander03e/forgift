import { useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Auth } from "./Auth";

export const MainRoutes = ({ isAuth, setIsAuth }) => {
  const bathRoutes = [
    { path: "/", element: <Auth isAuth={isAuth} setIsAuth={setIsAuth} /> },
  ];
  const authRoutes = [{ path: "/home", element: <Home /> }];
  const resultRoutes = bathRoutes;
  isAuth ? resultRoutes.push(...authRoutes) : "";
  return useRoutes(resultRoutes);
};
