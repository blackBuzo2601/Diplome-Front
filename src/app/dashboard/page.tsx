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
import { useEffect, useRef } from "react";

import { useState } from "react";
import CourseModal from "../../../components/CourseModal";
import { useRouter } from "next/navigation";
import Course from "../../../interfaces/Course";

export default function AdminDashboard() {
  const [modalOpen, setModalOpen] = useState(false); //modal en false inicialmente
  const [course, setCourse] = useState<Course | null>(null); //curso vacio al iniico
  const [search, setSearch] = useState("");
  const [mainPage, setMainPage] = useState(true);
  const searchByWord = (searchText: string) => {
    searchText.trim() !== "" ? setMainPage(false) : setMainPage(true);
    setSearch(searchText);
    console.log(search);
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
          {userRole ? (
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
        <Link href="/" className={styles.logout}>
          <LogOut size={30} /> Cerrar Sesión
        </Link>
      </aside>

      <main className={styles.mainContent}>
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
                searchByWord(text);
              }}
              type="text"
              placeholder="Buscar un curso"
              className={styles.searchInput}
            />
          </div>
        </div>
        {mainPage ? (
          <div>
            <h3 className={styles.sectionTitle}>Categorías</h3>
            <div className={styles.categoryDiv}>
              <div className={styles.categoryCard}>
                <p>UI/UIX</p>
              </div>
              <div className={styles.categoryCard}>
                <p>Idiomas</p>
              </div>
              <div className={styles.categoryCard}>
                <p>Programación C</p>
              </div>
              <div className={styles.categoryCard}>
                <p>Frontend</p>
              </div>
              <div className={styles.categoryCard}>
                <p>Backend</p>
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
  );
}
