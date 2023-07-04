<template>
  <a-card
    title="클라우드 서비스 이용 현황"
    class="card-list-wrapper cloud-service-user-current"
  >
    <a-card
      v-for="item in props.cloudServiceUserCurrentData"
      :key="item.name"
      :bordered="false"
    >
      <div class="title">
        <p>{{ item.name }}</p>
      </div>
      <ul class="product-list">
        <li class="item" v-for="item in item.productList" :key="item.name">
          <img :src="require(`@/assets/images/icon/logo/icon-${item.name}.png`)"  alt="" />
        </li>
      </ul>
    </a-card>
  </a-card>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { DashboardCloudServiceUserCurrentDataType } from '@/types/maestro/DashBoardDataType';
const props = defineProps({
  cloudServiceUserCurrentData: {
    type: Array as () => DashboardCloudServiceUserCurrentDataType[],
    required: true,
  },
});
</script>
<style lang="scss" scoped></style>
