export type DashboardWorkspaceCurrentDataType = {
  name: string;
  currentNumber: number;
};

export type DashboardRankingDataType = {
  name: string;
  currentNumber: number;
};

export type DashboardCloudAssetsCurrentDataType = {
  product: string;
  data: unknown;
};

export type DashboardCloudServiceUserCurrentDataType = {
  name: string;
  productList: { name: string }[];
};

export type DashboardApplyServiceCurrentDataType = {
  statusWait: number;
  statusApproval: number;
  statusProgression: number;
  statusFailed: number;
  statusComplete: number;
  statusReject: number;
  applyServiceCurrenList: {
    name: string;
    status: string;
    updateDate: string;
  }[];
};

export type DashboardUpdateInfraResourceDataType = {
  name: string;
  updateNumber: string;
}