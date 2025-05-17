import {
  BookOpenText,
  BadgeCheck,
  Settings,
  Link,
  LogOut,
  Heart,
} from "lucide-react";
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
          <a href="#" className={styles.sidebarLink}>
            <BookOpenText size={30} /> Mis cursos
          </a>
          <a href="#" className={styles.sidebarLink}>
            <Heart size={30} /> Favoritos
          </a>

          <a href="#" className={styles.sidebarLink}>
            <Settings size={30} /> Ajustes
          </a>
        </nav>
        <a href="/" className={styles.logout}>
          <LogOut size={30} /> Cerrar Sesión
        </a>
      </aside>

      <main className={styles.mainContent}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Buscar un curso"
            className={styles.searchInput}
          />
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
        <div className={styles.recomendationsDiv}></div>
      </main>
    </div>
  );
}
