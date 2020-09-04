<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-02 20:48:38
 * @LastEditTime: 2020-09-03 20:14:35
-->
<template>
  <div class="parent">
    <h3>这里是父组件</h3>
    <!--第一次使用：用flex展示数据-->
    <scope-slot>
      <!-- <template slot-scope="user"> -->
      <template v-slot:default="user">
        <div class="tmpl">
          <span v-for="item in user.data">{{item}}</span>
        </div>
      </template>
    </scope-slot>

    <!--第二次使用：用列表展示数据-->
    <scope-slot>
      <template v-slot:default="user">
        <ul>
          <li v-for="item in user.data">{{item}}</li>
        </ul>
      </template>
    </scope-slot>

    <!--第三次使用：直接显示数据-->
    <scope-slot>
      <template v-slot:default="user">
       {{user.data}}
      </template>
    </scope-slot>

    <!--第四次使用：不使用其提供的数据, 作用域插槽退变成匿名插槽-->
    <scope-slot>
      我就是模板
    </scope-slot>
  </div>
</template>

<script>
import scopeSlot from '@/views/scopeSlot';

export default {
  name: "scope",
  components: {
    scopeSlot
  }
};
</script>

<style>
.tmpl >span{
    display: flex;
}
</style>