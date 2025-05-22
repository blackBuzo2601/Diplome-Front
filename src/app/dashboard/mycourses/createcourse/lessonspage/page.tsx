"use client";
import styles from "./page.module.css";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import teachercourses from "../../../../../../mock/teacherCourses";
export default function LessonsPage() {
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
            type="text"
            placeholder="Buscar una lección"
            className={styles.searchInput}
          />
        </div>
      </div>
      <p className={styles.mainTitle}>
        Lecciones de tu curso: {teachercourses[0].courseTitle}
      </p>
      <div className={styles.addLessonDiv}>
        <button className={styles.addLessonButton}>Agregar lección</button>
      </div>
      {/*este father basicamente es un row para que no se rompa el diseño del scrollbar, ya que como tiene
      border radius, el scrollbar pareciera que está afuera. entonces este div vacio arregla eso */}
      <div className={styles.father}>
        <div className={styles.lessonsContainer}>
          <div className={styles.singleLesson}>
            <p className={styles.singleLessonTitle}>
              Introducción al lenguaje de javascript Introducción al lenguaje de
              javascript Introducción al lenguaje de javascript Introducción al
              lenguaje de javascript Introducción al lenguaje de javascript
            </p>
          </div>
        </div>
        <div className={styles.emptyDiv}></div>
      </div>
    </div>
  );
}
