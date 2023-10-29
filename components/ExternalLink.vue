<template>
  <div>
    <div class="w-full flex-grow min-w-0">
      <p
        class="font-medium text-sm leading-6 text-gray-900"
        style="overflow-wrap: break-word; text-align: center"
      >
        Additional Medical Information:
      </p>
    </div>
    <li>
      <dt
        class="flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-slate-100 bg-slate-50"
      >
        <div
          class="flex-shrink-0 flex h-10 w-2 items-center justify-center rounded-lg text-slate-500"
        ></div>
        <div class="w-full flex-grow min-w-0">
          <p
            class="font-medium text-sm leading-6 text-gray-900"
            style="overflow-wrap: break-word"
          >
            {{ label }}
          </p>
        </div>
      </dt>
    </li>
  </div>
</template>


<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
});
</script>
