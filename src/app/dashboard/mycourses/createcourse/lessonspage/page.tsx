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
      <div className={styles.father}>
        <div className={styles.lessonsContainer}>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
        </div>
        <div className={styles.emptyDiv}></div>
      </div>
    </div>
  );
}
