const courses = [
  {
    imageRoute: "/images/nextjs-course.jpg",
    courseTitle: "Desarrollo Web con Next.js",
    courseTeacherName: "Laura Mendoza",
    courseDescription:
      "Aprende a crear aplicaciones modernas con React y Next.js, incluyendo enrutamiento, SSR y generación estática.",
    courseTeacherImage: "/images/teacher1.jpg",
    courseCategory: "Frontend",
    lessons: [
      { lessonTitle: "Introducción a Next.js", lessonVideoSource: "" },
      {
        lessonTitle: "Enrutamiento con Pages y App Router",
        lessonVideoSource: "",
      },
      { lessonTitle: "Renderizado Estático y SSR", lessonVideoSource: "" },
    ],
    uuid: "0",
  },
  {
    imageRoute: "/images/flutter-course.jpg",
    courseTitle: "Aplicaciones Móviles con Flutter",
    courseTeacherName: "Carlos Ramírez",
    courseDescription:
      "Crea apps móviles nativas para Android e iOS desde una sola base de código con Flutter y Dart.",
    courseTeacherImage: "/images/teacher2.jpg",
    courseCategory: "Frontend",
    lessons: [
      { lessonTitle: "Primeros pasos con Flutter", lessonVideoSource: "" },
      {
        lessonTitle: "Diseño de Interfaces con Widgets",
        lessonVideoSource: "",
      },
      { lessonTitle: "Navegación entre pantallas", lessonVideoSource: "" },
      {
        lessonTitle: "Persistencia de datos en Flutter",
        lessonVideoSource: "",
      },
    ],
    uuid: "1",
  },

  {
    imageRoute: "/images/javascript-course.jpg",
    courseTitle: "JavaScript Moderno",
    courseTeacherName: "Ana Torres",
    courseDescription:
      "Domina JavaScript moderno ES6 y aprende buenas prácticas para escribir código limpio y eficiente.",
    courseTeacherImage: "/images/teacher3.jpg",
    courseCategory: "Frontend",
    lessons: [
      { lessonTitle: "Sintaxis moderna de JavaScript", lessonVideoSource: "" },
      { lessonTitle: "Funciones y Scope", lessonVideoSource: "" },
      { lessonTitle: "Promises y Async/Await", lessonVideoSource: "" },
    ],
    uuid: "2",
  },

  {
    imageRoute: "/images/python-advanced.jpg",
    courseTitle: "Python Avanzado",
    courseTeacherName: "José Hernández",
    courseDescription:
      "Profundiza en programación orientada a objetos, manejo de errores, y módulos avanzados en Python.",
    courseTeacherImage: "/images/teacher4.jpg",
    courseCategory: "Backend",
    lessons: [
      { lessonTitle: "POO en profundidad", lessonVideoSource: "" },
      { lessonTitle: "Manejo avanzado de errores", lessonVideoSource: "" },
      {
        lessonTitle: "Módulos y paquetes personalizados",
        lessonVideoSource: "",
      },
      { lessonTitle: "Decoradores y generadores", lessonVideoSource: "" },
    ],
    uuid: "3",
  },
  {
    imageRoute: "/images/go-course.jpg",
    courseTitle: "Desarrollo Backend con Go",
    courseTeacherName: "Sofía López",
    courseDescription:
      "Aprende a construir servicios backend robustos y eficientes con el lenguaje Go.",
    courseTeacherImage: "/images/teacher5.jpg",
    courseCategory: "Backend",
    lessons: [
      { lessonTitle: "Introducción a Go", lessonVideoSource: "" },
      {
        lessonTitle: "Manejo de concurrencia con goroutines",
        lessonVideoSource: "",
      },
      { lessonTitle: "Creación de APIs REST con Go", lessonVideoSource: "" },
    ],
    uuid: "4",
  },
  {
    imageRoute: "/images/java-course.jpg",
    courseTitle: "Java para Desarrolladores",
    courseTeacherName: "Marco Díaz",
    courseDescription:
      "Domina los fundamentos de Java, programación orientada a objetos y estructuras de datos.",
    courseTeacherImage: "/images/teacher6.jpg",
    courseCategory: "Backend",
    lessons: [
      { lessonTitle: "Fundamentos del lenguaje Java", lessonVideoSource: "" },
      { lessonTitle: "POO con Java", lessonVideoSource: "" },
      {
        lessonTitle: "Colecciones y estructuras de datos",
        lessonVideoSource: "",
      },
      { lessonTitle: "Excepciones y manejo de errores", lessonVideoSource: "" },
    ],
    uuid: "5",
  },
  {
    imageRoute: "/images/cpp-course.jpg",
    courseTitle: "Programación en C++",
    courseTeacherName: "Daniela Ruiz",
    courseDescription:
      "Aprende desde lo básico hasta conceptos avanzados como punteros, memoria dinámica y programación orientada a objetos en C++.",
    courseTeacherImage: "/images/teacher7.jpg",
    courseCategory: "Backend",
    lessons: [
      { lessonTitle: "Sintaxis básica de C++", lessonVideoSource: "" },
      { lessonTitle: "Punteros y memoria dinámica", lessonVideoSource: "" },
      { lessonTitle: "POO en C++", lessonVideoSource: "" },
    ],

    uuid: "6",
  },
  {
    imageRoute: "/images/computer-networks.jpg",
    courseTitle: "Redes de Computadoras",
    courseTeacherName: "Marco Díaz",
    courseDescription:
      "Estudia los fundamentos de redes, modelos OSI, TCP/IP, direccionamiento IP y más.",
    courseTeacherImage: "/images/teacher6.jpg",
    courseCategory: "Redes",
    lessons: [
      { lessonTitle: "Modelo OSI y TCP/IP", lessonVideoSource: "" },
      { lessonTitle: "Direccionamiento IP", lessonVideoSource: "" },
      { lessonTitle: "Protocolos de red comunes", lessonVideoSource: "" },
      {
        lessonTitle: "Topologías y dispositivos de red",
        lessonVideoSource: "",
      },
    ],
    uuid: "7",
  },
  {
    imageRoute: "/images/linux-course.jpg",
    courseTitle: "Linux desde Cero",
    courseTeacherName: "José Hernández",
    courseDescription:
      "Aprende comandos esenciales, estructura de archivos, permisos y administración básica de sistemas Linux.",
    courseTeacherImage: "/images/teacher4.jpg",
    courseCategory: "Sistemas Operativos",
    lessons: [
      {
        lessonTitle: "Introducción a Linux y su historia",
        lessonVideoSource: "",
      },
      { lessonTitle: "Comandos básicos de la terminal", lessonVideoSource: "" },
      { lessonTitle: "Permisos y usuarios en Linux", lessonVideoSource: "" },
    ],
    uuid: "8",
  },
  {
    imageRoute: "/images/os-course.jpg",
    courseTitle: "Sistemas Operativos",
    courseTeacherName: "Daniela Ruiz",
    courseDescription:
      "Comprende procesos, concurrencia, administración de memoria y sistemas de archivos.",
    courseTeacherImage: "/images/teacher7.jpg",
    courseCategory: "Sistemas Operativos",
    lessons: [
      { lessonTitle: "Procesos y subprocesos", lessonVideoSource: "" },
      { lessonTitle: "Gestión de memoria", lessonVideoSource: "" },
      { lessonTitle: "Sistemas de archivos", lessonVideoSource: "" },
      { lessonTitle: "Planificación de la CPU", lessonVideoSource: "" },
    ],
    uuid: "9",
  },
  {
    imageRoute: "/images/hacking-course.jpg",
    courseTitle: "Hacking Ético y Seguridad",
    courseTeacherName: "Carlos Ramírez",
    courseDescription:
      "Explora técnicas de hacking ético, pruebas de penetración y ciberseguridad básica.",
    courseTeacherImage: "/images/teacher2.jpg",
    courseCategory: "Ciberseguridad",
    lessons: [
      { lessonTitle: "Fundamentos del hacking ético", lessonVideoSource: "" },
      { lessonTitle: "Reconocimiento y escaneo", lessonVideoSource: "" },
      { lessonTitle: "Explotación de vulnerabilidades", lessonVideoSource: "" },
    ],
    uuid: "10",
  },
  {
    imageRoute: "/images/frontend-dev.jpg",
    courseTitle: "Desarrollo Frontend Profesional",
    courseTeacherName: "Laura Mendoza",
    courseDescription:
      "Domina HTML, CSS moderno, JavaScript y frameworks como Tailwind y Bootstrap.",
    courseTeacherImage: "/images/teacher1.jpg",
    courseCategory: "Frontend",
    lessons: [
      { lessonTitle: "HTML5 moderno", lessonVideoSource: "" },
      { lessonTitle: "CSS con Tailwind y Bootstrap", lessonVideoSource: "" },
      { lessonTitle: "JavaScript para el frontend", lessonVideoSource: "" },
      { lessonTitle: "Diseño responsivo avanzado", lessonVideoSource: "" },
    ],
    uuid: "11",
  },
  {
    imageRoute: "/images/vue-course.jpg",
    courseTitle: "Aplicaciones Web con Vue.js",
    courseTeacherName: "Ana Torres",
    courseDescription:
      "Aprende Vue.js desde cero, composición de componentes y gestión de estado con Vuex.",
    courseTeacherImage: "/images/teacher3.jpg",
    courseCategory: "Frontend",
    lessons: [
      { lessonTitle: "Fundamentos de Vue.js", lessonVideoSource: "" },
      { lessonTitle: "Componentes y propiedades", lessonVideoSource: "" },
      { lessonTitle: "Estado global con Vuex", lessonVideoSource: "" },
    ],
    uuid: "12",
  },
  {
    imageRoute: "/images/react-native.jpg",
    courseTitle: "Apps Móviles con React Native",
    courseTeacherName: "Sofía López",
    courseDescription:
      "Construye aplicaciones móviles multiplataforma con React Native y Expo.",
    courseTeacherImage: "/images/teacher5.jpg",
    courseCategory: "Frontend",
    lessons: [
      { lessonTitle: "Introducción a React Native", lessonVideoSource: "" },
      { lessonTitle: "Navegación y rutas", lessonVideoSource: "" },
      { lessonTitle: "Consumo de APIs en móviles", lessonVideoSource: "" },
      { lessonTitle: "Despliegue en Expo", lessonVideoSource: "" },
    ],
    uuid: "13",
  },
  {
    imageRoute: "/images/ccna-course.jpg",
    courseTitle: "Cisco CCNA Fundamentals",
    courseTeacherName: "Marco Díaz",
    courseDescription:
      "Prepárate para la certificación CCNA con temas de redes, switches, routers y protocolos.",
    courseTeacherImage: "/images/teacher6.jpg",
    courseCategory: "Redes",
    lessons: [
      { lessonTitle: "Conceptos básicos de redes", lessonVideoSource: "" },
      { lessonTitle: "Configuración de switches", lessonVideoSource: "" },
      { lessonTitle: "Protocolos de enrutamiento", lessonVideoSource: "" },
    ],
    uuid: "14",
  },
  {
    imageRoute: "/images/bash-course.jpg",
    courseTitle: "Automatización con Bash y Shell Scripting",
    courseTeacherName: "José Hernández",
    courseDescription:
      "Escribe scripts en Bash para automatizar tareas en sistemas Linux y Unix.",
    courseTeacherImage: "/images/teacher4.jpg",
    courseCategory: "Sistemas Operativos",
    lessons: [
      { lessonTitle: "Sintaxis de Bash básica", lessonVideoSource: "" },
      { lessonTitle: "Automatización de tareas", lessonVideoSource: "" },
      { lessonTitle: "Condicionales y bucles", lessonVideoSource: "" },
      { lessonTitle: "Manejo de archivos en scripts", lessonVideoSource: "" },
    ],
    uuid: "15",
  },
  {
    imageRoute: "/images/git-course.jpg",
    courseTitle: "Control de Versiones con Git",
    courseTeacherName: "Laura Mendoza",
    courseDescription:
      "Aprende Git desde cero: commits, ramas, merges, conflictos y buenas prácticas en equipos.",
    courseTeacherImage: "/images/teacher1.jpg",
    courseCategory: "Frontend",
    lessons: [
      { lessonTitle: "Introducción a Git y GitHub", lessonVideoSource: "" },
      { lessonTitle: "Commits y ramas básicas", lessonVideoSource: "" },
      { lessonTitle: "Resolución de conflictos", lessonVideoSource: "" },
    ],
    uuid: "16",
  },
  {
    imageRoute: "/images/docker-course.jpg",
    courseTitle: "Docker para Desarrolladores",
    courseTeacherName: "Daniela Ruiz",
    courseDescription:
      "Crea contenedores, imágenes y entornos portables para tus aplicaciones con Docker.",
    courseTeacherImage: "/images/teacher7.jpg",
    courseCategory: "Backend",
    lessons: [
      { lessonTitle: "Conceptos básicos de Docker", lessonVideoSource: "" },
      {
        lessonTitle: "Creación y gestión de contenedores",
        lessonVideoSource: "",
      },
      {
        lessonTitle: "Docker Compose para multi-contenedores",
        lessonVideoSource: "",
      },
    ],
    uuid: "17",
  },
  {
    imageRoute: "/images/typescript-course.jpg",
    courseTitle: "TypeScript desde Cero",
    courseTeacherName: "Laura Mendoza",
    courseDescription:
      "Aprende TypeScript paso a paso, desde los tipos básicos hasta programación orientada a objetos y tipado avanzado.",
    courseTeacherImage: "/images/teacher1.jpg",
    courseCategory: "Frontend",
    lessons: [
      { lessonTitle: "Tipos básicos y variables", lessonVideoSource: "" },
      {
        lessonTitle: "Interfaces y tipos personalizados",
        lessonVideoSource: "",
      },
      {
        lessonTitle: "Programación orientada a objetos en TypeScript",
        lessonVideoSource: "",
      },
    ],
    uuid: "18",
  },
  {
    imageRoute: "/images/javascript-pro.jpg",
    courseTitle: "JavaScript de Cero a Master 2025",
    courseTeacherName: "Ana Torres",
    courseDescription:
      "Conviértete en un experto en JavaScript moderno con este curso intensivo desde lo básico hasta técnicas avanzadas.",
    courseTeacherImage: "/images/teacher3.jpg",
    courseCategory: "Frontend",
    lessons: [
      { lessonTitle: "Fundamentos de JavaScript", lessonVideoSource: "" },
      { lessonTitle: "Funciones avanzadas y closures", lessonVideoSource: "" },
      {
        lessonTitle: "Programación asíncrona y promesas",
        lessonVideoSource: "",
      },
      { lessonTitle: "ES6+ y mejores prácticas", lessonVideoSource: "" },
    ],
    uuid: "19",
  },
  {
    imageRoute: "/images/python-beginners.jpg",
    courseTitle: "Python para Principiantes",
    courseTeacherName: "José Hernández",
    courseDescription:
      "Aprende desde cero a programar en Python, ideal para quienes inician en el mundo de la programación.",
    courseTeacherImage: "/images/teacher4.jpg",
    courseCategory: "Backend",
    lessons: [
      { lessonTitle: "Instalación y primeros pasos", lessonVideoSource: "" },
      { lessonTitle: "Tipos de datos y variables", lessonVideoSource: "" },
      { lessonTitle: "Control de flujo y funciones", lessonVideoSource: "" },
    ],
    uuid: "20",
  },
  {
    imageRoute: "/images/cybersecurity-advanced.jpg",
    courseTitle: "Ciberseguridad Avanzada",
    courseTeacherName: "Carlos Ramírez",
    courseDescription:
      "Explora técnicas avanzadas de defensa, análisis forense y respuesta ante incidentes de seguridad.",
    courseTeacherImage: "/images/teacher2.jpg",
    courseCategory: "Ciberseguridad",
    lessons: [
      { lessonTitle: "Análisis forense digital", lessonVideoSource: "" },
      {
        lessonTitle: "Defensa contra ataques avanzados",
        lessonVideoSource: "",
      },
      { lessonTitle: "Respuesta a incidentes", lessonVideoSource: "" },
    ],
    uuid: "21",
  },
  {
    imageRoute: "/images/networking-cloud.jpg",
    courseTitle: "Redes y Cloud Computing",
    courseTeacherName: "Marco Díaz",
    courseDescription:
      "Aprende los fundamentos de redes y cómo se integran con entornos de computación en la nube.",
    courseTeacherImage: "/images/teacher6.jpg",
    courseCategory: "Redes",
    lessons: [
      { lessonTitle: "Fundamentos de redes", lessonVideoSource: "" },
      { lessonTitle: "Servicios en la nube", lessonVideoSource: "" },
      { lessonTitle: "Integración de redes y cloud", lessonVideoSource: "" },
    ],

    uuid: "22",
  },

  {
    imageRoute: "/images/vue-advanced.jpg",
    courseTitle: "Vue.js Avanzado con Pinia y Vue Router",
    courseTeacherName: "Ana Torres",
    courseDescription:
      "Profundiza en Vue.js con composición avanzada de componentes, gestión de rutas y estado.",
    courseTeacherImage: "/images/teacher3.jpg",
    courseCategory: "Frontend",
    lessons: [
      {
        lessonTitle: "Composición avanzada de componentes",
        lessonVideoSource: "",
      },
      { lessonTitle: "Gestión de rutas con Vue Router", lessonVideoSource: "" },
      { lessonTitle: "Estado global con Pinia", lessonVideoSource: "" },
    ],

    uuid: "23",
  },
  {
    imageRoute: "/images/react-architecture.jpg",
    courseTitle: "Arquitectura de Proyectos React",
    courseTeacherName: "Laura Mendoza",
    courseDescription:
      "Aprende a estructurar proyectos React escalables con buenas prácticas, testing y manejo de dependencias.",
    courseTeacherImage: "/images/teacher1.jpg",
    courseCategory: "Frontend",
    lessons: [
      {
        lessonTitle: "Estructura y organización del proyecto",
        lessonVideoSource: "",
      },
      { lessonTitle: "Testing en React", lessonVideoSource: "" },
      { lessonTitle: "Manejo de dependencias y hooks", lessonVideoSource: "" },
    ],
    uuid: "24",
  },
  {
    imageRoute: "/images/linux-advanced.jpg",
    courseTitle: "Linux Avanzado para SysAdmins",
    courseTeacherName: "José Hernández",
    courseDescription:
      "Domina administración de servicios, seguridad, y automatización en entornos Linux avanzados.",
    courseTeacherImage: "/images/teacher4.jpg",
    courseCategory: "Sistemas Operativos",
    lessons: [
      {
        lessonTitle: "Administración avanzada de servicios",
        lessonVideoSource: "",
      },
      { lessonTitle: "Seguridad en Linux", lessonVideoSource: "" },
      { lessonTitle: "Automatización con scripts", lessonVideoSource: "" },
    ],
    uuid: "25",
  },
  {
    imageRoute: "/images/kubernetes-course.jpg",
    courseTitle: "Kubernetes para DevOps",
    courseTeacherName: "Daniela Ruiz",
    courseDescription:
      "Aprende a desplegar, escalar y administrar contenedores con Kubernetes desde cero.",
    courseTeacherImage: "/images/teacher7.jpg",
    courseCategory: "Backend",
    lessons: [
      { lessonTitle: "Introducción a Kubernetes", lessonVideoSource: "" },
      {
        lessonTitle: "Despliegue y escalamiento de aplicaciones",
        lessonVideoSource: "",
      },
      { lessonTitle: "Administración de clústeres", lessonVideoSource: "" },
    ],
    uuid: "26",
  },
];

export default courses;
