<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useColorMode } from "@vueuse/core";

const TitleBar = defineAsyncComponent(
  () => import("@/components/TitleBar.vue"),
);
const FileManagementPanel = defineAsyncComponent(
  () => import("@/components/FileManagementPanel.vue"),
);
const PDFViewPanel = defineAsyncComponent(
  () => import("@/components/PDFViewPanel.vue"),
);
const BottomBar = defineAsyncComponent(
  () => import("@/components/BottomBar.vue"),
);

useColorMode();
</script>

<template>
  <div class="h-screen">
    <main
      class="h-full grid grid-cols-layout grid-rows-layout overflow-y-hidden overflow-x-hidden bg-zinc-900"
    >
      <TitleBar class="pl-20 col-span-full border-b bg-background" />
      <FileManagementPanel class="border-r bg-background" />
      <section class="w-full"></section>
      <PDFViewPanel class="border-l bg-background" />
      <BottomBar class="flex col-span-full border-t bg-background" />
    </main>
  </div>
</template>

<style lang="css" scoped>
.rightSidebar-enter-active,
.rightSidebar-leave-active,
.leftSidebar-enter-active,
.leftSidebar-leave-active {
  transition: transform 0.3s ease-in-out;
}

.rightSidebar-enter-from,
.rightSidebar-leave-to {
  transform: translateX(384px);
}

.leftSidebar-enter-from,
.leftSidebar-leave-to {
  transform: translateX(-240px);
}
</style>
