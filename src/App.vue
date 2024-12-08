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
  <div
    class="h-screen grid grid-rows-[auto_1fr_auto] grid-cols-[270px_1fr] bg-zinc-900"
  >
    <div class="col-span-full bg-background border-b p-2 pl-20">
      <TitleBar />
    </div>
    <div class="bg-background border-r overflow-hidden">
      <FileManagementPanel />
    </div>
    <main class="overflow-hidden">
      <PDFViewPanel />
    </main>
    <div class="col-span-full bg-background border-t">
      <BottomBar />
    </div>
  </div>
</template>
