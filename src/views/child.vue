<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-02 14:56:20
 * @LastEditTime: 2020-09-02 16:26:21
-->
<template>
    <div class="child">
        <h2>伦伦是谁？</h2>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'child'
}
</script>
<style>
.child {
    color: orangered;
}
</style>