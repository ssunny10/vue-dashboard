<template>
  <div class="contents dashboard-wrapper maestro-dashboard-wrapper">
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
            <a-tabs v-model:activeKey="updateTabActiveKey">
              <a-tab-pane key="1" tab="Contrabass">
                <DashboardUpdateInfraResource
                  :infra-resource-current-list="updateInfraResourceList"
                />
                <a-table
                  :columns="updateResourceColumns"
                  :data-source="updateResourceData"
                  :pagination="false"
                  :bordered="false"
                >
                  <template #bodyCell="{ column, text, record }">
                    <template v-if="column.dataIndex === 'subject'">
                      <template v-if="record.statusType === 'create'">
                        <span class="status create"
                          ><a-tag color="success">생성</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'stop'">
                        <span class="status stop"
                          ><a-tag color="warning">중지</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'delete'">
                        <span class="status delete"
                          ><a-tag color="error">중지</a-tag>{{ text }}</span
                        ></template
                      >
                    </template>
                  </template>
                </a-table>
              </a-tab-pane>
              <a-tab-pane key="2" tab="Doublebass">
                <DashboardUpdateInfraResource
                  :infra-resource-current-list="updateInfraResourceList"
                />
                <a-table
                  :columns="updateResourceColumns"
                  :data-source="updateResourceData"
                  :pagination="false"
                  :bordered="false"
                >
                  <template #bodyCell="{ column, text, record }">
                    <template v-if="column.dataIndex === 'subject'">
                      <template v-if="record.statusType === 'create'">
                        <span class="status create"
                          ><a-tag color="success">생성</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'stop'">
                        <span class="status stop"
                          ><a-tag color="warning">중지</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'delete'">
                        <span class="status delete"
                          ><a-tag color="error">중지</a-tag>{{ text }}</span
                        ></template
                      >
                    </template>
                  </template>
                </a-table>
              </a-tab-pane>
              <a-tab-pane key="3" tab="Viola">
                <DashboardUpdateInfraResource
                  :infra-resource-current-list="updateInfraResourceList"
                />
                <a-table
                  :columns="updateResourceColumns"
                  :data-source="updateResourceData"
                  :pagination="false"
                  :bordered="false"
                >
                  <template #bodyCell="{ column, text, record }">
                    <template v-if="column.dataIndex === 'subject'">
                      <template v-if="record.statusType === 'create'">
                        <span class="status create"
                          ><a-tag color="success">생성</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'stop'">
                        <span class="status stop"
                          ><a-tag color="warning">중지</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'delete'">
                        <span class="status delete"
                          ><a-tag color="error">중지</a-tag>{{ text }}</span
                        ></template
                      >
                    </template>
                  </template>
                </a-table>
              </a-tab-pane>
              <a-tab-pane key="4" tab="AWS">
                <DashboardUpdateInfraResource
                  :infra-resource-current-list="updateInfraResourceList"
                />
                <a-table
                  :columns="updateResourceColumns"
                  :data-source="updateResourceData"
                  :pagination="false"
                  :bordered="false"
                >
                  <template #bodyCell="{ column, text, record }">
                    <template v-if="column.dataIndex === 'subject'">
                      <template v-if="record.statusType === 'create'">
                        <span class="status create"
                          ><a-tag color="success">생성</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'stop'">
                        <span class="status stop"
                          ><a-tag color="warning">중지</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'delete'">
                        <span class="status delete"
                          ><a-tag color="error">삭제</a-tag>{{ text }}</span
                        ></template
                      >
                    </template>
                  </template>
                </a-table>
              </a-tab-pane>
              <a-tab-pane key="6" tab="Kubernetes">
                <DashboardUpdateInfraResource
                  :infra-resource-current-list="updateInfraResourceList"
                />
                <a-table
                  :columns="updateResourceColumns"
                  :data-source="updateResourceData"
                  :pagination="false"
                  :bordered="false"
                >
                  <template #bodyCell="{ column, text, record }">
                    <template v-if="column.dataIndex === 'subject'">
                      <template v-if="record.statusType === 'create'">
                        <span class="status create"
                          ><a-tag color="success">생성</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'stop'">
                        <span class="status stop"
                          ><a-tag color="warning">중지</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'delete'">
                        <span class="status delete"
                          ><a-tag color="error">중지</a-tag>{{ text }}</span
                        ></template
                      >
                    </template>
                  </template>
                </a-table>
              </a-tab-pane>
            </a-tabs>
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
      <a-row :gutter="16" class="dashboard-container">
        <a-col :span="12">
          <a-card title="Openstack">
            <ProcuctUseBarChart :bar-data="BarOpenstackChartData" />
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="VMware">
<!--            <a-select-->
<!--              v-model:value="vmWareListValue"-->
<!--              label-in-value-->
<!--              style="width: 100%"-->
<!--              :options="vmWareListOptions"-->
<!--            ></a-select>-->
            <ProcuctUseBarChart :bar-data="BarVmWareChartData" />
          </a-card>
        </a-col>
      </a-row>
      <a-row :gutter="16" class="dashboard-container">
        <a-col :span="12">
          <a-card title="Viola">
