import React, { useState } from "react";
import styles from "./AddLessonModal.module.css";
import Image from "next/image";
import Course, { Lesson } from "../interfaces/Course";
interface AddLesonModalProps {
  isOpen: boolean; //booleano principal para mostrar el modal o no.
  onClose: () => void; //cerrar el modal (poner en false el estado de mostrar modal)
  isNewLesson: boolean; //condicional para mostrar modal de crear leccion o editar leccion
  addLesson: (Lesson: Lesson) => void; //esta función se encarga de obtener los datos
  //de los inputs, para enviarlos a LessonsPage y modificar el arreglo de Lessons de cada course.
}

const AddLesonModal: React.FC<AddLesonModalProps> = ({
  isOpen,
  onClose,
  addLesson,
  isNewLesson, //este condicional sirve para mostrar el modal de Crear o Editar lección
}) => {
  if (!isOpen) return null;

  const [textInput, setTextInput] = useState("");
  const [urlVideo, setUrlVideo] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (textInput !== "" && urlVideo !== "") {
      if (isNewLesson) {
        alert("Lección agregada con éxito!");
        const uuid = crypto.randomUUID();
        const newLesson = {
          lessonTitle: textInput,
          lessonVideoSource: urlVideo,
          uuid: uuid,
        };
        addLesson(newLesson);
      } else {
        alert("Leccion modificada (logica pendiente)");
      }
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
            <button className={styles.deleteLessonButton}>
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
