<template>
  <main :class="uiStage === 'Decided' ? 'mbg-green' : 'mbg-light'">
    <h1 class="hl" :class="uiStage === 'Decided' ? 'txt-light' : ''">
      주일학교에 <br />
      참여할 준비 <br />
      되셨나요?
    </h1>
    <hr />
    <section v-if="uiStage === 'Decided'" class="proj-desc-sec f-cent">
      <article>
        반 배정이 완료되었습니다 <br />
        아래 반에 참석해주세요!
      </article>
      <article class="my-bann">
        <label>반 배정 정보</label>
        <div v-if="groupInfo && groupInfo.length" class="group-info-box">
          <p>{{ groupInfo }}</p>
        </div>
        <div v-else class="group-info-box err">
          <p>text_group_undecided</p>
          <button @click="resetStatus">text_reset_group</button>
        </div>
      </article>
    </section>
    <section v-else class="proj-desc-sec f-cent">
      <article>
        아래 버튼을 누르면 <br />
        참여할 반에 배정됩니다.
      </article>
      <article>
        <button class="action-btn" @click="clickRandBtn">참여하기</button>
      </article>
    </section>
  </main>
</template>
<script lang="ts" setup>
import { useGroupStore } from '@/stores/group';
import { computed } from 'vue';

const GROUP_ID = [
  '교사: 정준 | 강지예',
  '교사: 김미현 | 김영아',
  '교사: 김준하 | 김지연'
] as const;
const groupStore = useGroupStore();
const uiStage = computed(() => groupStore.uiStage);
const groupInfo = computed(() => groupStore.groupInfo);

function clickRandBtn() {
  const idx = randomize();

  groupStore.setGroupInfo(GROUP_ID[idx]);
}

function resetStatus(): void {
  // TODO: reset group store
}

function randomize(): number {
  const rand = Math.floor(Math.random() * 1000 + 1);
  return rand % GROUP_ID.length;
}
</script>
<style lang="scss" scoped>
.hl {
  font-size: 3rem;
  line-height: 1.5;
  margin: 0;
  color: $primary;
}

.f-cent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;

  article {
    margin-bottom: 2vh;
  }

  article:last-child {
    margin-bottom: 0;
  }
}

.proj-desc-sec {
  font-size: 1.3rem;
  margin: 8vh 0;
}

.action-btn {
  background-color: $primary;
  color: $light;
  border: none;
  border-radius: 50%;
  padding: 5px;
  font-size: 1.5rem;
  height: 130px;
  width: 130px;
  box-shadow: 0 2px 4px gray;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-btn:hover {
  filter: brightness(130%);
}

.action-btn:active {
  box-shadow: 0 0 2px gray;
  filter: brightness(130%);
  transform: translateY(2px);
}

.my-bann {
  background-color: $light;
  border-radius: 0.75rem;
  width: 100%;
  padding: 1.2rem 1rem;
  box-sizing: border-box;
  text-align: left;

  label {
    display: inline-block;
    color: $primary;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 7px;
    margin-left: 7px;
  }

  .group-info-box {
    background-color: #3a5c40;
    text-align: center;
    box-sizing: border-box;
    padding: 1px;
    border-radius: 0.75rem;
    box-shadow: 0 2px 4px gray;
    transition: all 0.2s ease;
  }

  .group-info-box:active {
    box-shadow: 0 0 2px gray;
    filter: brightness(130%);
    transform: translateY(2px);
  }
}
</style>
