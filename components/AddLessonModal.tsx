import React, { useState } from "react";
import styles from "./AddLessonModal.module.css";
import Image from "next/image";
import Course, { Lesson } from "../interfaces/Course";
interface AddLesonModalProps {
  isOpen: boolean;
  course: Course;
  onClose: () => void;
  onConfirm: (Lesson: Lesson) => void;
  onDelete: () => void;
  isNewLesson: boolean;
}

const AddLesonModal: React.FC<AddLesonModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  isNewLesson,
  onDelete,
  // course,
}) => {
  if (!isOpen) return null;

  const [textInput, setTextInput] = useState("");
  const [urlVideo, setUrlVideo] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (textInput !== "" && urlVideo !== "") {
      alert("datos actualizados");
      onConfirm({ lessonTitle: textInput, lessonVideoSource: urlVideo });
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.modalBackground}>
      <div className={styles.modalDiv}>
        {isNewLesson ? (
          <p className={styles.modalCourseName}>Agregar lección</p>
        ) : (
          <p className={styles.modalCourseName}>Editar lección</p>
        )}

        <div className={styles.inputGroup}>
          <label className={styles.subtitle}>Título de lección:</label>
          <input
            value={textInput}
            maxLength={40}
            required
            type="text"
            placeholder="Título para tu lección"
            className={styles.credentialsInput}
            onChange={(e) => {
              const inputText = e.target.value;
              setTextInput(inputText);
            }}
          />
        </div>
        <div className={styles.videoDivPlaceholder}></div>
        <div className={styles.modifyVideoDiv}>
          <label className={styles.subtitle}>Enlace del vídeo:</label>
          <input
            value={urlVideo}
            maxLength={40}
            required
            type="text"
            placeholder="URL del vídeo"
            className={styles.credentialsInput}
            onChange={(e) => {
              const urlVideo = e.target.value;
              setUrlVideo(urlVideo);
            }}
          />
        </div>
        <div className={styles.modifyVideoDiv}>
          <button className={styles.updateLessonButton} type="button">
            Subir vídeo
          </button>
        </div>
        <div className={styles.modifyVideoDiv}>
          {isNewLesson ? null : (
            <button
              className={styles.deleteLessonButton}
              onClick={() => onDelete}
            >
              Borrar lección
            </button>
          )}
        </div>

        <div className={styles.modalActions}>
          <button className={styles.closeModalButton} onClick={onClose}>
            Cancelar
          </button>

          {isNewLesson ? (
            <button type="submit" className={styles.goModalButton}>
              Crear lección
            </button>
          ) : (
            <button type="submit" className={styles.goModalButton}>
              Aplicar cambios
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddLesonModal;
