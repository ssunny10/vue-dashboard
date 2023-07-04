<template>
  <a-card class="chart-wrap bar-chart-wrap">
    <div class="chart-area">
      <span class="space"></span>
      <Bar :data="props.barData.data" :options="options" />
    </div>
  </a-card>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { BarDataType } from '@/types/ChartDataType';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const props = defineProps({
  barData: {
    type: Object as () => BarDataType,
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
        boxWidth: 9,
        color: '#000',
        usePointStyle: false,
        padding: 20,
      },
      position: 'bottom',
      align: 'center',
    },
  },
};
</script>
<style lang="scss" scoped></style>
