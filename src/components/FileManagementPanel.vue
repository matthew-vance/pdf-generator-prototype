<script setup lang="ts">
import { useFilesStore, type File } from "@/stores/files";
import { useUiStore } from "@/stores/ui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <section
      v-show="filesStore.files.length && uiStore.leftSidebar.isOpen"
      class="flex"
    >
      <div class="w-full flex flex-col">
        <div class="py-3 px-2 flex">
          <Input
            v-if="filesStore.files.length"
            type="text"
            placeholder="Filter"
            v-model="filesStore.searchTerm"
          />
        </div>
        <div
          class="pl-4 pr-3 pt-1 pb-6 flex flex-col gap-1 overflow-y-auto overflow-x-hidden"
        >
          <Button
            v-for="(file, index) in filesStore.filteredFiles"
            :key="index"
            :variant="
              filesStore.selectedFile?.id === file.id ? 'secondary' : 'ghost'
            "
            @click="handleFileClick(file)"
            @pointerdown.prevent
            :title="file.name"
            class="justify-start"
            :class="{
              active: filesStore.selectedFile?.id === file.id,
            }"
          >
            <p class="text-ellipsis overflow-hidden whitespace-nowrap">
              {{ file.name }}
            </p>
          </Button>
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
  transform: translateX(-240px);
}
</style>
