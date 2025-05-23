<script setup>
import { useCourseStore } from "@/stores/course";
import { ref } from "vue";

const courseStore = useCourseStore();

const newCourse = ref({
  course: "",
  hours: null,
  classroom: "",
  vacations: "",
  teacher: {
    id: null,
  },
});

function handleSubmit() {
   courseStore.addCourse(newCourse.value);
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <fieldset>
      <label for="course-name">Nombre del Curso:</label>
      <input type="text" id="course-name" v-model="newCourse.course" />
    </fieldset>
    <fieldset>
      <label for="course-hours">Horas del Curso:</label>
      <input type="number" id="course-hours" v-model="newCourse.hours" />
    </fieldset>
    <fieldset>
      <label for="course-class">Clase del Curso:</label>
      <input type="text" id="course-class" v-model="newCourse.classroom" />
    </fieldset>
    <fieldset>
      <label for="course-vacations">Vacaciones del Curso:</label>
      <input type="text" id="course-vacations" v-model="newCourse.vacations" />
    </fieldset>
    <fieldset>
      <label for="course-teacher">Profesor del Curso:</label>
      <input type="number" id="course-teacher" v-model="newCourse.teacher.id" />
    </fieldset>

    <button>Crear curso</button>
  </form>
</template>

<style></style>
