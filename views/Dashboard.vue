<template>
  <div class="contents dashboard-wrapper">
    <a-space class="space-block" direction="vertical" :size="16">
      <a-row :gutter="16" class="dashboard-container">
        <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24" class="col">
          <DashboardCloudServiceAssetsCurrent
            :cloud-asset-current-data="cloudAssetsCurrentData"
          />
        </a-col>
        <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24" class="col">
          <DashboardRankingList :rankingData="rankingData" />
        </a-col>
        <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24" class="col">
          <DashboardApplyServiceCurrent
            :apply-service-current-data="applyServiceCurrentData"
          />
        </a-col>
      </a-row>
      <a-row :gutter="16" class="dashboard-container">
        <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24" class="col">
          <a-card class="data-container" title="2Q 클라우드 서비스 사용률">
            <LineaChart :line-data="lineProviderData" />
          </a-card>
        </a-col>
        <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24" class="col">
          <a-card title="업데이트 된 리소스" class="update-resource-table">
            <DashboardUpdateInfraResource :infra-resource-current-list="updateInfraResourceList" />
          </a-card>
        </a-col>
      </a-row>
      <a-row :gutter="16" class="dashboard-container">
        <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24" class="col">
          <a-card class="data-container" title="월간 비용 현황">
            <a-table
              :columns="monthlyBillingColumns"
              :data-source="monthlyBillingData"
              :pagination="false"
              :bordered="false"
              class="small-table"
            >
              <template #bodyCell="{ column, text, record }">
                <template v-if="column.dataIndex === 'month'">
                  {{ text }}₩
                </template>
                <template v-if="column.dataIndex === 'rate'">
                  <template v-if="record.rateType === 'up'">
                    <span class="rate up">{{ text }}↗</span></template
                  >
                  <template v-if="record.rateType === 'down'">
                    <span class="rate down">{{ text }}↘</span></template
                  >
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>
        <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24" class="col">
          <DashboardCloudServiceUserCurrent
            :cloud-service-user-current-data="cloudServiceUserCurrentData"
          />
        </a-col>
        <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24" class="col">
          <DashboardWorkSpaceCurrent
            :workspaceCurrentList="workspaceCurrentList"
          />
        </a-col>
        <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24" class="col">
          <a-card class="data-container" title="사용자 현황">
            <a-table
              :columns="userCurrentColumns"
              :data-source="userCurrentData"
              :pagination="false"
              :bordered="false"
              class="small-table"
            >
              <template #bodyCell="{ column, text }">
                <template
                  v-if="
                    column.dataIndex === 'guest' || column.dataIndex === 'user'
                  "
                >
                  {{ text }}명
                </template>
              </template>
            </a-table>
          </a-card>
        </a-col>
      </a-row>
    </a-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import LineaChart from '@/components/LineaChart.vue';
import ProcuctUseBarChart from '@/views/components/ProcuctUseBarChart.vue';
import { LineDataType, BarDataType } from '@/types/ChartDataType';
import type { TableColumnType, SelectProps } from 'ant-design-vue';
import DashboardWorkSpaceCurrent from '@/views/components/DashboardWorkSpaceCurrent.vue';
import {
  DashboardApplyServiceCurrentDataType,
  DashboardCloudAssetsCurrentDataType,
  DashboardCloudServiceUserCurrentDataType,
  DashboardRankingDataType, DashboardUpdateInfraResourceDataType,
  DashboardWorkspaceCurrentDataType
} from '@/types/DashBoardDataType';
import DashboardCloudServiceAssetsCurrent from '@/views/components/DashboardCloudServiceAssetsCurrent.vue';
import DashboardRankingList from '@/views/components/DashboardRankingList.vue';
import DashboardCloudServiceUserCurrent from '@/views/components/DashboardCloudServiceUserCurrent.vue';
import DashboardApplyServiceCurrent from '@/views/components/DashboardApplyServiceCurrent.vue';
import DashboardUpdateInfraResource from '@/views/components/DashboardUpdateInfraResource.vue';
import BarStackedHorizontalChart from '@/components/BarStackedHorizontalChart.vue';

const lineProviderData = ref<LineDataType>({
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [40, 39, 10, 40, 39, 80, 40],
        label: 'America',
        borderColor: '#FF7347',
        fill: false,
        pointBorderWidth: 0,
        borderWidth: 1,
      },
      {
        data: [50, 80, 20, 100, 29, 100, 20],
        label: 'Europe',
        borderColor: '#2F38CF',
        fill: false,
        pointBorderWidth: 0,
        borderWidth: 1,
      },
    ],
  },
});

