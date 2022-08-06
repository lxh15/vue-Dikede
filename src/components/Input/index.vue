<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <!-- 工单编号 -->
      <el-form-item label="工单编号">
        <el-input
          v-model="formInline.user"
          placeholder="请输入"
          @change="enterFn"
        ></el-input>
      </el-form-item>
      <!-- 工单状态 -->
      <el-form-item label="工单状态">
        <el-select v-model="formInline.region" placeholder="请选择">
          <el-option label="代办" value="1"></el-option>
          <el-option label="进行" value="2"></el-option>
          <el-option label="取消" value="3"></el-option>
          <el-option label="完成" value="4"></el-option>
        </el-select>
      </el-form-item>
      <!-- 查询按钮 -->
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
    // 按下回车查询
    enterFn() {
      console.log(this.formInline.user)
      this.$emit('enterFn', this.formInline.user)
    },
    // 点击查询
    onSubmit() {
      console.log(this.formInline.region)
      this.$emit('onQuery', this.formInline.region)
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
