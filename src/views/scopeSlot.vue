<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-02 20:43:39
 * @LastEditTime: 2020-09-09 21:39:14
-->
<template>
    <div class="child">
      <h3>这里是子组件</h3>
      <!-- 2.2 在slot标签添加样式无效 -->
      <slot :msg="msg" style="color: blue"></slot>
      <slot name="data" :data="data"></slot>
      <slot name="string" :string="string"></slot><br/>
      <slot>后备内容1</slot><br/>
      <slot>后备内容2</slot><br/>
      <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'scopeSlot',
  data() {
    return {
        msg:{
          msg: '默认插槽'
        },
        data: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba'],
        string: '小伦叽'
    };
  }
};
</script>
<style>
</style>