<!--            <a-select-->
<!--              v-model:value="violaListValue"-->
<!--              label-in-value-->
<!--              style="width: 100%"-->
<!--              :options="violaListOptions"-->
<!--            ></a-select>-->
            <ProcuctUseBarChart :bar-data="BarViolaChartData" />
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="AWS">
<!--            <a-select-->
<!--              v-model:value="awsListValue"-->
<!--              label-in-value-->
<!--              style="width: 100%"-->
<!--              :options="awsListOptions"-->
<!--            ></a-select>-->
            <ProcuctUseBarChart :bar-data="awsChartData" />
          </a-card>
        </a-col>
      </a-row>
      <a-row class="dashboard-container">
        <a-col :span="24">
          <a-card title="최근 작업 현황" class="latest-working-table">
            <a-tabs v-model:activeKey="tabActiveKey">
              <a-tab-pane key="1" tab="전체보기">
                <a-table
                  :columns="latestWorkingColumns"
                  :data-source="latestWorkingData"
                  :pagination="false"
                  :bordered="false"
                >
                  <template #bodyCell="{ column, text, record }">
                    <template v-if="column.dataIndex === 'subject'">
                      <template v-if="record.statusType === 'create'">
                        <span class="status create"
                          ><a-tag color="success">생성</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'stop'">
                        <span class="status stop"
                          ><a-tag color="warning">중지</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'delete'">
                        <span class="status delete"
                          ><a-tag color="error">중지</a-tag>{{ text }}</span
                        ></template
                      >
                    </template>
                  </template>
                </a-table>
              </a-tab-pane>
              <a-tab-pane key="2" tab="Contrabass">
                <a-table
                  :columns="latestWorkingColumns"
                  :data-source="latestWorkingData"
                  :pagination="false"
                  :bordered="false"
                >
                  <template #bodyCell="{ column, text, record }">
                    <template v-if="column.dataIndex === 'subject'">
                      <template v-if="record.statusType === 'create'">
                        <span class="status create"
                          ><a-tag color="success">생성</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'stop'">
                        <span class="status stop"
                          ><a-tag color="warning">중지</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'delete'">
                        <span class="status delete"
                          ><a-tag color="error">중지</a-tag>{{ text }}</span
                        ></template
                      >
                    </template>
                  </template>
                </a-table>
              </a-tab-pane>
              <a-tab-pane key="3" tab="Doublebass">
                <a-table
                  :columns="latestWorkingColumns"
                  :data-source="latestWorkingData"
                  :pagination="false"
                  :bordered="false"
                >
                  <template #bodyCell="{ column, text, record }">
                    <template v-if="column.dataIndex === 'subject'">
                      <template v-if="record.statusType === 'create'">
                        <span class="status create"
                          ><a-tag color="success">생성</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'stop'">
                        <span class="status stop"
                          ><a-tag color="warning">중지</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'delete'">
                        <span class="status delete"
                          ><a-tag color="error">중지</a-tag>{{ text }}</span
                        ></template
                      >
                    </template>
                  </template>
                </a-table>
              </a-tab-pane>
              <a-tab-pane key="4" tab="Viola">
                <a-table
                  :columns="latestWorkingColumns"
                  :data-source="latestWorkingData"
                  :pagination="false"
                  :bordered="false"
                >
                  <template #bodyCell="{ column, text, record }">
                    <template v-if="column.dataIndex === 'subject'">
                      <template v-if="record.statusType === 'create'">
                        <span class="status create"
                          ><a-tag color="success">생성</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'stop'">
                        <span class="status stop"
                          ><a-tag color="warning">중지</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'delete'">
                        <span class="status delete"
                          ><a-tag color="error">중지</a-tag>{{ text }}</span
                        ></template
                      >
                    </template>
                  </template>
                </a-table>
              </a-tab-pane>
              <a-tab-pane key="5" tab="AWS">
                <a-table
                  :columns="latestWorkingColumns"
                  :data-source="latestWorkingData"
                  :pagination="false"
                  :bordered="false"
                >
                  <template #bodyCell="{ column, text, record }">
                    <template v-if="column.dataIndex === 'subject'">
                      <template v-if="record.statusType === 'create'">
                        <span class="status create"
                          ><a-tag color="success">생성</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'stop'">
                        <span class="status stop"
                          ><a-tag color="warning">중지</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'delete'">
                        <span class="status delete"
                          ><a-tag color="error">삭제</a-tag>{{ text }}</span
                        ></template
                      >
                    </template>
                  </template>
                </a-table>
              </a-tab-pane>
              <a-tab-pane key="6" tab="Kubernetes">
                <a-table
                  :columns="latestWorkingColumns"
                  :data-source="latestWorkingData"
                  :pagination="false"
                  :bordered="false"
                >
                  <template #bodyCell="{ column, text, record }">
                    <template v-if="column.dataIndex === 'subject'">
                      <template v-if="record.statusType === 'create'">
                        <span class="status create"
                          ><a-tag color="success">생성</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'stop'">
                        <span class="status stop"
                          ><a-tag color="warning">중지</a-tag>{{ text }}</span
                        ></template
                      >
                      <template v-if="record.statusType === 'delete'">
                        <span class="status delete"
                          ><a-tag color="error">중지</a-tag>{{ text }}</span
                        ></template
                      >
                    </template>
                  </template>
                </a-table>
              </a-tab-pane>
            </a-tabs>
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

