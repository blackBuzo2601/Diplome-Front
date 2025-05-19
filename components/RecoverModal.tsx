import React from "react";
import styles from "./RecoverModal.module.css";
import Image from "next/image";
interface RecoverModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;

  children?: React.ReactNode;
}

const RecoverModal: React.FC<RecoverModalProps> = ({
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
          src={"/images/palomita.png"}
          alt="Check image"
          className={styles.modalCourseImage}
          width={200}
          height={200}
        />
        <p className={styles.modalCourseName}>
          Se ha enviado un mensaje a su correo. Por favor, verifique su
          identidad.
        </p>
        <div className={styles.modalActions}>
          <button onClick={onConfirm} className={styles.goModalButton}>
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecoverModal;
