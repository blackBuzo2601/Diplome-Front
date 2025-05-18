import React from "react";
import styles from "./CourseModal.module.css";

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  children?: React.ReactNode;
}

const CourseModal: React.FC<CourseModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {title && <h2>{title}</h2>}
        {children}
        <div className={styles.modalActions}>
          <button onClick={onClose}>Cerrar</button>
          <button onClick={onConfirm}>Ir al Curso</button>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
