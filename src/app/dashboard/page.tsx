"use client";
import {
  BookOpenText,
  BadgeCheck,
  Settings,
  LogOut,
  Heart,
  LucideHome,
} from "lucide-react";
import styles from "./page.module.css";
import logo from "../../../public/images/logo.png";
import user from "../../../public/images/user-example.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import courses from "../../../mock/courses";
import recommendedCourses from "../../../mock/recommended";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import CourseModal from "../../../components/CourseModal";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [modalOpen, setModalOpen] = useState(false); //modal en false inicialmente
  const router = useRouter();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const goToCoursePage = () => {
    setModalOpen(false);
    router.push("/dashboard/mycourses/coursepage");
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
              placeholder="Buscar un curso"
              className={styles.searchInput}
            />
          </div>
        </div>
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
          {courses.map((elemento, key) => (
            <div onClick={openModal} key={key} className={styles.courseCard}>
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
            <div onClick={openModal} key={key} className={styles.courseCard}>
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
        <CourseModal
          isOpen={modalOpen}
          onClose={closeModal}
          onConfirm={goToCoursePage}
        ></CourseModal>
      </main>
    </div>
  );
}
