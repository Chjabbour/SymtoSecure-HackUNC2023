<template>
  <div class="h-screen grid grid-cols-3 divide-x">
    <div class="col-span-2 h-screen flex flex-col bg-slate-100">
      <div class="flex-1 overflow-y-auto p-8">
        <div class = "flex items-center">
        <img src="..\static\logo.png" alt="Icon" class="w-20 h-20 mr-4" />
        <base-form-section title="SymptoSecure" class="text-lg"/> 
      </div>
          <app-form-hr />
        <app-form-profile
          v-model:name="data.n"
          v-model:desc="data.d"
          v-model:image="data.i"
        />
        <app-form-hr />
        <app-form-social-links
          v-model:Head="data.Head"
          v-model:Shoulders="data.Shoulders"
          v-model:Chest="data.Chest"
          v-model:Back="data.Back"
          v-model:Arms="data.Arms"
          v-model:Stomach="data.Stomach"
          v-model:Feet="data.Feet"
          v-model:Groin="data.Groin"
          v-model:Hands="data.Hands"
          v-model:Legs="data.Legs"
        />

        <app-form-hr />
        <app-form-links v-model="data.ls" />

      </div>
      <div class="border-t bg-white flex items-center">
        <button
          @click="prefillDemoData"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Add demo data </span>
          <icon name="mdi:code-json" class="h-4 w-4" />
        </button>
        <button
          @click="publish"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Publish </span>
          <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4" />
        </button>
      </div>
    </div>
    <app-form-preview :data="data" />
  </div>
</template>

<script setup>
import { encodeData } from "../utils/transformer";
const data = ref({
  n: "",
  d: "",
  i: "",
  Head: false,
  Shoulders: false,
  Chest: false,
  Back: false,
  Arms: false,
  Stomach: false,
  Feet: false,
  Groin: false,
  Hands: false,
  Legs: false,
  ls: [],
});

const prefillDemoData = () => {
  data.value = {
    n: "John Snow",
    d: "reply with 1 word",
    i: "https://i.insider.com/56743fad72f2c12a008b6cc0",
    Head: true,
    Shoulders: true,
    Chest: true,
    Back: true,
    Arms: true,
    Stomach: true,
    Feet: true,
    Groin: true,
    Hands: true,
    Legs: true,
    ls: [
      {
        l: "My Website",
        i: "ph:globe-duotone",
        u: "https://example.com",
      },
      {
        l: "Amazon wishlist",
        i: "ant-design:amazon-outlined",
        u: "https://amazon.in",
      },
      {
        l: "React JS course",
        i: "grommet-icons:reactjs",
        u: "https://reactjs.org/",
      },
      {
        l: "Donate for our cause",
        i: "iconoir:donate",
        u: "https://who.int",
      },
      {
        l: "Download my resume",
        i: "ph:file-pdf",
        u: "https://google.com",
      },
    ],
  };

};

const publish = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard");
  });
};
</script>
