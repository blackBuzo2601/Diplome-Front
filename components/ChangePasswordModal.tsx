import React from "react";
import styles from "./ChangePasswordModal.module.css";
import Image from "next/image";
interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;

  children?: React.ReactNode;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  children,
}) => {
  if (!isOpen) return null; //para que por default no se muestre el modal, estilos etc
  //negamos tambien course (falsy), porque sino, Typescript no nos garantiza que course no sea null, sin
  //esa linea de codigo, tendríamos un warning al usar la imageRoute

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalDiv}>
        <Image
          src={"/images/tacha.png"}
          alt="bad passwords"
          className={styles.modalCourseImage}
          width={200}
          height={200}
        />
        <p className={styles.modalCourseName}>Las contraseñas no coinciden.</p>
        <div className={styles.modalActions}>
          <button onClick={onConfirm} className={styles.goModalButton}>
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
