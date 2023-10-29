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
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { decodeData, analyzeSymptoms } from "../utils/transformer";

const route = useRoute();
const acc = route.query.data;
const decodedData = ref(decodeData(acc));  // Initialize decodedData with decodeData(acc) directly
const analysisResult = ref('');

const handleAnalysisResult = async (description) => {
  const result = await analyzeSymptoms(description);
  if (result && result.choices && result.choices[0] && result.choices[0].message) {
    analysisResult.value = result.choices[0].message.content;
  } else {
    console.error('Unexpected response format:', result);
  }
};

// If you want to call handleAnalysisResult automatically when the component mounts,
// uncomment the following block of code:
/*
onMounted(() => {
  if (decodedData.value && decodedData.value.d) {
    handleAnalysisResult(decodedData.value.d);
  }
});
*/

</script>

<style scoped></style>
