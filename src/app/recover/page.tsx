"use client";
import { useState } from "react";
import styles from "../recover/page.module.css";
import { useRouter } from "next/navigation";
import RecoverModal from "../../../components/RecoverModal";
import Link from "next/link";
export default function Recover() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false); //modal en false inicialmente
  const [emailExists, setEmailExists] = useState(true); //para el backend, si el usuario no existe, mostrar un modal diferente

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const goToChangePasswordPage = () => {
    setModalOpen(false);
    router.push("/recover/changepassword");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    openModal();
  };
  return (
    <form onSubmit={handleSubmit} className={styles.mainDiv}>
      <div className={styles.form}>
        <p className={styles.mainTitle}>Recuperar</p>
        <p className={styles.mainTitle}>contraseña</p>
        <p className={styles.subtitle}>Recupera tu contraseña fácilmente.</p>
        <input
          type="email"
          placeholder="Correo electrónico"
          required
          className={styles.formInput}
        />
        <button type="submit" className={styles.formButton}>
          Enviar
        </button>
        <div className={styles.labelDiv}>
          <Link href={"/"} className={styles.registerLabel}>
            Regresar a inicio de sesión
          </Link>
        </div>
      </div>
      <RecoverModal
        emailExists={emailExists}
        isOpen={modalOpen}
        onClose={closeModal}
        onConfirm={goToChangePasswordPage}
      />
    </form>
  );
}
