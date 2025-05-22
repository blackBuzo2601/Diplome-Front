"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

export default function UploadCourses() {
  const [coverImage, setCoverImage] = useState("/images/noimage.jpg");

  const router = useRouter();

  const goToMyCoursesPage = () => {
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
        <h2 className={styles.mainTitle}>Crear nuevo curso</h2>

        <form className={styles.restInformationContainer}>
          <div className={styles.credentialsDiv}>
            <div className={styles.inputGroup}>
              <label className={styles.subtitle}>Título:</label>
              <input
                required
                type="text"
                placeholder="Título"
                className={styles.credentialsInput}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.subtitle}>Descripción:</label>
              <textarea
                required
                placeholder="Descripción"
                className={styles.textAreaDescription}
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

          <div className={styles.form_actions}>
            <button
              onClick={goToLessonsPage}
              type="submit"
              className={styles.uploadCourseButton}
            >
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
