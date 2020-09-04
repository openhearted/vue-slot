<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-02 14:56:20
 * @LastEditTime: 2020-09-03 20:10:13
-->
<template>
    <div class="child">
        <h2>伦伦是谁？</h2>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'child',
    data() {
        return {
            child: {
                a: "我是子组件的a"
            }
        }
    }
}
</script>
<style>
.child {
    color: orangered;
}
</style>