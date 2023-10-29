<template>
  <base-form-section
    title="Body Parts"
    description="Select a body part to discuss your issues"
  >
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="grid grid-cols-2 gap-8 bg-white px-4 py-5 sm:p-6">
        <div>
  <label for="Head" class="block text-sm font-medium text-gray-700">Head</label>
  <div class="mt-1 flex rounded-md shadow-sm">
    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
      <img src="..\..\static\003-head.png" alt="Icon" class="w-5 h-5" />

    </span>
    <input
      type="checkbox"
      name="Head"
      id="Head"
      @change="$emit('update:Head', $event.target.checked)"
      class="block flex-1 form-checkbox h-6 w-5 text-indigo-600 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>
</div>
  <div>
  <label for="Shoulders" class="block text-sm font-medium text-gray-700">Shoulders</label>
  <div class="mt-1 flex rounded-md shadow-sm">
    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
      <img src="..\..\static\004-shoulder.png" alt="Icon" class="w-5 h-5" />

    </span>
    <input
      type="checkbox"
      name="Shoulders"
      id="Shoulders"
      @change="$emit('update:Shoulders', $event.target.checked)"
      class="block flex-1 form-checkbox h-6 w-5 text-indigo-600 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>
</div>
<div>
  <label for="Chest" class="block text-sm font-medium text-gray-700">Chest</label>
  <div class="mt-1 flex rounded-md shadow-sm">
    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
      <img src="..\..\static\005-chest.png" alt="Icon" class="w-5 h-5" />
    </span>
    <input
      type="checkbox"
      name="Chest"
      id="Chest"
      @change="$emit('update:Chest', $event.target.checked)"
      class="block flex-1 form-checkbox h-6 w-5 text-indigo-600 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>
</div>

<div>
  <label for="Back" class="block text-sm font-medium text-gray-700">Back</label>
  <div class="mt-1 flex rounded-md shadow-sm">
    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
      <img src="..\..\static\007-back-pain.png" alt="Icon" class="w-5 h-5" />
    </span>
    <input
      type="checkbox"
      name="Back"
      id="Back"
      @change="$emit('update:Back', $event.target.checked)"
      class="block flex-1 form-checkbox h-6 w-5 text-indigo-600 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>
</div>


<div>
  <label for="Arms" class="block text-sm font-medium text-gray-700">Arms</label>
  <div class="mt-1 flex rounded-md shadow-sm">
    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
      <img src="..\..\static\010-arm.png" alt="Icon" class="w-5 h-5" />
    </span>
    <input
      type="checkbox"
      name="Arms"
      id="Arms"
      @change="$emit('update:Arms', $event.target.checked)"
      class="block flex-1 form-checkbox h-6 w-5 text-indigo-600 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>
</div>



<div>
  <label for="Stomach" class="block text-sm font-medium text-gray-700">Stomach</label>
  <div class="mt-1 flex rounded-md shadow-sm">
    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
      <img src="..\..\static\006-obesity.png" alt="Icon" class="w-5 h-5" />
    </span>
    <input
      type="checkbox"
      name="Stomach"
      id="Stomach"
      @change="$emit('update:Stomach', $event.target.checked)"
      class="block flex-1 form-checkbox h-6 w-5 text-indigo-600 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>
</div>

<div>
  <label for="Feet" class="block text-sm font-medium text-gray-700">Feet</label>
  <div class="mt-1 flex rounded-md shadow-sm">
    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
      <img src="..\..\static\009-feet.png" alt="Icon" class="w-5 h-5" />
    </span>
    <input
      type="checkbox"
      name="Feet"
      id="Feet"
      @change="$emit('update:Feet', $event.target.checked)"
      class="block flex-1 form-checkbox h-6 w-5 text-indigo-600 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>
</div>


<div>
  <label for="Groin" class="block text-sm font-medium text-gray-700">Groin</label>
  <div class="mt-1 flex rounded-md shadow-sm">
    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
      <img src="..\..\static\002-groin.png" alt="Icon" class="w-5 h-5" />
    </span>
    <input
      type="checkbox"
      name="Groin"
      id="Groin"
      @change="$emit('update:Groin', $event.target.checked)"
      class="block flex-1 form-checkbox h-6 w-5 text-indigo-600 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>
</div>



<div>
  <label for="Hands" class="block text-sm font-medium text-gray-700">Hands</label>
  <div class="mt-1 flex rounded-md shadow-sm">
    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
      <img src="..\..\static\001-hello.png" alt="Icon" class="w-5 h-5" />
    </span>
    <input
      type="checkbox"
      name="Hands"
      id="Hands"
      @change="$emit('update:Hands', $event.target.checked)"
      class="block flex-1 form-checkbox h-6 w-5 text-indigo-600 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>
</div>

<div>
  <label for="Legs" class="block text-sm font-medium text-gray-700">Legs</label>
  <div class="mt-1 flex rounded-md shadow-sm">
    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
      <img src="..\..\static\008-cramp.png" alt="Icon" class="w-5 h-5" />
    </span>
    <input
      type="checkbox"
      name="Legs"
      id="Legs"
      @change="$emit('update:Legs', $event.target.checked)"
      class="block flex-1 form-checkbox h-6 w-5 text-indigo-600 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>
</div>



      </div>
    </div>
  </base-form-section>
</template>
<script setup>
const props = defineProps([
  "Head",
  "Shoulders",
  "Chest",
  "Back",
  "Arms",
  "Stomach",
  "feet",
  "Groin",
  "Hands",
  "Legs"
]);
</script>
