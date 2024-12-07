<script setup lang="ts">
import { Download, CopyPlus, Trash2 } from "lucide-vue-next";
import { useUiStore } from "@/stores/ui";
import { useFilesStore } from "@/stores/files";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const uiStore = useUiStore();
const filesStore = useFilesStore();
</script>

<template>
  <Transition>
    <section
      v-show="filesStore.selectedFile && uiStore.rightSidebar.isOpen"
      class="flex -col-end-1"
    >
      <hr class="h-full w-0.5 border-transparent cursor-col-resize z-20" />
      <div class="h-full w-full flex flex-col p-2">
        <div v-if="filesStore.selectedFile" class="flex justify-around">
          <Button variant="ghost">
            <Download />
            Export
          </Button>
          <Button
            @click="filesStore.duplicateFile(filesStore.selectedFile)"
            variant="ghost"
          >
            <CopyPlus />Duplicate
          </Button>
          <Button
            @click="filesStore.deleteFile(filesStore.selectedFile)"
            variant="destructive"
          >
            <Trash2 />
            Delete
          </Button>
        </div>
        <ScrollArea class="px-3 pt-1 pb-6">
          <pre v-if="filesStore.selectedFile" class="text-wrap">{{
            JSON.stringify(filesStore.selectedFile, null, 3)
          }}</pre>
          <ScrollBar orientation="horizontal" />
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
  transform: translateX(384px);
}
</style>
