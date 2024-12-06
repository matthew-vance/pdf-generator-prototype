import { computed, ref } from "vue";
import { defineStore } from "pinia";

type File = {
  name: string;
};

export const useFilesStore = defineStore("files", () => {
  const files = ref<File[]>([]);
  const filesSorted = computed(() =>
    files.value.sort((a, b) => a.name.localeCompare(b.name)),
  );
  function addFile(name: string) {
    files.value.push({ name });
  }

  return { files, filesSorted, addFile };
});
