"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

export default function UploadCourses() {
  const lecciones = [
    "Lección 1",
    "Lección 2",
    "Lección 3",
    "Lección 4",
    "Lección 5",
  ];
  const router = useRouter();

  const goToMyCoursesPage = () => {
    router.push("/dashboard/mycourses");
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png"];

    if (!validTypes.includes(file.type)) {
      alert("Solo se permiten archivos PNG o JPG.");
      event.target.value = "";
      return;
    }

    console.log("Archivo válido:", file);
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
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <Image
                src={"/images/computer-networks.jpg"}
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
              {lecciones.map((leccion, index) => (
                <div key={index} className={styles.leccion_item}>
                  {leccion}
                </div>
              ))}
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