const BarChartData1 = ref<BarDataType>({
  data: {
    labels: ['VM', 'Subnet', 'Floating IP', 'Load Balancer', 'Volume'],
    datasets: [
      {
        label: 'Provider1',
        backgroundColor: '#4F6EBB',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      },
      {
        data: [50, 80, 20, 100, 29, 100, 20],
        label: 'Provider2',
        backgroundColor: '#A8C35B',
        // borderColor: '#A8C35B',
        // fill: false,
        // pointBorderWidth: 0,
        // borderWidth: 1,
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      },
      {
        label: 'Provider3',
        backgroundColor: '#FFC75A',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      },
    ],
  },
});

const BarChartData2 = ref<BarDataType>({
  data: {
    labels: ['VM', 'Subnet', 'Datastore'],
    datasets: [
      {
        label: 'DataCenter 1',
        backgroundColor: '#4F6EBB',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'DataCenter 2',
        backgroundColor: '#A8C35B',
        // borderColor: '#A8C35B',
        // fill: false,
        // pointBorderWidth: 0,
        // borderWidth: 1,
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      },
      {
        label: 'DataCenter 3',
        backgroundColor: '#FFC75A',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      },
    ],
  },
});

interface userCurrentDataType {
  organization?: string;
  guest?: string;
  user?: string;
}

const userCurrentColumns: TableColumnType<userCurrentDataType>[] = [
  {
    title: '조직',
    dataIndex: 'organization',
    width: '40%',
  },
  {
    title: 'Guest',
    dataIndex: 'guest',
    width: '30%',
    align: 'right',
  },
  {
    title: 'User',
    dataIndex: 'user',
    width: '30%',
    align: 'right',
  },
];

const userCurrentData: userCurrentDataType[] = [
  {
    organization: '조직명',
    guest: '28',
    user: '1,1218',
  },
  {
    organization: '조직명조직명',
    guest: '28',
    user: '118',
  },
  {
    organization: '조직명조직명',
    guest: '218',
    user: '118',
  },
  {
    organization: '조직명',
    guest: '28',
    user: '1,1218',
  },
  {
    organization: '조직명조직명',
    guest: '28',
    user: '118',
  },
  {
    organization: '조직명조직명',
    guest: '218',
    user: '118',
  },
  {
    organization: '조직명조직명',
    guest: '28',
    user: '118',
  },
  {
    organization: '조직명조직명',
    guest: '218',
    user: '118',
  },
];

const workspaceCurrentList: DashboardWorkspaceCurrentDataType[] = [
  {
    name: '조직입니당당당',
    currentNumber: 223,
  },
  {
    name: '조직입니당당당',
    currentNumber: 223,
  },
  {
    name: '조직입니당당당',
    currentNumber: 23,
  },
  {
    name: '조직입니당당당',
    currentNumber: 223,
  },
  {
    name: '조직입니당당당',
    currentNumber: 23,
  },
];

const cloudAssetsCurrentData: DashboardCloudAssetsCurrentDataType[] = [
  {
    product: 'aws',
    data: [11],
  },
];

const rankingData: DashboardRankingDataType[] = [
  {
    name: 'Tomcat',
    currentNumber: 99,
  },
];

const applyServiceCurrentData: DashboardApplyServiceCurrentDataType = {
  statusWait: 2,
  statusApproval: 88,
  statusProgression: 99,
  statusFailed: 3,
  statusComplete: 7,
  statusReject: 22,
  applyServiceCurrenList: [
    {
      name: 'Input Field Text - Active',
      status: 'wait',
      updateDate: '2023-06-01',
    },
  ],
};

const cloudServiceUserCurrentData: DashboardCloudServiceUserCurrentDataType[] =
  [
    {
      name: '조직입니다',
      productList: [
        {
          name: 'aws',
        },
      ],
    },
  ];

interface monthlyBillingDataType {
  organization?: string;
  month?: string;
  rate?: string;
  rateType?: string;
}

const monthlyBillingColumns: TableColumnType<monthlyBillingDataType>[] = [
  {
    title: '조직',
    dataIndex: 'organization',
    width: '40%',
  },
  {
    title: '이번 달',
    dataIndex: 'month',
    width: '40%',
    align: 'right',
  },
  {
    title: '증감율',
    dataIndex: 'rate',
    width: '20%',
    align: 'right',
  },
];

const monthlyBillingData: monthlyBillingDataType[] = [
  {
    organization: '조직입니당',
    month: '11,450,000',
    rate: '33.5%',
    rateType: 'up',
  },
  {
    organization: '조직입니당',
    month: '11,450,000',
    rate: '3.5%',
    rateType: 'down',
  },
];


const updateInfraResourceList: DashboardUpdateInfraResourceDataType[] = [
  {
    name: '인스턴스',
    updateNumber: '13,200',
  },
];
</script>

<style lang="scss" scoped></style>
