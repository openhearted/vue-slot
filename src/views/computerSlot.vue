<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-07 11:05:44
 * @LastEditTime: 2020-09-09 10:26:05
-->
<template>
    <div class="child">
        <!-- 页面会根据子组件中slot的顺序去替换内容并渲染页面 -->
       <!-- style="padding: 10px" -->
        <slot name="CPU">这插你的CPU</slot>
        <slot name="GPU">这插你的显卡</slot>
        <slot name="Memory">这插你的内存</slot>
        <slot name="Hard-drive"></slot>
    </div>
</template>
<script>
export default {
    name: 'computerSlot'
}
</script>
<style>
.child{
    color:red
}
</style>