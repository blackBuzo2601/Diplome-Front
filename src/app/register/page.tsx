import styles from "./page.module.css";
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.mainDiv}>
      <form className={styles.form}>
        <p className={styles.mainTitle}>Regístrate</p>
        <p className={styles.subtitle}>¡Empieza a aprender gratis!</p>
        <div className={styles.nameAndLastNameDiv}>
          <input
            type="text"
            placeholder="Nombre"
            required
            className={styles.formInput}
          />
          <input
            type="text"
            placeholder="Apellido"
            required
            className={styles.formInput}
          />
        </div>
        <div className={styles.ageDiv}>
          <p className={styles.ageLabel}>Selecciona tu edad</p>
          <select className={styles.selectAge} name="agenumber" required>
            {Array.from({ length: 100 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.restInformationContainer}>
          <div className={styles.credentialsDiv}>
            <input
              type="email"
              placeholder="Correo electrónico"
              required
              className={styles.credentialsInput}
            />
            <input
              type="password"
              placeholder="Contraseña"
              required
              className={styles.credentialsInput}
            />
            <input
              type="password"
              placeholder="Repetir contraseña"
              required
              className={styles.credentialsInput}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
