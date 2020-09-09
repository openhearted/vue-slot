<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-08 21:59:12
 * @LastEditTime: 2020-09-09 11:07:14
-->
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <template v-for="tc in tableColumn">
        <el-table-column
          :prop="tc.key"
          :key="tc.key"
        >
          <template v-slot:header="scope">
            <slot :name="'header-' + tc.key" :row="scope">{{ tc.label }}</slot>
          </template>
          <template v-slot="scope">
            <slot
              :name="tc.key"
              :row="scope.row"
            >
              <span>{{ scope.row[tc.key] }}</span>
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
  }
}
</script>
