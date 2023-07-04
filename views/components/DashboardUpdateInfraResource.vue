<template>
  <a-card class="infra-resource-wrapper" :bordered="false">
    <ul>
      <li
        v-for="infraResourceCurrentItem in props.infraResourceCurrentList"
        :key="infraResourceCurrentItem.name"
      >
        <div class="icon">
          <strong v-if="infraResourceCurrentItem.name === '인스턴스'">
            <img src="@/assets/images/icon/icon-instance.svg" alt="" />
          </strong>
          <strong v-if="infraResourceCurrentItem.name === '볼륨'">
            <img src="@/assets/images/icon/icon-network.svg" alt="" />
          </strong>
          <strong v-if="infraResourceCurrentItem.name === '네트워크'">
            <img src="@/assets/images/icon/icon-volume.svg" alt="" />
          </strong>
          <strong v-if="infraResourceCurrentItem.name === '라우터'">
            <img src="@/assets/images/icon/icon-router.svg" alt="" />
          </strong>
        </div>
        <div class="text">
          <p class="title">
            <span>{{ infraResourceCurrentItem.name }}</span>
          </p>
          <span class="number">
            <span>{{ infraResourceCurrentItem.updateNumber }}</span>
          </span>
        </div>
      </li>
    </ul>
  </a-card>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { DashboardUpdateInfraResourceDataType } from '@/types/maestro/DashBoardDataType';
const props = defineProps({
  infraResourceCurrentList: {
    type: Array as () => DashboardUpdateInfraResourceDataType[],
    required: true,
  },
});
</script>
<style lang="scss" scoped></style>
