<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const TitleBar = defineAsyncComponent(
  () => import("@/components/TitleBar.vue"),
);
import FileManagementPanel from "@/components/FileManagementPanel.vue";
import PDFViewPanel from "@/components/PDFViewPanel.vue";
import BottomBar from "@/components/BottomBar.vue";
</script>

<template>
  <div class="h-screen bg-base-200">
    <main class="h-full grid grid-cols-layout grid-rows-layout">
      <div class="pl-20 col-span-full bg-base-300">
        <TitleBar />
      </div>
      <FileManagementPanel class="bg-base-300" />
      <section class="bg-base-200"></section>
      <PDFViewPanel class="bg-base-100" />
      <div class="bg-base-300 flex col-span-full">
        <BottomBar />
      </div>
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
