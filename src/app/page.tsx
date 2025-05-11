import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <form className={styles.mainDiv}>
      <div className={styles.form}>
        <p className={styles.mainTitle}>Inicio Sesión</p>
        <p className={styles.subtitle}>
          Desbloquea tu progreso: Inicia sesión.
        </p>
        <input
          type="text"
          placeholder="Correo electrónico"
          required
          className={styles.formInput}
        />
        <input
          type="text"
          placeholder="Contraseña"
          required
          className={styles.formInput}
        />
      </div>
    </form>
  );
}
