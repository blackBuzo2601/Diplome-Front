"use client";
import { useAuth } from "../../hooks/useAuth.js";

export default function Dashboard() {
	const { logout, currentUser } = useAuth();
	
	if (!currentUser) {
		return <div>
			<h1>403 Forbidden</h1>
  	</div>;
	}
		
	return <div>
		<p>Dashboard</p>
		<p>{`Usuario: ${currentUser.first_name} ${currentUser.last_name}`}</p>
		<p>{`Correo: ${currentUser.email}`}</p>
		<p>{`Rol: ${currentUser.role}`}</p>
		<button onClick={() => logout()}>log out</button>
  </div>;

}
