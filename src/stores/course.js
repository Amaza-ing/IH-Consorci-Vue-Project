import { defineStore } from "pinia";
import { ref } from "vue";

export const useCourseStore = defineStore("course", () => {
  const API_URL = "http://localhost:8080/api/courses";
  const courses = ref([]);

  async function getCourses() {
    const response = await fetch(API_URL);
    const data = await response.json();
    courses.value = data;
  }

  async function addCourse(newCourse) {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      });

      getCourses();
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteCourse(id) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    getCourses();
  }

  return {
    courses,
    getCourses,
    addCourse,
    deleteCourse,
  };
});
