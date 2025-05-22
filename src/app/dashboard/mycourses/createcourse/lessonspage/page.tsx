"use client";
import styles from "./page.module.css";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import singlecourse from "../../../../../../mock/singlecourse";
import Course from "../../../../../../interfaces/Course";

export default function LessonsPage() {
  const [search, setSearch] = useState("");
  const [lessonSearch, setLessonSearch] = useState(false);
  const [lessonsArray, setLessonsArray] = useState([]);

  const router = useRouter();

  const goToMyCoursesPage = () => {
    router.push("/dashboard/mycourses");
  };

  const searchByWord = (text: string) => {
    if (text !== "") {
      setLessonSearch(true);
    }
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.searchContainer}>
        <div className={styles.inputRow}>
          <Image
            src={"/images/lupa.png"}
            alt="user example"
            width={40}
            height={40}
          />
          <input
            onChange={(e) => {
              const text = e.target.value;
              setSearch(text);
              searchByWord(text);
            }}
            type="text"
            placeholder="Buscar una lección"
            className={styles.searchInput}
          />
        </div>
      </div>
      <p className={styles.mainTitle}>
        Lecciones de tu curso: {singlecourse.courseTitle}
      </p>
      <div className={styles.addLessonDiv}>
        <button className={styles.addLessonButton}>Agregar lección</button>
      </div>
      {/*este father basicamente es un row para que no se rompa el diseño del scrollbar, ya que como tiene
      border radius, el scrollbar pareciera que está afuera. entonces este div vacio arregla eso */}
      <div className={styles.father}>
        <div className={styles.lessonsContainer}>
          {singlecourse.lessons.map((leccion, index) => (
            <div className={styles.singleLesson}>
              <p className={styles.singleLessonTitle}>
                Lección {index + 1}: {leccion.lessonTitle}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.emptyDiv}></div>
      </div>
      <div className={styles.addLessonDiv}>
        <button onClick={goToMyCoursesPage} className={styles.goBackButton}>
          Regresar
        </button>
      </div>
    </div>
  );
}
