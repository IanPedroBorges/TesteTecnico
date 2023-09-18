import style from "./styles.module.css";

import iconMenu from "../../images/Group 273.svg";
import { useControlCards } from "../../hooks/useControlCards";
import { useContext } from "react";
import { ApiContext } from "../../context/apicontext/apiContext";

export default function NavigateMenu() {
  const { setControlCards } = useControlCards();
  const { setRenderization, renderization } = useContext(ApiContext);
  return (
    <nav className={style.MainNavigate}>
      <ul>
        <li>
          <button onClick={() => setControlCards(0)}>Mais recentes</button>
        </li>
        <li>
          <button onClick={() => setControlCards(1)}>Release</button>
        </li>
        <li>
          <button onClick={() => setControlCards(2)}>Notícia</button>
        </li>
        <li>
          <button onClick={() => setControlCards(3)}>Favoritas</button>
        </li>
      </ul>
      <img
        onClick={() => setRenderization(!renderization)}
        style={{ cursor: "pointer" }}
        src={iconMenu}
        alt=""
      />
    </nav>
  );
}
