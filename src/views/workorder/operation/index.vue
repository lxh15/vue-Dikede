<template>
  <!-- 运维工单 -->
  <div class="dashboard-container">
    <!-- 头部搜索框 -->
    <Input></Input>
    <div class="result">
      <!-- 新建 -->
      <el-row type="flex">
        <el-button type="primary" icon="el-icon-circle-plus-outline">
          新建
        </el-button>
      </el-row>
      <!-- 主题表单 -->
      <Table :list="list"></Table>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input'
import Table from '@/components/Table'
// 引入api
import { getaskType } from '@/api/wordorde'
export default {
  name: 'operation',
  data() {
    return {
      replenishment: {
        pageIndex: 0,
        pageSize: 10,
        isRepair: true,
      },
    }
  },

  created() {
    this.getaskType()
    this.searchOperation()
  },
  components: {
    Input,
    Table,
  },
  computed: {
    list() {
      return this.$store.state.workorder.OperationList
    },
  },
  methods: {
    // 获取工单类型
    async getaskType() {
      const res = await getaskType()
      // console.log(res)
    },
    // 获取运营工单
    searchOperation() {
      this.replenishment.pageIndex++
      this.$store.dispatch('workorder/getOperationList', this.replenishment)
    },
  },
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  background-color: #fff;
}
.el-button {
  margin-left: 10px;
  background-color: #fbf4f0 !important;
  border: none;
  color: #655b56 !important;
}
.result {
  padding: 20px 15px 19px 17px;
  background-color: #fff;
}
.el-button--primary {
  width: 80px !important;
  height: 36px;
  padding: 0;
  background: linear-gradient(135deg, #ff9743, #ff5e20) !important;
  border: none;
  color: #fff !important;
}
</style>
