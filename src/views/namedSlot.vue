<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-02 20:22:48
 * @LastEditTime: 2020-09-02 20:33:37
-->
<template>
    <div class="container">
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