<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-08 21:59:12
 * @LastEditTime: 2020-09-09 15:52:09
-->
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <template v-for="tc in tableColumn">
        <el-table-column
          :key="tc.key"
        >
          <template v-slot:header>
            <slot :name="'header-' + tc.key">{{ tc.label }}</slot>
          </template>
          <template v-slot="{ row }">
            <!-- <span>{{ row }}</span> -->
            <slot
              :name="tc.key"
              :row="row"
            >
            <!-- 备用内容 -->
              <!-- <span>{{ row.address }}</span> -->
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'propsSlot',
  props: {
      tableData: {
        type: Array,
        default: []
      },
      tableColumn: {
        type: Array,
        default: []
      }
  },
  methods: {
    alert(val){
      console.log(val);
    }
  },
}
</script>
