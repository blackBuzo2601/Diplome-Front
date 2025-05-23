"use client";
import styles from "./page.module.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import singlecourse from "../../../../../../mock/singlecourse";

import { Lesson } from "../../../../../../interfaces/Course";

export default function LessonsPage() {
  const searchParams = useSearchParams();
  const [courseData, setCourseData] = useState<{
    title: string;
    description: string;
    coverImage: string;
    lessons?: any[]; //puede o no estar lessons, puesto que puede venir un curso recien
    //creado o bien, uno que ya existía
  } | null>(null);

  const [search, setSearch] = useState("");
  const [lessonSearch, setLessonSearch] = useState(false); //condicional para filtrar por palabra
  const [lessonsArray, setLessonsArray] = useState<Lesson[]>([]); //arreglo con las lecciones a mostrar tras filtrar
  const [isVisibleSearchContainer, setIsVisibleSearchContainer] = //condicional para ocultar el buscador si no hay ninguna leccion creada
    useState(false);

  useEffect(() => {
    const courseParam = searchParams.get("course");
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const coverImage = searchParams.get("coverImage");

    if (courseParam) {
      try {
        const decoded = decodeURIComponent(courseParam);
        const parsedCourse = JSON.parse(decoded); //convertir a objeto el curso

        setCourseData(parsedCourse);

        //evaluar que exista al menos una leccion, sino, no tiene porque mostrarse el buscador
        if (parsedCourse.lessons && parsedCourse.lessons.length > 0) {
          setIsVisibleSearchContainer(true);
        } else {
          setIsVisibleSearchContainer(false);
        }
        return;
      } catch (error) {
        console.error("Error parsing course:", error);
      }
    }

    if (title && description && coverImage) {
      setCourseData({ title, description, coverImage });
    }
    setIsVisibleSearchContainer(false); //como no hay lecciones, igual ocultamos el buscador
  }, [searchParams]);

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
      const lessons: Lesson[] = courseData?.lessons ?? []; //si no tiene nada, lo dejamos como un arreglo vacio

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
      <p className={styles.mainTitle}>
        Lecciones de tu curso: {courseData?.title}
      </p>

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
          ) : courseData?.lessons?.length === 0 ? (
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
            courseData?.lessons?.map((leccion: Lesson, index: number) => (
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
