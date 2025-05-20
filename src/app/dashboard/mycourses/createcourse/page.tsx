import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import React from "react";

export default function UploadCourses() {
  const lecciones = [
    "Lección 1",
    "Lección 2",
    "Lección 3",
    "Lección 4",
    "Lección 5",
  ];
  //const router = useRouter();

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
                readOnly
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.subtitle}>Descripción:</label>
              <input
                type="text"
                placeholder="Descripción"
                className={styles.credentialsInput}
                readOnly
              />
            </div>
          </div>

          <div className={styles.imagen_portada_section}>
            <div className={styles.inputGroup}>
              <label className={styles.subtitle}>Imagen de portada:</label>
              <div className={styles.uploadGroup}>
                <button type="button" className={styles.uploadButton}>
                  Adjuntar Imagen
                </button>
                <img
                  src="/images/5cb8f085-9f80-43b0-81bf-2cd9dd6bda6f.png"
                  alt="Vista previa"
                  className={styles.imagen_preview}
                />
              </div>
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
            <button type="submit" className={styles.formButton}>
              Subir curso
            </button>
          </div>
        </form>
        <button type="button" className={styles.formButtonBack}>
          Regresar
        </button>
      </div>
    </div>
  );
}
