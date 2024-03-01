import { NavLink } from "react-router-dom";
import { ColorfulWord } from "../components/ColorfulWord";
import "./pages.css";
export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-wrapper">
          <h4 style={{ fontSize: "24px", paddingBottom: "40px" }}>
            мы зНАКоМы :
            <span style={{ display: "flex" }}>
              {/* <ColorfulWord
                word={String(
                  Math.floor(
                    (new Date() - new Date("2022-08-13")) /
                      (1000 * 60 * 60 * 24)
                  )
                )}
                size="40"
              /> */}
              <h1
                style={{
                  // fontFamily: "Arial",
                  color: "transparent",
                  WebkitBackgroundClip: "text",
                  backgroundImage: "linear-gradient(90deg, crimson, #ff5733)",
                }}
              >
                {Math.floor(
                  (new Date() - new Date("2022-08-13")) / (1000 * 60 * 60 * 24)
                )}
              </h1>
              &nbsp; дНеЙ
            </span>
          </h4>
          <img className="love-img" src="/image/love2.png" alt="d" />
          <img
            className="love-img"
            style={{ top: "60px", right: "50px", transform: "rotate(334deg)" }}
            src="/image/love2.png"
            alt="d"
          />
          <div className="home-menu">
            <NavLink to="/gallery">
              <ColorfulWord word="туТ МыЫ" size="40" />
            </NavLink>

            <NavLink to="/game">
              <ColorfulWord word="Сыграть в игру" size="60" />
            </NavLink>

            <NavLink to="/secret">
              <ColorfulWord word="????" size="60" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
