<template>
  <div
    class="min-h-screen w-full bg-gradient-to-b from-blue-400 to-blue-700 font-sans"
  >
    <div
      class="container mx-auto py-8 px-4 flex flex-col items-center justify-center min-h-screen"
    >
      <div
        class="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:shadow-2xl"
      >
        <div
          class="p-6 bg-gradient-to-r from-blue-500/60 to-purple-500/60 text-white"
        >
          <h1 class="text-3xl font-bold mb-2 text-center">天気アプリ</h1>
          <p class="text-center opacity-80 mb-4">
            都市を入力して、Enterを入力してください。
          </p>

          <div class="relative mb-2">
            <input
              class="w-full p-4 pr-12 rounded-full bg-white/30 backdrop-blur-md border-0 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              type="text"
              placeholder="都市名を入力..."
              v-model="location"
              @keyup.enter="getData"
            />
            <button
              @click="getData"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 rounded-full p-2 hover:bg-blue-100 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="p-6 text-gray-800">
          <div
            v-if="weatherData.pending.value"
            class="flex justify-center items-center py-12"
          >
            <div
              class="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"
            ></div>
          </div>

          <div
            v-else-if="
              weatherData.data.value &&
              weatherData.data.value.weather &&
              weatherData.data.value.main &&
              weatherData.data.value.name
            "
            class="transition-all duration-300"
          >
            <div class="text-center mb-6">
              <h2 class="text-3xl font-bold text-gray-700">
                {{ weatherData.data.value.name }}
              </h2>
              <div class="flex justify-center items-center mt-4">
                <img
                  :src="`https://openweathermap.org/img/wn/${weatherData.data.value.weather[0].icon}@2x.png`"
                  :alt="weatherData.data.value.weather[0].description"
                  class="w-20 h-20"
                />
                <div class="text-5xl font-bold text-gray-800 ml-2">
                  {{ Math.round(weatherData.data.value.main.temp) }}℃
                </div>
              </div>
              <p class="text-xl text-gray-600 mt-2">
                {{ weatherData.data.value.weather[0].main }}
              </p>
            </div>

            <div class="grid grid-cols-2 gap-4 mt-6">
              <div
                class="bg-white/40 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center"
              >
                <span class="text-gray-500 text-sm">最高気温</span>
                <span class="text-2xl font-semibold text-gray-800"
                  >{{ Math.round(weatherData.data.value.main.temp_max) }}℃</span
                >
              </div>
              <div
                class="bg-white/40 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center"
              >
                <span class="text-gray-500 text-sm">最低気温</span>
                <span class="text-2xl font-semibold text-gray-800"
                  >{{ Math.round(weatherData.data.value.main.temp_min) }}℃</span
                >
              </div>
              <div
                class="bg-white/40 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center"
              >
                <span class="text-gray-500 text-sm">湿度</span>
                <span class="text-2xl font-semibold text-gray-800"
                  >{{ weatherData.data.value.main.humidity }}%</span
                >
              </div>
              <div
                class="bg-white/40 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center"
              >
                <span class="text-gray-500 text-sm">風速</span>
                <span class="text-2xl font-semibold text-gray-800"
                  >{{ weatherData.data.value.wind?.speed || 0 }} m/s</span
                >
              </div>
            </div>

            <div class="text-center mt-6 text-sm text-gray-500">
              最終更新: {{ formatDateTime(weatherData.data.value.dt) }}
            </div>
          </div>

          <div
            v-else-if="weatherData.error.value"
            class="text-center py-10 rounded-2xl bg-white/30 backdrop-blur-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p class="mt-4 text-gray-600 font-medium text-lg">
              都市が見つかりませんでした
            </p>
            <p class="text-gray-500 text-sm mt-2">
              別の都市名を入力してみてください
            </p>
          </div>

          <div
            v-else
            class="text-center py-10 rounded-2xl bg-white/30 backdrop-blur-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <p class="mt-4 text-gray-600 font-medium">
              天気データはここに表示されます
            </p>
            <p class="text-gray-500 text-sm mt-2">都市名を検索してください</p>
          </div>
        </div>
      </div>

      <div class="mt-6 text-white/70 text-center text-sm"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { WeatherResponse } from "./types/openWeather";

const location = ref<string>("");
const runtimeConfig = useRuntimeConfig();

const weatherData = useAsyncData<WeatherResponse>("weather", () =>
  fetch(
    `${runtimeConfig.public.uri}?q=${encodeURIComponent(
      location.value
    )}&units=metric&appid=${runtimeConfig.public.apiKey}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("City not found");
    }
    return res.json();
  })
);

const getData = () => {
  if (location.value.trim()) {
    weatherData.execute();
  }
};

const formatDateTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString("ja-JP", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>
