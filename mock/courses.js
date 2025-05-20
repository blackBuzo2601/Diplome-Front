const courses = [
  {
    imageRoute: "/images/nextjs-course.jpg",
    courseTitle: "Desarrollo Web con Next.js",
    courseTeacherName: "Laura Mendoza",
    courseDescription:
      "Aprende a crear aplicaciones modernas con React y Next.js, incluyendo enrutamiento, SSR y generación estática.",
    courseTeacherImage: "/images/teacher1.jpg",
  },
  {
    imageRoute: "/images/flutter-course.jpg",
    courseTitle: "Aplicaciones Móviles con Flutter",
    courseTeacherName: "Carlos Ramírez",
    courseDescription:
      "Crea apps móviles nativas para Android e iOS desde una sola base de código con Flutter y Dart.",
    courseTeacherImage: "/images/teacher2.jpg",
  },
  {
    imageRoute: "/images/javascript-course.jpg",
    courseTitle: "JavaScript Moderno",
    courseTeacherName: "Ana Torres",
    courseDescription:
      "Domina JavaScript moderno (ES6+) y aprende buenas prácticas para escribir código limpio y eficiente.",
    courseTeacherImage: "/images/teacher3.jpg",
  },
  {
    imageRoute: "/images/python-advanced.jpg",
    courseTitle: "Python Avanzado",
    courseTeacherName: "José Hernández",
    courseDescription:
      "Profundiza en programación orientada a objetos, manejo de errores, y módulos avanzados en Python.",
    courseTeacherImage: "/images/teacher4.jpg",
  },
  {
    imageRoute: "/images/go-course.jpg",
    courseTitle: "Desarrollo Backend con Go",
    courseTeacherName: "Sofía López",
    courseDescription:
      "Aprende a construir servicios backend robustos y eficientes con el lenguaje Go.",
    courseTeacherImage: "/images/teacher5.jpg",
  },
  {
    imageRoute: "/images/java-course.jpg",
    courseTitle: "Java para Desarrolladores",
    courseTeacherName: "Marco Díaz",
    courseDescription:
      "Domina los fundamentos de Java, programación orientada a objetos y estructuras de datos.",
    courseTeacherImage: "/images/teacher6.jpg",
  },
  {
    imageRoute: "/images/cpp-course.jpg",
    courseTitle: "Programación en C++",
    courseTeacherName: "Daniela Ruiz",
    courseDescription:
      "Aprende desde lo básico hasta conceptos avanzados como punteros, memoria dinámica y programación orientada a objetos en C++.",
    courseTeacherImage: "/images/teacher7.jpg",
  },
  {
    imageRoute: "/images/computer-networks.jpg",
    courseTitle: "Redes de Computadoras",
    courseTeacherName: "Marco Díaz",
    courseDescription:
      "Estudia los fundamentos de redes, modelos OSI, TCP/IP, direccionamiento IP y más.",
    courseTeacherImage: "/images/teacher6.jpg",
  },
  {
    imageRoute: "/images/linux-course.jpg",
    courseTitle: "Linux desde Cero",
    courseTeacherName: "José Hernández",
    courseDescription:
      "Aprende comandos esenciales, estructura de archivos, permisos y administración básica de sistemas Linux.",
    courseTeacherImage: "/images/teacher4.jpg",
  },
  {
    imageRoute: "/images/os-course.jpg",
    courseTitle: "Sistemas Operativos",
    courseTeacherName: "Daniela Ruiz",
    courseDescription:
      "Comprende procesos, concurrencia, administración de memoria y sistemas de archivos.",
    courseTeacherImage: "/images/teacher7.jpg",
  },
  {
    imageRoute: "/images/hacking-course.jpg",
    courseTitle: "Hacking Ético y Seguridad",
    courseTeacherName: "Carlos Ramírez",
    courseDescription:
      "Explora técnicas de hacking ético, pruebas de penetración y ciberseguridad básica.",
    courseTeacherImage: "/images/teacher2.jpg",
  },
  {
    imageRoute: "/images/frontend-dev.jpg",
    courseTitle: "Desarrollo Frontend Profesional",
    courseTeacherName: "Laura Mendoza",
    courseDescription:
      "Domina HTML, CSS moderno, JavaScript y frameworks como Tailwind y Bootstrap.",
    courseTeacherImage: "/images/teacher1.jpg",
  },
  {
    imageRoute: "/images/vue-course.jpg",
    courseTitle: "Aplicaciones Web con Vue.js",
    courseTeacherName: "Ana Torres",
    courseDescription:
      "Aprende Vue.js desde cero, composición de componentes y gestión de estado con Vuex.",
    courseTeacherImage: "/images/teacher3.jpg",
  },
  {
    imageRoute: "/images/react-native.jpg",
    courseTitle: "Apps Móviles con React Native",
    courseTeacherName: "Sofía López",
    courseDescription:
      "Construye aplicaciones móviles multiplataforma con React Native y Expo.",
    courseTeacherImage: "/images/teacher5.jpg",
  },
  {
    imageRoute: "/images/ccna-course.jpg",
    courseTitle: "Cisco CCNA Fundamentals",
    courseTeacherName: "Marco Díaz",
    courseDescription:
      "Prepárate para la certificación CCNA con temas de redes, switches, routers y protocolos.",
    courseTeacherImage: "/images/teacher6.jpg",
  },
  {
    imageRoute: "/images/bash-course.jpg",
    courseTitle: "Automatización con Bash y Shell Scripting",
    courseTeacherName: "José Hernández",
    courseDescription:
      "Escribe scripts en Bash para automatizar tareas en sistemas Linux y Unix.",
    courseTeacherImage: "/images/teacher4.jpg",
  },
  {
    imageRoute: "/images/git-course.jpg",
    courseTitle: "Control de Versiones con Git",
    courseTeacherName: "Laura Mendoza",
    courseDescription:
      "Aprende Git desde cero: commits, ramas, merges, conflictos y buenas prácticas en equipos.",
    courseTeacherImage: "/images/teacher1.jpg",
  },
  {
    imageRoute: "/images/docker-course.jpg",
    courseTitle: "Docker para Desarrolladores",
    courseTeacherName: "Daniela Ruiz",
    courseDescription:
      "Crea contenedores, imágenes y entornos portables para tus aplicaciones con Docker.",
    courseTeacherImage: "/images/teacher7.jpg",
  },
  {
    imageRoute: "/images/typescript-course.jpg",
    courseTitle: "TypeScript desde Cero",
    courseTeacherName: "Laura Mendoza",
    courseDescription:
      "Aprende TypeScript paso a paso, desde los tipos básicos hasta programación orientada a objetos y tipado avanzado.",
    courseTeacherImage: "/images/teacher1.jpg",
  },

  {
    imageRoute: "/images/javascript-pro.jpg",
    courseTitle: "JavaScript de Cero a Master 2025",
    courseTeacherName: "Ana Torres",
    courseDescription:
      "Conviértete en un experto en JavaScript moderno con este curso intensivo desde lo básico hasta técnicas avanzadas.",
    courseTeacherImage: "/images/teacher3.jpg",
  },
  {
    imageRoute: "/images/python-beginners.jpg",
    courseTitle: "Python para Principiantes",
    courseTeacherName: "José Hernández",
    courseDescription:
      "Aprende desde cero a programar en Python, ideal para quienes inician en el mundo de la programación.",
    courseTeacherImage: "/images/teacher4.jpg",
  },
  {
    imageRoute: "/images/cybersecurity-advanced.jpg",
    courseTitle: "Ciberseguridad Avanzada",
    courseTeacherName: "Carlos Ramírez",
    courseDescription:
      "Explora técnicas avanzadas de defensa, análisis forense y respuesta ante incidentes de seguridad.",
    courseTeacherImage: "/images/teacher2.jpg",
  },
  {
    imageRoute: "/images/networking-cloud.jpg",
    courseTitle: "Redes y Cloud Computing",
    courseTeacherName: "Marco Díaz",
    courseDescription:
      "Aprende los fundamentos de redes y cómo se integran con entornos de computación en la nube.",
    courseTeacherImage: "/images/teacher6.jpg",
  },
  {
    imageRoute: "/images/vue-advanced.jpg",
    courseTitle: "Vue.js Avanzado con Pinia y Vue Router",
    courseTeacherName: "Ana Torres",
    courseDescription:
      "Profundiza en Vue.js con composición avanzada de componentes, gestión de rutas y estado.",
    courseTeacherImage: "/images/teacher3.jpg",
  },
  {
    imageRoute: "/images/react-architecture.jpg",
    courseTitle: "Arquitectura de Proyectos React",
    courseTeacherName: "Laura Mendoza",
    courseDescription:
      "Aprende a estructurar proyectos React escalables con buenas prácticas, testing y manejo de dependencias.",
    courseTeacherImage: "/images/teacher1.jpg",
  },
  {
    imageRoute: "/images/linux-advanced.jpg",
    courseTitle: "Linux Avanzado para SysAdmins",
    courseTeacherName: "José Hernández",
    courseDescription:
      "Domina administración de servicios, seguridad, y automatización en entornos Linux avanzados.",
    courseTeacherImage: "/images/teacher4.jpg",
  },
  {
    imageRoute: "/images/kubernetes-course.jpg",
    courseTitle: "Kubernetes para DevOps",
    courseTeacherName: "Daniela Ruiz",
    courseDescription:
      "Aprende a desplegar, escalar y administrar contenedores con Kubernetes desde cero.",
    courseTeacherImage: "/images/teacher7.jpg",
  },
];

export default courses;
