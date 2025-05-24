"use client";
import {
  BookOpenText,
  BadgeCheck,
  Settings,
  LogOut,
  Heart,
  LucideHome,
} from "lucide-react";
import CourseModal from "../../../../components/CourseModal";
import styles from "./page.module.css";
import logo from "../../../../public/images/logo.png";
import user from "../../../../public/images/user-example.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Course from "../../../../interfaces/Course";
import teacherCourses from "../../../../mock/teacherCourses";
export default function MyCourses() {
  const [modalOpen, setModalOpen] = useState(false); //modal en false inicialmente
  const [course, setCourse] = useState<Course | null>(null); //curso vacio al iniico
  const [search, setSearch] = useState("");
  const [myCourses, setMyCourses] = useState(true);
  const [label, setLabel] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const storedCourses = localStorage.getItem("courses");
    let parsedCourses: Course[] = [];

    if (storedCourses) {
      try {
        parsedCourses = JSON.parse(storedCourses);
      } catch (error) {
        console.error("Error parseando cursos desde localStorage", error);
      }
    } else {
      //la primera vez no habrá nada en LocalStorage
      localStorage.setItem("courses", JSON.stringify(teacherCourses));
    }
    //traer objetos de local Storage y luego los del arreglo local.
    setCourses([...parsedCourses]);
  }, []);

  const searchByWord = (searchText: string) => {
    if (searchText.trim() !== "") {
      setMyCourses(false);
      setLabel(true);
    } else {
      setMyCourses(true);
      setLabel(false);
    }
    setSearch(searchText);
  };

  const router = useRouter();

  const getCourseInfo = (course: Course) => {
    setCourse(course);
    openModal();
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  //el valor de editing, nos ayuda como bandera para si mostrar las opciones de Creando Curso o Editando Curso
  //en la ruta de CreateCourse.
  const goToCreateCoursePage = (editing: boolean) => {
    editing = editing;

    if (editing) {
      const course1 = {
        //le puse course1 porque ya existe la variable course (estado)
        //el objeto con la informacion del curso que voy a mandar a la ruta createcourse
        ...course,
      };
      const course1String = encodeURIComponent(JSON.stringify(course1));
      const editingString = editing.toString();
      router.push(
        `/dashboard/mycourses/createcourse?course=${course1String}&&editing=${editingString}`
      );
    } else {
      router.push("/dashboard/mycourses/createcourse");
    }
  };

  return (
    <div className={styles.dashboard}>
      {/* Barra/Menu lateral */}

      <aside className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt="Diplôme Logo"
            className={styles.sidebarLogo}
            width={200}
            height={70}
          />
        </div>
        <div className={styles.sidebarUser}>
          <Image
            src={user}
            alt="user example"
            className={styles.userImage}
            width={200}
            height={65}
          />
          <p className={styles.sidebarUserName}>Elian Buzo</p>
        </div>
        <nav className={styles.sidebarNav}>
          <Link href="/dashboard/" className={styles.sidebarLink}>
            <LucideHome size={30} /> Inicio
          </Link>
          <Link href="/dashboard/mycourses" className={styles.sidebarLink}>
            <BookOpenText size={30} /> Mis cursos
          </Link>
          <Link href="#" className={styles.sidebarLink}>
            <Heart size={30} /> Favoritos
          </Link>

          <Link href="#" className={styles.sidebarLink}>
            <Settings size={30} /> Ajustes
          </Link>
        </nav>
        <Link href="/" className={styles.logout}>
          <LogOut size={30} /> Cerrar Sesión
        </Link>
      </aside>

      <main className={styles.mainContent}>
        <h3 className={styles.sectionHeaderName}>Mis cursos</h3>
        <div className={styles.searchContainer}>
          <button
            onClick={() => goToCreateCoursePage(false)}
            className={styles.goModalButton}
          >
            Crear nuevo curso
          </button>

          <div className={styles.newRow}>
            {label ? (
              <p
                onClick={() => {
                  setSearch("");
                  setLabel(false);
                }}
                className={styles.backToCoursesLabel}
              >
                Volver a todos los cursos
              </p>
            ) : null}

            <div className={styles.inputRow}>
              <Image
                src={"/images/lupa.png"}
                alt="user example"
                width={40}
                height={40}
              />
              <input
                value={search} //asignamos el estado en "" para que cuando haya cambios en el input, se modifique ese estado
                onChange={(e) => {
                  const searchText = e.target.value;
                  searchByWord(searchText);
                }}
                type="text"
                placeholder="Buscar en mis cursos"
                className={styles.searchInput}
              />
            </div>
          </div>
        </div>

        <div className={styles.father}>
          {myCourses ? (
            <div className={styles.recomendationsDiv}>
              {courses.map((elemento, key) => (
                <div
                  onClick={() => getCourseInfo(elemento)}
                  key={key}
                  className={styles.courseCard}
                >
                  <Image
                    src={elemento.imageRoute!}
                    alt="course image"
                    width={200}
                    height={100}
                    unoptimized
                    className={styles.courseCardImage}
                  />
                  <p className={styles.courseTitle}>{elemento.courseTitle}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.recomendationsDiv}>
              {courses.filter((elemento) =>
                elemento.courseTitle
                  .toLowerCase()
                  .includes(search.trim().toLowerCase())
              ).length === 0 ? (
                <div className={styles.noCoincidencesDiv}>
                  <p className={styles.noCoincidencesText}>
                    No hay coincidencias con su búsqueda
                  </p>
                  <Image
                    src={"/images/warning.png"}
                    alt="warning icon"
                    width={200}
                    height={200}
                    className={styles.noCoincidencesImage}
                  />
                </div>
              ) : (
                courses
                  .filter((elemento) =>
                    elemento.courseTitle
                      .toLowerCase()
                      .includes(search.trim().toLowerCase())
                  )
                  .map((elemento, key) => (
                    <div
                      onClick={() => getCourseInfo(elemento)}
                      key={key}
                      className={styles.courseCard}
                    >
                      <Image
                        src={elemento.imageRoute!}
                        alt="course image"
                        width={200}
                        height={100}
                        unoptimized
                        className={styles.courseCardImage}
                      />
                      <p className={styles.courseTitle}>
                        {elemento.courseTitle}
                      </p>
                    </div>
                  ))
              )}
            </div>
          )}

          <div className={styles.emptyDiv}></div>
        </div>
        <CourseModal
          isTeacher={true}
          course={course}
          isOpen={modalOpen}
          onClose={closeModal}
          onConfirm={() => goToCreateCoursePage(true)} //true porque es "modo editar"
        ></CourseModal>
      </main>
    </div>
  );
}
