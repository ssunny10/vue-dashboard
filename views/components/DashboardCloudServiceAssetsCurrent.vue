<template>
  <a-card
    title="클라우드 자산 현황"
    class="card-list-wrapper cloud-asset-current"
  >
    <a-card
      v-for="cloudAssetCurrentItem in props.cloudAssetCurrentData"
      :key="cloudAssetCurrentItem.product"
      :bordered="false"
    >
      <div class="product-title">
        <img :src="require(`@/assets/images/icon/logo/icon-${cloudAssetCurrentItem.product}.png`)"  alt="" />
        <p>{{ cloudAssetCurrentItem.product }}</p>
      </div>
      <div class="data-list-wrap">
        <ul class="data-list">
          <li
            class="item"
            v-for="listItem in cloudAssetCurrentItem.data"
            :key="listItem"
          >
            <span>{{ listItem }}</span>
          </li>
        </ul>
        <p class="text">Project / Provider</p>
      </div>
    </a-card>
  </a-card>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { DashboardCloudAssetsCurrentDataType } from '@/types/maestro/DashBoardDataType';
const props = defineProps({
  cloudAssetCurrentData: {
    type: Array as () => DashboardCloudAssetsCurrentDataType[],
    required: true,
  },
});
</script>
<style lang="scss" scoped></style>
