export interface Course {
  imageRoute: string;
  courseTitle: string;
  courseTeacherName?: string;
  courseDescription: string;
  courseTeacherImage?: string;
  courseCategory?: string;
  lessons?: Lesson[];
  uuid: string;
}

export interface Lesson {
  lessonTitle: string;
  lessonVideoSource: string;
  uuid?: string;
}

export default Course;
