"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ChangePasswordModal from "../../../../components/ChangePasswordModal";
export default function ChangePasswordPage() {
  const [password, setPassword] = useState(""); //estados para manejar contraseña y confirmar
  const [repeatPassword, setRepeatPassword] = useState("");
  const [modalPassword, setModalPassword] = useState(false);
  const [title, setTitle] = useState("");
  const [counter, setCounter] = useState(3);
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  //esto lo voy a pasar al Modal
  const goToLoginPage = () => {
    setModalPassword(false);

    router.push("/");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setTitle("Las contraseñas no coinciden");
      setModalPassword(true);
      console.log("seteado");
      console.log(modalPassword);
    } else {
      setIsPasswordChanged(true);
      setModalPassword(true);
      setTitle("¡Contraseña cambiada con éxito!");
      setIsCounterVisible(true);
      let i = 2;
      const interval = setInterval(() => {
        setCounter(i);
        if (i === 0) {
          clearInterval(interval);
          setCounter(0);
          router.push("/");
        }
        i--;
      }, 1000);
    }
  };

  const router = useRouter();
  return (
    <div className={styles.mainDiv}>
      <form onSubmit={onSubmit} className={styles.form}>
        <p className={styles.mainTitle}>Cambiar contraseña</p>
        <p className={styles.subtitle}>Introduce tu nueva contraseña</p>

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
      <ChangePasswordModal
        passwordChanged={isPasswordChanged}
        showCounter={isCounterVisible}
        title={title}
        isOpen={modalPassword}
        onClose={() => setModalPassword(false)}
        onConfirm={goToLoginPage}
        counter={counter}
      />
    </div>
  );
}
