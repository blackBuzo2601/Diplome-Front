"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  //igual, por mientras pongo any para que no chille
  const handleSubmit = (e: any) => {
    e.preventDefault();

    router.push("/dashboard");
  };

  return (
    <form className={styles.mainDiv} onSubmit={handleSubmit}>
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
        <button type="submit" className={styles.formButton}>
          Entrar
        </button>
        <div className={styles.labelDiv}>
          <Link className={styles.registerLabel} href="/register">
            ¿No tienes cuenta? Regístrate aquí
          </Link>
        </div>
        <div className={styles.labelDiv}>
          <Link className={styles.registerLabelRecover} href="/recover">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
    </form>
  );
}
