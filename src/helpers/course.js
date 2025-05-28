import axios from 'axios';

export const createCourse = async (title, description, imageUrl, userId) => {
	 try {
      const response = await axios.post('http://localhost:5005/diplome/courses', { title, description, imageUrl, userId },  { withCredentials: true });
      const { course } = response.data;
      return course;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al crear curso');
    }
}

export const getAllCourses = async () => {
	try {
      const response = await axios.get('http://localhost:5005/diplome/courses',  { withCredentials: true });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al obtener cursos');
    }
}