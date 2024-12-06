<script setup lang="ts">
import { simpleFaker } from "@faker-js/faker";
import {
  SquarePen,
  PanelRightOpen,
  PanelRightClose,
  PanelLeftOpen,
  PanelLeftClose,
} from "lucide-vue-next";
import { useFilesStore } from "@/stores/files";
import { useUiStore } from "@/stores/ui";

const filesStore = useFilesStore();
const uiStore = useUiStore();
</script>

<template>
  <div class="flex justify-between">
    <ul class="menu menu-horizontal gap-2">
      <li>
        <button
          title="Collapse"
          class="btn btn-sm btn-square btn-ghost rounded"
          @click="uiStore.toggleLeftSidebar"
        >
          <PanelLeftClose v-if="uiStore.leftSidebar.isOpen" :size="20" />
          <PanelLeftOpen v-else :size="20" />
        </button>
      </li>
      <li>
        <button
          class="btn btn-sm btn-square btn-ghost rounded"
          @click="filesStore.addFile(simpleFaker.string.nanoid())"
        >
          <SquarePen :size="20" />
        </button>
      </li>
    </ul>
    <div class="titlebar flex-1"></div>
    <ul class="menu menu-horizontal gap-2">
      <li>
        <button
          title="Collapse"
          class="btn btn-sm btn-square btn-ghost rounded"
          @click="uiStore.toggleRightSidebar"
        >
          <PanelRightClose v-if="uiStore.rightSidebar.isOpen" :size="20" />
          <PanelRightOpen v-else :size="20" />
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.titlebar {
  app-region: drag;
}
</style>
