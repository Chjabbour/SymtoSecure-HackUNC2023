<template>
  <div class="flex flex-col items-center">
    <!-- Button for user to trigger analysis -->
    <button 
      v-if="decodedData && decodedData.d" 
      @click="() => handleAnalysisResult(decodedData.d)" 
      class="analyze-button mb-4"
    >
      Analyze Symptoms with AI
    </button>

    <!-- Your existing template content -->
    <div v-if="!decodedData" class="loading-container">
      <base-loading class="h-5 w-5" />
    </div>

    <templates-simple v-if="decodedData" :acc="decodedData" />

    <!-- Display the analysis result -->
    <div v-if="analysisResult" class="result-box mt-4">
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

<style scoped>
.result-box {
  border: 2px solid #000;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 50%; /* or whatever width you prefer */
  margin: auto; /* center the box */
}

.analyze-button {
  background-color: #008CBA; /* Blue background */
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

.loading-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
