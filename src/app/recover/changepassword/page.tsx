"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ChangePasswordModal from "../../../../components/ChangePasswordModal";
export default function ChangePasswordPage() {
  const [password, setPassword] = useState(""); //estados para manejar contraseña y confirmar
  const [repeatPassword, setRepeatPassword] = useState("");
  const [modal, setModal] = useState(false);

  //esto lo voy a pasar al Modal
  const goToLoginPage = () => {
    setModal(false);
    router.push("/recover/changepassword");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert("no");
    } else {
      router.push("/");
    }
  };

  const router = useRouter();
  return (
    <div className={styles.mainDiv}>
      <form onSubmit={onSubmit} className={styles.form}>
        <p className={styles.mainTitle}>Cambiar contraseña</p>
        <p className={styles.subtitle}>Recupera tu contraseña fácilmente</p>

        <input
          type="password"
          placeholder="Nueva contraseña"
          required
          className={styles.formInput}
          name="inputone"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Repetir contraseña"
          required
          className={styles.formInput}
          name="inputtwo"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <button type="submit" className={styles.formButton}>
          Confirmar cambio
        </button>
      </form>
    </div>
  );
}
