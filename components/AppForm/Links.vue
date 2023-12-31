<template>
    <!-- <template #helpertext>
      <p class="mt-1 text-xs text-gray-600">
        Icon keys can be found in
        <a class="underline" href="https://icones.js.org/"
          >https://icones.js.org/</a
        >.
      </p>
    </template> -->
    
  <base-form-section
    title="Medical Information"
    description="Please include information that might be useful for your doctor to know."
  >
    <template #helpertext>
      <p class="mt-1 text-xs text-gray-600">
          <ul style="list-style-type: disc; padding-left: 5px;">
              <li style="margin-top: 6px;">Gender/preferred pronouns for inclusivity.</li>
              <li style="margin-top: 4px;">Special accommodations for disabilities.</li>
              <li style="margin-top: 4px;">Prior diagnoses and treatments.</li>
              <li style="margin-top: 4px;">Surgeries or hospitalizations.</li>
              <li style="margin-top: 4px;">Medication list and dosages.</li>
              <li style="margin-top: 4px;">Medication or substance allergies.</li>
              <li style="margin-top: 4px;">Contact information.</li>
              <li style="margin-top: 4px;">Hereditary conditions.</li>
              <li style="margin-top: 4px;">Family prevalent illnesses.</li>
          </ul>
      </p>

    </template>
    <draggable
      :list="modelValue"
      item-key="link"
      class="list-group"
      ghost-class="ghost"
    >
      <template #item="{ element: link }">
        <div class="relative mb-6 group">
          <button class="absolute top-2 -left-8">
            <icon
              name="radix-icons:drag-handle-dots-2"
              class="h-6 w-6 text-slate-500 drag-handle"
            />
          </button>
          <button
            @click="removeLink(link)"
            class="hidden group-hover:flex items-center justify-center h-6 w-6 rounded-full bg-slate-300 text-slate-600 absolute -right-3 -top-3"
          >
            <icon name="fluent:dismiss-24-regular" class="h-4 w-4" />
          </button>
          <div class="shadow sm:overflow-hidden sm:rounded-md">
            <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-2 gap-4">
                <div v-if="showInput">
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-medium text-gray-700"
                    >
                    </label>
                    <input
                      type="text"
                      name="iconKey"
                      id="iconKey"
                      value=""
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="details"
                    class="block text-sm font-medium text-gray-700"
                    >Details</label
                  >
                  <input
                    type="text"
                    name="details"
                    id="details"
                    v-model="link.l"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <!-- <div class="col-span-2">
                  <label
                    for="reponse"
                    class="block text-sm font-medium text-gray-700"
                    >Reponse</label
                  >
                  <input
                    type="url"
                    name="reponse"
                    id="response"
                    v-model="link.u"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div> -->
              </div>
              <p
                class="mt-2 text-xs text-center text-slate-400"
                v-if="!link.l || !link.u"
              >
                Please only include details about your medical history
              </p>
            </div>
          </div>
        </div>
      </template>
    </draggable>

    <button
      @click="appendLink"
      class="mt-8 border-2 text-slate-500 border-slate-300 rounded-lg block w-full py-2"
    >
      <icon name="fluent:add-circle-24-regular" class="h-6 w-6" />
    </button>
  </base-form-section>
</template>
<script setup>
import draggable from "vuedraggable";
const emit = defineEmits(["update:modelValue"]);
const showInput = false; // Set 'showInput' to false to always hide the input box

const props = defineProps({
  modelValue: Array,
});
const appendLink = () => {
  props.modelValue.push({
    i: "",
    l: "",
    u: "",
  });
  emit("update:modelValue", props.modelValue);
};

const removeLink = (link) => {
  const index = props.modelValue.indexOf(link);
  props.modelValue.splice(index, 1);
  emit("update:modelValue", props.modelValue);
};
</script>
<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
