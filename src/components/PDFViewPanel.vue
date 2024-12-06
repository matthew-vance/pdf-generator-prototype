<script setup lang="ts">
import { Download, CopyPlus, Trash2 } from "lucide-vue-next";
import { useUiStore } from "@/stores/ui";
import { useFilesStore } from "@/stores/files";

const uiStore = useUiStore();
const filesStore = useFilesStore();
</script>

<template>
  <Transition>
    <section
      v-show="filesStore.selectedFile && uiStore.rightSidebar.isOpen"
      class="flex -col-end-1"
    >
      <hr
        class="h-full w-0.5 bg-neutral border-transparent hover:bg-secondary cursor-col-resize z-20"
      />
      <div class="h-full w-full flex flex-col">
        <ul
          v-if="filesStore.selectedFile"
          class="menu menu-horizontal rounded-box justify-center gap-2"
        >
          <li>
            <button class="btn btn-sm btn-ghost">
              <Download :size="20" />
              Export
            </button>
          </li>
          <li>
            <button
              class="btn btn-sm btn-ghost"
              @click="filesStore.duplicateFile(filesStore.selectedFile)"
            >
              <CopyPlus :size="20" />Duplicate
            </button>
          </li>
          <li>
            <button
              class="btn btn-sm btn-ghost text-error hover:text-error-content"
              @click="filesStore.deleteFile(filesStore.selectedFile)"
            >
              <Trash2 :size="20" />
              Delete
            </button>
          </li>
        </ul>
        <div class="flex-grow px-3 pt-1 pb-6 overflow-auto prose">
          <pre v-if="filesStore.selectedFile" class="text-wrap">{{
            JSON.stringify(filesStore.selectedFile, null, 3)
          }}</pre>
        </div>
      </div>
    </section>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(384px);
}
</style>
