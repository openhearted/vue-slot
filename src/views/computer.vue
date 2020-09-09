<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-07 11:05:44
 * @LastEditTime: 2020-09-09 10:31:31
-->
<template>
    <div class="parent">
        <h3>电脑配置</h3>
        <computer-slot>
            <template v-slot:CPU>
                <div>Intel Core i7</div>
            </template>
            <template v-slot:GPU>
                <div>GTX980Ti</div>
            </template>
            <template v-slot:Memory>
                <div>Kingston 64G</div>
            </template>
            <template v-slot:Hard-drive>
                <div>Samsung SSD 1T</div>
            </template>
        </computer-slot>
    </div>
</template>
<script>
import computerSlot from '@/views/computerSlot';
export default {
    name: 'first',
    components: {
        computerSlot
    }
}
</script>
<style>
.parent{
    color:green;
    width: 800px;
    margin:50px auto ; 
}
.parent >div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>