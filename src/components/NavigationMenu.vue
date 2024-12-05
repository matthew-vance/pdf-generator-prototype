<script setup lang="ts">
import { RouterLink } from "vue-router";
import { SquarePen, Eye } from "lucide-vue-next";

const navLinks = [
  {
    displayText: "Create",
    href: "/",
    icon: SquarePen,
  },
  {
    displayText: "View",
    href: "/view",
    icon: Eye,
  },
];
</script>

<template>
  <nav
    class="w-60 h-full order-1 flex-grow-0 flex-shrink-0 flex flex-col bg-base-200"
  >
    <ul class="menu space-y-1">
      <li v-for="link in navLinks" :key="link.href">
        <RouterLink :to="link.href" class="rounded-md" active-class="active">
          <component :is="link.icon" class="h-5 w-5" />
          {{ link.displayText }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
