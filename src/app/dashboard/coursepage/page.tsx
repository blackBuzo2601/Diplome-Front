"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import singleCourse from "../../../../mock/singleCourse";
import { useState } from "react";
import { Lesson } from "../../../../interfaces/Course";

export default function CoursePage() {
  const router = useRouter();
  const singleCourseLessons: Lesson[] = singleCourse.lessons.map(
    (elemento, index) => ({
      ...elemento,
      uuid: `${index}`,
      lessonTitle: "Lección " + index + ": " + elemento.lessonTitle,
    })
  );
  //singleCourseLessons es el arreglo de los objetos Lesson ya convertido para que tenga
  //lección n, por cada lección que tiene el curso, en lugar de mostrar sólo el nombre

  const [selectedLesson, setSelectedLesson] = useState<Lesson>();
  return (
    <div className={styles.fatherDiv}>
      <div className={styles.courseTitleDiv}>
        <Image
          onClick={() => router.push("/dashboard")}
          src={"/images/arrow.png"}
          alt="Image course"
          className={styles.arrowImage}
          width={50}
          height={50}
          unoptimized
        />
        <p className={styles.mainTitle}>{singleCourse.courseTitle}</p>
      </div>
      <div className={styles.mainDiv}>
        <div className={styles.videoContainer}>
          <div className={styles.videoDisplay}></div>
          <div className={styles.courseDescriptionDiv}>
            <p className={styles.courseDescription}>
              {singleCourse.courseDescription}
            </p>
          </div>
        </div>
        <div className={styles.father}>
          <div className={styles.LessonsDiv}>
            {singleCourseLessons.map((elemento, key) => (
              <div
                onClick={() => {
                  setSelectedLesson(elemento);
                }}
                className={
                  selectedLesson?.uuid == elemento.uuid
                    ? styles.lessonCardSelected
                    : styles.lessonCard
                }
              >
                <p className={styles.lessonTitle}>{elemento.lessonTitle}</p>
              </div>
            ))}
          </div>
          <div className={styles.emptyDiv}></div>
        </div>
      </div>
    </div>
  );
}
