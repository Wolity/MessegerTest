<script setup></script>
<template>
  <section>
    {{ $route.params.id }}
    <nav class="main">
      <img src="../assets/LeftArrow.svg" class="arrow_img" />
      <img
        src="https://masterpiecer-images.s3.yandex.net/5fd7cd0bb34761b:upscaled"
        class="pfp_img"
      />
      <h2>Леший Безобидный</h2>
      <p>Designer</p>
    </nav>

    <div class="info">
      <nav>
        <img src="../assets/star.svg" class="star" />
        <p class="date">5 июня 1996</p>
      </nav>
      <h2 class="profile_date">24 года</h2>
    </div>

    <div class="info">
      <nav>
        <img src="../assets/phone.svg" class="phone" />
        <p class="profile_number">+7 (999) 900 90 90</p>
      </nav>
    </div>
  </section>
</template>
<style lang="scss">
section {
  .main {
    background: #f7f7f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    .arrow_img {
      margin-top: 28px;
      margin-bottom: 28px;
      margin-left: 33px;
      width: 14px;
      height: 16px;
      margin-right: auto;
    }
    .pfp_img {
      width: 104px;
      height: 104px;
      border-radius: 50%;
    }
    h2 {
      padding-top: 24px;
      color: #050510;
      font-size: 24px;
      font-weight: 700;
    }
    p {
      margin-bottom: 12px;
      margin-top: 12px;
      color: #55555c;
      font-weight: 400;
      font-size: 13px;
    }
  }
  .info {
    padding-top: 25px;
    padding-bottom: 30px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    nav {
      gap: 12px;
      align-items: center;
      display: flex;
      .star {
        margin-left: 18px;
        width: 22px;
        height: 24px;
      }
      .date {
      }
      .phone {
        margin-left: 18px;
        width: 22px;
        height: 24px;
      }
      .profile_number {
      }
    }
    .profile_date {
      padding-right: 20px;
      color: #97979b;
    }
  }
}
</style>
