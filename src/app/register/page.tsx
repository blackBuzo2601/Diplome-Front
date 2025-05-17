"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [rol, setRol] = useState("estudiante");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const router = useRouter();

  //por mientras pongo este event como any, para que no chille
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    router.push("/");
  };

  return (
    <div className={styles.mainDiv}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
          <p className={styles.ageLabel}> Fecha de nacimiento:</p>
          <input
            type="date"
            name="birthdate"
            required
            className={styles.inputDate}
          />
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Repetir contraseña"
              required
              className={styles.credentialsInput}
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
          <div className={styles.phoneDiv}>
            <p>Teléfono</p>
            <input
              type="tel"
              placeholder="(123) 456-7890"
              required
              className={styles.phoneInput}
              pattern="[0-9]{10,15}"
            />
          </div>
          <div className={styles.userRoleRow}>
            <div className={styles.radioGroup}>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="rol"
                  value="estudiante"
                  checked={rol === "estudiante"}
                  onChange={() => setRol("estudiante")}
                />
                <span className={styles.customRadio}></span>
                Soy estudiante
              </label>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="rol"
                  value="instructor"
                  checked={rol === "instructor"}
                  onChange={() => setRol("instructor")}
                />
                <span className={styles.customRadio}></span>
                Soy instructor
              </label>
            </div>
          </div>
          <button type="submit" className={styles.formButton}>
            Registrarse
          </button>
          <Link className={styles.registerLabel} href="/">
            ¿Ya tienes una cuenta? Inicia sesión aquí
          </Link>
        </div>
      </form>
    </div>
  );
}
