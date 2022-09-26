import style from "./Header.module.css";

import igniteLogo from "../assets/ignite-simbol.svg";

export function Header() {
  return (
    <>
      <div className={style.header}>
        <img src={igniteLogo} alt="logo-site" />
        <strong>Ignite Feed</strong>
      </div>
    </>
  );
}
