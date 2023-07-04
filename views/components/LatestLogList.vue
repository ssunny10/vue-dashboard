<template>
  <a-card>
    <a-list
      item-layout="horizontal"
      class="latest-log"
      :data-source="latestLogData"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta>
            <template #avatar>
              <a-tag color="#f50"><exclamation-circle-outlined /> danger</a-tag>
              <span class="console-name">{{ item.consoleName }}</span>
            </template>
            <template #title>
              <a href="#"
                ><span class="title">{{ item.title }}</span></a
              >
            </template>
          </a-list-item-meta>
          <template #actions>
            {{ item.name }}
          </template>
        </a-list-item>
      </template>
    </a-list>
  </a-card>
</template>

<script lang="ts" setup>
interface latestLogDataItem {
  title: string;
  name: string;
  consoleName: string;
}

const latestLogData: latestLogDataItem[] = [
  {
    title: '해당 콘솔에서 발생한 주요 사항 설명',
    name: '김oo',
    consoleName: 'Console Name Console Name',
  },
  {
    title: '해당 콘솔에서 발생한 주요 사항 설명',
    name: '김ooo',
    consoleName: 'Console Name',
  },
  {
    title: '해당 콘솔에서 발생한 주요 사항 설명',
    name: '김oo',
    consoleName: 'Console Name',
  },
  {
    title:
      '해당 워크스페이스에서 발생한 주요 사항 설명 해당 워크스페이스에서 발생한 주요 사항 설명',
    name: '김ooo',
    consoleName: 'Console Name Console Name',
  },
];
</script>

<style lang="scss" scoped></style>
