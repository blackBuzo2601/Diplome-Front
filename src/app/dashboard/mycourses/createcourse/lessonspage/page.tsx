"use client";
import styles from "./page.module.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Course from "../../../../../../interfaces/Course";
import { Lesson } from "../../../../../../interfaces/Course";
import AddLessonModal from "../../../../../../components/AddLessonModal";
import { CookingPot } from "lucide-react";

export default function LessonsPage() {
  const searchParams = useSearchParams();
  const [courseData, setCourseData] = useState<Course | null>(null);

  const [search, setSearch] = useState("");
  const [lessonSearch, setLessonSearch] = useState(false); //condicional para filtrar por palabra
  const [lessonsArray, setLessonsArray] = useState<Lesson[]>([]); //arreglo con las lecciones a mostrar tras filtrar
  const [isVisibleSearchContainer, setIsVisibleSearchContainer] = //condicional para ocultar el buscador si no hay ninguna leccion creada
    useState(false);
  const [isAddLessonModalVisible, setIsAddLessonModalVisible] = useState(false);
  const [isNewLesson, setIsNewLesson] = useState(true);
  const [lesson, setLesson] = useState<Lesson | null>(null); //Este estado lo vamos a utilizar
  //para cuando obtengamos el objeto de una Lesson existente, que podamos mandar esa información
  //al modal.

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

        if (convertedCourse.lessons!.length == 0) {
          setIsVisibleSearchContainer(false);
        } else {
          setIsVisibleSearchContainer(true);
        }
      } catch (error) {
        console.error("Error parseando el objeto course:", error);
      }
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

      //tuve que poner esta pinche linea porque si no no me dejaba hacer el map porque typescript no estaba seguro
      //de si elemento es un objeto.
      const lessons: Lesson[] = courseData!.lessons ?? []; //si no tiene nada, lo dejamos como un arreglo vacio

      //(decoración, asignamos "Leccion N:" antes de cada titulo de cada leccion)
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

  //Esta función, abre el modal. Si se recibe true, se activa el Modal para crear NUEVA lección.
  //Si es false, corresponde a Editar Modal (para esto también se recibe el paraemtro Lesson correspondiente)
  const handleShowModal = (isNewLesson: boolean, lesson?: Lesson) => {
    setIsNewLesson(isNewLesson); //Este estado es de esste archivo, pero ese estado
    //lo recibe el AddLessonModal también para definir si mostrar modal de Editar o Agregar
    setIsAddLessonModalVisible(true);
    if (lesson) {
      //si se recibió una lección existente, actualizar el estado
      //el estado lesson, tambien lo recibe el mismo modal para mostrar la información a editar
      setLesson(lesson);
    } else {
      //no se recibió una lección existente, establecer en null la lección
      setLesson(null);
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
                  onClick={() => handleShowModal(false, leccion)}
                  key={index}
                  className={styles.singleLesson}
                >
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
              <div
                onClick={() => handleShowModal(false, leccion)}
                key={index}
                className={styles.singleLesson}
              >
                {/*/ aqui tambien modifico las lecciones para que muestren "Leccion N:"*/}
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

      <AddLessonModal
        addLesson={(lesson, isNew) => {
          const addLesson = { ...lesson }; //obtener el objeto Lesson proveniente del Modal

          //es necesario verificar que courseData es truthy, para que no chille typescript
          if (courseData) {
            if (isNew) {
              //si es nuevo, agregarlo al arreglo
              const updatedCourse: Course = {
                ...courseData,
                lessons: [...courseData.lessons!, addLesson], //agregar nueva lección
              };
              setCourseData(updatedCourse);
            } else {
              //no es nuevo, hay que encontrar el original, eliminarlo y en su lugar
              //poner el nuevo objeto con el Lesson modificado
              const originalLessonsArray = courseData.lessons;
              const deleteLessonIndex = originalLessonsArray!.findIndex(
                (elemento) => elemento.uuid === lesson.uuid
              );
              originalLessonsArray?.splice(deleteLessonIndex, 1, addLesson); //sustituir con el Lesson modificado
              const updatedCourse: Course = {
                ...courseData,
                lessons: [...originalLessonsArray!], //agregar nueva lección
              };
              setCourseData(updatedCourse);
            }
          }
          setIsAddLessonModalVisible(false);
        }}
        onDelete={() => {
          setIsAddLessonModalVisible(false);
          const allLessons = courseData?.lessons;
          const arrayWithDeletedLesson = allLessons?.filter(
            (elemento) => elemento.uuid !== lesson?.uuid
          );
          const updatedCourse: Course = {
            ...courseData!,
            lessons: [...arrayWithDeletedLesson!],
          };
          setCourseData(updatedCourse);
        }}
        Lesson={lesson!} //pasamos la lesson del estado, por si el usuario quiere editar una lesson
        isNewLesson={isNewLesson}
        isOpen={isAddLessonModalVisible}
        onClose={() => {
          setIsAddLessonModalVisible(false);
          setLesson(null);
        }}
      ></AddLessonModal>
    </div>
  );
}
