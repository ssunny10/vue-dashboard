<template>
  <a-card title="요청 서비스 현황" class="list-wrapper apply-service-current">
    <div class="head">
      <ul class="area">
        <li class="item">
          <p class="title">
            <img src="@/assets/images/icon/status/icon-wait.svg" alt="" />
            <span>대기</span>
          </p>
          <p class="number">
            {{ props.applyServiceCurrentData.statusWait }}
          </p>
        </li>
        <li class="item">
          <p class="title">
            <img src="@/assets/images/icon/status/icon-approval.svg" alt="" />
            <span>승인</span>
          </p>
          <p class="number">
            {{ props.applyServiceCurrentData.statusApproval }}
          </p>
        </li>
        <li class="item">
          <p class="title">
            <img src="@/assets/images/icon/status/icon-progression.svg" alt="" />
            <span>진행</span>
          </p>
          <p class="number">
            {{ props.applyServiceCurrentData.statusProgression }}
          </p>
        </li>
        <li class="item">
          <p class="title">
            <img src="@/assets/images/icon/status/icon-failed.svg" alt="" />
            <span>실패</span>
          </p>
          <p class="number">
            {{ props.applyServiceCurrentData.statusFailed }}
          </p>
        </li>
        <li class="item">
          <p class="title">
            <img src="@/assets/images/icon/status/icon-complete.svg" alt="" />
            <span>완료</span>
          </p>
          <p class="number">
            {{ props.applyServiceCurrentData.statusComplete }}
          </p>
        </li>
        <li class="item">
          <p class="title">
            <img src="@/assets/images/icon/status/icon-reject.svg" alt="" />
            <span> 반려</span>
          </p>
          <p class="number">
            {{ props.applyServiceCurrentData.statusReject }}
          </p>
        </li>
      </ul>
    </div>
    <div class="list-wrapper">
      <ul>
        <li
          class="item"
          v-for="item in props.applyServiceCurrentData.applyServiceCurrenList"
          :key="item.name"
        >
          <span class="icon">
            <span v-if="item.status === 'wait'">
              <img src="@/assets/images/icon/status/icon-wait.svg" alt="" />
            </span>
            <span v-if="item.status === 'approval'">
              <img src="@/assets/images/icon/status/icon-approval.svg" alt="" />
            </span>
            <span v-if="item.status === 'progression'">
              <img
                src="@/assets/images/icon/status/icon-progression.svg"
                alt=""
              />
            </span>
            <span v-if="item.status === 'failed'">
              <img src="@/assets/images/icon/status/icon-failed.svg" alt="" />
            </span>
            <span v-if="item.status === 'complete'">
              <img src="@/assets/images/icon/status/icon-complete.svg" alt="" />
            </span>
            <span v-if="item.status === 'reject'">
              <img src="@/assets/images/icon/status/icon-reject.svg" alt="" />
            </span>
          </span>
          <p class="title">
            {{ item.name }}
          </p>
          <p class="date">{{ item.updateDate }}</p>
        </li>
      </ul>
    </div>
  </a-card>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { DashboardApplyServiceCurrentDataType } from '@/types/maestro/DashBoardDataType';
const props = defineProps({
  applyServiceCurrentData: {
    type: Object as () => DashboardApplyServiceCurrentDataType,
    required: true,
  },
});
</script>
<style lang="scss" scoped></style>
