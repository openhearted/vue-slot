<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-07 11:05:44
 * @LastEditTime: 2020-09-09 19:34:17
-->
<template>
    <div class="child">
        <slot name="CPU">这插你的CPU</slot>
        <slot name="GPU">这插你的显卡</slot>
        <slot name="Memory">这插你的内存</slot>
        <slot name="Hard-drive"></slot>
    </div>

    <!-- v-slot 只能添加在 <template> 上 (只有一种例外情况) -->
    <!-- <div class="child">
        <slot name="CPU">这插你的CPU</slot>
    </div> -->
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