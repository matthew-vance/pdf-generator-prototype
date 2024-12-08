<script setup lang="ts">
import { Download, CopyPlus, Trash2 } from "lucide-vue-next";
import { useFilesStore } from "@/stores/files";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
const filesStore = useFilesStore();
</script>

<template>
  <div v-if="filesStore.selectedFile" class="h-full flex flex-col">
    <div class="flex justify-around p-2">
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
      <pre class="text-wrap">{{
        JSON.stringify(filesStore.selectedFile, null, 3)
      }}</pre>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  </div>
</template>
