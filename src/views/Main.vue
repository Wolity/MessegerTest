<script setup>
import Card from "../components/Card.vue";
let group = [
  {
    id: 1,
    name: "Алексей Миногаров",
    job: "Analyst",
    picture:
      "https://cdn.tripster.ru/thumbs2/c667f64e-e7d7-11ee-9d00-9a3e5354e4cb.1220x600.jpeg",
  },
  {
    id: 2,
    name: "Алиса Иванова",
    job: "Designer",
    picture: "https://rossaprimavera.ru/static/files/64b29563d167.jpg",
  },
];
</script>
<template>
  <main>
    <Card v-for="item in group" :key="item.id" :data="item" />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
}
</style>
