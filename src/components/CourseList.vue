<script setup>
import { useCourseStore } from '../stores/course';
import { onMounted } from 'vue';
import CourseCard from './CourseCard.vue';

const courseStore = useCourseStore();

onMounted(() => {
  courseStore.getCourses();  
})
</script>

<template>
  <h3>Lista de cursos:</h3>
  
  <ul>
    <li v-for="course in courseStore.courses" :key="course.course">
      <CourseCard :course="course" />
    </li>
  </ul>
</template>

<style></style>