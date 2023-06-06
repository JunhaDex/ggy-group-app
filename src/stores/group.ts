import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UIStage } from '@/types'

export const setupGroupStore = () => {
  const groupInfo = ref<string>()
  const uiStage = ref<UIStage>('Undecided')

  function setGroupInfo(name: string) {
    groupInfo.value = name
    uiStage.value = 'Decided'
  }

  return {
    groupInfo,
    uiStage,
    setGroupInfo
  }
}

// Persist (groupInfo, uiStage)
export const useGroupStore = defineStore('group', setupGroupStore)
