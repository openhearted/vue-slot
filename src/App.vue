<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-08 21:54:10
 * @LastEditTime: 2020-09-09 23:51:35
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
      <div class="slot">
        <router-link to="/">computer（初识）</router-link> &nbsp;| &nbsp;
        <router-link to="/scope">scope（具名、作用域例子）</router-link> &nbsp;| &nbsp;
        <router-link to="/props">props（解构、动态例子）</router-link>
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
