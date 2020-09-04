<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-02 20:43:39
 * @LastEditTime: 2020-09-03 19:58:49
-->
<template>
    <div class="child">
      <h3>这里是子组件</h3>
      <!-- 作用域插槽 -->
      <slot :data="data"></slot>
    </div>
</template>
<script>
export default {
  name: 'scopeSlot',
  data() {
    return {
        data: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
    };
  }
};
</script>
<style>
</style>