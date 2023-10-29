<template>
  <div>
    <templates-simple v-if="decodedData" :acc="decodedData" />
    <div
      v-else
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <base-loading class="h-5 w-5" />
    </div>
    
    <!-- Button for user to trigger analysis -->
    <button v-if="decodedData && decodedData.d" @click="() => handleAnalysisResult(decodedData.d)">
      Analyze Symptoms
    </button>

    <!-- Display the analysis result -->
    <div v-if="analysisResult">
      <h2>Analysis Result</h2>
      <p>{{ analysisResult }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { decodeData, analyzeSymptoms } from "../utils/transformer";
const route = useRoute();
const acc = route.query.data;
const decodedData = ref({});
const analysisResult = ref('');

decodedData.value = decodeData(acc);
console.log(decodedData.value.d);

const handleAnalysisResult = async (description) => {
  const result = await analyzeSymptoms(description);
  console.log('Result from analyzeSymptoms:', result);  // keep this line for debugging
  if (typeof result === 'string') {
    analysisResult.value = result;
  } else {
    console.error('Unexpected response format:', result);
  }
};
</script>

<style scoped></style>
