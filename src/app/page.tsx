"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from '../hooks/useAuth.js'
import { AuthProvider } from "@/context/AuthContext";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  //igual, por mientras pongo any para que no chille
  const handleSubmit = async (e: any) => {
    e.preventDefault();
	try {
		await login(email, password);
		router.push("/dashboard");
	} catch {
		router.push("/");
	}
  };



  return (
		<form className={styles.mainDiv} onSubmit={handleSubmit}>
		<div className={styles.form}>
			<p className={styles.mainTitle}>Inicio Sesión</p>
			<p className={styles.subtitle}>
			Desbloquea tu progreso: Inicia sesión.
			</p>
			<input
			type="email"
			placeholder="Correo electrónico"
			required
			value={email}
            onChange={(e) => setEmail(e.target.value)}
			className={styles.formInput}
			/>
			<input
			type="password"
			placeholder="Contraseña"
			required
			value={password}
            onChange={(e) => setPassword(e.target.value)}
			className={styles.formInput}
			/>
			<button type="submit" className={styles.formButton}>
			Entrar
			</button>
			<div className={styles.labelDiv}>
			<Link className={styles.registerLabel} href="/register">
				¿No tienes cuenta? Regístrate aquí
			</Link>
			</div>
		</div>
		</form>
  );
}
