<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-08 16:19:19
 * @LastEditTime: 2020-09-09 15:50:53
-->
<template>
  <div>
    <el-button v-if="buttonText !== ''" style="float: right; margin-right: 50px" type="primary" plain>{{ buttonText }}</el-button>
    <div class="parent">
      <props-slot
          :tableData="tableData"
          :table-column="tableColumn">
          <template v-slot:date="scope">
              <span @click="getBottonVisible(scope.row)">{{ scope.row.date }}</span>
          </template>
          <template v-slot:header-name>
            <span>昵称&nbsp;&nbsp;&nbsp;</span
            ><el-tooltip class="item" effect="light" content="这个名字仅代表昵称哦" placement="bottom-start">
                <i class="el-icon-question"></i>
            </el-tooltip>
          </template>
          <template v-slot:name="scope">
            <span v-if="Array.isArray(scope.row.name)">
              <template v-for="rn in scope.row.name">
                  <span :class="[ rn.what == 'big' ? 'green-span': 'red-span']"
                    >{{ rn.name }}</span
                  ><br>
              </template>
            </span>
          </template>
          <template v-slot:address="scope">
            <el-tooltip class="item" effect="light" :content="scope.row.address" placement="bottom-start">
                </span><span>{{ scope.row.address }}</span>
            </el-tooltip>
          </template>
      </props-slot>
    </div>
  </div>
</template>

<script>
import propsSlot from '@/views/propsSlot';
export default {
    name: 'props',
    components: {
        propsSlot
    },
    data() {
      return {
          tableColumn : [],
          tableData : [],
          buttonText: ''
      }
    },
    mounted() {
        this.tableColumn = [{
            key: "date",
            label: "日期"
        },{
            key: "name",
            label: "名字"
        },{
            key: "address",
            label: "地址"
        }],
        this.tableData = [{
          date: '2016-05-02',
          name: [
            {name:'王小虎', what:'big'},
            {name:'王虎虎', what:'small'}
          ],
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: [
            {name:'王小虎', what:'big'},
            {name:'王虎虎', what:'small'},
            {name:'虎虎', what:'small'}
          ],
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: [
            {name:'王虎虎', what:'small'}
          ],
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: [
            {name:'王小虎', what:'big'}
          ],
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    },
    methods: {
      getBottonVisible(val){
        this.buttonText = val.date;
      }
    },
}
</script>
<style>
.green-span {
  color: green;
}
.red-span {
  color: red;
}
</style>