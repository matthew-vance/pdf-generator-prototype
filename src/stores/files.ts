import { computed, ref } from "vue";
import { defineStore } from "pinia";

export type File = {
  id: number;
  name: string;
  content: string;
};

export const useFilesStore = defineStore("files", () => {
  const files = ref<File[]>([]);
  const selectedFile = ref<File | null>(null);
  const searchTerm = ref<string>("");

  const filesSorted = computed(() =>
    files.value.sort((a, b) => a.name.localeCompare(b.name)),
  );

  const filteredFiles = computed(() =>
    filesSorted.value.filter((file) =>
      file.name.toLowerCase().includes(searchTerm.value.toLowerCase()),
    ),
  );

  function addFile(name: string, content: string) {
    const newFile = { name, content, id: files.value.length + 1 };
    files.value.push(newFile);
    selectFile(newFile);
  }

  function selectFile(file: File) {
    selectedFile.value = files.value.find((f) => f.id === file.id) || null;
  }

  function clearSelectedFile() {
    selectedFile.value = null;
  }

  function duplicateFile(file: File) {
    const nameParts = file.name.split(".");
    const extension = nameParts.pop();
    const baseName = nameParts.join(".");
    const newFileName = `${baseName} copy.${extension}`;
    const newFile = {
      name: newFileName,
      content: file.content,
      id: files.value.length + 1,
    };
    files.value.push(newFile);
    selectFile(newFile);
  }

  function deleteFile(file: File) {
    const index = files.value.findIndex((f) => f.id === file.id);
    if (index !== -1) {
      files.value.splice(index, 1);
      if (selectedFile.value?.id === file.id) {
        selectedFile.value = null;
      }
    }
  }

  function setSearchTerm(term: string) {
    searchTerm.value = term;
  }

  return {
    files,
    filesSorted,
    selectedFile,
    searchTerm,
    filteredFiles,
    addFile,
    selectFile,
    duplicateFile,
    deleteFile,
    setSearchTerm,
    clearSelectedFile,
  };
});
