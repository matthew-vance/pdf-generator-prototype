<script setup lang="ts">
import { Save } from "lucide-vue-next";
import { useUiStore } from "@/stores/ui";

const uiStore = useUiStore();
</script>

<template>
  <Transition>
    <section v-show="uiStore.rightSidebar.isOpen" class="flex -col-end-1">
      <hr
        class="h-full w-0.5 bg-neutral border-transparent hover:bg-secondary cursor-col-resize z-20"
      />
      <div class="h-full w-full flex flex-col">
        <ul class="menu menu-horizontal rounded-box justify-center">
          <li>
            <button class="btn btn-sm btn-ghost">
              <Save :size="20" />
              Export PDF
            </button>
          </li>
        </ul>
        <div class="flex-grow px-3 pt-1 pb-6">PDF Viewer</div>
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
