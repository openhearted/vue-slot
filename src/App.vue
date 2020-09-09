<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-08 21:54:10
 * @LastEditTime: 2020-09-08 21:58:43
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
      <div class="slot">
        <router-link to="/">name</router-link> | 
        <router-link to="/scope">scope</router-link> | 
        <router-link to="/props">props</router-link> | 
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.slot{
  position:absolute
}
</style>
