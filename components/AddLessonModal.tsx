"use client";
import React, { useState, useEffect } from "react";
import styles from "./AddLessonModal.module.css";
import Image from "next/image";
import Course, { Lesson } from "../interfaces/Course";
interface AddLessonModalProps {
  isOpen: boolean; //booleano principal para mostrar el modal o no.
  onClose: () => void; //cerrar el modal (poner en false el estado de mostrar modal)
  isNewLesson: boolean; //condicional para mostrar modal de crear leccion o editar leccion
  addLesson: (Lesson: Lesson, isNew: boolean) => void; //esta función se encarga de obtener los datos
  //de los inputs, para enviarlos a LessonsPage y modificar el arreglo de Lessons de cada course
  Lesson?: Lesson;
  onDelete?: () => void;
}

const AddLessonModal: React.FC<AddLessonModalProps> = ({
  isOpen,
  onClose,
  addLesson,
  Lesson,
  onDelete,
  isNewLesson, //este condicional sirve para mostrar el modal de Crear o Editar lección
}) => {
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    if (!isNewLesson && Lesson) {
      setTextInput(Lesson.lessonTitle);
    } else {
      //Si es nueva lección, limpia los inputs
      setTextInput("");
    }
  }, [isNewLesson, Lesson]);

  if (!isOpen) return null;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (textInput !== "") {
      if (isNewLesson) {
        alert("Lección agregada con éxito!");
        const uuid = crypto.randomUUID();
        const newLesson = {
          lessonTitle: textInput,
          lessonVideoSource: "",
          uuid: uuid,
        };
        setTextInput("");

        addLesson(newLesson, true);
      } else {
        alert("Leccion modificada con éxito!");
        const newLesson = {
          lessonTitle: textInput,
          lessonVideoSource: "",
          uuid: Lesson?.uuid, //construir nuevo objeto, sin modificar el uuid original
        };
        addLesson(newLesson, false);
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
          <button className={styles.updateLessonButton} type="button">
            Subir vídeo
          </button>
        </div>
        <div className={styles.modifyVideoDiv}>
          {isNewLesson ? null : (
            <button
              type="button"
              onClick={onDelete}
              className={styles.deleteLessonButton}
            >
              Borrar lección
            </button>
          )}
        </div>

        <div className={styles.modalActions}>
          <button
            className={styles.closeModalButton}
            onClick={() => {
              onClose();
              setTextInput("");
            }}
          >
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

export default AddLessonModal;
