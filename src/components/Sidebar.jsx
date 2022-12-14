import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img src="https://www.intoxianime.com/wp-content/uploads/2022/01/Capturar.jpg" />

        <strong>Vinicius Paixao</strong>
        <span>Eng. Soft</span>
      </div>

      <footer>
        <a href="#">
          {" "}
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
