"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Course from "../../../../../interfaces/Course";

export default function UploadCourses() {
  const searchParams = useSearchParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const [coverImage, setCoverImage] = useState("/images/noimage.jpg");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  //useEffect--------------------------------------------------------
  useEffect(() => {
    const courseParam = searchParams.get("course");
    const editingParam = searchParams.get("editing");

    if (courseParam) {
      try {
        const convertedCourse = JSON.parse(decodeURIComponent(courseParam));
        setCourse(convertedCourse);
      } catch (err) {
        console.error("Error al parsear el objeto Course:", err);
      }
    }

    setEditing(editingParam === "true"); //si llega exactamente true, significa que
    //estamos editando un curso, sino, es estamos creando un curso nuevo
  }, [searchParams]);
  //useEffect--------------------------------------------------------

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editing) {
      //modo editar curso
      if (title && description !== "") {
        alert("Curso modificado exitosamente");
      }
    } else {
      //modo crear curso
      if (title && description !== "") {
        alert("Curso creado con exito");
        const newCourse: Course = {
          courseTitle: title,
          courseDescription: description,
        };
        goToMyCoursesPage(newCourse);
      }
    }
  };

  //botón Regresar
  const goToMyCoursesPage = (newCourse?: Course) => {
    if (newCourse) {
      const storedCourses = localStorage.getItem("courses");
      const parsedCourses: Course[] = storedCourses
        ? JSON.parse(storedCourses)
        : [];

      parsedCourses.push(newCourse);
      localStorage.setItem("courses", JSON.stringify(parsedCourses));
    }
    router.push("/dashboard/mycourses");
  };

  const goToLessonsPage = () => {
    router.push("/dashboard/mycourses/createcourse/lessonspage");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png"]; // Ya acepta JPG y PNG
    if (!validTypes.includes(file.type)) {
      alert("Solo se permiten archivos JPG o PNG.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setCoverImage(reader.result as string);
    };
    reader.readAsDataURL(file);
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
              <label htmlFor="coverImage" className={styles.formButton}>
                Adjuntar Imagen
              </label>
              <input
                id="coverImage"
                type="file"
                accept="image/jpeg, image/png"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />

              <Image
                src={coverImage}
                alt="course image"
                width={200}
                height={100}
                className={styles.imagen_preview}
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
                onClick={goToLessonsPage}
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
