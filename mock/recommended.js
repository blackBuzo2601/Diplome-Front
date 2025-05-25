const recommendedCourses = [
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
];

export default recommendedCourses;
