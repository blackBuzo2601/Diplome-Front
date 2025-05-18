import React from "react";
import styles from "./CourseModal.module.css";
import Image from "next/image";
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
  if (!isOpen) return null; //para que por default no se muestre el modal, estilos etc

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalDiv}>
        {children}
        <Image
          src={"/images/cursojs.jpg"}
          alt="Image course"
          className={styles.modalCourseImage}
          width={200}
          height={100}
        />
        <p className={styles.modalCourseName}>
          Curso de Javascript Moderno desde cero
        </p>
        <div className={styles.courseTeacherDiv}>
          <Image
            src={"/images/user-example.png"}
            alt="Image course"
            className={styles.courseTeacherImage}
            width={200}
            height={70}
          />
          <div className={styles.courseTeacherInfo}>
            <p className={styles.courseTeacherName}>Sergio García</p>
            <p className={styles.courseTeacherLabel}>Instructor</p>
          </div>
        </div>
        <div className={styles.modalActions}>
          <button className={styles.closeModalButton} onClick={onClose}>
            Cerrar
          </button>
          <button className={styles.goModalButton} onClick={onConfirm}>
            Ir al Curso
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
