import React from "react";
import styles from "./ChangePasswordModal.module.css";
import Image from "next/image";
interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  counter: number;
  showCounter: boolean;
  passwordChanged: boolean;
  children?: React.ReactNode;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  children,
  title,
  counter,
  showCounter,
  passwordChanged,
}) => {
  if (!isOpen) return null; //para que por default no se muestre el modal, estilos etc
  //negamos tambien course (falsy), porque sino, Typescript no nos garantiza que course no sea null, sin
  //esa linea de codigo, tendríamos un warning al usar la imageRoute

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalDiv}>
        <div className={styles.mainInformation}>
          {passwordChanged ? (
            <Image
              src={"/images/palomita.png"}
              alt="changed password correctly"
              className={styles.modalCheckImage}
              width={200}
              height={200}
            />
          ) : (
            <Image
              src={"/images/tacha.png"}
              alt="error changing password"
              className={styles.modalCheckImage}
              width={200}
              height={200}
            />
          )}

          <p className={styles.modalTitleName}>{title}</p>
          {showCounter ? (
            <p className={styles.modalReturningLabel}>
              Regresando a la pantalla de inicio de sesión en {counter}
            </p>
          ) : (
            <p className={styles.modalReturningLabel}>
              Por favor. Vuelva a intentarlo
            </p>
          )}
        </div>
        {passwordChanged ? (
          <button onClick={onConfirm} className={styles.goModalButton}>
            Iniciar sesión
          </button>
        ) : (
          <button onClick={onClose} className={styles.goModalButton}>
            Volver a intentar
          </button>
        )}
      </div>
    </div>
  );
};

export default ChangePasswordModal;
