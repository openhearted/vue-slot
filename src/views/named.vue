<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-02 19:52:55
 * @LastEditTime: 2020-09-02 20:41:26
-->
<template>
    <div class="named">
      <named-slot>
        <template v-slot:header>
          <h1>header</h1>
        </template>

        <template v-slot:default>
          <h2>default</h2>
          <h2>Anyway</h2>
        </template>

        <template v-slot:footer>
          <h1>footer</h1>
        </template>
      </named-slot>
    </div>
</template>
<script>
import namedSlot from '@/views/namedSlot';
export default {
    name: 'named',
    components: {
        namedSlot
    }
}
</script>