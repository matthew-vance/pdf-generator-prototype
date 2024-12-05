<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationMenu from "@/components/NavigationMenu.vue";
</script>

<template>
  <div class="h-screen">
    <div class="h-full">
      <div class="flex h-full w-screen">
        <NavigationMenu />
        <section class="order-2 flex flex-col p-4">
          <header class="prose">
            <h1>PDF Generator Prototype</h1>
          </header>

          <RouterView />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
