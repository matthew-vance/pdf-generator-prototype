import { ref } from "vue";
import { defineStore } from "pinia";

type Sidebar = {
  isOpen: boolean;
};

export const useUiStore = defineStore("ui", () => {
  const leftSidebar = ref<Sidebar>({
    isOpen: true,
  });

  function toggleLeftSidebar() {
    leftSidebar.value.isOpen = !leftSidebar.value.isOpen;
  }

  const rightSidebar = ref<Sidebar>({
    isOpen: true,
  });

  function toggleRightSidebar() {
    rightSidebar.value.isOpen = !rightSidebar.value.isOpen;
  }

  return {
    leftSidebar,
    toggleLeftSidebar,
    rightSidebar,
    toggleRightSidebar,
  };
});
