<template>
  <div class="about">
    <Header />
    <h1 class="about-text">
      Photo Finder is a single page Vue.js application created by Kylie Stanley
      as part of Module 4 of Turing School of Software and Design.
    </h1>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'about',
  components: {
    Header
  }
}
</script>

<style>
.about {
  min-height: 90vh;
}

.about-text {
  margin-top: 80px;
  padding: 0 100px;
}
</style>
