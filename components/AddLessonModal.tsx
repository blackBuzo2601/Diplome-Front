import React from "react";
import styles from "./AddLessonModal.module.css";
import Image from "next/image";
import Course from "../interfaces/Course";
interface AddLesonModalProps {
  isOpen: boolean;
  course: Course;
  onClose: () => void;
  onConfirm: () => any;
  isNewLesson: boolean;
}

const AddLesonModal: React.FC<AddLesonModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  isNewLesson,
  // course,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalDiv}>
        {isNewLesson ? (
          <p className={styles.modalCourseName}>Agregar lección</p>
        ) : (
          <p className={styles.modalCourseName}>Editar lección</p>
        )}

        <div className={styles.inputGroup}>
          <label className={styles.subtitle}>Título de lección:</label>
          <input
            maxLength={40}
            required
            type="text"
            placeholder="Título"
            className={styles.credentialsInput}
          />
        </div>
        <div className={styles.videoDivPlaceholder}></div>
        <div className={styles.modifyVideoDiv}>
          <label className={styles.subtitle}>Enlace del vídeo:</label>
          <input
            maxLength={40}
            required
            type="text"
            placeholder="URL del vídeo"
            className={styles.credentialsInput}
          />
        </div>
        <div className={styles.modifyVideoDiv}>
          <button className={styles.updateLessonButton} onClick={onConfirm}>
            Subir vídeo
          </button>
        </div>
        <div className={styles.modifyVideoDiv}>
          {isNewLesson ? null : (
            <button className={styles.deleteLessonButton} onClick={onConfirm}>
              Borrar lección
            </button>
          )}
        </div>

        <div className={styles.modalActions}>
          <button className={styles.closeModalButton} onClick={onClose}>
            Regresar
          </button>

          {isNewLesson ? (
            <button className={styles.goModalButton} onClick={onConfirm}>
              Crear lección
            </button>
          ) : (
            <button className={styles.goModalButton} onClick={onConfirm}>
              Editar lección
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddLesonModal;
