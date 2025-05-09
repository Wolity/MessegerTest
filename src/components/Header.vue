<script setup>
import search from "../assets/search.svg";
import sort from "../assets/sort.svg";
</script>

<template>
  <header>
    <h1>Поиск</h1>
    <label>
      <img :src="search" />
      <input type="text" placeholder="Введие имя, тег, почту..." />
      <img :src="sort" />
    </label>
  </header>
</template>
<style scoped lang="scss">
</style>
