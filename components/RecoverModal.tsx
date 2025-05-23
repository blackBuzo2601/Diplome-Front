import React from "react";
import styles from "./RecoverModal.module.css";
import Image from "next/image";
interface RecoverModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  emailExists: boolean;
  children?: React.ReactNode;
}

const RecoverModal: React.FC<RecoverModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  children,
  emailExists,
}) => {
  if (!isOpen) return null; //para que por default no se muestre el modal, estilos etc
  //negamos tambien course (falsy), porque sino, Typescript no nos garantiza que course no sea null, sin
  //esa linea de codigo, tendríamos un warning al usar la imageRoute

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalDiv}>
        {emailExists ? (
          <Image
            src={"/images/palomita.png"}
            alt="Check image"
            className={styles.modalCourseImage}
            width={200}
            height={200}
          />
        ) : (
          <Image
            src={"/images/tacha.png"}
            alt="Check image"
            className={styles.modalCourseImage}
            width={200}
            height={200}
          />
        )}

        {emailExists ? (
          <p className={styles.modalCourseName}>
            Se ha enviado un mensaje a su correo. Por favor, verifique su
            identidad.
          </p>
        ) : (
          <p className={styles.modalCourseName}>
            El correo no está registrado en Diplôme. Introduzca un correo válido
          </p>
        )}

        <div className={styles.modalActions}>
          {emailExists ? (
            <button onClick={onConfirm} className={styles.goModalButton}>
              Entendido
            </button>
          ) : (
            <button onClick={onClose} className={styles.goModalButton}>
              Volver a intentar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecoverModal;
