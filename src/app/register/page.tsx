"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from '../../hooks/useAuth.js'

export default function Register() {
  const [rol, setRol] = useState("estudiante");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState('');
  const [repeatPassword, setRepeatPassword] = useState("");
  const router = useRouter();
  const { register } = useAuth();

  //por mientras pongo este event como any, para que no chille
  const handleSubmit = async (e: any) => {
	e.preventDefault();
	try {
		const role = rol === "estudiante" ? '0x01' : '0x02';
		await register(firstName, lastName, email, password, phone, role);
		router.push("/dashboard");
	} catch {
		router.push("/");
	}

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
			value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={styles.formInput}
          />
          <input
            type="text"
            placeholder="Apellido"
            required
			value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
			  value={email}
              onChange={(e) => setEmail(e.target.value)}
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
			  value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
