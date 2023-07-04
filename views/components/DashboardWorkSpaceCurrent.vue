<template>
  <a-card title="워크스페이스 현황" class="card-list-wrapper workspace-current">
    <a-card
      v-for="item in props.workspaceCurrentList"
      :key="item.name"
      :bordered="false"
    >
      <p class="title">{{ item.name }}</p>
      <p class="number">
        <span>{{ item.currentNumber }}</span>
        <folder-open-filled />
      </p>
    </a-card>
  </a-card>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { FolderOpenFilled } from '@ant-design/icons-vue';
import { DashboardWorkspaceCurrentDataType } from '@/types/maestro/DashBoardDataType';
const props = defineProps({
  workspaceCurrentList: {
    type: Array as () => DashboardWorkspaceCurrentDataType[],
    required: true,
  },
});
</script>
<style lang="scss" scoped></style>
