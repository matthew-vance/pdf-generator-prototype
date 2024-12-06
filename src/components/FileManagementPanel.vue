<script setup lang="ts">
import { useFilesStore, type File } from "@/stores/files";
import { useUiStore } from "@/stores/ui";

const filesStore = useFilesStore();
const uiStore = useUiStore();

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    filesStore.clearSelectedFile();
  }
});

function handleFileClick(file: File) {
  if (filesStore.selectedFile?.id === file.id) {
    filesStore.clearSelectedFile();
  } else {
    filesStore.selectFile(file);
  }
}
</script>

<template>
  <Transition>
    <section v-show="uiStore.leftSidebar.isOpen" class="flex">
      <div class="w-full flex flex-col">
        <div class="py-3 px-2 flex">
          <input
            v-if="filesStore.files.length"
            type="text"
            class="input input-bordered input-sm w-full max-w-xs"
            placeholder="Filter"
            v-model="filesStore.searchTerm"
          />
        </div>
        <div
          class="flex-grow pl-4 pr-3 pt-1 pb-6 overflow-y-auto overflow-x-hidden"
        >
          <ul class="menu menu-sm gap-0.5">
            <li v-for="(file, index) in filesStore.filteredFiles" :key="index">
              <button
                @click="handleFileClick(file)"
                @pointerdown.prevent
                :title="file.name"
                class="prose"
                :class="{
                  active: filesStore.selectedFile?.id === file.id,
                }"
              >
                <p class="text-ellipsis overflow-hidden whitespace-nowrap">
                  {{ file.name }}
                </p>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <hr
        class="h-full w-0.5 bg-neutral border-transparent hover:bg-secondary cursor-col-resize"
      />
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
  transform: translateX(-240px);
}
</style>
