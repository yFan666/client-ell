<template>
  <el-container class="layout-container">
    <el-header class="header">
      Tom
    </el-header>
    <el-container class="main-container">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><message /></el-icon>Navigator One
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>Option4</template>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <el-scrollbar>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'

</script>

<style lang="scss" scoped>
.layout-container {
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  .header {
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #cccccc;
  }

  .main-container {
    height: calc(100% - 50px);
    margin: 10px 30px;
    border-radius: 10px;
    background: #cccccc;
  }
}
</style>
