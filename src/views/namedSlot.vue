<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-02 20:22:48
 * @LastEditTime: 2020-09-03 20:10:34
-->
<template>
    <div class="child">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
</template>
<script>
export default {
    name: 'namedSlot'
}
</script>