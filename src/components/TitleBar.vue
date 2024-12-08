<script setup lang="ts">
import { randFileName, randParagraph } from "@ngneat/falso";
import { SquarePen } from "lucide-vue-next";
import { useFilesStore } from "@/stores/files";
import { Button } from "@/components/ui/button";

const filesStore = useFilesStore();
</script>

<template>
  <div class="flex justify-between items-center gap-1 h-full pr-4">
    <Button
      size="sm"
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
  </div>
</template>

<style scoped>
.titlebar {
  app-region: drag;
}
</style>
