<template>
  <!-- 运营工单 -->
  <div class="dashboard-container">
    <!-- 头部搜索框 -->
    <Input @enterFn="getEnterFn"></Input>
    <div class="result">
      <!-- 新建 -->
      <el-row type="flex">
        <el-button
          @click="addIsShow = true"
          type="primary"
          icon="el-icon-circle-plus-outline"
        >
          新建
        </el-button>
        <el-button class="el-button">工单配置</el-button>
      </el-row>
      <!-- 主题表单 -->
      <Table
        :list="list"
        @prevPage="getPrevPage"
        @nextPage="getNextPage"
      ></Table>
    </div>

    <!-- 新增工单 -->
    <el-dialog title="新增工单" :visible.sync="addIsShow" width="620px" center>
      <!-- 主题内容 -->
      <el-form ref="form" :model="addFrom" label-width="80px" size="mini">
        <el-form-item label="设备编号">
          <el-input
            type="text"
            placeholder="请输入"
            v-model="addFrom.text"
            maxlength="15"
            show-word-limit
          >
          </el-input>
        </el-form-item>

        <el-form-item label="工单类型">
          <el-select v-model="addFrom.region" placeholder="请选择">
            <el-option label="补货工单" value="buhuo"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="补货数量">
          <el-button>补货清单</el-button>
        </el-form-item>
        <!--  -->
        <el-form-item label="运营人员">
          <el-select v-model="addFrom.yunying" placeholder="请选择">
            <el-option label="运营人员" value="yunying"></el-option>
          </el-select>
        </el-form-item>
        <!--  -->
        <el-form-item label="工单类型">
          <el-input
            type="textarea"
            placeholder="请输入备注 (不超过40字)"
            v-model="addFrom.textarea"
            maxlength="40"
            show-word-limit
          >
          </el-input>
        </el-form-item>
      </el-form>

      <!-- 确认和取消 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Input from '@/components/Input'
import Table from '@/components/Table'
// 引入api
import { getaskType } from '@/api/wordorde'
export default {
  name: 'workorder',
  data() {
    return {
      replenishment: {
        pageIndex: 0,
        pageSize: 10,
        isRepair: false,
        taskCode: 0, // 工单编号
        status: 0, // 工单状态
      },
      addIsShow: true,
      // 新增工单的value
      addFrom: {
        text: '',
        region: '',
        textarea: '',
        yunying: '',
      },
    }
  },

  created() {
    this.getaskType()
    this.searchBusiness()
  },
  components: {
    Input,
    Table,
  },
  computed: {
    list() {
      return this.$store.state.workorder.businessList
    },
  },
  methods: {
    // 获取工单类型
    async getaskType() {
      const res = await getaskType()
      // console.log(res)
    },
    // 获取运营工单
    searchBusiness() {
      this.replenishment.pageIndex++
      this.$store.dispatch('workorder/getBusinessList', this.replenishment)
    },
    // 获取上一页数据
    getPrevPage() {
      this.replenishment.pageIndex--
      this.$store.dispatch('workorder/getBusinessList', this.replenishment)
    },
    // 获取下一页数据
    getNextPage() {
      this.searchBusiness()
    },
    // 获取工单编号搜索
    getEnterFn(taskCode) {
      this.replenishment.taskCode = taskCode
      this.$store.dispatch('workorder/getBusinessList', this.replenishment)
    },
    // 根据状态查询
    onQueryFn(status) {
      this.replenishment.status = status
      this.$store.dispatch('workorder/getBusinessList', this.replenishment)
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

.el-form-item--mini.el-form-item:before {
  content: '*';
  color: #f56c6c;
  /* margin-right: 4px; */
}
.el-dialog .el-dialog__body .el-form-item {
  margin-bottom: 20px;
  height: 36px;
}
.el-form-item__content {
  height: 36px;
}
.el-dialog {
  border-radius: 10px;
}
.el-input {
  width: 100%;
}
</style>
