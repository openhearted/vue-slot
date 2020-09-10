<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-07 11:05:44
 * @LastEditTime: 2020-09-10 10:46:33
-->
<template>
    <div class="parent">
        <h3>电脑配置</h3>
        <computer-slot>
            <template slot="CPU">
                <div>Intel Core i7</div>
            </template>
            <template slot="GPU">
                <div>GTX980Ti</div>
            </template>
            <template slot="Memory">
                <div>Kingston 64G</div>
            </template>
            <template slot="Hard-drive">
                <div>Samsung SSD 1T</div>
            </template>
        </computer-slot>


        <!-- v-slot 只能添加在 <template> 上 -->
        <!-- <computer-slot>
            <div v-slot:CPU>
            </div>
        </computer-slot> -->

        <!-- 只有一个例外 -->
        <!-- <computer-slot v-slot:CPU>
            <span>111</span>
        </computer-slot> -->
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
    color:rgb(33, 204, 33);
    width: 700px;
    margin: 100px auto ; 
}
.parent >div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>