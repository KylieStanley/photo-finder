<template>
  <div id="app">
    <router-view />
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background: rgba(0, 148, 211, 1);
}

#nav a {
  color: #2c3e50;
  font-weight: bold;
  font-size: 18px;
  margin: 0 5px;
}

#nav a.router-link-exact-active {
  color: #fff;
  font-weight: 900;
}
</style>
