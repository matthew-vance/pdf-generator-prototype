<script setup lang="ts">
import { Search } from "lucide-vue-next";
import { useFilesStore, type File } from "@/stores/files";
import { useUiStore } from "@/stores/ui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const filesStore = useFilesStore();
const uiStore = useUiStore();

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
        <div class="px-3 py-3">
          <div class="relative w-full max-w-sm items-center">
            <Input
              class="pl-10"
              type="text"
              placeholder="Filter"
              v-model="filesStore.searchTerm"
            />
            <span
              class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
            >
              <Search class="text-muted-foreground" :size="20" />
            </span>
          </div>
        </div>

        <ScrollArea class="h-full pl-4 pr-3 pt-1 pb-6">
          <div class="flex flex-col gap-1">
            <Button
              v-for="(file, index) in filesStore.filteredFiles"
              :key="index"
              :variant="
                filesStore.selectedFile?.id === file.id ? 'secondary' : 'ghost'
              "
              @click="handleFileClick(file)"
              @pointerdown.prevent
              :title="file.name"
              class="justify-start flex-grow"
              :class="{
                active: filesStore.selectedFile?.id === file.id,
              }"
            >
              <p class="text-ellipsis overflow-hidden whitespace-nowrap">
                {{ file.name }}
              </p>
            </Button>
          </div>
        </ScrollArea>
      </div>
    </section>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.3s ease-in;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-240px);
}
</style>
