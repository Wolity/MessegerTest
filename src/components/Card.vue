<script setup>
import { RouterLink } from "vue-router";

defineProps({
  data: Object,
});
</script>
<template>
  <router-link :to="{ name: 'detail', params: { id: data.id } }" class="profile">
    <img :src="data.picture" class="avatar" />
    <div class="info">
      <h2>{{ data.name }}</h2>
      <p>{{ data.job }}</p>
    </div>
  </router-link>
</template>
<style scoped lang="scss">
.profile {
  display: flex;
  align-items: center;
  gap: 15px;

  .avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }

  .info {
    h2 {
      line-height: 20px;
      font-size: 16px;
    }

    p {
      line-height: 16px;
      margin-bottom: 3px;
      color: #707070;
      font-size: 13px;
    }
  }
}
</style>