const BarOrganizationResourceUseChartData = {
  data: {
    labels: ['instance', 'network', 'volume', 'Pod'],
    datasets: [
      {
        label: '조직 1',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#4F6EBB',
      },
      {
        label: '조직 2',
        data: [7, 11, 5, 8, 3, 7],
        backgroundColor: '#ABC0EE',
      },
      {
        label: '조직 3',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#E9848A',
      },
      {
        label: '조직 4',
        data: [7, 11, 5, 8, 3, 7],
        backgroundColor: '#FFC75A ',
      },
      {
        label: '조직 5',
        data: [7, 11, 5, 8, 3, 7],
        backgroundColor: '#A8C35B',
      },
      {
        label: '조직 6',
        data: [7, 11, 5, 8, 3, 7],
        backgroundColor: '#6C948A',
      },
      {
        label: '조직 7',
        data: [7, 11, 5, 8, 3, 7],
        backgroundColor: '#9DD7C9',
      },
    ],
  }
};

const BarOpenstackChartData = ref<BarDataType>({
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

const BarVmWareChartData = ref<BarDataType>({
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

const BarViolaChartData = ref<BarDataType>({
  data: {
    labels: ['Pod', 'Service', 'Ingress', 'Node'],
    datasets: [
      {
        label: 'Cluster 1',
        backgroundColor: '#4F6EBB',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      },
      {
        data: [50, 80, 20, 100, 29, 100, 20],
        label: 'Cluster 2',
        backgroundColor: '#A8C35B',
        // borderColor: '#A8C35B',
        // fill: false,
        // pointBorderWidth: 0,
        // borderWidth: 1,
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      },
      {
        label: 'Cluster 3',
        backgroundColor: '#FFC75A',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      },
    ],
  },
});

const awsChartData = ref<BarDataType>({
  data: {
    labels: ['EC2', 'EBS', 'S3', 'IAM', 'VPC', 'EKS'],
    datasets: [
      {
        label: 'Account 1',
        backgroundColor: '#4F6EBB',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      },
      {
        data: [50, 80, 20, 100, 29, 100, 20],
        label: 'Account 2',
        backgroundColor: '#A8C35B',
        // borderColor: '#A8C35B',
        // fill: false,
        // pointBorderWidth: 0,
        // borderWidth: 1,
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      },
      {
        label: 'Account 3',
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
  {
    product: 'kubernetes',
    data: [11, 33],
  },
  {
    product: 'openshift',
    data: [22, 0],
  },
  {
    product: 'openstack',
    data: [11, 66],
  },
  {
    product: 'vmware',
    data: [44, 11],
  },
];

const rankingData: DashboardRankingDataType[] = [
  {
    name: 'Tomcat',
    currentNumber: 99,
  },
  {
    name: 'NGINX',
    currentNumber: 86,
  },
  {
    name: 'Tomcat',
    currentNumber: 45,
  },
  {
    name: 'NGINX',
    currentNumber: 223,
  },
  {
    name: 'NGINX',
    currentNumber: 8,
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
    {
      name: 'Input Field Text - Active',
      status: 'approval',
      updateDate: '2023-06-01',
    },
    {
      name: 'Input Field Text - Active',
      status: 'progression',
      updateDate: '2023-06-01',
    },
    {
      name: 'Input Field Text - Active',
      status: 'failed',
      updateDate: '2023-06-01',
    },
    {
      name: 'Input Field Text - Active',
      status: 'complete',
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
        {
          name: 'kubernetes',
        },
        {
          name: 'openshift',
        },
        {
          name: 'openstack',
        },
        {
          name: 'vmware',
        },
      ],
    },
    {
      name: '조직입니당당당',
      productList: [
        {
          name: 'aws',
        },
        {
          name: 'kubernetes',
        },
        {
          name: 'openstack',
        },
        {
          name: 'vmware',
        },
      ],
    },
    {
      name: '조직입니당당당',
      productList: [
        {
          name: 'aws',
        },
        {
          name: 'kubernetes',
        },
        {
          name: 'openstack',
        },
      ],
    },
    {
      name: '조직입니당당당',
      productList: [
        {
          name: 'aws',
        },
      ],
    },
    {
      name: '조직입니당당당',
      productList: [
        {
          name: 'aws',
        },
        {
          name: 'kubernetes',
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
  {
    organization: '조직입니당',
    month: '11,450,000',
    rate: '33.5%',
    rateType: 'up',
  },
  {
    organization: '조직입니당조직입니당조직입니당',
    month: '11,450,000',
    rate: '3.5%',
    rateType: 'down',
  },
  {
    organization: '조직입니당',
    month: '450,000',
    rate: '33.5%',
    rateType: 'up',
  },
  {
    organization: '조직입니당',
    month: '11,450,000',
    rate: '3.5%',
    rateType: 'down',
  },
  {
    organization: '조직입니당',
    month: '11,450,000',
    rate: '33.5%',
    rateType: 'up',
  },
  {
    organization: '조직입니당조직입니당조직입니당',
    month: '11,450,000',
    rate: '3.5%',
    rateType: 'down',
  },
];

interface latestWorkingDataType {
  subject?: string;
  userName?: string;
  updateDate?: string;
  statusType?: string;
}

const latestWorkingColumns: TableColumnType<latestWorkingDataType>[] = [
  {
    title: '제목',
    dataIndex: 'subject',
  },
  {
    title: '이름',
    dataIndex: 'userName',
    width: '200px',
    align: 'center',
  },
  {
    title: '날짜',
    dataIndex: 'updateDate',
    width: '200px',
    align: 'center',
  },
];

const latestWorkingData: latestWorkingDataType[] = [
  {
    subject: 'Input Field Text ',
    userName: '한희연',
    updateDate: '2023-06-01 21:12:12',
    statusType: 'create',
  },
  {
    subject: 'Input Field Text ',
    userName: '한희연',
    updateDate: '2023-06-01 21:12:12',
    statusType: 'stop',
  },
  {
    subject: 'Input Field Text ',
    userName: '한희연',
    updateDate: '2023-06-01 21:12:12',
    statusType: 'delete',
  },
  {
    subject: 'Input Field Text ',
    userName: '한희연',
    updateDate: '2023-06-01 21:12:12',
    statusType: 'create',
  },
  {
    subject: 'Input Field Text ',
    userName: '한희연',
    updateDate: '2023-06-01 21:12:12',
    statusType: 'stop',
  },
  {
    subject: 'Input Field Text ',
    userName: '한희연',
    updateDate: '2023-06-01 21:12:12',
    statusType: 'delete',
  },
];

const tabActiveKey = ref('1');
const updateTabActiveKey = ref('1');
interface updateResourceDataType {
  subject?: string;
  updateDate?: string;
  statusType?: string;
}

const updateResourceColumns: TableColumnType<updateResourceDataType>[] = [
  {
    title: '제목',
    dataIndex: 'subject',
  },
  {
    title: '날짜',
    dataIndex: 'updateDate',
    width: '150px',
    align: 'center',
  },
];

const updateResourceData: latestWorkingDataType[] = [
  {
    subject: 'Input Field Text ',
    updateDate: '2023-06-01',
    statusType: 'create',
  },
  {
    subject: 'Input Field Text ',
    updateDate: '2023-06-01',
    statusType: 'stop',
  },
  {
    subject: 'Input Field Text ',
    updateDate: '2023-06-01',
    statusType: 'delete',
  },
  {
    subject: 'Input Field Text ',
    updateDate: '2023-06-01',
    statusType: 'create',
  },
];

const updateInfraResourceList: DashboardUpdateInfraResourceDataType[] = [
  {
    name: '인스턴스',
    updateNumber: '13,200',
  },
  {
    name: '볼륨',
    updateNumber: '113,200',
  },
  {
    name: '네트워크',
    updateNumber: '113,200',
  },
  {
    name: '라우터',
    updateNumber: '13,200',
  },
];
</script>

<style lang="scss" scoped></style>
