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
        const modifiedCourse: Course = {
          ...course,
          courseTitle: title,
          courseDescription: description,
          imageRoute: coverImage,
          uuid: getUuid,
        };
        //lo mismo con este uuid, en algun punto lo ocupé para filtrar elementos con el localstorage
        //quitalo si te estorba.
        console.log("objeto modificado: ");
        console.log(modifiedCourse); //para ver el objeto modificado
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
          lessons: [],
          uuid: crypto.randomUUID(),
          //esto de randomUUID
          //lo puedes eliminar para el backend, por supuesto. Cuando hacía las pruebas con
          //localStorage ocupaba un Id para poder filtrar los elementos que no tenian ese ID, y
          //asi eliminar el objeto que ocupaba
          //Yo lo puse pero para poder generar un curso y luego poder eliminarlo, porque ocupaba
          //un id para borrarlo del arreglo.
        };

        goToMyCoursesPage(true, newCourse);
      }
    }
  };

  //Esta es la función que usaba para modificar el LocalStorage. Si llegaba un true, era porque
  //era un Curso creado desde cero. Si era false, era porque se estaba modificando un curso ya
  //existente. Ambos parametros los puse opcionales porque reutilizaba esta función para
  //mandar al usuario a MyCoursesPage
  const goToMyCoursesPage = (isNew?: boolean, newCourse?: Course) => {
    if (isNew) {
      //si el curso es nuevo, lo unshifteaba al arreglo del localstorage.
      if (newCourse) {
      }
    } else {
      //si el curso no es nuevo, modificaba el localstorage usando filter para
      //guardar los elementos cuyo uuid era diferente del que queria modificar (de esta
      //forma no lo guardaba) y en ese mismo arreglo metia el objeto Curso ya modificado
      if (newCourse) {
      }
    }

    router.push("/dashboard/mycourses");
  };

  const goToLessonsPage = (course: Course) => {
    if (course) {
      const course1 = {
        //copiar el estado de course para mandarlo por URL a LessonsPage
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
