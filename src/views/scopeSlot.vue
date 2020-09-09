<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-02 20:43:39
 * @LastEditTime: 2020-09-08 16:12:40
-->
<template>
    <div class="child">
      <h3>这里是子组件</h3>
      <slot :msg="obj"></slot>
      <slot name="data" :data="array"></slot>
      <slot name="string" :string="name"></slot>
    </div>
</template>
<script>
export default {
  name: 'scopeSlot',
  data() {
    return {
        obj: '默认插槽',
        array: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba'],
        name: '小伦叽'
    };
  }
};
</script>
<style>
</style>