<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-02 20:48:38
 * @LastEditTime: 2020-09-10 10:51:00
-->
<template>
  <div class="parent">
    <h3>这里是父组件</h3>
    <hr/>
    
    <!-- 第一次使用 -->
    <scope-slot>
      <template slot="data" slot-scope="dataProps">
        <div class="tmpl">
          <span v-for="item in dataProps.data">{{item}}</span>
        </div>
      </template>
      <!-- 2.1 同一个名称的插槽只能写一次，否则会被覆盖 -->
      <!-- <template slot="data" slot-scope="dataProps">
          <div class="tmpl">
            <span v-for="item in dataProps.data"> 覆盖原来的数据 </span>
          </div>
      </template> -->
    </scope-slot>
    <hr/>

    <!-- 第二次使用 -->
    <scope-slot>
      <!-- 2.3 页面会根据子组件中slot的顺序去替换内容并渲染页面 -->
      <!-- <template slot="data" slot-scope="dataProps">
        <div class="tmpl">
          <span v-for="item in dataProps.data">{{item}}</span>
        </div>
      </template>
      <template slot="string" slot-scope="stringProps">
            {{ stringProps.string }}
      </template> -->
      <template slot-scope="msgProps">
       {{ msgProps.msg }}
      </template>
      
      <!-- 3.6 子组件如果有多个默认插槽时，父组件访问作用域的时候需要注意 -->
      <!-- <template slot-scope="msgProps">
       {{ msgProp }}
      </template> -->
      
      <!-- 3.1 插槽 v-slot:string 可缩写为 #string，并且默认插槽的缩写为 #default，否则无效 -->
      <!-- <template #default="msgProps">
       {{msgProps.msg}}
      </template> -->
      <!-- <template #="msgProps">
       {{msgProps.msg}}
      </template> -->
    </scope-slot>
    <hr/>
    
    <!-- 第三次使用 -->
    <scope-slot>
        <template slot="string" slot-scope="stringProps">
            {{ stringProps.string }}
        </template>
    </scope-slot>
    <hr/>


    <!-- 3.2 默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确 -->
    <!-- <scope-slot slot-scope="msgProps">
      <template slot="string" slot-scope="stringProps">
       {{stringProps.string}}
      </template>
    </scope-slot>
    <hr/> -->

    <!-- 3.3 如果没有为对应插槽写完整的结构，那么插槽失效，包括dom不完整，作用域不完整，插槽名字不完整-->
    <!-- <scope-slot>
      <template slot="string" slot-scope="stringProps">
        {{stringProps.string}}
      </template>
    </scope-slot>
    <hr/> -->


    <!-- 3.4 如果插槽有默认内容，则显示默认内容。即后备内容：替补。
         就是在没有提供内容的时候默认使用插槽<slot></slot>中所写的内容，但是如果提供内容就会被替代 -->
    <!-- <scope-slot>
        <template slot="default">
        </template>
    </scope-slot>
    <br/> -->

    <!-- 3.5 如果子组件有多个默认插槽，而父组件所有指定到默认插槽的填充内容，将“会” “全都”填充到子组件的每个默认插槽中。 -->
    <!-- <scope-slot>
        <template slot="default">
          <span>多个默认插槽</span>
        </template>
    </scope-slot> -->
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
  background-color: rgb(212, 211, 211);
  display: block;
  text-align: center;
}
</style>