<script setup lang="ts">
import { randFileName, randParagraph } from "@ngneat/falso";
import {
  SquarePen,
  PanelRightOpen,
  PanelRightClose,
  PanelLeftOpen,
  PanelLeftClose,
} from "lucide-vue-next";
import { useFilesStore } from "@/stores/files";
import { useUiStore } from "@/stores/ui";
import { Button } from "@/components/ui/button";

const filesStore = useFilesStore();
const uiStore = useUiStore();
</script>

<template>
  <div class="flex justify-between items-center gap-1 h-full pr-4">
    <Button
      v-if="filesStore.files.length"
      variant="ghost"
      size="icon"
      title="Collapse"
      @click="uiStore.toggleLeftSidebar"
    >
      <PanelLeftClose v-if="uiStore.leftSidebar.isOpen" />
      <PanelLeftOpen v-else />
    </Button>
    <Button
      @click="
        filesStore.addFile(
          randFileName(),
          randParagraph({ length: 10 }).join(' '),
        )
      "
    >
      <SquarePen />
      New PDF File
    </Button>
    <div class="titlebar flex-1 h-full"></div>
    <Button
      v-if="filesStore.selectedFile"
      variant="ghost"
      size="icon"
      title="Collapse"
      @click="uiStore.toggleRightSidebar"
    >
      <PanelRightClose v-if="uiStore.rightSidebar.isOpen" />
      <PanelRightOpen v-else />
    </Button>
  </div>
</template>

<style scoped>
.titlebar {
  app-region: drag;
}
</style>
