<template>
  <base-form-section
    title="Profile"
    description="Some public information about you"
  >
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
        <div class="col-span-6 sm:col-span-3">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name</label
          >
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="given-name"
            :value="name"
            @input="$emit('update:name', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="about" class="block text-sm font-medium text-gray-700"
            >Please Describe Your Symptoms</label
          >
          <div class="mt-1">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder-slate-400"
              placeholder="I am having stomach aches and headaches"
              maxlength="100"
              :value="desc"
              @input="$emit('update:desc', $event.target.value)"
            ></textarea>
          </div>
          <button @click="analyzeSymptoms">Analyze Symptoms</button>
        </div>

        <div v-if="response">
          <h2>Analysis Results</h2>
          <p>{{ response }}</p>
        </div>

        <div class="flex-grow col-span-6 sm:col-span-3">
          <label for="photo-url" class="block text-sm font-medium text-gray-700"
            >Photo Url</label
          >
          <input
            type="text"
            name="photo-url"
            id="photo-url"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            :value="image"
            @input="$emit('update:image', $event.target.value)"
          />
        </div>
      </div>
    </div>
  </base-form-section>
</template>

<script>
import { ref, defineProps } from 'vue';

export default {
  props: {
    name: String,
    desc: String,
    image: String,
  },
  setup(props) {
    const response = ref('');  // Define the response ref here

    const analyzeSymptoms = async () => {
      console.log(props.desc);  // Debugging line to check the value of desc

      const payload = {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: "user", content: props.desc },
          { role: "system", content: "chatbot" }
        ],
        temperature: 0.8,
        max_tokens: 2048,
        top_p: 1.0,
        frequency_penalty: 0.2,
        presence_penalty: 0.0,
      };

      try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer 'enter your API key here'`
          },
          method: 'POST',
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        console.log(data);
        response.value = data.choices[0]?.message?.content || 'No response';  // Update to extract the content property
      } catch (error) {
        console.error(error);
      }
    };

    return { analyzeSymptoms, response };
  },
};
</script>