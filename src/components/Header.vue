<script setup>
import { ref } from "vue";
import search from "../assets/search.svg";
import sort from "../assets/sort.svg";
let links = ["Все", "Designers", "Analysts", "Managers", "iOS", "Android"];
let activelink = ref("Все");
function changelink(l) {
  console.log(l, activelink);
  activelink.value = l;
}
</script>

<template>
  <header>
    <h1>Поиск</h1>
    <label class="search-field">
      <img :src="search" alt="Search icon" class="search-icon" />
      <input
        type="text"
        placeholder="Введите имя, тег, почту..."
        class="search-input"
      />
      <img :src="sort" class="sort-icon" />
    </label>
    <nav>
      <a :class="{ 'activelink': activelink == link }"
        @click="changelink(link)"
        v-for="(link, index) of links"
        :key="index"
        >{{ link }}</a
      >
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  padding-top: 16px;
  background-color: #fff;
  border-bottom: 1px solid #c3c3c6;
  h1 {
    margin-left: 24px;
    font-size: 24px;
    width: 75px;
    height: 25px;
    color: black;
    font-weight: 700;
  }
  .search-field {
    margin: 12px 16px 0 16px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    border-radius: 16px;
    background: #f7f7f8;

    .search-icon {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
    .search-input {
      font-weight: 500;
      font-size: 15px;
      width: 100%;
      background: #f7f7f8;
      color: #c3c3c6;
    }
    .sort-icon {
      width: 20px;
      height: 12px;
    }
  }

  nav {
    display: flex;
    padding: 16px 16px 0px 16px;
    overflow-x: auto;
    .activelink {
      color: #050510;
      border-bottom: 2.5px solid rgb(93, 53, 153);
    }

    a {
      padding: 8px 12px;
      white-space: nowrap;
      color: #97979B;
      font-weight: 500;
      cursor: pointer;
    }
  }
}
</style>
