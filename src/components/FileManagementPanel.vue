<script setup lang="ts">
import { Search } from "lucide-vue-next";
import { useFilesStore, type File } from "@/stores/files";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const filesStore = useFilesStore();

function handleFileClick(file: File) {
  if (filesStore.selectedFile?.id === file.id) {
    filesStore.clearSelectedFile();
  } else {
    filesStore.selectFile(file);
  }
}
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="relative w-full p-2">
      <Input
        class="pl-10"
        type="text"
        placeholder="Filter"
        v-model="filesStore.searchTerm"
      />
      <span
        class="absolute start-0 inset-y-0 flex items-center justify-center px-4"
      >
        <Search class="text-muted-foreground" :size="20" />
      </span>
    </div>

    <ScrollArea>
      <div class="flex flex-col gap-1 p-2 pb-6">
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
</template>
