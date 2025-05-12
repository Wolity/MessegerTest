<script setup>
import search from "../assets/search.svg";
import sort from "../assets/sort.svg";
let links = ['Все', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android']
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
      <a>Все</a>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  padding-top: 16px;
  background-color: #fff;

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
      color: #C3C3C6;
    }
    .sort-icon {
      width: 20px;
      height: 12px;
    }
  }
}
</style>
