<script setup lang="ts">
import { Settings } from "lucide-vue-next";
</script>

<template>
  <div>
    <ul class="menu menu-horizontal justify-end gap-3">
      <li>
        <button class="btn btn-sm btn-square btn-ghost rounded">
          <Settings :size="20" />
        </button>
      </li>
    </ul>
  </div>
</template>
