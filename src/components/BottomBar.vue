<script setup lang="ts">
import { Settings } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="flex justify-between items-center h-full px-4">
    <Button variant="ghost" size="icon">
      <Settings />
    </Button>
  </div>
</template>
