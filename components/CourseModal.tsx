import React from "react";
import styles from "./CourseModal.module.css";
import Image from "next/image";
import Course from "../interfaces/Course";
interface CourseModalProps {
  isOpen: boolean;
  course: Course | null;
  onClose: () => void;
  onConfirm: () => void;
  isTeacher?: boolean;
  children?: React.ReactNode;
}

const CourseModal: React.FC<CourseModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  course,
  children,
  isTeacher,
}) => {
  if (!isOpen || !course) return null; //para que por default no se muestre el modal, estilos etc
  //negamos tambien course (falsy), porque sino, Typescript no nos garantiza que course no sea null, sin
  //esa linea de codigo, tendríamos un warning al usar la imageRoute

  return (
    <div className={styles.modalBackground}>
      <div className={isTeacher ? styles.modalDivTeacher : styles.modalDiv}>
        {children}
        <Image
          src={course.imageRoute}
          alt="Image course"
          className={styles.modalCourseImage}
          width={200}
          height={100}
        />
        <p className={styles.modalCourseName}>{course.courseTitle}</p>
        <div className={styles.modalCourseDescDiv}>
          <p className={styles.modalCourseDescription}>
            {course.courseDescription}
          </p>
        </div>
        {isTeacher ?? ( //evaluamos que isTeacher sea nulo o undefined, de ser asi, mostrar informacion
          //del teacher.
          <div className={styles.courseTeacherDiv}>
            <Image
              src={course.courseTeacherImage}
              alt="Image course"
              className={styles.courseTeacherImage}
              width={200}
              height={70}
            />
            <div className={styles.courseTeacherInfo}>
              <p className={styles.courseTeacherName}>
                {course.courseTeacherName}
              </p>
              <p className={styles.courseTeacherLabel}>Instructor</p>
            </div>
          </div>
        )}

        <div className={styles.modalActions}>
          <button className={styles.closeModalButton} onClick={onClose}>
            Cerrar
          </button>
          {isTeacher ? (
            <button className={styles.goModalButton} onClick={onConfirm}>
              Editar Curso
            </button>
          ) : (
            <button className={styles.goModalButton} onClick={onConfirm}>
              Ir al Curso
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
