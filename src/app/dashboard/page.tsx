"use client";
import {
  BookOpenText,
  BadgeCheck,
  Settings,
  LogOut,
  Heart,
  LucideHome,
  CookingPot,
} from "lucide-react";
import styles from "./page.module.css";
import logo from "../../../public/images/logo.png";
import user from "../../../public/images/user-example.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import courses from "../../../mock/courses";
import recommendedCourses from "../../../mock/recommended";
import continueCourses from "../../../mock/continueCourses";

import { useState } from "react";
import CourseModal from "../../../components/CourseModal";
import { useRouter } from "next/navigation";
import Course from "../../../interfaces/Course";

import { useEffect, useRef } from "react";
import { useAuth } from "../../hooks/useAuth.js";

import { ClipLoader } from "react-spinners";

export default function AdminDashboard() {
  const [modalOpen, setModalOpen] = useState(false); //modal en false inicialmente
  const [course, setCourse] = useState<Course | null>(null); //curso vacio al iniico
  const [search, setSearch] = useState(""); //corresponde al valor del input del cuadro de busqueda
  const [mainPage, setMainPage] = useState(true); //es el estado para mostrar la pagina principal si no se ha buscado o
  //utilizado uno de los filtros principales
  const [categorySearch, setCategorySearch] = useState(false); //a su vez que ste es true, el estado de mainPage
  //debe estar en falso, para asi mostrar un div con los resultados de los filtros
  const [showInput, setShowInput] = useState(true); //con este estado ocultamos el input
  //para que no se vea estorboso o haya problemas al usar los filtros de categoria
  const [categoryArray, setCategoryArray] = useState<Course[]>([]); //gestiona
  //el estado de las distintas categorias que podemos buscar

  //la etiqueta con la que limpiamos la busqueda y regresamos a mainPage
  const [categorylabel, setCategoryLabel] = useState("");

  const { logout, currentUser } = useAuth();

  const searchByWord = (searchText: string) => {
    searchText.trim() !== "" ? setMainPage(false) : setMainPage(true);
    setSearch(searchText);
  };

  const searchByCategory = (category: string) => {
    setCategoryLabel(category);
    const resultados = courses.filter(
      (elemento) => elemento.courseCategory == category
    );
    setMainPage(false);
    setCategorySearch(true);
    setCategoryArray(resultados);
    setShowInput(false);
  };

  const router = useRouter();
  let userRole = true;
  //cambiar userRole a true si es Instructor
  //cambiar userRole a false si es Estudiante

  //Codigo necesario para animacion de scroll en Div de todos los cursos
  //--------------------------------------------------------------------
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 1;
    const intervalTime = 32;

    const interval = setInterval(() => {
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollStep;
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);
  //--------------------------------------------------------------------
  //Concluye codigo necesario para animacion
  
  const getCourseInfo = (course: Course) => {
    setCourse(course);
    openModal();
    console.log("imprimiendo data:" + course);
  };
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const goToCoursePage = () => {
    setModalOpen(false);
    router.push("/dashboard/coursepage");
  };

  return currentUser?.first_name ? (
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
			<p className={styles.sidebarUserName}>{`${currentUser.first_name} ${currentUser.last_name}`}</p>
        </div>
        <nav className={styles.sidebarNav}>
          <Link href="/dashboard/" className={styles.sidebarLink}>
            <LucideHome size={30} /> Inicio
          </Link>
          {currentUser.role === "0x02" ? (
            <Link href="/dashboard/mycourses" className={styles.sidebarLink}>
              <BookOpenText size={30} /> Mis cursos
            </Link>
          ) : null}

          <Link href="#" className={styles.sidebarLink}>
            <Heart size={30} /> Favoritos
          </Link>

          <Link href="#" className={styles.sidebarLink}>
            <Settings size={30} /> Ajustes
          </Link>
        </nav>
        <Link href="/" onClick={() => logout() } className={styles.logout}>
          <LogOut size={30} /> Cerrar Sesión
        </Link>
      </aside>

      <main className={styles.mainContent}>
        <div className={styles.searchContainer}>
          {showInput ? (
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
                placeholder="Buscar un curso"
                className={styles.searchInput}
              />
            </div>
          ) : (
            <p
              className={styles.backToCoursesLabel}
              onClick={() => {
                setMainPage(true);
                setCategorySearch(false);
                setShowInput(true);
              }}
            >
              Regresar a la sección principal
            </p>
          )}
        </div>
        {mainPage ? (
          <div>
            <h3 className={styles.sectionTitle}>Categorías</h3>
            <div className={styles.categoryDiv}>
              <div
                onClick={() => searchByCategory("Frontend")}
                className={styles.categoryCard}
              >
                <p>Frontend</p>
              </div>
              <div
                onClick={() => searchByCategory("Backend")}
                className={styles.categoryCard}
              >
                <p>Backend</p>
              </div>
              <div
                onClick={() => searchByCategory("Redes")}
                className={styles.categoryCard}
              >
                <p>Redes</p>
              </div>
              <div
                onClick={() => searchByCategory("Ciberseguridad")}
                className={styles.categoryCard}
              >
                <p>Ciberseguridad</p>
              </div>
              <div
                onClick={() => searchByCategory("Sistemas Operativos")}
                className={styles.categoryCard}
              >
                <p>S.O</p>
              </div>
            </div>
            <h3 className={styles.sectionTitle}>Seguir aprendiendo</h3>

            <div className={styles.recomendationsDiv}>
              {continueCourses.map((elemento, key) => (
                <div
                  onClick={() => getCourseInfo(elemento)}
                  key={key}
                  className={styles.courseCard}
                >
                  <Image
                    src={elemento.imageRoute}
                    alt="course image"
                    width={200}
                    height={100}
                    className={styles.courseCardImage}
                  />
                  <p className={styles.courseTitle}>{elemento.courseTitle}</p>
                  <div className={styles.courseTeacherDiv}>
                    <Image
                      src={elemento.courseTeacherImage}
                      alt="teacher photo"
                      width={100}
                      height={100}
                      className={styles.courseTeacherImage}
                    />
                    <div className={styles.courseTeacherInfo}>
                      <p className={styles.courseTeacherName}>
                        {elemento.courseTeacherName}
                      </p>
                      <p className={styles.courseTeacherLabel}>Instructor</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.emptyDiv}></div>
            <h3 className={styles.sectionTitle}>Recomendados</h3>
            <div className={styles.recomendationsDiv}>
              {recommendedCourses.map((elemento, key) => (
                <div
                  onClick={() => getCourseInfo(elemento)}
                  key={key}
                  className={styles.courseCard}
                >
                  <Image
                    src={elemento.imageRoute}
                    alt="course image"
                    width={200}
                    height={100}
                    className={styles.courseCardImage}
                  />
                  <p className={styles.courseTitle}>{elemento.courseTitle}</p>
                  <div className={styles.courseTeacherDiv}>
                    <Image
                      src={elemento.courseTeacherImage}
                      alt="teacher photo"
                      width={100}
                      height={100}
                      className={styles.courseTeacherImage}
                    />
                    <div className={styles.courseTeacherInfo}>
                      <p className={styles.courseTeacherName}>
                        {elemento.courseTeacherName}
                      </p>
                      <p className={styles.courseTeacherLabel}>Instructor</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.emptyDiv}></div>
            <h3 className={styles.sectionTitle}>Todos los cursos</h3>
            <div className={styles.recomendationsDiv} ref={scrollRef}>
              {courses.map((elemento, key) => (
                <div
                  onClick={() => getCourseInfo(elemento)}
                  key={key}
                  className={styles.courseCard}
                >
                  <Image
                    src={elemento.imageRoute}
                    alt="course image"
                    width={200}
                    height={100}
                    className={styles.courseCardImage}
                  />
                  <p className={styles.courseTitle}>{elemento.courseTitle}</p>
                  <div className={styles.courseTeacherDiv}>
                    <Image
                      src={elemento.courseTeacherImage}
                      alt="teacher photo"
                      width={100}
                      height={100}
                      className={styles.courseTeacherImage}
                    />
                    <div className={styles.courseTeacherInfo}>
                      <p className={styles.courseTeacherName}>
                        {elemento.courseTeacherName}
                      </p>
                      <p className={styles.courseTeacherLabel}>Instructor</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.emptyDiv}></div>
          </div>
        ) : categorySearch == true && mainPage == false ? (
          <div>
            <h3 className={styles.sectionTitle}>Cursos de {categorylabel}</h3>
            <div className={styles.recomendationsDiv}>
              {categoryArray.length === 0 ? (
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
                categoryArray.map((elemento, key) => (
                  <div
                    onClick={() => getCourseInfo(elemento)}
                    key={key}
                    className={styles.courseCard}
                  >
                    <Image
                      src={elemento.imageRoute}
                      alt="course image"
                      width={200}
                      height={100}
                      className={styles.courseCardImage}
                    />
                    <p className={styles.courseTitle}>{elemento.courseTitle}</p>
                    <div className={styles.courseTeacherDiv}>
                      <Image
                        src={elemento.courseTeacherImage}
                        alt="teacher photo"
                        width={100}
                        height={100}
                        className={styles.courseTeacherImage}
                      />
                      <div className={styles.courseTeacherInfo}>
                        <p className={styles.courseTeacherName}>
                          {elemento.courseTeacherName}
                        </p>
                        <p className={styles.courseTeacherLabel}>Instructor</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className={styles.emptyDiv}></div>
          </div>
        ) : (
          <div>
            <h3 className={styles.sectionTitle}>Resultados de búsqueda</h3>
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
                        src={elemento.imageRoute}
                        alt="course image"
                        width={200}
                        height={100}
                        className={styles.courseCardImage}
                      />
                      <p className={styles.courseTitle}>
                        {elemento.courseTitle}
                      </p>
                      <div className={styles.courseTeacherDiv}>
                        <Image
                          src={elemento.courseTeacherImage}
                          alt="teacher photo"
                          width={100}
                          height={100}
                          className={styles.courseTeacherImage}
                        />
                        <div className={styles.courseTeacherInfo}>
                          <p className={styles.courseTeacherName}>
                            {elemento.courseTeacherName}
                          </p>
                          <p className={styles.courseTeacherLabel}>
                            Instructor
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
              )}
            </div>
            <div className={styles.emptyDiv}></div>
          </div>
        )}

        <CourseModal
          isOpen={modalOpen}
          onClose={closeModal}
          onConfirm={goToCoursePage}
          course={course}
        ></CourseModal>
      </main>
    </div>
  ) 
  :
  <div>
	<ClipLoader color="#4f46e5" />
  </div> 
  ;
}
