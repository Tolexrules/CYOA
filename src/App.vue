<template>
  <div id="app">
    <div id="nav">
	  <router-link to="/">
        <img class="nav_icon" src="./assets/logo.jpg">
      </router-link>
      <router-link to="/">Home</router-link> |
      <router-link to="/adventure">Adventure</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  background-color: #ADD8E6!important;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #45b6fe;
}

.nav_icon {
    width: 70px;
    height: 70px;
	margin-right: 900px;
	justify-content: left;
}
</style>
