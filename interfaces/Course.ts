export interface Course {
  _id?: string;
  imageUrl: string;
  title: string;
  userId?: string;
  description: string;
  courseTeacherImage?: string;
  courseCategory?: string;
  lessons?: Lesson[];
}

export interface Lesson {
  _id?: string;
  title: string;
  filename: string;
  courseId?: string;
}

export default Course;
