<template>
  <a-card title="신청 서비스 Top5" class="card-list-wrapper ranking-list">
    <a-card
      v-for="item in props.rankingData"
      :key="item.name"
      :bordered="false"
    >
      <p class="title">{{ item.name }}</p>
      <p class="number">
        <span>{{ item.currentNumber }}</span>
        <img src="@/assets/images/icon/icon-check.svg" alt="" />
      </p>
    </a-card>
  </a-card>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { DashboardRankingDataType } from '@/types/maestro/DashBoardDataType';
const props = defineProps({
  rankingData: {
    type: Array as () => DashboardRankingDataType[],
    required: true,
  },
});
</script>
<style lang="scss" scoped></style>
