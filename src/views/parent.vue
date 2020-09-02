<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-02 14:58:29
 * @LastEditTime: 2020-09-02 19:55:37
-->
<template>
    <div class="parent">
        <div>使用子组件slot的内容</div>
        <child>
            <div>一个单眼皮，胆小但却很阳光帅气的男孩子哎</div><br>
            <!-- 不能访问子组件的数据了 -->
            <!-- <div>{{ child.a }}</div> -->
        </child>
    </div>
</template>
<script>
import child from '@/views/child';
export default {
    name: 'parent',
    components: {
        child
    },
    data() {
        return {
            parent: {
                a: "我是父组件的a"
            }
        }
    }
}
</script>
<style>
.parent {
    color: blueviolet;
}
</style>