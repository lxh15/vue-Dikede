<template>
  <div>
    <el-table :data="list" type="index" style="width: 100%">
      <el-table-column
        type="index"
        :index="indexMethod"
        label="序号"
        width="100"
      >
      </el-table-column>
      <el-table-column prop="taskCode" label="工单编号"> </el-table-column>
      <el-table-column prop="innerCode" label="设备编号"> </el-table-column>
      <el-table-column prop="taskType.typeName" label="工单类型">
      </el-table-column>
      <el-table-column prop="createType" label="工单方式"> </el-table-column>
      <el-table-column prop="taskStatusTypeEntity.statusName" label="工单状态">
      </el-table-column>
      <el-table-column prop="userName" label="运营人员"> </el-table-column>
      <el-table-column prop="createTime" label="创建日期"> </el-table-column>
      <el-table-column prop="" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">
            查看详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 底部导航 -->
    <div class="pagination-container">
      <span class="demonstration">显示总数</span>
      <el-pagination
        layout="prev,next"
        :small="false"
        prev-text="上一页"
        next-text="下一页"
        @prev-click="prevClick"
        @next-click="nextClick"
        :total="100"
      >
      </el-pagination>
    </div>
    <!-- <el-pagination prev-text="上一页" next-text="下一页"> </el-pagination> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      create: ['自动', '手动'],
      replenishment: {
        pageIndex: 1,
        pageSize: 10,
        isRepair: false,
      },
    }
  },
  props: {
    list: {
      type: Array,
      default: () => [],
      require: true,
    },
  },
  methods: {
    indexMethod(index) {
      return index + 1
    },
    createTypeMethod(val) {
      return this.create[val]
    },
    prevClick() {
      console.log('上一页')
      this.$emit('prevPage')
    },
    nextClick() {
      console.log('下一页')
      this.$emit('nextPage')
      // this.replenishment.pageIndex++
      // this.$store.dispatch('workorder/getBusinessList', this.replenishment)
    },
    handleClick(val) {
      console.log(val)
    },
  },
}
</script>
<style scoped lang="scss">
.pagination-container {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 32px 16px;
  span {
    font-size: 12px;
    color: #999;
    flex: 10;
  }
  ::v-deep .el-pagination {
    .btn-next {
      background-color: #d5ddf8;
      margin-left: 30px;
    }
    .btn-prev {
      background-color: #d5ddf8;
    }
  }
}
</style>
