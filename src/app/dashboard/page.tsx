import { BookOpenText, BadgeCheck, Settings, Link } from "lucide-react";
import styles from "./page.module.css";
import logo from "../../../public/images/logo.png";
import user from "../../../public/images/user-example.png";
import curso from "../../../public/images/curso.png";
import aprobado from "../../../public/images/aprobado.png";
import noAprobado from "../../../public/images/no-aprobado.png";
import Image from "next/image";
import React from "react";

// Para que no les de pedillos visuales instalen esto:
// npm install lucide-react

export default function AdminDashboard() {
  return (
    <div className={styles.dashboard}>
      {/* Barra/Menu lateral */}
      <aside className={styles.sidebar}>
        <Image
          src={logo}
          alt="Diplôme Logo"
          className={styles.sidebarLogo}
          width={200}
          height={70}
        />
        <div className={styles.sidebarUser}>
          <Image
            src={user}
            alt="user example"
            className={styles.userImage}
            width={150}
            height={50}
          />
          <p>Nombre de Usuario</p>
        </div>
        <nav className={styles.sidebarNav}>
          <a href="#" className={styles.sidebarLink}>
            <BookOpenText size={18} /> Mis cursos
          </a>
          <a href="#" className={styles.sidebarLink}>
            <BadgeCheck size={18} /> Verificación de Cursos
          </a>
          <a href="#" className={styles.sidebarLink}>
            <BadgeCheck size={18} /> Verificación de Instructores
          </a>
          <a href="#" className={styles.sidebarLink}>
            <Settings size={18} /> Ajustes
          </a>
        </nav>
        <div className={styles.logout}>
          <Settings size={18} /> Cerrar Sesión
        </div>
      </aside>

      <main className={styles.mainContent}>
        {/* Barra de busqueda */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Búsqueda"
            className={styles.searchInput}
          />
        </div>

        {/* Contenedor del dasbhoard */}
        <div className={styles.sectionsWrapper}>
          {/* Seccion de cursos */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Cursos</h3>
            <div className={styles.cardScroll}>
              {[1, 2, 3, 4].map((id) => (
                <div key={id} className={styles.card}>
                  <Image
                    src={curso}
                    alt="course example"
                    className={styles.courseImage}
                    width={200}
                    height={120}
                  />
                  <p className={styles.cardTitle}>
                    Redacción Creativa para la Web
                  </p>
                  <div className={styles.cardHeader}>
                    <Image
                      src={user}
                      alt="user example"
                      className={styles.cardUserImage}
                      width={150}
                      height={50}
                    />
                    <span className={styles.cardUserText}>
                      Sergio García - Instructor
                    </span>
                  </div>
                  <div className={styles.buttonGroup}>
                    <button className={styles.iconButton}>
                      <Image
                        src={aprobado}
                        alt="Aprobado"
                        width={24}
                        height={24}
                      />
                    </button>
                    <button className={styles.iconButton}>
                      <Image
                        src={noAprobado}
                        alt="No Aprobado"
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seccion de instructores */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Instructores</h3>
            <div className={styles.cardScroll}>
              {[1, 2, 3, 4].map((id) => (
                <div key={id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <Image
                      src={user}
                      alt="user example"
                      className={styles.cardUserImage}
                      width={150}
                      height={50}
                    />
                    <span className={styles.cardUserText}>
                      Sergio García - Instructor
                    </span>
                  </div>
                  <div className={styles.buttonGroup}>
                    <button className={styles.iconButton}>
                      <Image
                        src={aprobado}
                        alt="Aprobado"
                        width={24}
                        height={24}
                      />
                    </button>
                    <button className={styles.iconButton}>
                      <Image
                        src={noAprobado}
                        alt="No Aprobado"
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
