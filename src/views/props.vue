<!--
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-08 16:19:19
 * @LastEditTime: 2020-09-10 10:06:38
-->
<template>
  <div>
    <el-button v-if="buttonText !== ''" style="float: left; margin-left: 80px" type="primary" plain>{{ buttonText }}</el-button>
    <div class="parent">
      <props-slot
          :tableData="tableData"
          :table-column="tableColumn">

          <template slot="header-name">
            <span>昵称&nbsp;&nbsp;&nbsp;</span
            ><el-tooltip class="item" effect="light" content="这个名字仅代表昵称哦" placement="bottom-start">
                <i class="el-icon-question"></i>
            </el-tooltip>
          </template>
          <!-- row 拿不到，只有 column 和 $index -->
          <!-- <template slot="header-name" slot-scope="{ row, column }">
            <span>{{ row }}</span>
            <span>{{ column }}</span>
          </template> -->

          <template slot="date" slot-scope="{ row }">
              <span @click="getBottonVisible(row)">{{ row.date }}</span>
          </template>

          <template slot="name" slot-scope="{ row }">
            <span v-if="Array.isArray(row.name)">
              <template v-for="rn in row.name">
                  <span :class="[ rn.what == 'big' ? 'green-span': 'red-span']"
                    >{{ rn.name }}</span
                  ><br>
              </template>
            </span>
          </template>

          <template slot="address" slot-scope="{ row }">
            <el-tooltip class="item" effect="light" :content="row.address" placement="bottom-start">
              <span>{{ row.address }}</span>
            </el-tooltip>
          </template>

          <!-- 4.1 重命名 -->
          <!-- <template slot="address" slot-scope="{ row: descripttion }">
              <p>{{ descripttion.address }}</p>
          </template> -->
  
          <!-- 4.2 定义后备内容，但是 propsSlot 能拿到 row.address 的值，所以后备内容不起作用 -->
          <!-- <template slot="address" slot-scope="{ row = { address: '后备内容'} }">
            <span>{{ row.address }}</span>
          </template> -->
      </props-slot>
      <br/><br/>
      <hr/>

      <!-- 动态插槽 -->
      <props-slot
          :tableData="tableData"
          :table-column="tableColumn">
          <template v-slot:[dynamicSlotName]="{ row }">
              <span>{{ row.address }}</span>
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
          buttonText: '',
          dynamicSlotName: 'address'
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