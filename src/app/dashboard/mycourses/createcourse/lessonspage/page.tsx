"use client";
import styles from "./page.module.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import singlecourse from "../../../../../../mock/singlecourse";
import Course from "../../../../../../interfaces/Course";
import { Lesson } from "../../../../../../interfaces/Course";
type NewCourseProps = {
  searchParams: { title: string; description: string; coverImage: string };
};
export default function LessonsPage() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const description = searchParams.get("description") || "";
  const coverImage = searchParams.get("coverImage") || "";
  const [search, setSearch] = useState("");
  const [lessonSearch, setLessonSearch] = useState(false);
  const [lessonsArray, setLessonsArray] = useState<Lesson[]>([]);
  const [isVisibleSearchContainer, setIsVisibleSearchContainer] =
    useState(false);

  let existingCourse: boolean; //usaremos esta variable para cambiar el flujo de los estados, si es un curso
  //que estamos recien creando, o si estamos abriendo uno para editarlo

  useEffect(() => {
    if (singlecourse.lessons.length > 0) {
      setIsVisibleSearchContainer(true);
    } else {
      setIsVisibleSearchContainer(false);
    }
  }, []);

  const router = useRouter();

  const goToMyCoursesPage = () => {
    router.push("/dashboard/mycourses");
  };

  const searchByWord = (text: string) => {
    if (text.trim() !== "") {
      setLessonSearch(true);

      //tuve que poner esta pinche linea porque si no no me dejaba hacer el map porque no estaba seguro
      //de si elemento es un objeto. Como lecciones inicialmente va a estar vacio, tiene que haber
      //este caso de uso
      const lessons: Lesson[] = singlecourse.lessons ?? []; //si no tiene nada, lo dejamos como un arreglo vacio

      //asigno un número de lección en orden a cada lección
      const arrayWithLessonNumber = lessons.map((elemento, index) => ({
        ...elemento,
        lessonTitle: `Lección ${index + 1}: ${elemento.lessonTitle}`,
      }));
      //finalmente hago la busqueda por palabra, manteniendo el numero de leccion original
      //y seteando el resultado al estado de lessonsArray
      const results = arrayWithLessonNumber.filter((elemento) =>
        elemento.lessonTitle.toLowerCase().includes(text.toLowerCase())
      );
      setLessonsArray(results);
    } else {
      setLessonSearch(false);
    }
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.searchContainer}>
        {isVisibleSearchContainer ? (
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
        ) : null}
      </div>
      <p className={styles.mainTitle}>Lecciones de tu curso: {title}</p>

      <div className={styles.addLessonDiv}>
        <button className={styles.addLessonButton}>Agregar lección</button>
      </div>
      {/*este father basicamente es un row para que no se rompa el diseño del scrollbar, ya que como tiene
      border radius, el scrollbar pareciera que está afuera. entonces este div vacio arregla eso */}
      <div className={styles.father}>
        <div className={styles.lessonsContainer}>
          {lessonSearch ? (
            lessonsArray.length === 0 ? (
              <div className={styles.noLessonsDiv}>
                <p className={styles.noLessonsText}>
                  No se encontraron coincidencias
                </p>
                <Image
                  src={"/images/warning.png"}
                  alt="warning icon"
                  width={200}
                  height={200}
                  className={styles.noLessonsImage}
                />
              </div>
            ) : (
              lessonsArray.map((leccion, index) => (
                <div key={index} className={styles.singleLesson}>
                  <p className={styles.singleLessonTitle}>
                    {leccion.lessonTitle}
                  </p>
                </div>
              ))
            )
          ) : singlecourse.lessons.length === 0 ? (
            <div className={styles.noLessonsDiv}>
              <p className={styles.noLessonsText}>
                Tu curso no tiene ninguna lección. Comienza creando una lección
                ahora
              </p>
              <Image
                src={"/images/warning.png"}
                alt="warning icon"
                width={200}
                height={200}
                className={styles.noLessonsImage}
              />
            </div>
          ) : (
            singlecourse.lessons.map((leccion: Lesson, index: number) => (
              <div key={index} className={styles.singleLesson}>
                <p className={styles.singleLessonTitle}>
                  Lección {index + 1}: {leccion.lessonTitle}
                </p>
              </div>
            ))
          )}
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
