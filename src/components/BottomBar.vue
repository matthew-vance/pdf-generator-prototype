<script setup lang="ts">
import { ref } from "vue";
import { Settings, X } from "lucide-vue-next";

const dialog = ref<HTMLDialogElement>();
const visible = ref(false);

function showModal() {
  visible.value = true;
  dialog.value?.showModal();
}
</script>

<template>
  <div>
    <ul class="menu menu-horizontal justify-end gap-3">
      <li>
        <button
          class="btn btn-sm btn-square btn-ghost rounded"
          @click="showModal"
        >
          <Settings :size="20" />
        </button>
        <Teleport to="body"
          ><dialog
            ref="dialog"
            @close="visible = false"
            class="modal modal-bottom sm:modal-middle"
          >
            <div class="modal-box prose">
              <form method="dialog">
                <button
                  class="btn btn-sm btn-square btn-ghost rounded absolute right-2 top-2"
                >
                  <X :size="20" />
                </button>
              </form>
              <h3>Hello!</h3>
              <p>This is where the user settings will be managed 🙌</p>
            </div>
          </dialog></Teleport
        >
      </li>
    </ul>
  </div>
</template>
