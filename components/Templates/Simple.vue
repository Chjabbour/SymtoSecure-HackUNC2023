<template>
  <main class="p-4 bg-white h-full w-full space-y-8 pt-12 max-w-lg mx-auto">
    <div class="text-center">
      <div
        v-if="acc.i"
        class="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto"
      >
        <img :src="acc.i" alt="name" class="h-full w-full object-cover" />
      </div>
      <h1 v-if="acc.n" class="text-2xl font-bold mt-4 text-slate-800">
        {{ acc.n }}
      </h1>
      <p v-if="acc.d" class="text-sm mt-2 text-slate-600">
        {{ acc.d }}
      </p>
    </div>
    <div
      v-if="!allSocialLinksAreEmpty"
      class="flex items-center justify-center flex-wrap"
    >
      <span v-if="acc.Head" class="p-1">
        <img src="..\..\static\003-head.png" alt="Icon" class="h-6 w-6" />
      </span>
      <span v-if="acc.Shoulders" class="p-1">
        <img src="..\..\static\004-shoulder.png" alt="Icon" class="h-6 w-6" />
      </span>
      <span v-if="acc.Chest" class="p-1">
        <img src="..\..\static\005-chest.png" alt="Icon" class="h-6 w-6" />
      </span>
      <span v-if="acc.Back" class="p-1">
        <img src="..\..\static\007-back-pain.png" alt="Icon" class="h-6 w-6" />
      </span>
      <span v-if="acc.Arms" class="p-1">
        <img src="..\..\static\010-arm.png" alt="Icon" class="h-6 w-6" />
      </span>
      <span v-if="acc.Stomach" class="p-1">
        <img src="..\..\static\006-obesity.png" alt="Icon" class="h-6 w-6" />
      </span>
      <span v-if="acc.Feet" class="p-1">
        <img src="..\..\static\009-feet.png" alt="Icon" class="h-6 w-6" />
      </span>
      <span v-if="acc.Groin" class="p-1">
        <img src="..\..\static\002-groin.png" alt="Icon" class="h-6 w-6" />
      </span>
      <span v-if="acc.Hands" class="p-1">
        <img src="..\..\static\001-hello.png" alt="Icon" class="h-6 w-6" />
      </span>
      <span v-if="acc.Legs" class="p-1">
        <img src="..\..\static\008-cramp.png" alt="Icon" class="h-6 w-6" />
      </span>

    </div>
    <div class="w-full flex-grow min-w-0">
  <p class="font-medium text-sm leading-6 text-gray-900" style="overflow-wrap: break-word;text-align: center;">
Additional Medical Information:    </p>
</div>
    <ul class="space-y-2">
      <ExternalLink
        v-for="(link, id) in acc.ls"
        :label="link.l"
        :icon="link.i"
        :url="link.u"
        :key="id"
      />
    </ul>
  </main>
</template>
<script setup>
const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
});

const allSocialLinksAreEmpty = computed(() => {
  return (
    !props.acc.Head &&
    !props.acc.Shoulders &&
    !props.acc.Chest &&
    !props.acc.Back &&
    !props.acc.Arms &&
    !props.acc.Stomach &&
    !props.acc.Feet &&
    !props.acc.Groin &&
    !props.acc.Hands &&
    !props.acc.Legs
  );
});
</script>
<style scoped></style>
