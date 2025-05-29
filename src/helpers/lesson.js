import axios from 'axios';


export const createLesson = async (textInput, courseId, videoFile) => {
	 try {
		const formData = new FormData();
		formData.append("title", textInput);
		formData.append("courseId", courseId);
		formData.append("video", videoFile);

		const response = await axios.post("http://localhost:5005/diplome/courses/video", formData, {withCredentials: true, headers: { "Content-Type": "multipart/form-data",},});
		const { video } = response.data;
      	return video;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al crear leccion');
    }
}

export const deleteLesson = async (lessonId) => {
	 try {

		const response = await axios.delete(`http://localhost:5005/diplome/courses/video/${lessonId}`, {withCredentials: true, headers: { "Content-Type": "multipart/form-data",},});
		const { message } = response.data;
      	return message;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al crear leccion');
    }
}


export const getAllLessons = async () => {
	try {
      const response = await axios.get('http://localhost:5005/diplome/courses/video',  { withCredentials: true });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al obtener lecciones');
    }
}