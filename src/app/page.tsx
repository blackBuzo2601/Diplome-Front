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
          type="email"
          placeholder="Correo electrónico"
          required
          className={styles.formInput}
        />
        <input
          type="password"
          placeholder="Contraseña"
          required
          className={styles.formInput}
        />
        <button className={styles.formButton}>Entrar</button>
      </div>
    </form>
  );
}
