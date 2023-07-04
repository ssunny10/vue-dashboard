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
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ChartDataLabels);
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const props = defineProps({
  barData: {
    type: Object as () => BarDataType,
    required: true,
  },
});

const options = {
  responsive: true,
  maintainAspectRatio: false, // 차트 width, height 크기조절
  maxBarThickness: 50, // 두꼐 옵션
  indexAxis: 'y', // 수평 수직 옵션
  scales: {
    x: {
      stacked: true,
      ticks: {
        // stepSize: 4, //눈금들이 얼마나 간격을 두고 표시될지를 설정
      },
      grid: {
        display: false, // 차트 안에 가로선 표시 여부
      },
    },
    y: {
      stacked: true,
      ticks: {
        stepSize: 2,
      },
    },
  },
  plugins: {
    datalabels: {
      color: 'black',
      display: true,
      formatter: (value: any, ctx: any) => {
        return value;
      },
    },
    legend: {
      display: true,
      position: 'top',
      align: 'center',
    },
  },
};
</script>
<style lang="scss" scoped></style>
