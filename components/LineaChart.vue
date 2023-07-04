<template>
  <a-card class="chart-wrap" :bordered="false">
    <div class="chart-area">
      <Line :data="props.lineData.data" :options="options" />
    </div>
  </a-card>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { LineDataType } from '@/types/ChartDataType';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const props = defineProps({
  lineData: {
    type: Object as () => LineDataType,
    required: true,
  },
});

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
      labels: {
        color: '#000',
        usePointStyle: true,
        padding: 20,
      },
      position: 'bottom',
      align: 'center',
    },
  },
};
</script>
<style lang="scss" scoped></style>
