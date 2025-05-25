"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Course from "../../../../../interfaces/Course";
import { randomUUID } from "crypto";

export default function UploadCourses() {
  const searchParams = useSearchParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [editing, setEditing] = useState<boolean>(false); //falso inicialmente para
  //predeterminadamente mostrar esquema de Crear curso, en lugar de editar curso.
  const [coverImage, setCoverImage] = useState("/images/noimage.jpg");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [inputTextURL, setInputTextURL] = useState("");
  const [getUuid, setUuid] = useState("");
  const router = useRouter();
  //useEffect--------------------------------------------------------
  useEffect(() => {
    //obteniendo los parametros de url
    const courseParam = searchParams.get("course");
    const editingParam = searchParams.get("editing");

    if (courseParam) {
      try {
        const convertedCourse: Course = JSON.parse(
          decodeURIComponent(courseParam)
        );
        setCourse(convertedCourse);
        setTitle(convertedCourse.courseTitle);
        setDescription(convertedCourse.courseDescription);
        setInputTextURL(convertedCourse.imageRoute);
        setCoverImage(convertedCourse.imageRoute);
        setUuid(convertedCourse.uuid);
      } catch (err) {
        console.error("Error al parsear el objeto Course:", err);
      }
    }

    setEditing(editingParam === "true"); //si llega exactamente true, significa que
    //estamos editando un curso, si no llega, simplemente no se modifica el estado que inicialmente
    //es false, lo que significa que se está creando un curso nuevo de ser el caso.
  }, [searchParams]);
  //useEffect--------------------------------------------------------

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editing) {
      //modo editar curso
      if (title && description !== "") {
        alert("Curso modificado exitosamente");
        //debo obtener el local storage y modificarlo

        const modifiedCourse: Course = {
          ...course,
          courseTitle: title,
          courseDescription: description,
          imageRoute: coverImage,
          uuid: getUuid,
        };

        goToMyCoursesPage(false, modifiedCourse);
      }
    } else {
      //modo crear curso
      if (title && description !== "") {
        alert("Curso creado con exito");
        const newCourse: Course = {
          courseTitle: title,
          courseDescription: description,
          imageRoute: coverImage,

          uuid: crypto.randomUUID(), //esto lo puedes eliminar para el backend, por supuesto.
          //Yo lo puse pero para poder generar un curso y luego poder eliminarlo, porque ocupaba
          //un id para borrarlo del arreglo.
        };
        goToMyCoursesPage(true, newCourse);
      }
    }
  };

  //Como los objetos no tienen un identificador único, no puedo borrar el objeto del
  //por ejemplo haciendo un filter y filtrando los elementos que sean diferentes del que
  //quiero eliminar, entonces para eso uso el parametro 'isNew'.
  //Los pongo como opcionales porque esta misma función la uso para cuando el usuario
  //toca el botón de "Regresar"
  const goToMyCoursesPage = (isNew?: boolean, newCourse?: Course) => {
    //cuando se esta creando un curso
    if (isNew) {
      if (newCourse) {
        const storedCourses = localStorage.getItem("courses");
        const parsedCourses: Course[] = storedCourses
          ? JSON.parse(storedCourses)
          : [];

        parsedCourses.unshift(newCourse); //para que se posicione encima de la anterior
        localStorage.setItem("courses", JSON.stringify(parsedCourses));
      }
    } else {
      //cuando se está modificando un curso
      if (newCourse) {
        const storedCourses = localStorage.getItem("courses");
        const parsedCourses: Course[] = storedCourses
          ? JSON.parse(storedCourses)
          : [];

        const modifiedArray = parsedCourses.filter(
          (elemento) => elemento.uuid !== newCourse.uuid
        );

        modifiedArray.unshift(newCourse);

        localStorage.setItem("courses", JSON.stringify(modifiedArray));
      }
    } //concluye condicional principal (si se crea o se edita un curso)
    //
    router.push("/dashboard/mycourses");
  };

  const goToLessonsPage = (course: Course) => {
    if (course) {
      const course1 = {
        //le puse course1 porque ya existe la variable course (estado)
        //el objeto con la informacion del curso que voy a mandar a la ruta createcourse
        ...course,
      };
      const course1String = encodeURIComponent(JSON.stringify(course1));
      router.push(
        `/dashboard/mycourses/createcourse/lessonspage?course=${course1String}`
      );
    } else {
      router.push("/dashboard/mycourses/createcourse/lessonspage");
    }
  };

  const onChangeInputURL = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setInputTextURL(inputText);
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.form}>
        {editing ? (
          <h2 className={styles.mainTitle}>Editar curso</h2>
        ) : (
          <h2 className={styles.mainTitle}>Crear nuevo curso</h2>
        )}

        <form onSubmit={onSubmit} className={styles.restInformationContainer}>
          <div className={styles.credentialsDiv}>
            <div className={styles.inputGroup}>
              <label className={styles.subtitle}>Título:</label>
              <input
                value={title}
                maxLength={40}
                required
                type="text"
                placeholder="Título"
                className={styles.credentialsInput}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.subtitle}>Descripción:</label>
              <textarea
                value={description}
                maxLength={190}
                required
                placeholder="Descripción"
                className={styles.textAreaDescription}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.imagen_portada_section}>
            <label className={styles.subtitle}>Imagen de portada:</label>
            <div className={styles.uploadGroup}>
              <button
                onClick={() => {
                  inputTextURL
                    ? setCoverImage(inputTextURL)
                    : setCoverImage("/images/noimage.jpg");
                }}
                type="button"
                className={styles.updateImageButton}
              >
                Actualizar
              </button>

              <input
                value={inputTextURL}
                id="coverImage"
                type="text"
                placeholder="URL pública de tu imagen"
                onChange={(e) => onChangeInputURL(e)}
                className={styles.inputURL}
              />
              <Image
                src={coverImage}
                alt="course image"
                width={200}
                height={100}
                className={styles.imagen_preview}
                unoptimized
              />
            </div>
          </div>

          {editing ? (
            <div className={styles.form_actions}>
              <button type="submit" className={styles.uploadCourseButton}>
                Confirmar cambios
              </button>
              <button
                type="button"
                onClick={() => goToLessonsPage(course!)}
                className={styles.uploadCourseButton}
              >
                Agregar/Editar lecciones
              </button>
            </div>
          ) : (
            <div className={styles.form_actions}>
              <button type="submit" className={styles.uploadCourseButton}>
                Subir curso
              </button>
            </div>
          )}
        </form>
      </div>
      <div className={styles.newRow}>
        <button
          onClick={() => goToMyCoursesPage()}
          type="button"
          className={styles.formButtonBack}
        >
          Regresar
        </button>
      </div>
    </div>
  );
}
