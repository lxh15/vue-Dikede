<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="工单编号">
        <el-input v-model="formInline.user" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="工单状态">
        <el-select v-model="formInline.region" placeholder="请选择">
          <el-option label="代办" value="daiban"></el-option>
          <el-option label="进行" value="jinxing"></el-option>
          <el-option label="取消" value="quxiao"></el-option>
          <el-option label="完成" value="wancheng"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-search"
          >查询</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: '',
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
  },
}
</script>

<style scoped>
.demo-form-inline {
  margin-bottom: 20px;
  background-color: #fff;
}
.el-button--primary {
  background-color: #5f84ff;
  border-color: #5f84ff;
}
</style>
