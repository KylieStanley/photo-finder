<template>
  <div class="header">
    <h1>Photo <font-awesome-icon icon="camera" />Finder</h1>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sansita');

.header {
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 148, 211, 1) 51%,
    rgba(0, 96, 137, 1) 100%
  );
  color: #fff;
  display: flex;
  font-family: 'Sansita', sans-serif;
  font-size: 2.5rem;
  justify-content: center;
  height: 180px;
  letter-spacing: 2px;
  width: 100%;
}
.svg-inline--fa {
  padding-right: 17px;
}

h1 {
  margin-bottom: 20px;
}
</style>
