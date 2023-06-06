<template>
  <footer class="txt-light" :class="uiStage === 'Decided' ? 'mbg-green' : 'mbg-light'">
    <hr />
    <p class="foo-copyright">2023 ⓒ Copy Rights Reserved</p>
    <div class="foo-contacts">
      <a class="left" href="mailto:kjunha77@gmail.com" target="_blank">
        개발자 이메일: kjunha77@gmail.com
      </a>
      <a class="right" href="https://github.com/JunhaDex" target="_blank"> 깃헙 바로가기 </a>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useGroupStore } from '@/stores/group';

const groupStore = useGroupStore();
const uiStage = computed(() => groupStore.uiStage);
</script>
<style lang="scss" scoped>
footer {
  background-color: $primary;
  text-align: center;

  hr {
    margin-bottom: 5px;
  }
}

p {
  margin: 0;
}

.foo-contacts {
  display: flex;
  font-size: 0.7rem;
  justify-content: center;
  align-items: center;
  margin-top: 3px;

  a {
    cursor: pointer;
    text-decoration: none;
    color: $light;
  }

  *::after {
    content: '|';
    margin: 0 5px;
    cursor: default;
  }

  *:last-child::after {
    content: '';
  }
}
</style>
