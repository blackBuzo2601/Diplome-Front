"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

export default function UploadCourses() {
  const [coverImage, setCoverImage] = useState("/images/noimage.jpg");

  const lecciones = [
    "Introducción a JS",
    "Objetos literales",
    "Funciones",
    "Funciones de flecha",
  ];
  const router = useRouter();

  const goToMyCoursesPage = () => {
    router.push("/dashboard/mycourses");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/jpeg"];
    if (!validTypes.includes(file.type)) {
      alert("Solo se permiten archivos JPG.");
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
        <h2 className={styles.mainTitle}>Crear Nuevo Curso</h2>

        <form className={styles.restInformationContainer}>
          <div className={styles.credentialsDiv}>
            <div className={styles.inputGroup}>
              <label className={styles.subtitle}>Título:</label>
              <input
                type="text"
                placeholder="Título"
                className={styles.credentialsInput}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.subtitle}>Descripción:</label>
              <input
                type="text"
                placeholder="Descripción"
                className={styles.credentialsInput}
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
                accept="image/jpeg"
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

          <div className={styles.lecciones_section}>
            <div className={styles.inputGroup}>
              <label className={styles.subtitle}>Lecciones:</label>
            </div>
            <div className={styles.lecciones_container}>
              <div className={styles.lecciones_container}>
                {lecciones.length === 0
                  ? null
                  : lecciones.map((leccion, index) => (
                      <div key={index} className={styles.leccion_item}>
                        Leccion {index + 1}: {leccion}
                      </div>
                    ))}
              </div>
            </div>
          </div>

          <div className={styles.form_actions}>
            <button type="submit" className={styles.uploadCourseButton}>
              Subir curso
            </button>
          </div>
        </form>
      </div>
      <div className={styles.newRow}>
        <button
          onClick={goToMyCoursesPage}
          type="button"
          className={styles.formButtonBack}
        >
          Regresar
        </button>
      </div>
    </div>
  );
}
