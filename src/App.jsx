import { useState } from "react";
import "./App.css";
import { MainRoutes } from "./routes";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <MainRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
    </>
  );
}

export default App;
