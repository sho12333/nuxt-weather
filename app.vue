<template>
  <div>
    <div
      class="relative h-screen bg-cover"
      style="background-image: url('/warm.jpg')"
    >
      <div
        class="absolute inset-0 bg-white bg-opacity-30 backdrop-filter[blur] flex items-center justify-center"
      >
        <div class="p-8 bg-white bg-opacity-60 rounded-xl text-center">
          <h1 class="mb-2 text-2xl font-bold">Weather Application</h1>
          <p class="my-3">Input location</p>
          <input
            class="mb-2 w-full p-2 border rounded-md"
            type="text"
            placeholder="Location"
            v-on:keyup.enter="getData"
            v-model="location"
          />
          <div
            class="mb-2 w-full p-2 border rounded-md bg-white text-black transition-all ease-in-out duration-75 transform translate-y-2"
            v-if="
              weatherData.data.value &&
              weatherData.data.value.weather &&
              weatherData.data.value.main &&
              weatherData.data.value.name
            "
          >
            {{ weatherData.data.value.name }}
            <tr class="flex">
              <th>Weather</th>
              <th class="ml-auto mr-2">
                {{ weatherData.data.value.weather[0].main }}
              </th>
            </tr>
            <tr class="flex mt-2">
              <th>Temp</th>
              <th class="ml-auto mr-2">
                {{ weatherData.data.value.main.temp }}℃
              </th>
            </tr>
          </div>
          <div
            class="mb-2 w-full p-2 border rounded-md bg-white text-black transition-all ease-in-out duration-75 transform translate-y-2"
            v-else
          >
            Not Found
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const location = ref("");
const runtimeConfig = useRuntimeConfig();

const weatherData = useAsyncData("weather", () =>
  fetch(
    `${runtimeConfig.public.uri}?q=${location.value}&units=metric&appid=${runtimeConfig.public.apiKey}`
  ).then((res) => {
    if (!res.ok) {
      return null;
    }
    return res.json();
  })
);

const getData = (e) => {
  if (e.key === "Enter") {
    weatherData.execute();
  }
};
</script>
