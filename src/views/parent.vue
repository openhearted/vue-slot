<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-02 14:58:29
 * @LastEditTime: 2020-09-02 16:34:26
-->
<template>
    <div class="parent">
        <div>使用子组件slot的内容</div>
        <div>
            <child>
                <div>一个单眼皮，胆小但是却很阳光帅气的男孩子哎</div><br>
            </child>
        </div>
    </div>
</template>
<script>
import child from '@/views/child';
export default {
    name: 'parent',
    components: {
        child
    },
}
</script>
<style>
.parent {
    color: blueviolet;
}
</style>