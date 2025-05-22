interface Course {
  imageRoute: string;
  courseTitle: string;
  courseTeacherName: string;
  courseDescription: string;
  courseTeacherImage: string;
  courseCategory: string;
  lessons: Lesson[];
}

interface Lesson {
  lessonTitle: string;
  lessonVideoSource: string;
}

export default Course;
