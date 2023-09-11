import iconTrybe from "../../images/image 68.svg";

import style from "./styles.module.css";

export default function Header() {
  return (
    <header className={style.Header}>
      <img src={iconTrybe} alt="" />
      <div>
        <h1>TRYBE NEWS</h1>
      </div>
    </header>
  );
}
