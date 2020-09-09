<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-02 20:48:38
 * @LastEditTime: 2020-09-08 16:18:47
-->
<template>
  <div class="parent">
    <h3>这里是父组件</h3>
    <!--第一次使用：展示数据，并修改样式-->
    <scope-slot>
      <!-- <template slot-scope="dataProps"> -->
      <template v-slot:data="dataProps">
        <div class="tmpl">
          <span v-for="item in dataProps.data">{{item}}</span>
        </div>
      </template>
    </scope-slot>

    <hr/>

    <!--第二次使用：直接显示数据-->
    <scope-slot>
    <!-- <scope-slot v-slot="msgProps"> -->
      <!-- {{ msgProps.msg }} -->
      <template v-slot:data="dataProps">
       {{dataProps.data}}
      </template>
    </scope-slot>

    <hr/>
    
    <!--第三次使用：不使用其提供的数据, 作用域插槽变为解构插槽-->
    <scope-slot>
        <template v-slot:string="stringProps">
            {{ stringProps.string }}
        </template>
        
        <template v-slot:default="msgProps">
            <h3>{{ msgProps.msg }}</h3>
        </template>

        <!-- <template v-slot:default="{ msg }">
            <h3>{{ msg }}</h3>
        </template> -->

         <!-- prop 重命名 -->
        <!-- <template v-slot:default="{ obj: descripttion }">
            <p>{{ descripttion.msg }}</p>
        </template> -->

        <!-- 定义后备内容 -->
        <!-- <template v-slot:default="{ obj= { msg: '备用内容'} }">
            <p>{{ obj.msg }}</p>
        </template> -->

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
.tmpl{
    display: flex;
}
.tmpl >span{
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: rgb(189, 181, 181);
  display: block;
  text-align: center;
}
</style>