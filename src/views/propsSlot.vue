<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-08 21:59:12
 * @LastEditTime: 2020-09-09 19:17:00
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
          <template slot="header" slot-scope="{ row, column, $index }">
            <!-- row 拿不到，只有 column 和 $index -->
            <slot :name="'header-' + tc.key" :row="row" :column="column">{{ tc.label }}</slot>
          </template>
          <template slot-scope="{ row }">
            <!-- 备用内容 -->
            <!-- <span>{{ row }}</span> -->
            <!-- 4.2 - 后备内容展示 :row="xxx" -->
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
