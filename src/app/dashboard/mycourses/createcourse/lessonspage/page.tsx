"use client";
import styles from "./page.module.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Course from "../../../../../../interfaces/Course";
import { Lesson } from "../../../../../../interfaces/Course";
import AddLesonModal from "../../../../../../components/AddLessonModal";

export default function LessonsPage() {
  const searchParams = useSearchParams();
  const [courseData, setCourseData] = useState<Course>();

  const [search, setSearch] = useState("");
  const [lessonSearch, setLessonSearch] = useState(false); //condicional para filtrar por palabra
  const [lessonsArray, setLessonsArray] = useState<Lesson[]>([]); //arreglo con las lecciones a mostrar tras filtrar
  const [isVisibleSearchContainer, setIsVisibleSearchContainer] = //condicional para ocultar el buscador si no hay ninguna leccion creada
    useState(false);
  const [isAddLessonModalVisible, setIsAddLessonModalVisible] = useState(false);
  const [isNewLesson, setIsNewLesson] = useState(true);

  useEffect(() => {
    const courseParam = searchParams.get("course");

    //por si acaso hacemos esta validacion, aunque si estamso aqui, siempre va a venir un
    //'course' porque solo se puede acceder aquí desde el modo editar, no hay modo de llegar
    //aqui desde modo crear.
    if (courseParam) {
      try {
        const convertedCourse: Course = JSON.parse(
          decodeURIComponent(courseParam)
        );
        setCourseData(convertedCourse);

        //evaluar truthy o falsy, si no contienen ningun objeto en
        //lessons, no mostrar el cuadro de busqueda si sí, hacerlo entonces
        if (convertedCourse.lessons) {
          setIsVisibleSearchContainer(true);
        } else {
          setIsVisibleSearchContainer(false);
        }
      } catch (error) {
        console.error("Error parsing course:", error);
      }
    } else {
      //siempre tiene que llegar un objeto curso por URL parametro, pero por si acaso
      setIsVisibleSearchContainer(false);
    }
  }, [searchParams]);

  const router = useRouter();

  const goToCreateCoursePage = () => {
    //Regresar a la pantalla anterior (Crear/Editar curso) con el objeto completo
    const course = {
      ...courseData,
    };
    const courseString = encodeURIComponent(JSON.stringify(course));
    const editing = "true";
    router.push(
      `/dashboard/mycourses/createcourse?course=${courseString}&&editing=${editing}`
    );
  };

  const searchByWord = (text: string) => {
    if (text.trim() !== "") {
      setLessonSearch(true);
      setSearch(text);

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
        elemento.lessonTitle.toLowerCase().includes(text.trim().toLowerCase())
      );
      setLessonsArray(results);
    } else {
      setLessonSearch(false);
    }
  };

  const handleShowModal = (isNewLesson: boolean) => {
    setIsAddLessonModalVisible(true);
    setIsNewLesson(isNewLesson);
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
        Lecciones de tu curso: {courseData?.courseTitle}
      </p>

      <div className={styles.addLessonDiv}>
        <button
          onClick={() => handleShowModal(true)}
          className={styles.addLessonButton}
        >
          Agregar lección
        </button>
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
                <div
                  onClick={() => handleShowModal(false)}
                  key={index}
                  className={styles.singleLesson}
                >
                  <p className={styles.singleLessonTitle}>
                    {leccion.lessonTitle}
                  </p>
                </div>
              ))
            )
          ) : courseData?.lessons === undefined ? (
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
            courseData.lessons.map((leccion: Lesson, index: number) => (
              <div
                onClick={() => handleShowModal(false)}
                key={index}
                className={styles.singleLesson}
              >
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
        <button onClick={goToCreateCoursePage} className={styles.goBackButton}>
          Regresar
        </button>
      </div>
      <AddLesonModal
        course={courseData!} //siempre va a llegar un objeto en este punto
        isNewLesson={isNewLesson}
        isOpen={isAddLessonModalVisible}
        onClose={() => setIsAddLessonModalVisible(false)}
        onConfirm={() => console.log("on confirm")}
      ></AddLesonModal>
    </div>
  );
}
