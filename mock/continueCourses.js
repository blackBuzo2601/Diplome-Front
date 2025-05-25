const continueCourses = [
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
];

export default continueCourses;
