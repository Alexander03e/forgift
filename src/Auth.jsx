import { useState } from "react";
import { ColorfulWord } from "./components/ColorfulWord";
import { useNavigate } from "react-router-dom";
export const Auth = ({ isAuth, setIsAuth }) => {
  const password = 13082022;
  const [value, setValue] = useState();
  const [block, setBlock] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const enterButton = () => {
    setBlock(value != password ? true : false);
    if (value == password) {
      setIsAuth(true);
    }
  };
  const navigate = useNavigate();
  const loginClick = () => {
    navigate("/home");
  };
  return (
    <div className="gift">
      <div className="container">
        <div className="gift-wrapper">
          <h1 style={{ marginBottom: "3em", marginTop: "1em" }}>
            <h4 style={{ fontSize: "40px" }}>
              ПрИвет
              {isAuth && <ColorfulWord word=" ЮлианА !" size="30" />}
            </h4>
          </h1>
          {!isAuth ? (
            <>
              <h4>пароль: </h4>
              <input onChange={handleChange} value={value}></input>
              <button onClick={enterButton} className="enter-button">
                Войти
              </button>
              {block ? <ColorfulWord word="доступ запрещеН" size="30" /> : ""}
            </>
          ) : (
            ""
          )}
        </div>

        {isAuth ? (
          <div className="lk-wrapper">
            <button className="enter-button lk" onClick={loginClick}>
              <ColorfulWord word="нАжми сюда" size="50" />
              <br />
              <br />
              <br />
              <img src="/image/love21.png" className="love" alt="" />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
